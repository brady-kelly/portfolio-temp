import { titleCase } from "title-case";

export function camelToTitleCase(str: string): string {
  // TODO: Also split on space for more than one word.
  return titleCase(str.replace(/([A-Z])/g, " $1"));
}
