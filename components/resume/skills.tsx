"use client";

import { SkillCategory } from "@/lib/json/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";
import { BrainCog, Cloud, Code, Database, FileCode, Lightbulb, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import { Heading } from "../shared/heading";

const getSkillLevelColor = (level: string) => {
    const lvl = Number(level);
    if (lvl >= 90) return "bg-emerald-500";
    if (lvl >= 80) return "bg-blue-500";
    if (lvl >= 70) return "bg-yellow-500";
    return "bg-slate-400";
};

const getSkillLevelText = (level: string) => {
    const lvl = Number(level);
    if (lvl >= 90) return "Expert";
    if (lvl >= 80) return "Advanced";
    if (lvl >= 70) return "Intermediate";
    return "Beginner";
};

export interface SkillsContentProps {
    categories: SkillCategory[];
    tools: string[];
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

export function SkillsContent({ categories, tools }: SkillsContentProps) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <Heading title="Professional Skills" iconName="fileCode" />
            </div>

            {/* Skills Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {categories.map((category, categoryIndex) => {
                    return (
                        <Card
                            key={categoryIndex}
                            className={`border-2 ${category.colorClasses}`}
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-slate-900">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                                        {getIconElement(category.iconName)}
                                    </div>
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-slate-900">
                                                {skill.name}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Badge
                                                    variant="secondary"
                                                    className={`text-white ${getSkillLevelColor(
                                                        skill.level
                                                    )}`}
                                                >
                                                    {getSkillLevelText(skill.level)}
                                                </Badge>
                                                <span className="text-sm text-slate-500">
                                                    {skill.years}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-500 ${getSkillLevelColor(
                                                    skill.level
                                                )}`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Tools & Technologies */}
            <Card className="border-slate-200 mb-12">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-900">
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        Tools & Technologies
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="border-slate-300 text-slate-700 px-3 py-1 text-sm"
                            >
                                {tool}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Skill Level Legend */}
            <Card className="border-slate-200 mb-12">
                <CardHeader>
                    <CardTitle className="text-slate-900">Proficiency Levels</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                            <span className="text-sm text-slate-700">Expert (90-100%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            <span className="text-sm text-slate-700">
                                Advanced (80-89%)
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                            <span className="text-sm text-slate-700">
                                Intermediate (70-79%)
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-slate-400 rounded"></div>
                            <span className="text-sm text-slate-700">
                                Beginner (60-69%)
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}