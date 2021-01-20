import type { FastifyInstance } from "fastify/types/instance";
import type { IncomingMessage, Server, ServerResponse } from "http";
import { authHandler, authOpts } from "src/handlers/auth";

export const authRoutes = async (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) => {
  fastify.addHook("preHandler", (request, _reply, done) => {
    request.log.info("preHandler auth");
    done();
  });

  fastify.get("/auth", authOpts, authHandler);
  next();
};
