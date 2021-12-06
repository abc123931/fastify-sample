import type { FastifyPluginAsync } from "fastify";
import type { Query } from "src/schemas/authSchema";
import { querySchema, responseSchema } from "src/schemas/authSchema";

export const authController: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("onRequest", fastify.basicAuth);

  fastify.get<{
    Querystring: Query;
  }>(
    "/auth",
    {
      schema: {
        querystring: querySchema,
        response: {
          200: responseSchema,
        },
      },
    },
    async (request, reply) => {
      const { username, password } = request.query;
      request.log.info(username, password);
      reply.status(200).send("logged in!");
    }
  );
};
