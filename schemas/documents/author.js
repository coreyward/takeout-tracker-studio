import { createImageField } from "../fields/image"

const author = {
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    {
      title: "Author Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Author Url",
      name: "url",
      type: "url",
      validation: Rule => Rule.required(),
    },
    createImageField({
      title: "Author Avatar",
      name: "avatar",
      validations: {
        required: true,
        minWidth: 200,
        minHeight: 200,
      },
    }),
  ],
}

export default author
