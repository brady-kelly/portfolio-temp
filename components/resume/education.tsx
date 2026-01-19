"use client";

import { Calendar, GraduationCap } from "lucide-react";
import { AdditionalEducation, Education } from "@/lib/json/reactive";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";

export interface EducationProps {
    primary: Education[];
    additional: AdditionalEducation[];
}

export function EducationContent({ primary, additional }: EducationProps) {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Education History
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                    Academic background, qualifications, and continuous learning journey
                </p>
            </div>

            {/* Formal Education */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                    Formal Education
                </h2>

                <div className="space-y-8">
                    {primary.map((edu, index) => (
                        <Card
                            key={index}
                            className="border-slate-200 hover:shadow-md transition-shadow"
                        >
                            <CardHeader>
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div>
                                        <CardTitle className="text-xl text-slate-900">
                                            Diploma Datametrics in {edu.area}
                                        </CardTitle>
                                        <Link
                                            href={edu.url ?? "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="text-lg font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                                                {edu.institution}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(edu.startDate).toLocaleDateString("en-US", {
                                            month: "short",
                                            year: "numeric",
                                        })}{" "}
                                        -{" "}
                                        {new Date(edu.endDate).toLocaleDateString("en-US", {
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-slate-700 leading-relaxed text-pretty">
                                    Three year diploma covering computer science, databases and
                                    relational theory, and business process engineering.
                                </p>

                                {/* Relevant Coursework */}
                                <div>
                                    <h4 className="font-medium text-slate-900 mb-2">Courses</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.courses.map((course, courseIndex) => (
                                            <Badge
                                                key={courseIndex}
                                                variant="secondary"
                                                className="bg-slate-100 text-slate-700"
                                            >
                                                {course}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Projects */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Additional Education */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Continuing Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {additional.map((course, index) => (
                        <Card
                            key={index}
                            className="border-slate-200 hover:shadow-md transition-shadow"
                        >
                            <CardContent className="p-4">
                                <div className="space-y-2">
                                    <Badge
                                        variant="outline"
                                        className="border-slate-300 text-slate-600 text-xs"
                                    >
                                        {course.type}
                                    </Badge>
                                    <h3 className="font-semibold text-slate-900 text-sm">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-emerald-600">
                                        {course.provider}
                                    </p>
                                    <p className="text-xs text-slate-500">{course.year}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}