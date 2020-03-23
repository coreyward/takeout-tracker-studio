import hero from "./objects/hero"

const list = {
  title: "List",
  name: "list",
  type: "document",
  fieldsets: [
    {
      title: "Hero",
      name: "hero",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().max(50),
    },

    ...hero.fields
      .filter(({ name }) => name !== "title")
      .map(field => ({
        ...field,
        fieldset: "hero",
      })),
    {
      title: "Restaurants",
      name: "restaurants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "background",
    },
  },
}

export default list
