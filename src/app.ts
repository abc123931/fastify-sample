import type { FastifyPluginAsync } from "fastify";
import { basicAuthPlugin } from "src/plugins/basicAuth";
import { prismaPlugin } from "src/plugins/prisma";
import { router } from "src/router";

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(prismaPlugin);
  fastify.register(basicAuthPlugin);
  fastify.register(router);
};
