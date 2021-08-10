import migrate from "./_base"

migrate(
  {
    conditions: ["_type == 'restaurant'", "!defined(featured)"],
    limit: 100,
  },
  () => ({
    _operation: "patch",
    props: {
      set: {
        featured: false,
      },
    },
  })
)
