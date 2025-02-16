import { Hono } from "hono";

const usersRouter = new Hono().get("/", async (c) => {
  return c.json({ user: "data" });
});

export default usersRouter;
