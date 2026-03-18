/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Array indexes. */
/** biome-ignore-all assist/source/organizeImports: TODO: Imports */
//import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";
import { PositionRoles } from "./position-roles";
import { PositionTechs } from "./position-techs";
import { PositionLink } from "./position-link";
import { Position } from "@/lib/types/database/Position";

export type PositionProps = {
    position: Position
}

export function PositionCard({ position }: PositionProps) {
    return (
        <div className="relative flex items-start gap-6">
            <div className="shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center relative z-10">
                <Building className="w-8 h-8 text-white" />
            </div>
            <Card className="flex-1 border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <CardTitle className="text-xl text-slate-900">
                                {position.position}
                            </CardTitle>
                            <PositionLink company={position.company} url={position.websiteUrl} label={position.websiteLabel} />
                        </div>
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
                    <div className="text-slate-700 leading-relaxed text-pretty" dangerouslySetInnerHTML={{ __html: position.description }} />


                    {/* {position.roles.length > 0 && <PositionRoles {...position.roles} />}

                    {position.technologies && <PositionTechs {...position.technologies} />} */}
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
        </div >
    )
}