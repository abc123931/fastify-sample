import fastify from "fastify";
import { authRoutes } from "src/routes/auth";
import { documentRoutes } from "src/routes/document";
import { unauthRoutes } from "src/routes/unauth";

const server = fastify({
  connectionTimeout: 3000,
  logger: { level: "info" },
});

const setUp = async () => {
  if (process.env.NODE_ENV === "development") {
    // const module = await import("fastify-swagger");
    // server.register(module.fastifySwagger, swaggerOption);
    await server.register(documentRoutes);
  }
  server.register(unauthRoutes);
  server.register(authRoutes);
};

const start = async () => {
  try {
    await setUp();
    await server.listen(8081);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
