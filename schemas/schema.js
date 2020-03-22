import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import announcement from "./announcement"
import contact from "./contact"
import list from "./list"
import restaurant from "./restaurant"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    announcement,
    contact,
    list,
    restaurant,
  ]),
})
