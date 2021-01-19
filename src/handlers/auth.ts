import type { FastifyReply, FastifyRequest } from "fastify";
import AuthHeadersSchema from "src/schemas/auth/headers.json";
import AuthQuerystringSchema from "src/schemas/auth/querystring.json";
import type { AuthHeaders } from "src/types/auth/headers";
import type { AuthQuerystring } from "src/types/auth/querystring";

export const authOpts = {
  schema: {
    querystring: AuthQuerystringSchema,
    headers: AuthHeadersSchema,
  },
};

export const authHandler = async (
  request: FastifyRequest<{
    Querystring: AuthQuerystring;
    Headers: AuthHeaders;
  }>,
  _reply: FastifyReply
) => {
  const { username, password } = request.query;
  const customerHeader = request.headers["h-custom"];
  request.log.info(username, password, customerHeader);
  return `logged in!`;
};
