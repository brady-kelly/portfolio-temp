import { Badge } from "@/components/ui/badge";
import { getSkillLevelColor, getSkillLevelText } from "@/lib/resume/skills/maps";

export type SkillCardProps = {
    name: string,
    level: string,
    years: string,
}

export function SkillCard({ name, level, years }: SkillCardProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <span className="font-medium text-slate-900">
                    {name}
                </span>
                <div className="flex items-center gap-2">
                    <Badge
                        variant="secondary"
                        className={`text-white ${getSkillLevelColor(level)}`}
                    >
                        {getSkillLevelText(level)}
                    </Badge>
                    <span className="text-sm text-slate-500">
                        {years}
                    </span>
                </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                    className={`h-2 rounded-full transition-all duration-500 ${getSkillLevelColor(
                        level
                    )}`}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>

    );
}