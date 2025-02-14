/* eslint-disable @typescript-eslint/no-unused-vars */
import { envSchema } from "@/utils/env";
import { z } from "zod";

namespace NodeJS {
  type ProcessEnv = z.infer<typeof envSchema>;
}
