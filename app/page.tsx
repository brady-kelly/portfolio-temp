/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { cvSections } from "@/data/sections";
import { Hero } from "@/components/home/hero";
import { Award, Briefcase, Globe, GraduationCap, User } from "lucide-react";
import { HomeSectionCard } from "@/components/home/home-section-card";
import { Center, Container, Text, VStack } from "@chakra-ui/react";
import { ResumeSchema } from "@/lib/types/original/raw";
import { ResumeSection } from "@/lib/resume/root/types";

export default function HomePage() {
  const sections: ResumeSection[] = cvSections;
  return (
    <Container>
      <Center>
        <VStack>
          <Hero />
          <Text>Explore my professional journey, skills, and achievements through an organized presentation of my career highlights.</Text>
          <Center>
            {sections.map((section, index) =>
              <HomeSectionCard key={index} {...section} />
            )}
          </Center>
        </VStack>
      </Center>
    </Container >
  )
}
