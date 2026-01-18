import { BasicDetails } from "@/components/cv-info/basicDetails";
import { cvPath, readCvFromJsonFile } from "@/lib/json/file";
import { Basics, CvRoot } from "@/lib/json/reactive";
import { getInitials } from "@/lib/utils";

export default async function BasicDetailsPage() {
    const parsedCv: CvRoot = readCvFromJsonFile(cvPath);
    const basics: Basics = parsedCv.basics;

    const inits = getInitials(basics.name);

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <BasicDetails cvBasics={basics} initials={inits} />
        </div>
    );
}