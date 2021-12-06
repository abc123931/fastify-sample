import { FastifyPluginAsync } from "fastify";
import AuthHeadersSchema from "src/schemas/auth/headers.json";
import AuthQuerystringSchema from "src/schemas/auth/querystring.json";
import type { AuthHeaders } from "src/types/auth/headers";
import type { AuthQuerystring } from "src/types/auth/querystring";

export const authController: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", async (request) => {
    request.log.info("preHandler auth");
  });

  fastify.get<{
    Querystring: AuthQuerystring;
    Headers: AuthHeaders;
  }>(
    "/auth",
    {
      schema: {
        tags: ["user"],
        querystring: AuthQuerystringSchema,
        headers: AuthHeadersSchema,
      },
    },
    async (request, reply) => {
      const { username, password } = request.query;
      const customerHeader = request.headers["h-custom"];
      request.log.info(username, password, customerHeader);
      reply.status(200).send("logged in!");
    }
  );
};
