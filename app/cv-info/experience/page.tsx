/** biome-ignore-all assist/source/organizeImports: TODO: Imports */
import { utilLog } from "@/lib/logging/console";
import type { CvRoot, JsResumeWork } from "@/lib/json/reactive";
import { cvPath, readCvFromJsonFile } from "@/lib/json/file";
import { Positions } from "@/components/resume/positions";
import { positionsData } from "@/data/positions";

export default function WorkExperiencePage() {
    const parsedCv: CvRoot = readCvFromJsonFile(cvPath);
    const exp: JsResumeWork[] = parsedCv.work;
    utilLog(exp, "CV Experience");

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <Positions positions={positionsData} />
        </div>
    );
}
