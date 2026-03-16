import fs from "node:fs";
import type { CvRoot } from "./reactive";

export const cvPath = "data/jsonresume-vercel-cv-2.json";

export function readCvFromJsonFile(filePath: string): CvRoot {
  let cvResult: CvRoot = JSON.parse(`{}`);

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    cvResult = JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading CV JSON file:", error);
  }

  return cvResult;
}
