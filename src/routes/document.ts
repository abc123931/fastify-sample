import type { FastifyInstance } from "fastify/types/instance";
import fastifyBasicAuth from "fastify-basic-auth";
import { fastifySwagger } from "fastify-swagger";
import type { IncomingMessage, Server, ServerResponse } from "http";

export const documentRoutes = async (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) => {
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

  fastify.after(() => {
    fastify.addHook("onRequest", fastify.basicAuth);
  });
  next();
};
