import type { Position } from "@/lib/json/types"

export type PositionLinkProps = {
    url?: string,
    label?: string,
    company: string,
}

export function PositionLink({ url, label, company }: PositionLinkProps) {
    return (
        <>
            {url ? (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                    {label || company}
                </a>
            ) : (
                <p className="text-lg font-medium text-emerald-600">{company}</p>
            )}
        </>
    )
}