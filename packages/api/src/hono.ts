import type { App } from "backend";
import { hc } from "hono/client";

const client = hc<App>("");
export type Client = typeof client;

export const hcWithType = (...args: Parameters<typeof hc>): Client =>
  hc<App>(...args);
