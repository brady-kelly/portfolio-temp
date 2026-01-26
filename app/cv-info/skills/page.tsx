import { SkillsContent } from "@/components/resume/skills";
import { skillCategories, skillsTools } from "@/data/skills";
import { SkillCategory } from "@/lib/json/types";

export default function SkillsPage() {
    const categories = skillCategories as unknown as SkillCategory[];
    const tools = skillsTools as string[];
    return (
        <div className="min-h-screen">
            <SkillsContent categories={categories} tools={tools} />
        </div>
    );
}
