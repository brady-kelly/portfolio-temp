import { utilLog } from "@/lib/logging/console";
import type { CvRoot, Work } from "@/lib/json/reactive";
import { cvPath, readCvFromJsonFile } from "@/lib/json/file";
import { Experience } from "@/components/resume/experience";
import { Makeover } from "@/components/shared/makeover";

export default function WorkExperiencePage() {
    const parsedCv: CvRoot = readCvFromJsonFile(cvPath);
    const exp: Work[] = parsedCv.work;
    utilLog(exp, "CV Experience");

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            {/* <Experience experience={exp} /> */}
            <Makeover />
        </div>
    );
}
