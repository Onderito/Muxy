import { z } from "zod";

export const moodSchema = z.object({
  name: z.string().min(2).max(30),
  imageUrl: z.string().url().optional(),
});

export type moodSchema = z.infer<typeof moodSchema>;
