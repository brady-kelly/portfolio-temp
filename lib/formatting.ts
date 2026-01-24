import { titleCase } from "title-case";

export function camelToTitleCase(str: string): string {
  // TODO: Also split on space for more than one word.
  return titleCase(str.replace(/([A-Z])/g, " $1"));
}

export const toCamelCase = (str: string): string => {
  if (!str || str.length === 0) return "";
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // Insert hyphen between lowercase/number and uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // Handle cases like "NASAData" -> "nasa-data"
    .toLowerCase();
};
