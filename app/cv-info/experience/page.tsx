/** biome-ignore-all assist/source/organizeImports: TODO: Later */
import { utilLog } from "@/lib/logging/console";
import { getExperience } from "@/lib/resume/experience/actions";
import { ExperienceSection } from "@/components/resume/experience";
import { resumePath } from "@/lib/config/json";

export default async function WorkExperiencePage() {
    const result = await getExperience(resumePath);
    utilLog(result, "CV Experience result", true);
    if (!result.success) return;

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <ExperienceSection experiences={result.data} />
        </div>
    );
}
