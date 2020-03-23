import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import announcement from "./announcement"
import contact from "./contact"
import list from "./list"
import page from "./page"
import restaurant from "./restaurant"
import hero from "./objects/hero"
import restaurantsViewer from "./objects/restaurantsViewer"
import listCloud from "./objects/listCloud"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    announcement,
    contact,
    list,
    listCloud,
    hero,
    page,
    restaurant,
    restaurantsViewer,
  ]),
})
