import { BasicsEditor } from "@/components/resume/editors/basics-editor";
import { utilLog } from "@/lib/logging/console";
import { getBasics } from "@/lib/resume/basics/actions";
import { notFound } from "next/navigation";

export default async function BasicDetailsPage() {
    const res = await getBasics("data/jsonResume.json");
    if (!res.success) {
        notFound();
    }

    const sb = res.data;
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <BasicsEditor {...sb} />
        </div>
    );
}