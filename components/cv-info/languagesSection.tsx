"use client";

import { Language } from "@/lib/json/types";
import { Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export interface LanguagesSectionProps {
    languages: Language[];
}

function languageClassName(proficiency: string) {
    switch (proficiency.toLowerCase()) {
        case "Native":
            return "bg-emerald-100 text-emerald-800";
        case "Fluent":
            return "bg-blue-100 text-blue-800";
        case "Intermediate":
            return "bg-yellow-100 text-yellow-800";
        case "Basic": return "bg-gray-100 text-gray-800";
        default:
            return "";
    }
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <Globe className="h-8 w-8 text-emerald-600" />
                    <h2 className="text-3xl font-bold text-slate-900">Languages</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {languages.map((lang, index) => (
                        <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl text-slate-900">{lang.language}</CardTitle>
                                    <Badge
                                        variant="secondary"
                                        className={languageClassName(lang.proficiency)}
                                    >
                                        {lang.proficiency}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-slate-600 mb-2">
                                        <span>Proficiency</span>
                                        <span>{lang.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                        <div
                                            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${lang.level}%` }}
                                        />
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm">{lang.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}