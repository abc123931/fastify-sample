import { FastifyInstance } from "fastify";

export const pingRoute = async (fastify: FastifyInstance) => {
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
    async () => {
      const test = await fastify.prisma.test.findFirst();
      return { message: test?.name ?? "pong" };
    }
  );
};
