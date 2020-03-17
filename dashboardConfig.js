export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "netlify",
      options: {
        title: "Redeploy Website",
        sites: [
          {
            title: "Takeout Tracker",
            apiId: "457c3656-e1e6-4b8e-855f-01b4cff01033",
            buildHookId: "5e712bc40deeff5d9f2f1a20",
            name: "takeout-tracker",
          },
        ],
      },
    },
  ],
}
