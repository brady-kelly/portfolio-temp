/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { cvSections } from "@/data/sections";
import { Hero } from "@/components/home/hero";
import type { ResumeSection } from "@/lib/resume/root/types";
import { SectionsNav } from "@/components/home/sections-nav";
import { Container } from "@chakra-ui/react/container";
import { Center } from "@chakra-ui/react/center";
import { VStack } from "@chakra-ui/react/stack";

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
