// import { err, ok, Result } from "@/lib/result";
// import { UnsafeBasics } from "@/lib/types/unsafe/unsafe-basics";
// import { Basics } from "./types";

// const required = [
//   "name",
//   "label",
//   "email",
//   "phone",
//   "summary",
//   "location",
//   "profiles",
//   "dateOfBirth",
//   "nationality",
//   "workAuth",
// ];

// export function validate(basics: UnsafeBasics): Result<Basics, string[]> {
//   const errs = [];

//   for (const [key, value] of Object.entries(basics)) {
//     if (!value && required.includes(key)) {
//       errs.push(`Property '${key}' missing`);
//     }
//   }
//   if (errs.length > 0) {
//     return err(errs);
//   }
//   return ok(basics as Basics);
// }
