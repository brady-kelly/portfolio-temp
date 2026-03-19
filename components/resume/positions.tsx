/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Indexes */
import type { Position } from "@/lib/types/database/position";
import { PositionCard } from "../cv-info/experience/position-card";

export type PositionsProps = {
    positions: Position[];
}

export function Positions({ positions }: PositionsProps) {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Work Experience
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                    Professional career history and key achievements across various
                    roles and companies
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                <div className="space-y-8">
                    {positions.map((job: Position, index: number) => (
                        <PositionCard key={index} position={job} />
                    ))}
                </div>
            </div>
        </div>
    );
}