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
});

const { data: env, error } = envSchema.safeParse(process.env);
if (error) {
  console.log("❌ Invalid environment variables:");
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}
export default env!;
