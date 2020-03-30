import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import announcement from "./documents/announcement"
import author from "./documents/author"
import contact from "./documents/contact"
import hero from "./objects/hero"
import list from "./documents/list"
import listCloud from "./objects/listCloud"
import listItem from "./objects/listItem"
import page from "./documents/page"
import restaurant from "./documents/restaurant"
import restaurantLocation from "./objects/restaurantLocation"
import restaurantsViewer from "./objects/restaurantsViewer"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    announcement,
    author,
    contact,
    list,
    listCloud,
    listItem,
    hero,
    page,
    restaurant,
    restaurantLocation,
    restaurantsViewer,
  ]),
})
