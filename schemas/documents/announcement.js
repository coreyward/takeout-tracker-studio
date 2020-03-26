import moment from "moment"

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
      validation: Rule => Rule.required(),
    },
  ],
  initialValue: () => ({
    active: true,
    publishedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: "copy",
      active: "active",
      publishedAt: "publishedAt",
    },
    prepare: ({ title, active, publishedAt }) => ({
      title,
      subtitle: `${active ? "Active: " : ""}${moment(publishedAt).fromNow()}`,
    }),
  },
  orderings: [
    {
      title: "Publication Date",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
}

export default announcement
