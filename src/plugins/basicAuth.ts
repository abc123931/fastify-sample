import fp from "fastify-plugin";
import fastifyBasicAuth from "fastify-basic-auth";
import fastify, { FastifyPluginAsync } from "fastify";

export const basicAuthPlugin: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(fastifyBasicAuth, {
    validate: async function (username, password) {
      if (username !== "name" || password !== "password") {
        throw new Error("Winter is coming");
      }
    },
    authenticate: true,
  });
});
