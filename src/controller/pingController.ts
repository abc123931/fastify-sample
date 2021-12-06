import type { FastifyPluginAsync } from "fastify";
import type { Params, Response } from "src/schemas/pingSchema";
import { responseSchema } from "src/schemas/pingSchema";

export const pingController: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", async (request) => {
    request.log.info("preHandler ping");
  });

  fastify.get<{ Reply: Response }>(
    "/",
    {
      schema: {
        response: {
          200: responseSchema,
        },
      },
    },
    async (_, reply) => {
      const test = await fastify.prisma.test.findFirst();
      reply.status(200).send({ message: test?.name ?? "pong" });
    }
  );

  fastify.get<{
    Params: Params;
    Reply: Response;
  }>(
    "/:name",
    {
      schema: {
        response: {
          200: responseSchema,
        },
      },
    },
    async (request, reply) => {
      const { name } = request.params;
      reply.status(200).send({ message: name });
    }
  );
};
