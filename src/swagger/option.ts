export const swaggerOption = {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "test-api",
      version: "1.0.0",
      description: "testのAPI",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "github page",
    },
    host: "localhost:8081",
    schemes: ["http", "https", "ws"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "user", description: "User related end-points" },
      { name: "code", description: "Code related end-points" },
    ],
  },
  exposeRoute: true,
};
