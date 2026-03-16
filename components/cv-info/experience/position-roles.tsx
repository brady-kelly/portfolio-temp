/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Indexes */
export function PositionRoles(roles: string[]) {
    return (
        <div>
            <h4 className="font-medium text-slate-900 mb-2">
                Roles:
            </h4>
            <ul className="space-y-1">
                {roles.map((role, roleIndex) => (
                    <li
                        key={roleIndex}
                        className="text-slate-700 flex items-start gap-2"
                    >
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 shrink-0"></span>
                        <span className="text-pretty">{role}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}