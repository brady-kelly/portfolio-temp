/** biome-ignore-all assist/source/organizeImports: TODO: Biome */
import { Box, Card, Heading, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import { toKebabCase } from "@/lib/formatting";
type LucideIconName = keyof typeof dynamicIconImports;

export type HomeSectionCardProps = {
    title: string,
    description: string,
    href: string,
    iconName: string,
    color: string,
}

// TODO: Card hover animation like className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 ${section.color}`}

export function HomeSectionCard(section: HomeSectionCardProps) {
    return (
        <Link key={section.href} href={section.href}>
            <Card.Root padding="6">
                <Card.Title>
                    <HStack>
                        <Box>
                            <DynamicIcon name={toKebabCase(section.iconName) as LucideIconName} />
                        </Box>
                        <Heading colorPalette="teal"
                            as="h3"
                            size="md"
                            fontWeight="semibold"
                            mb={2}
                        >
                            {section.title}
                        </Heading>
                    </HStack>
                </Card.Title>
                <Card.Body>
                    <Text textWrap="pretty">
                        {section.description}
                    </Text>
                </Card.Body>
            </Card.Root>
        </Link>
    )
}