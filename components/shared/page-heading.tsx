"use client";

export type PageHeadingProps = {
    text: string,
}

export function PageHeading({ text }: PageHeadingProps) {
    return (
        <h1 className="text-3xl md:text-4xl font-bold text-[#27E4BE] mb-6 text-balance">
            {text}
        </h1>
    )
}