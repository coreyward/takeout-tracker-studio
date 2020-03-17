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
      title: "Source/Update Notes",
      name: "sourceNotes",
      type: "text",
      fieldset: "sources",
      rows: 3,
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
        collapsed: true,
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
          { title: "Dine-In Available", value: "dine-in" },
          { title: "Offers Takeout", value: "takeout" },
          { title: "Offers Curbside", value: "curbside" },
          { title: "Delivery: Self-Delivered", value: "delivery" },
          { title: "Delivery: Favor", value: "delivery-favor" },
          { title: "Delivery: DoorDash", value: "delivery-doordash" },
          { title: "Delivery: Postmates", value: "delivery-postmates" },
          { title: "Delivery: GrubHub", value: "delivery-grubhub" },
          { title: "Delivery: UberEats", value: "delivery-ubereats" },
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
      validation: Rule => Rule.uri(),
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
    confirmedAt: new Date().toISOString(),
  }),
}

export default restaurant
