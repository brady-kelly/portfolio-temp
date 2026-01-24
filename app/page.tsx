/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { cvSections } from "@/data/sections";
import { Hero } from "@/components/home/hero";
import { Center, Container, VStack } from "@chakra-ui/react";
import type { ResumeSection } from "@/lib/resume/root/types";
import { SectionsNav } from "@/components/home/sections-nav";

export default function HomePage() {
  const sections: ResumeSection[] = cvSections;
  return (
    <Container>
      <Center>
        <VStack>
          <Hero />
          <SectionsNav sections={sections} />
        </VStack>
      </Center>
    </Container >
  )
}
