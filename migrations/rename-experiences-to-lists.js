import migrate from "./_base"

migrate(
  {
    conditions: [
      "_type == 'experience'",
      "!(name in *[_type == 'list']{name}.name)",
    ],
    fields: ["name", "description", "restaurants"],
  },
  ({ name, description, restaurants }) => ({
    _operation: "create",
    props: {
      _type: "list",
      name,
      description,
      restaurants,
    },
  })
)

const deleteOp = { _operation: "delete" }
migrate({ conditions: ["_type == 'experience'"] }, () => deleteOp)
