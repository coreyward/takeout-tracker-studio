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
  ],
  fields: [
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
      title: "This location is open for business.",
      name: "openForBusiness",
      type: "boolean",
      validation: Rule => Rule.required(),
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
