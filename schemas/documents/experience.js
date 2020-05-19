const relativePrices = [
  { value: 1, title: "Really affordable" },
  { value: 2, title: "Average / Typical" },
  { value: 3, title: "A bit spendy" },
  { value: 4, title: "Spendy" },
  { value: 5, title: "Expensive / Very Lux" },
]

const foodFanciness = [
  { value: 1, title: "Low-key AF" },
  { value: 2, title: "Simple / kinda basic" },
  { value: 3, title: "Middle of the road" },
  { value: 4, title: "Nicer fare, kinda fancy" },
  { value: 5, title: "Very extra. Much fancy." },
]

const experience = {
  title: "Experience",
  name: "experience",
  type: "document",
  fields: [
    {
      title: "Name / Heading",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Relative Price",
      name: "price",
      type: "number",
      options: {
        list: relativePrices,
      },
    },
    {
      title: "How fancy is the food?",
      name: "foodFancy",
      type: "number",
      options: {
        list: foodFanciness,
      },
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
}

export default experience
