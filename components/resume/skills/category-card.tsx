/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { Heading } from "@/components/shared/heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillCategory } from "@/lib/json/types";
import { getSkillLevelColor, getSkillLevelText } from "@/lib/resume/skills/maps";
import { BrainCog, Cloud, Code, Database, Users } from "lucide-react";
import type { ReactNode } from "react";
import { SkillCard } from "./skill-card";

export type CategoryCardProps = {
    colorClasses: string,
    iconName: string,
    title: string,
    category: SkillCategory,
}

function getIconElement(iconName?: string): ReactNode {
    switch (iconName?.toLowerCase()) {
        case "database":
            return (<Database className="w-5 h-5 text-white" />);
        case "code":
            return (<Code className="w-5 h-5 text-white" />);
        case "users":
            return (<Users className="w-5 h-5 text-white" />);
        case "cloud":
            return (<Cloud className="w-5 h-5 text-white" />)
        default:
            return (<BrainCog className="w-5 h-5 text-white" />);
    }
}

export function CategoryCard({ category, colorClasses, iconName, title }: CategoryCardProps) {
    return (
        <Card className={`border-2 ${colorClasses}`}>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900">
                    <Heading iconName="file-code" />
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex} {...skill} />
                ))}
            </CardContent>
        </Card>
    )
}