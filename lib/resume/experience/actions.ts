/** biome-ignore-all lint/style/useImportType: <explanation> */
import { err, ok, Result } from "@/lib/validation/result";
import z from "zod";
import * as fs from "fs/promises";
import type { UnsafeResume } from "@/lib/types/unsafe/unsafe-resume";
import { type Experience, experienceTypeSchema } from "./types";
import type { UnsafeExperience } from "@/lib/types/unsafe/unsafe-experience";
import { validate } from "../../validation/validationGen";
import { technologies } from "@/data/additional/experience";
import { utilLog } from "@/lib/logging/console";

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
  onlyOne?.forEach((item, index) => {
    suppliment(item);
    //utilLog(item, "One", true);
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

function mapProps(exp: UnsafeExperience) {
  return {
    name: exp.company,
    summary: exp.summary,
    position: exp.position,
    url: exp.url,
    startDate: exp.startDate,
    endDate: exp.endDate,
    highlights: exp.highlights,
    reasonForLeaving: exp.reasonForLeaving,
    technologies: exp.technologies,
  };
}
