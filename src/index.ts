import fastify from "fastify";
import { authHandler, authOpts } from "src/handlers/auth";
import { pingHandler, pingOpts } from "src/handlers/ping";

const server = fastify({ connectionTimeout: 3000, logger: { level: "info" } });

server.get("/ping", pingOpts, pingHandler);

server.get("/auth", authOpts, authHandler);

server.listen(8081, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`Server listening at ${address}`);
});
