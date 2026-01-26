import { resumePath } from "@/lib/config/json";
import { cvPath, readCvFromJsonFile } from "@/lib/json/file";
import type { CvRoot } from "@/lib/json/reactive";
import { getBasics } from "@/lib/resume/basics/actions";
import type { UnsafeBasics } from "@/lib/types/unsafe/unsafe-basics";
import { getInitials } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Basics } from "@/components/resume/basics";

export default async function BasicDetailsPage() {
    const result = await getBasics(resumePath);

    if (!result.success)
        notFound();

    const basics = result.data;
    const inits = getInitials(basics.name);

    return (
        <div className="min-h-screen">
            <Basics {...basics} />
        </div>
    );
}