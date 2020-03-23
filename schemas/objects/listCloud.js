const listCloud = {
  title: "Lists",
  name: "listCloud",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "markdown",
    },
    {
      title: "Lists",
      name: "lists",
      type: "array",
      of: [{ type: "reference", to: [{ type: "list" }] }],
    },
  ],
}

export default listCloud
