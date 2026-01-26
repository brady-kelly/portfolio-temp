import { PageHeading } from "@/components/shared/page-heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCog, Cloud, Code, Database, Users } from "lucide-react";
import { ReactNode } from "react";

export type CategoryCardProps = {
    colorClasses: string,
    iconName: string,
    title: string,
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

export function CategoryCard({ colorClasses, iconName, title }: CategoryCardProps) {
    return (
        <Card
            className={`border-2 ${colorClasses}`}
        >
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900">
                    <PageHeading text={title} ico />

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
    )
}