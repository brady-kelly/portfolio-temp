import { Award, Briefcase, Globe, GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export type HomeSectionCardProps = {
    title: string,
    description: string,
    href: string,
    iconName: string,
    color: string,
}

function getIcon(iconName: string) {
    const icon = User;
    switch (iconName.toLowerCase()) {
        case "briefcase": return Briefcase;
        case "award": return Award;
        case "graduationcap": return GraduationCap;
        case "globe": return Globe;
        default: return icon;
    }
}

export function HomeSectionCard(section: HomeSectionCardProps) {
    const IconComponent = getIcon(section.iconName);

    return (
        <Link key={section.href} href={section.href}>
            <Card
                className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 ${section.color}`}
            >
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{section.title}</h3>
                            <p className="text-slate-600 text-pretty">{section.description}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}