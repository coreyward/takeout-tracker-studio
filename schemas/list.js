const list = {
  title: "List",
  name: "list",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().max(50),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Restaurants",
      name: "restaurants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
}

export default list
