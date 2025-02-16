import { Hono } from "hono";
import { pinoLogger as logger } from "hono-pino";
import { requestId } from "hono/request-id";
import pino from "pino";
import pretty from "pino-pretty";

const app = new Hono({ strict: false })
  .basePath("/api")
  .use(
    logger({
      pino: pino(
        {
          level: process.env.LOG_LEVEL || "info",
        },
        process.env.NODE_ENV === "production" ? undefined : pretty(),
      ),
    }),
  )
  .use(requestId())
  .get("/", async (c) => {
    return c.json({ data: "base path" });
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    return c.json({ data: `some data for ${id}` });
  });

export type App = typeof app;

Bun.serve({
  fetch: app.fetch,
  port: 8787,
});
