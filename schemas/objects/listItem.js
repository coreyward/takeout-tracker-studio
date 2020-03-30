const listItem = {
  title: "List Item",
  name: "listItem",
  type: "object",
  fields: [
    {
      title: "Restaurant",
      name: "restaurant",
      type: "reference",
      to: [{ type: "restaurant" }],
      options: {
        filter: ({ document }) => {
          const ids = document.restaurants
            .map(r => (r.restaurant ? r.restaurant._ref : r._ref))
            .filter(x => x && x.length)

          return ids.length
            ? {
                filter: "!(_id in $ids)",
                params: {
                  ids: document.restaurants
                    .map(r => (r.restaurant ? r.restaurant._ref : r._ref))
                    .filter(x => x && x.length),
                },
              }
            : null
        },
      },
      validation: Rule => Rule.required(),
    },
    {
      title: "Copy",
      name: "copy",
      type: "markdown",
    },
  ],
  preview: {
    select: {
      title: "restaurant.title",
      subtitle: "copy",
    },
  },
}

export default listItem
