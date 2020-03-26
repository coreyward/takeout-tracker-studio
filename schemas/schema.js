import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import announcement from "./documents/announcement"
import author from "./documents/author"
import contact from "./documents/contact"
import list from "./documents/list"
import page from "./documents/page"
import restaurant from "./documents/restaurant"
import hero from "./objects/hero"
import restaurantsViewer from "./objects/restaurantsViewer"
import listCloud from "./objects/listCloud"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    announcement,
    author,
    contact,
    list,
    listCloud,
    hero,
    page,
    restaurant,
    restaurantsViewer,
  ]),
})
