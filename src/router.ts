import type { FastifyPluginAsync } from "fastify";
import { authController } from "src/controller/authController";
import { documentController } from "src/controller/documentController";
import { pingController } from "src/controller/pingController";

export const router: FastifyPluginAsync = async (fastify) => {
  if (process.env.NODE_ENV === "development") {
    fastify.register(documentController);
  }
  fastify.register(pingController, { prefix: "/ping" });
  fastify.register(authController);
};
