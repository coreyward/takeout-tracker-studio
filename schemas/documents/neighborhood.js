import { createImageField } from "../fields/image"

const neighborhood = {
  title: "Neighborhood",
  name: "neighborhood",
  type: "document",
  fields: [
    {
      title: "Neighborhood Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Neighborhood Url",
      name: "url",
      type: "url",
    },
  ],
}

export default neighborhood
