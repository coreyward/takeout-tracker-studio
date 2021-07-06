const restaurantLocation = {
  title: "Restaurant Location",
  name: "restaurantLocation",
  type: "object",
  fieldsets: [
    {
      title: "Computed Geodata",
      name: "computed",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: "Happy Hour",
      name: "happyHour",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: "This location is open for business.",
      name: "openForBusiness",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "Address",
      name: "address",
      type: "string",
    },
    {
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
    },
    {
      title: "Hours",
      name: "hours",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Menu URL",
      name: "menuUrl",
      type: "url",
      validation: Rule => Rule.uri(),
    },
    {
      title: "Location Order URL",
      name: "locationOrderUrl",
      type: "url",
      validation: Rule => Rule.uri(),
    },
    {
      title: "Happy Hour Times",
      name: "happyHourTimes",
      type: "array",
      of: [{ type: "string" }],
      fieldset: "happyHour",
    },
    {
      title: "Happy Hour Details",
      name: "happyHourDetails",
      type: "text",
      fieldset: "happyHour",
      rows: 3,
    },
    {
      title: "Also Offering",
      name: "alsoOffering",
      description:
        "Leave blank if the restaurant is only offering prepared meals.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Beer", value: "beer" },
          { title: "Wine", value: "wine" },
          { title: "Cocktails", value: "cocktails" },
          { title: "Coffee", value: "coffee" },
          { title: "Groceries", value: "groceries" },
          { title: "Merchandise", value: "merch" },
        ],
      },
    },
    {
      title: "Raw Geodata",
      name: "rawGeodata",
      type: "text",
      readOnly: true,
      fieldset: "computed",
    },
    {
      title: "Geo Location",
      name: "geoLocation",
      type: "geopoint",
      fieldset: "computed",
    },
  ],
  preview: {
    select: {
      title: "address",
    },
  },
}

export default restaurantLocation
