import z from "zod";
import { camelToTitleCase } from "./formatting";
import { zfd } from "zod-form-data";

export function buildZodString(name: string, min?: number, max?: number) {
  let zs = z.string();
  if (min)
    zs = zs.min(
      min,
      `${camelToTitleCase(name)} must be at least ${min} characters.`,
    );
  if (max)
    zs = zs.max(
      max,
      `${camelToTitleCase(name)} must be at most ${max} characters.`,
    );
  return zs;
}
