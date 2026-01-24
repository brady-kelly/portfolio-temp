/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
import type { ResumeSection } from "@/lib/resume/root/types";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { HomeSectionCard } from "./sections-nav-card";

export type SectionsNavProps = {
    sections: ResumeSection[],
}

export function SectionsNav(props: SectionsNavProps) {
    return (
        <Box paddingY="8" paddingX="4">
            <Text>Explore my professional journey, skills, and achievements through an organized presentation of my career highlights.</Text>
            <Center>
                <HStack alignItems="start" gap="3">
                    {props.sections.map((section, index) =>
                        <HomeSectionCard key={index} {...section} />
                    )}
                </HStack>
            </Center>
        </Box>
    );
}