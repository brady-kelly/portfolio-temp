/** biome-ignore-all assist/source/organizeImports: TODO: Biome */
import { Box, Card, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { Award, Briefcase, Globe, GraduationCap, User } from "lucide-react";
//import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export type HomeSectionCardProps = {
    title: string,
    description: string,
    href: string,
    iconName: string,
    color: string,
}

function getIcon(iconName: string) {
    const icon = User;
    switch (iconName.toLowerCase()) {
        case "briefcase": return Briefcase;
        case "award": return Award;
        case "graduationcap": return GraduationCap;
        case "globe": return Globe;
        default: return icon;
    }
}
// TODO: Card hover animation like className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 ${section.color}`}

export function HomeSectionCard(section: HomeSectionCardProps) {
    const IconComponent = getIcon(section.iconName);
    return (
        <Link key={section.href} href={section.href}>
            <Card.Root>
                <Card.Body padding="6">
                    <Flex align="flex-start" gap={4}>
                        {/* shrink-0 equivalent */}
                        <Box flexShrink={0}>
                            <Flex
                                w={12}
                                h={12}
                                bg="emerald.600"
                                rounded="lg"
                                align="center"
                                justify="center"
                            >
                                <IconComponent />
                            </Flex>
                        </Box>

                        {/* flex-1 equivalent */}
                        <Box flex={1}>
                            <Heading
                                as="h3"
                                size="md"
                                fontWeight="semibold"
                                color="slate.900"
                                mb={2}
                            >
                                {section.title}
                            </Heading>
                            <Text color="slate.600" textWrap="pretty">
                                {section.description}
                            </Text>
                        </Box>
                    </Flex>
                </Card.Body>
            </Card.Root>
        </Link>
    )
}