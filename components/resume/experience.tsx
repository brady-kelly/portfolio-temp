/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Later */
/** biome-ignore-all assist/source/organizeImports: TODO: Later */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Building, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Experience } from "@/lib/resume/experience/types";
import { utilLog } from "@/lib/logging/console";

export type ExperienceProps = {
    name: string;
    position: string;
    summary: string;
    startDate: string;
    endDate: string;
    highlights: string[];
    reasonForLeaving: string;
    location?: string;
    url?: string;
    technologies?: string[];
};

export interface ExperienceSectionProps {
    experiences: ExperienceProps[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    utilLog(experiences, "Props", true);
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Work Experience
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                    Professional career history and key achievements across various
                    roles and companies
                </p>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                <div className="space-y-8">
                    {experiences.map((job: Experience, index: number) => (
                        <div key={index} className="relative flex items-start gap-6">
                            {/* Timeline Dot */}
                            <div className="shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center relative z-10">
                                <Building className="w-8 h-8 text-white" />
                            </div>
                            {/* Job Card */}
                            <Card className="flex-1 border-slate-200 hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl text-slate-900">
                                                {job.position}
                                            </CardTitle>
                                            <a
                                                href={job.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                                            >
                                                {job.name}
                                            </a>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="bg-slate-100 text-slate-700 w-fit"
                                        >
                                            {job.endDate === "Present" ? "Current" : "Previous"}
                                        </Badge>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {formatDate(job.startDate)} - {formatDate(job.endDate)}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-slate-900 mb-2">
                                            Highlights:
                                        </h4>
                                        <ul className="space-y-1">
                                            {job.highlights.map((highlight, highlightIndex) => (
                                                <li
                                                    key={highlightIndex}
                                                    className="text-slate-700 flex items-start gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 shrink-0"></span>
                                                    <span className="text-pretty">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900 mb-2">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies?.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="outline"
                                                    className="border-slate-300 text-slate-600"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {job.reasonForLeaving && job.endDate !== "Present" && (
                                        <div>
                                            <h4 className="font-medium text-slate-900 mb-2">
                                                Reason for Leaving:
                                            </h4>
                                            <p className="text-slate-700 text-pretty">
                                                {job.reasonForLeaving}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}