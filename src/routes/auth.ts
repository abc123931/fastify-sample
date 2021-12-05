import type { FastifyInstance } from "fastify/types/instance";
import { authHandler, authOpts } from "src/handlers/auth";

export const authRoutes = async (fastify: FastifyInstance) => {
  fastify.addHook("preHandler", async (request) => {
    request.log.info("preHandler auth");
  });

  fastify.get("/auth", authOpts, authHandler);
};
