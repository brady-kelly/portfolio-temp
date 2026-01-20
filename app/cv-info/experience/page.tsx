import { utilLog } from "@/lib/logging/console";
import { CvRoot } from "@/lib/json/reactive";
import { cvPath, readCvFromJsonFile } from "@/lib/json/file";
import { Experience } from "@/components/resume/experience";
import { Work } from "@/lib/resume/work/types";

export default function WorkExperiencePage() {
    const parsedCv: CvRoot = readCvFromJsonFile(cvPath);
    const exp: Work[] = [];
    utilLog(exp, "CV Experience");

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Work Experience
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                        Professional career history and key achievements across various
                        roles and companies
                    </p>
                </div>

                <div className="relative">
                    <h2>This section is getting a makeover.</h2>
                    <p>I'm currently performing some updates to improve the operation and layout for this app.</p>
                    <h3>Estimated Restoration Time: Thursday, 22nd January 2026</h3>
                    <p>Brady Kelly</p>
                </div>
            </div>
        </div>
    );
}
