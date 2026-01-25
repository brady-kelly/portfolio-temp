/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { toKebabCase } from "@/lib/formatting";
import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import { HStack } from "@chakra-ui/react/stack";
import { Link } from "@chakra-ui/react/link";
import { Contact } from "lucide-react";
import { Icon } from "@chakra-ui/react/icon";
type LucideIconName = keyof typeof dynamicIconImports;

export type IconUrlProps = {
    iconName: string,
    url: string,
    text: string,
    textColor: string,
    iconColor?: string,
    iconSize?: string,
}

export function IconUrl({ iconName, url, text, textColor, iconColor, iconSize }: IconUrlProps) {
    return (
        <HStack gap="3">
            <Icon size={(iconSize ?? "sm") as any} color={iconColor ?? textColor} >
                <DynamicIcon name={toKebabCase(iconName) as LucideIconName} />
            </Icon>
            <Link color={textColor} href={url}>{text}</Link>
        </HStack>
    );
}