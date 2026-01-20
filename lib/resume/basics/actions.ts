"use server";

import z from "zod";
import * as fs from "fs/promises";
import { basicsSchema } from "./schema";
import { EditBasicsFormState } from "./state";
import * as util from "node:util";
import { zfd } from "zod-form-data";
import { UnsafeResume } from "@/lib/types/unsafe/unsafe-resume";
import { additionalBasics } from "@/data/additional/basics";
import { Basics, basicsTypeSchema } from "./types";
import { validate } from "./validationGen";
import { err, Result } from "@/lib/validation/result";
import { utilLog } from "@/lib/logging/console";
import { UnsafeBasics } from "@/lib/types/unsafe/unsafe-basics";

export async function updateBasics(
  prevState: EditBasicsFormState,
  formData: FormData,
): Promise<EditBasicsFormState> {
  const preprocessor = zfd.formData(basicsSchema);
  const state = preprocessor.safeParse(formData);

  const validatedValues = state.success
    ? state.data
    : ((state as any).data ?? Object.fromEntries(formData));

  if (!state.success) {
    const errs: Record<string, string[]> = {};
    state.error.issues.forEach((issue) => {
      const path = issue.path.join(".");
      if (!errs[path]) errs[path] = [];
      errs[path].push(issue.message);
    });
    utilLog(errs, "Errors");
    return {
      values: validatedValues, // This preserves the nested profiles array
      success: false,
      errors: errs,
    };
  }
  utilLog(state.data, "Values", true);
  return { values: state.data, success: true };
}

export async function getBasics(
  filePath: string,
): Promise<Result<Basics, string[]>> {
  const json = await fs.readFile(filePath, { encoding: "utf-8" });
  const res = JSON.parse(json) as UnsafeResume;
  if (!res.basics) {
    return err(["Basics object missing"]);
  }

  suppliment(res.basics);

  const sb = validate(basicsTypeSchema, res.basics);
  return sb;
}

function suppliment(basics: UnsafeBasics) {
  basics.availability = "Immediate";
  // TODO: Make a plan to read additionals from storage.
  basics.dateOfBirth = additionalBasics.dateOfBirth;
  basics.nationality = additionalBasics.nationality;
  basics.workAuth = additionalBasics.workAuth;
  if (basics.location) basics.location.countryName = "South Africa";
}
