/** biome-ignore-all assist/source/organizeImports: TODO: Imports */
"use server";

import { SkillsContent } from "@/components/resume/skills";
import { skillsTools } from "@/data/skills";
import { readUserSkills } from "@/lib/actions/skills";
import { notFound } from "next/navigation";

export default async function SkillsPage() {
    const userCats = await readUserSkills("brady@prisma.io");
    if (!userCats)
        notFound();

    const tools = skillsTools as string[];
    return (
        <div className="min-h-screen">
            <SkillsContent categories={userCats} tools={tools} />
        </div>
    );
}