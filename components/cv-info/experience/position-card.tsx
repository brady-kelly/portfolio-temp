/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Array indexes. */
//import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Position } from "@/lib/json/types";
import { Calendar } from "lucide-react";
import { PositionRoles } from "./position-roles";
import { PositionTechs } from "./position-techs";

export type PositionProps = {
    position: Position
}

export function PositionCard({ position }: PositionProps) {
    return (
        <Card className="flex-1 border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <CardTitle className="text-xl text-slate-900">
                            {position.position}
                        </CardTitle>
                        <a
                            href={position.website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                            {position.website.label}
                        </a>
                    </div>
                    {/* <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 w-fit"
                    >
                        {job.endDate === "Present" ? "Current" : "Previous"}
                    </Badge> */}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {position.period}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <h4 className="font-medium text-slate-900 mb-2">
                    Description:
                </h4>
                <p className="text-slate-700 leading-relaxed text-pretty">
                    {position.description}
                </p>
                <div>
                    <h4 className="font-medium text-slate-900 mb-2">
                        Duties:
                    </h4>
                    <ul className="space-y-1">
                        {job.tasks.map((duty, index) => (
                            <li
                                key={index}
                                className="text-slate-700 flex items-start gap-2"
                            >
                                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-pretty">{duty}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {position.roles.length > 0 && <PositionRoles {...position.roles} />}

                {position.technologies && <PositionTechs {...position.technologies} />}
                {/* {job.reasonForLeaving && job.endDate !== "Present" && (
                    <div>
                        <h4 className="font-medium text-slate-900 mb-2">
                            Reason for Leaving:
                        </h4>
                        <p className="text-slate-700 text-pretty">
                            {job.reasonForLeaving}
                        </p>
                    </div>
                )} */}
            </CardContent>
        </Card>
    )
}