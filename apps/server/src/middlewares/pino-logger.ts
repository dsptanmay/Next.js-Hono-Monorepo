import pino from "pino";
import pretty from "pino-pretty";
import { pinoLogger as logger } from "hono-pino";

import env from "@/env";

export function pinoLogger() {
  return logger({
    pino: pino(
      {
        level: env.LOG_LEVEL || "info",
      },
      pretty(),
    ),
  });
}
