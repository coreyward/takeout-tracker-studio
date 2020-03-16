const contact = {
  title: "Contact",
  name: "contact",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
    },
    {
      title: "Email Address",
      name: "emailAddress",
      type: "string",
    },
    {
      title: "Other Contact Info",
      name: "otherContactInfo",
      type: "text",
    },
    {
      title: "Preferred Contact Options",
      name: "contactOptions",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Text Message", value: "sms" },
          { title: "Phone Call", value: "phone" },
          { title: "Email", value: "email" },
          { title: "Facebook Message", value: "facebook" },
          { title: "Twitter DM", value: "twitter" },
          { title: "Other", value: "other" },
        ],
      },
    },
  ],
}

export default contact
