import { Hono } from "hono";
import env from "@/env";

const app = new Hono().get("/", (c) => {
  return c.text("Hello Hono!");
});

Bun.serve({
  fetch: app.fetch,
  port: env.PORT,
});

export type App = typeof app;
