const serviceLabels = {
  "dine-in": "Dine-In",
  takeout: "Takeout",
  curbside: "Curbside Takeout",
  delivery: "By Restaurant",
  "delivery-favor": "Favor",
  "delivery-doordash": "DoorDash",
  "delivery-postmates": "Postmates",
  "delivery-grubhub": "GrubHub",
  "delivery-ubereats": "UberEats",
}

const restaurant = {
  title: "Restaurant",
  name: "restaurant",
  type: "document",
  fieldsets: [
    {
      title: "General Information",
      name: "information",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: "Sources & Information Gathering",
      name: "sources",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: "Operating Policies",
      name: "policies",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: "Ordering Information",
      name: "ordering",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: "Restaurant is closed for the time being",
      name: "closedForBusiness",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "User reported information only (unverified)",
      name: "unverified",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "Name",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information",
    },
    {
      title: "Website",
      name: "website",
      type: "url",
      validation: Rule => Rule.uri(),
      fieldset: "information",
    },
    {
      title: "Menu URL",
      name: "menuUrl",
      type: "url",
      validation: Rule => Rule.uri(),
      fieldset: "information",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      fieldset: "information",
    },
    {
      title: "Last Update/Confirmation of Information",
      name: "confirmedAt",
      type: "datetime",
      validation: Rule => Rule.required(),
      fieldset: "sources",
    },
    {
      title: "Source URLs",
      name: "sourceUrls",
      description: "Links to sources for this information, when available.",
      type: "array",
      of: [{ type: "url", validation: Rule => Rule.required().uri() }],
      fieldset: "sources",
    },
    {
      title: "Source Notes",
      name: "sourceNotes",
      type: "text",
      fieldset: "sources",
      rows: 3,
    },
    {
      title: "Hours",
      name: "hours",
      type: "array",
      of: [{ type: "string" }],
      fieldset: "policies",
    },
    {
      title: "Takeout Service Options",
      name: "takeoutOptions",
      description: "Leave blank if the restaurant is not offering takeout.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Dine-In", value: "dine-in" },
          { title: "Takeout", value: "takeout" },
          { title: "Curbside Takeout", value: "curbside" },
          { title: "Delivery by Restaurant", value: "delivery" },
          { title: "Favor", value: "delivery-favor" },
          { title: "DoorDash", value: "delivery-doordash" },
          { title: "Postmates", value: "delivery-postmates" },
          { title: "GrubHub", value: "delivery-grubhub" },
          { title: "UberEats", value: "delivery-ubereats" },
        ],
      },
      fieldset: "policies",
    },
    {
      title: "Notes",
      name: "policyNotes",
      type: "text",
      fieldset: "policies",
      rows: 3,
    },
    {
      title: "Order Online URL",
      name: "orderUrl",
      type: "url",
      validation: Rule => Rule.uri({ scheme: ["http", "https", "mailto"] }),
      fieldset: "ordering",
    },
    {
      title: "Phone Number for Ordering",
      name: "orderPhone",
      type: "string",
      fieldset: "ordering",
    },
    {
      title: "Notes",
      name: "orderingNotes",
      type: "text",
      fieldset: "ordering",
      rows: 3,
    },
    {
      title: "Contact Person",
      name: "contact",
      description:
        "Our point contact for updates for this restaurant. Not public.",
      type: "reference",
      to: [{ type: "contact" }],
    },
  ],
  initialValue: () => ({
    closedForBusiness: false,
    unverified: false,
    confirmedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: "title",
      isClosed: "closedForBusiness",
      takeoutOptions: "takeoutOptions",
      tags: "tags",
    },
    prepare: ({ title, isClosed, takeoutOptions, tags }) => ({
      title,
      subtitle: isClosed
        ? "CLOSED"
        : takeoutOptions?.map(opt => serviceLabels[opt]).join(", "),
      description: tags && `Tags: ${tags.join(", ")}`,
    }),
  },
  orderings: [
    {
      title: "Name",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      title: "Source Freshness, New",
      name: "confirmedAtDesc",
      by: [{ field: "confirmedAt", direction: "desc" }],
    },
    {
      title: "Source Freshness, Old",
      name: "confirmedAtAsc",
      by: [{ field: "confirmedAt", direction: "asc" }],
    },
  ],
}

export default restaurant
