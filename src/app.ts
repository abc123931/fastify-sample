import { FastifyPluginAsync } from "fastify";
import { prismaPlugin } from "src/plugins/prisma";
import { router } from "src/router";

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(prismaPlugin);
  fastify.register(router);
};
