import z from "zod";

export const workTypeSchema = z.object({
  name: z.string(),
  position: z.string(),
  location: z.string().optional(),
  url: z.url().optional(),
  summary: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  highlights: z.array(z.string()),
  technologies: z.array(z.string()).optional(),
  reasonForLeaving: z.string(),
});

export type Work = z.infer<typeof workTypeSchema>;
