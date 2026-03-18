/** biome-ignore-all assist/source/organizeImports: TODO: Imports */
import { Positions } from "@/components/resume/positions";
import { readUserPositions } from "@/lib/actions/positions";

export default async function WorkExperiencePage() {
    const posData = await readUserPositions("brady@prisma.io")

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <Positions positions={posData} />
        </div>
    );
}
