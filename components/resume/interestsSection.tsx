"use client";

import { Interest } from "@/lib/json/types";
import { Book, Globe, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

export interface InterestsSectionProps {
    interests: Interest[];
}

function getIconElement(iconName?: string): ReactNode {
    switch (iconName?.toLowerCase()) {
        case "globe":
            return (<Globe className="h-5 w-5" />);
        case "heart":
            return (<Heart className="h-5 w-5" />);
        case "book":
            return (<Book className="h-5 w-5" />);
        default:
            return (<Book className="h-5 w-5" />);
    }
}

export function InterestsSection({ interests }: InterestsSectionProps) {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <Heart className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-slate-900">Personal Interests</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                    <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">{getIconElement(interest.iconName)}</div>
                                <CardTitle className="text-xl text-slate-900">{interest.category}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                {interest.attributes.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}