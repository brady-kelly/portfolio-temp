/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import type { ResumeSection } from "@/lib/resume/root/types";
import { Text } from "@chakra-ui/react/text";
import { HomeSectionCard } from "./sections-nav-card";
import { Box } from "@chakra-ui/react/box";
import { Center } from "@chakra-ui/react/center";
import { HStack, VStack } from "@chakra-ui/react/stack";

export type SectionsNavProps = {
    sections: ResumeSection[],
}

export function SectionsNav(props: SectionsNavProps) {
    return (
        <Box paddingY="8" paddingX="4">
            <Center>
                <VStack>
                    <Text>Explore my professional journey, skills, and achievements through an organized presentation of my career highlights.</Text>
                    <HStack alignItems="start" gap="3">
                        {props.sections.map((section, index) =>
                            <HomeSectionCard key={index} {...section} />
                        )}
                    </HStack>
                </VStack>
            </Center>
        </Box>
    );
}