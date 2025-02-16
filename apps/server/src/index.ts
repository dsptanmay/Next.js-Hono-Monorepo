import env from "@/env";
import { Hono } from "hono";

import usersRouter from "@/routes/users";

import { pinoLogger } from "@/middlewares/pino-logger";

const app = new Hono().basePath("/api").use("*", pinoLogger());

const routes = app.route("/users", usersRouter);

Bun.serve({
  fetch: app.fetch,
  port: env.PORT,
});

export type App = typeof routes;
