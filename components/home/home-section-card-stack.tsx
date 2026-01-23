/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import type { ResumeSection } from "@/lib/resume/root/types";
import { Box, Center, Text } from "@chakra-ui/react";
import { HomeSectionCard } from "./home-section-card";

export type HomeSectionCardStackProps = {
    sections: ResumeSection[],
}

export function HomeSectionCardStack(props: HomeSectionCardStackProps) {
    return (
        <Box>
            <Text>Explore my professional journey, skills, and achievements through an organized presentation of my career highlights.</Text>
            <Center>
                {props.sections.map((section, index) =>
                    <HomeSectionCard key={index} {...section} />
                )}
            </Center>
        </Box>
    );
}