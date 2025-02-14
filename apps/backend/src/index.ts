import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono({ strict: false })
  .basePath("/api")
  .use(logger())
  .get("/", async (c) => {
    return c.json({ data: "base path" });
  });

export type App = typeof app;

Bun.serve({
  fetch: app.fetch,
  port: 8787,
});
