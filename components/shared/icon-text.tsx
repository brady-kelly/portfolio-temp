/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { toKebabCase } from "@/lib/formatting";
import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import { HStack } from "@chakra-ui/react/stack";
import { Text } from "@chakra-ui/react/text";
import { Icon } from "@chakra-ui/react/icon";
import { Link } from "@chakra-ui/react/link";
type LucideIconName = keyof typeof dynamicIconImports;

export type IconTextProps = {
    iconName: string,
    text: string,
    textColor: string,
    url?: string,
    iconColor?: string,
    iconSize?: string,
}

export function IconText({ iconName, text, textColor, url, iconColor, iconSize }: IconTextProps) {
    return (
        <HStack gap="1">
            <Icon size={(iconSize ?? "sm") as any} color={iconColor ?? textColor} >
                <DynamicIcon name={toKebabCase(iconName) as LucideIconName} />
            </Icon>
            {!url && (
                <Text color={textColor}>{text}</Text>
            )}
            {url && (
                <Link color={textColor} href={url}>{text}</Link>
            )}
        </HStack>
    );
}