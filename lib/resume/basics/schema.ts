import { buildZodString } from "@/lib/schemaUtils";
import z from "zod";
import { zfd } from "zod-form-data";

const locationSchema = z.object({
  address: buildZodString("address", 8, 100),
  postalCode: buildZodString("postalCode", 4, 7),
  city: buildZodString("city", 2, 50),
  countryCode: buildZodString("countryCode", 2, 2).optional(),
  countryName: buildZodString("countryName", 5, 100),
  region: buildZodString("region", 5, 100).optional(),
});

const profileSchema = z.object({
  network: buildZodString("network", 1, 50),
  username: buildZodString("username", 5, 50).optional(),
  url: z.url().optional(),
});

export const basicsSchema = zfd.formData({
  name: zfd.text(buildZodString("name", 5, 50)),
  label: zfd.text(buildZodString("label", 10, 100)),
  image: zfd.text(z.url().optional()),
  email: zfd.text(z.email()),
  phone: zfd.text(buildZodString("phone", 10, 15)),
  url: zfd.text(z.url().optional()),
  location: locationSchema,
  profiles: zfd.repeatable(z.array(profileSchema)),
  // TODO: Fix date
  //dateOfBirth: zfd.text(z.coerce.date()),
  dateOfBirth: zfd.text(z.string()),
  nationality: zfd.text(buildZodString("nationality", 5, 100).optional()),
  workAuth: zfd.text(buildZodString("workAuth", 5, 100).optional()),
});
