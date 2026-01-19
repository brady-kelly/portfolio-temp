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
  console.log(util.inspect(state, { depth: null }));

  const values = Object.fromEntries(
    formData,
  ) as unknown as EditBasicsFormState["values"];

  if (!state.success) {
    const errs: Record<string, string[]> = {};

    state.error.issues.forEach((issue) => {
      // Join the path array: ["location", "address"] becomes "location.address"
      const path = issue.path.join(".");
      if (!errs[path]) {
        errs[path] = [];
      }
      errs[path].push(issue.message);
    });
    return {
      values: values,
      success: false,
      errors: errs,
    };
  }
  const basics = state.data;
  return {
    errors: undefined,
    success: true,
  };
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
  utilLog(sb, undefined);
  return sb;
}

function suppliment(basics: UnsafeBasics) {
  // TODO: Make a plan to read additionals from storage.
  basics.dateOfBirth = additionalBasics.dateOfBirth;
  basics.nationality = additionalBasics.nationality;
  basics.workAuth = additionalBasics.workAuth;

  basics.location.countryName = "South Africa";
}
