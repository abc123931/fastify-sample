import Fastify from "fastify";
import { app } from "src/app";

const fastify = Fastify({
  connectionTimeout: 3000,
  logger: { level: "info" },
});

const setUp = async () => {
  fastify.register(app);
};

const start = async () => {
  try {
    await setUp();
    await fastify.listen(8081);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
