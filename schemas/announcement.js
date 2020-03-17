const announcement = {
  title: "Announcement",
  name: "announcement",
  type: "document",
  fields: [
    {
      title: "Announcement Copy",
      name: "copy",
      type: "markdown",
      options: {
        minRows: 2,
      },
    },
    {
      title: "Active?",
      name: "active",
      description: "The latest active announcement will be shown.",
      type: "boolean",
      validation: Rule => Rule.required(),
    },
    {
      title: "Publish Date/Time",
      name: "publishedAt",
      type: "datetime",
      validaiton: Rule => Rule.required(),
    },
  ],
  initialValue: () => ({
    active: true,
    publishedAt: new Date().toISOString(),
  }),
}

export default announcement
