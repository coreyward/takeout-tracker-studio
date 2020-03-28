const restaurantsViewer = {
  title: "Restaurants Viewer",
  name: "restaurantsViewer",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Default Filters",
      name: "defaultFilters",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Hide temporarily closed", value: "hideClosed" },
          { title: "Open now (according to hours)", value: "currentlyOpen" },
        ],
      },
    },
    {
      title: "Default Search Query",
      name: "defaultSearchQuery",
      type: "string",
    },
    {
      title: "Default View Mode",
      name: "defaultViewMode",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Map with list", value: "map" },
          { title: "Full-size tiles", value: "tile" },
          { title: "Small preview cards", value: "card" },
        ],
      },
      validation: Rule => Rule.required(),
    },
  ],
}

export default restaurantsViewer
