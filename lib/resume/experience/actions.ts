import { technologies } from "@/data/additional/experience";
import type { UnsafeExperience } from "@/lib/types/unsafe/unsafe-experience";
import type { UnsafeResume } from "@/lib/types/unsafe/unsafe-resume";
import { err, ok, type Result } from "@/lib/validation/result";
import * as fs from "node:fs/promises";
import { validate } from "../../validation/validationGen";
import { type Experience, experienceTypeSchema } from "./types";

export async function getExperience(
  filePath: string,
): Promise<Result<Experience[], Record<string, string[]>>> {
  const errors: Record<string, string[]> = {};
  const json = await fs.readFile(filePath, { encoding: "utf-8" });
  const res = JSON.parse(json) as UnsafeResume;
  if (!res.work) {
    errors["Json read"] = ["Work object missing"];
    return err(errors);
  }

  const experiences: Experience[] = [];

  const onlyOne = res.work.slice(0, 1);
  onlyOne?.forEach((item) => {
    suppliment(item);
    const sb = validate(experienceTypeSchema, item);
    if (sb.success) {
      experiences.push(sb.data);
    } else {
      // biome-ignore lint/style/noNonNullAssertion: TODO: Later
      errors[item.company!] = sb.error;
    }
  });

  if (Object.keys(errors).length > 0) return err(errors);

  return ok(experiences);
}

function suppliment(exp: UnsafeExperience) {
  exp.technologies = technologies;
  exp.reasonForLeaving = "Something better";
}
