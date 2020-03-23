import { createImageField } from "../fields/image"

const hero = {
  title: "Hero",
  name: "hero",
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
      validation: Rule => Rule.required(),
    },
    createImageField({
      title: "Background",
      name: "background",
      validations: {
        required: true,
        minWidth: 1400,
        minHeight: 415,
      },
    }),
    {
      title: "Presentation",
      name: "presentation",
      type: "string",
      options: {
        list: [
          {
            title: "Narrower left-aligned text (space on the right)",
            value: "narrow",
          },
          { title: "Wider left-aligned text", value: "wide" },
        ],
      },
      validation: Rule => Rule.required(),
    },
  ],
}

export default hero
