import type { FastifyPluginAsync } from "fastify";
import fastifyBasicAuth from "fastify-basic-auth";
import { fastifySwagger } from "fastify-swagger";

export const documentController: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyBasicAuth, {
    validate: (username, password, _req, _reply, done) => {
      if (username === "Tyrion" && password === "wine") {
        done();
      } else {
        done(new Error("Winter is coming"));
      }
    },
    authenticate: true,
  });
  fastify.register(fastifySwagger, {
    mode: "static",
    specification: {
      path: "src/swagger/documentation.json",
      baseDir: "/",
    },
    exposeRoute: true,
  });

  await fastify.after();
  fastify.addHook("onRequest", fastify.basicAuth);
};
