import { err, ok, Result } from "@/lib/validation/result";
import z from "zod";
import * as fs from "fs/promises";
import { UnsafeResume } from "@/lib/types/unsafe/unsafe-resume";
import { Experience, experienceTypeSchema } from "./types";
import { UnsafeExperience } from "@/lib/types/unsafe/unsafe-experience";
import { validate } from "../../validation/validationGen";

export async function getExperience(
  filePath: string,
): Promise<Result<Experience[], Record<string, string[]>>> {
  const errors: Record<string, string[]> = {};
  const json = await fs.readFile(filePath, { encoding: "utf-8" });
  const res = JSON.parse(json) as UnsafeResume;
  if (!res.basics) {
    errors["Json read"] = ["Work object missing"];
    return err(errors);
  }

  const experiences: Experience[] = [];
  res.work?.forEach((item, index) => {
    suppliment(item);

    const sb = validate(experienceTypeSchema, res.basics);
    if (sb.success) {
      experiences.push(sb.data);
    } else {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      errors[item.name!] = sb.error;
    }
  });

  if (Object.keys(errors).length > 0) return err(errors);

  return ok(experiences);
}

function suppliment(exp: UnsafeExperience) {
  exp.reasonForLeaving = "Something better";
}
