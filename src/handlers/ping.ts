import type {
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";

export const pingOpts: RouteShorthandOptions = {
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
};

export const pingHandler = async (
  request: FastifyRequest,
  _reply: FastifyReply
) => {
  request.log.info("ping pong!");
  return { message: "pong\n" };
};
