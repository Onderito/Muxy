import { z } from "zod";

export const userMoodsSchema = z.object({
  userId: z.string(),
  moodId: z.string(),
  createdAt: z.date().optional(),
});

export type userMoodsSchema = z.infer<typeof userMoodsSchema>;
