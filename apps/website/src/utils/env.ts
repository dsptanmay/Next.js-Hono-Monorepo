import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .union([
      z.literal("development"),
      z.literal("testing"),
      z.literal("production"),
    ])
    .default("development"),
  API_URL: z.string().url(),
  PORT: z.coerce.number().min(1000).optional(),
});

const env = envSchema.parse(process.env);
export default env;
