import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().min(1000),
  NODE_ENV: z
    .union([
      z.literal("development"),
      z.literal("testing"),
      z.literal("production"),
    ])
    .default("development"),
});

const { data: env, error } = EnvSchema.safeParse(process.env);
if (error) {
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}
export default env!;
