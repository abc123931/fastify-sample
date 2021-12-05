import { FastifyPluginAsync } from "fastify";
import { documentRoutes } from "src/routes/document";
import { prismaPlugin } from "src/plugins/prisma";
import { pingRoute } from "src/routes/ping";
import { authRoutes } from "src/routes/auth";

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(prismaPlugin);

  if (process.env.NODE_ENV === "development") {
    await fastify.register(documentRoutes);
  }
  fastify.register(pingRoute);
  fastify.register(authRoutes);
};
