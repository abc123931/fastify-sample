import type { FastifyInstance } from "fastify/types/instance";
import type { IncomingMessage, Server, ServerResponse } from "http";
import { pingHandler, pingOpts } from "src/handlers/ping";

export const unauthRoutes = (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) => {
  fastify.addHook("preHandler", (request, _reply, done) => {
    request.log.info("preHandler ping");
    done();
  });
  fastify.get("/ping", pingOpts, pingHandler);
  next();
};
