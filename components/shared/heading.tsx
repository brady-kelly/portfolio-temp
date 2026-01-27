/** biome-ignore-all assist/source/organizeImports: <explanation> */
import kebabCase from "kebab-case";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { DynamicIcon } from "lucide-react/dynamic";
import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import type React from "react";
type LucideIconName = keyof typeof dynamicIconImports;

const headingVariants = cva(
    "inline-flex items-center gap-3 font-bold tracking-tight text-slate-900 dark:text-slate-100",
    {
        variants: {
            size: {
                h1: "text-4xl lg:text-5xl",
                h2: "text-3xl lg:text-4xl",
                h3: "text-2xl lg:text-3xl",
                h4: "text-xl lg:text-2xl",
            },
        },
        defaultVariants: { size: "h1" },
    }
)

const iconVariants = cva("shrink-0", {
    variants: {
        iconSize: {
            sm: "size-4",
            md: "size-6",
            lg: "size-8",
            xl: "size-10",
        },
    },
    defaultVariants: { iconSize: "md" },
})

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof headingVariants> & {
        asChild?: boolean
        iconName?: string,
        iconSize?: VariantProps<typeof iconVariants>["iconSize"],
        className?: string
    }

export function Heading({
    className,
    size,
    title,
    asChild = false,
    iconName,
    iconSize = "sm",
    ...props
}: HeadingProps) {
    const Comp = asChild ? Slot : (size || "h1")

    return (
        <Comp className={cn(headingVariants({ size, className }))} {...props}>
            {iconName && (
                <DynamicIcon
                    name={kebabCase(iconName) as LucideIconName}
                    className={iconVariants({ iconSize })}
                    aria-hidden="true"
                />
            )}
            <span>{title}</span>
        </Comp>
    )
}