import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import restaurant from "./restaurant"
import contact from "./contact"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([contact, restaurant]),
})
