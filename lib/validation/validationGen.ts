import { err, Result } from "@/lib/validation/result";
import { z } from "zod";

export function validate<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  input: unknown,
): Result<z.infer<TSchema>, string[]> {
  const result = schema.safeParse(input);

  if (!result.success) {
    const error = result.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`,
    );
    return err(error);
  }

  return {
    success: true,
    data: result.data,
  };
}
