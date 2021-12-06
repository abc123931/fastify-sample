import { FastifyPluginAsync } from "fastify";

export const pingController: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", async (request) => {
    request.log.info("preHandler ping");
  });

  fastify.get(
    "/ping",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    async (_, reply) => {
      const test = await fastify.prisma.test.findFirst();
      reply.status(200).send({ message: test?.name ?? "pong" });
    }
  );
};
