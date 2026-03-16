/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Array indexes. */
import { Badge } from "@/components/ui/badge";

export function PositionTechs(techs: string[]) {
    return (
        <div>
            <h4 className="font-medium text-slate-900 mb-2">
                Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
                {techs.map((tech, techIndex) => (
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

    );
}