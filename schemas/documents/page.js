const { createSlugField } = require("../fields/slug")

const page = {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },

    createSlugField({ source: "name" }),

    {
      title: "Content Blocks",
      name: "contentBlocks",
      type: "array",
      of: [
        { type: "hero" },
        { type: "restaurantsViewer" },
        { type: "listCloud" },
      ],
    },
  ],
}

export default page
