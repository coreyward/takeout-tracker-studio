import client from "part:@sanity/base/client"

// Run this script with: `sanity exec --with-user-token migrations/renameField.js`
//
// This example shows how you may write a migration script that renames a field (name => fullname)
// on a specific document type (author).
// This will migrate documents in batches of 100 and continue patching until no more documents are
// returned from the query.
//
// This script can safely be run, even if documents are being concurrently modified by others.
// If a document gets modified in the time between fetch => submit patch, this script will fail,
// but can safely be re-run multiple times until it eventually runs out of documents to migrate.

// A few things to note:
// - This script will exit if any of the mutations fail due to a revision mismatch (which means the
//   document was edited between fetch => update)
// - The query must eventually return an empty set, or else this script will continue indefinitely

// Fetching documents that matches the precondition for the migration.
// NOTE: This query should eventually return an empty set of documents to mark the migration
// as complete

const fetchDocuments = ({ conditions, fields = [], limit = 100 }) =>
  client.fetch(
    `*[${conditions.join(" && ")}][0...${limit}] {
      _id,
      _rev,
      ${fields.join(", ")}
    }`
  )

const createTransaction = operations =>
  operations.reduce((tx, [{ _operation, props }, doc]) => {
    switch (_operation) {
      case "create":
        return tx.create(props)
      case "delete":
        return tx.delete(doc._id)
      case "patch":
        props.ifRevisionID = doc._rev
        return tx.patch(doc._id, props)
      // TODO: Add additional operation types as needed

      default:
        return tx
    }
  }, client.transaction())

const commitTransaction = tx => tx.commit()

const migrateBatch = async (
  fetchParams,
  buildOperation,
  options = { singleRun: false }
) => {
  const documents = await fetchDocuments(fetchParams)

  const operations = await Promise.all(
    documents.map(async doc => [await buildOperation(doc), doc])
  ).catch(err => {
    throw err
  })

  if (operations.length === 0) {
    console.log("No more documents to migrate!")
    return null
  }
  console.log(
    `Migrating batch:\n %s`,
    operations
      .map(
        ([op, doc]) =>
          `${op._operation} ${doc._id} => ${JSON.stringify(op.props)}`
      )
      .join("\n")
  )

  const transaction = createTransaction(operations)
  await commitTransaction(transaction)

  if (!options.singleRun) {
    return migrateBatch(fetchParams, buildOperation)
  }
}

const migrate = (fetchParams, buildPatch) => {
  migrateBatch(fetchParams, buildPatch).catch(err => {
    console.error(err)
    process.exit(1)
  })
}

export default migrate
