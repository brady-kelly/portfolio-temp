import { z } from "zod";

const profileSchema = z.object({
  network: z.string(),
  username: z.string().optional(),
  url: z.string(),
});

const locationTypeSchema = z.object({
  address: z.string(),
  postalCode: z.string(),
  city: z.string(),
  countryCode: z.string().optional(),
  region: z.string().optional(),
  countryName: z.string(),
});

export const basicsTypeSchema = z.object({
  name: z.string(),
  label: z.string(),
  image: z.string().optional(),
  email: z.string(),
  phone: z.string(),
  url: z.url().optional(),
  summary: z.string(),
  location: locationTypeSchema,
  profiles: z.array(profileSchema),
  dateOfBirth: z.string(),
  nationality: z.string(),
  workAuth: z.string(),
});

export type Profile = z.infer<typeof profileSchema>;
export type Location = z.infer<typeof basicsTypeSchema>;
export type Basics = z.infer<typeof basicsTypeSchema>;
