import { EducationContent } from "@/components/resume/education";
import { additionalEducation, education } from "@/data/education";
import type { Education } from "@/lib/json/reactive";

export default async function Educationpage() {
    const prim = education as Education[];
    const add = additionalEducation;
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <EducationContent primary={prim} additional={add} />
        </div>
    );
}