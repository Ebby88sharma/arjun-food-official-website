const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Arjun Food Traders API",
      version: "1.0.0",
      description: "API documentation for Arjun Food Traders",
    },
  },
  apis: ["./routes/*.js"], // Where to look for API docs
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Swagger Docs available at /api-docs");
};

module.exports = swaggerDocs;
