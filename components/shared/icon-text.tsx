/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { toKebabCase } from "@/lib/formatting";
import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import { HStack } from "@chakra-ui/react/stack";
import { Square } from "@chakra-ui/react/square";
import { Text } from "@chakra-ui/react/text";
type LucideIconName = keyof typeof dynamicIconImports;

export type IconTextProps = {
    iconName: string,
    text: string,
}

export function IconText({ iconName, text }: IconTextProps) {
    return (
        <HStack gap="3">
            <Square width="25px" height="25px" bg="teal" flexShrink={0} rounded="md">
                <DynamicIcon color="white" name={toKebabCase(iconName) as LucideIconName} />
            </Square>
            <Text>{text}</Text>
        </HStack>
    );
}