import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    {
      title: "Restaurant",
      name: "restaurant",
      type: "document",
      fieldsets: [
        { title: "General Information", name: "information" },
        { title: "Operating Policies", name: "policies" },
        { title: "Ordering Information", name: "ordering" },
      ],
      fields: [
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
        },
        {
          title: "Source URLs",
          name: "sourceUrls",
          description: "Links to sources for this information, when available.",
          type: "array",
          of: [{ type: "url", validation: Rule => Rule.required().uri() }],
        },
        {
          title: "Last Update/Confirmation of Information",
          name: "confirmedAt",
          type: "datetime",
          validation: Rule => Rule.required().max(new Date().toISOString()),
        },
      ],
    },
  ]),
})
