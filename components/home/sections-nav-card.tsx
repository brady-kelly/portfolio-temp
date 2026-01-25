/** biome-ignore-all assist/source/organizeImports: TODO: Biome */
"use client";

import { Text } from "@chakra-ui/react/text";
import { DynamicIcon } from "lucide-react/dynamic";
import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import { toKebabCase } from "@/lib/formatting";
import { Link } from "@chakra-ui/react/link";
import { Box } from "@chakra-ui/react/box";
import { HStack, VStack } from "@chakra-ui/react/stack";
import { Square } from "@chakra-ui/react/square";
import { Heading } from "@chakra-ui/react/heading";
type LucideIconName = keyof typeof dynamicIconImports;

export type HomeSectionCardProps = {
    title: string,
    description: string,
    href: string,
    iconName: string,
    color: string,
}

// TODO: Card hover animation like className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 ${section.color}`}
// TODO: height 260px
export function HomeSectionCard(section: HomeSectionCardProps) {
    return (
        <Link key={section.href} href={section.href}>
            <Box padding="6" transitionProperty="all" transitionDuration="300ms" _hover={{
                shadow: "lg",
                transform: "translateY(-4px)", // Equivalent to -translate-y-1 (0.25rem)
            }}>
                <VStack>
                    <HStack alignItems="start">
                        <Square width="50px" height="50px" bg="teal" flexShrink={0} rounded="md">
                            <DynamicIcon color="white" name={toKebabCase(section.iconName) as LucideIconName} />
                        </Square>
                        <Heading colorPalette="teal"
                            as="h3"
                            size="md"
                            fontWeight="semibold"
                            mb={2}
                        >
                            {section.title}
                        </Heading>
                    </HStack>
                    <Text textWrap="pretty">
                        {section.description}
                    </Text>
                </VStack>
            </Box>
        </Link>
    )
}