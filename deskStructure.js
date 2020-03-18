import S from "@sanity/desk-tool/structure-builder"
import RestaurantIcon from "react-icons/lib/md/restaurant"
import ContactsIcon from "react-icons/lib/ti/contacts"
import AnnouncementIcon from "react-icons/lib/fa/bullhorn"
import DraftsIcon from "react-icons/lib/fa/pencil"

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("restaurant")
        .title("Restaurants")
        .icon(RestaurantIcon),
      S.divider(),
      S.documentTypeListItem("announcement")
        .title("Announcements")
        .icon(AnnouncementIcon),
      S.documentTypeListItem("contact")
        .title("Contacts")
        .icon(ContactsIcon),
      S.listItem()
        .title("Drafts")
        .icon(DraftsIcon)
        .child(
          S.documentList()
            .title("Drafts")
            .filter("_id in path('drafts.**')")
            .defaultOrdering([{ field: "_updatedAt", direction: "desc" }])
        ),
    ])
