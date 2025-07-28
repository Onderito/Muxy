import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "./mongodb";
import { nextCookies } from "better-auth/next-js";
import { z } from "zod";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    validation: {
      signup: z.object({
        name: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(6),
      }),
    },
  },
  database: mongodbAdapter(client.db()),
  plugins: [nextCookies()],
});
