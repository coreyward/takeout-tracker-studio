import S from "@sanity/desk-tool/structure-builder"
import RestaurantIcon from "react-icons/lib/md/restaurant"
import SublistIcon from "react-icons/lib/md/subdirectory-arrow-right"
import ContactsIcon from "react-icons/lib/ti/contacts"
import AnnouncementIcon from "react-icons/lib/fa/bullhorn"
import DraftsIcon from "react-icons/lib/fa/pencil"
import TagsIcon from "react-icons/lib/fa/tags"
import ClockIcon from "react-icons/lib/fa/clock-o"
import AuditIcon from "react-icons/lib/md/rate-review"
import SadIcon from "react-icons/lib/io/sad"
import moment from "moment"

const sublist = (title, conditions) =>
  S.listItem()
    .title(title)
    .child(
      S.documentList()
        .title(title)
        .filter(conditions)
    )

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("restaurant")
        .title("Restaurants")
        .icon(RestaurantIcon),
      S.listItem()
        .title("Restaurant Sublists")
        .icon(SublistIcon)
        .child(
          S.list()
            .title("Restaurant Sublists")
            .items([
              sublist(
                "Unverified / User Reported Only",
                "_type == 'restaurant' && unverified == true"
              ).icon(AuditIcon),
              sublist(
                "Closed for Business",
                "_type == 'restaurant' && closedForBusiness == true"
              ).icon(SadIcon),
              sublist(
                "Needs Tags",
                "_type == 'restaurant' && !defined(tags)"
              ).icon(TagsIcon),
              sublist(
                "Outdated / Needs Confirmation",
                [
                  "_type == 'restaurant'",
                  `confirmedAt < "${moment()
                    .subtract(3, "days")
                    .toISOString()}"`,
                  "closedForBusiness == false",
                ].join(" && ")
              ).icon(ClockIcon),
            ])
        ),
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
