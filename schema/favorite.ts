import { z } from "zod";

export const favoriteSchema = z.object({
  userId: z.string(),
  moodId: z.string(),
  spotifyId: z.string(), // ID du morceau ou playlist sur Spotify
  title: z.string(),
  artist: z.string(),
  coverUrl: z.string().url(),
  type: z.enum(["track", "playlist"]), // pour savoir si c'est une chanson ou une playlist
  createdAt: z.date().optional(),
});
