import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});
