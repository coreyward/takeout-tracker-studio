import uuid from "@sanity/uuid"
import client from "part:@sanity/base/client"
import rows from "../data.json"

const run = async () => {
  const groupedRows = rows.reduce((acc, row) => {
    if (!acc[row.id]) acc[row.id] = []
    acc[row.id].push(row)
    return acc
  }, {})

  const data = await client.fetch(
    `
    *[_type == "restaurant" && _id in $ids] {
      _id,
      _rev,
      hours,
      closedForBusiness,
    }
  `,
    { ids: Object.keys(groupedRows) }
  )

  const transaction = Object.values(groupedRows).reduce((tx, rows) => {
    const id = rows[0].id

    if (rows[0].name === "DELETE") {
      return tx.delete(id)
    }

    const doc = data.find(r => r._id === id)

    return tx.patch(id, {
      ifRevisionID: doc._rev,
      set: {
        locations: rows
          .filter(row => row.address) // ignore rows with empty addresses
          .map(({ address, phoneNumber }) => ({
            _type: "restaurantLocation",
            _key: uuid(),
            address,
            phoneNumber: phoneNumber ? `${phoneNumber}` : null, // ensure phoneNumber is a string or null
            hours: doc.hours,
            openForBusiness: !doc.closedForBusiness,
          })),
      },
    })
  }, client.transaction())

  await transaction.commit()
  console.info(`Done. Executed ${transaction.operations.length} operations.`)
}

run()
