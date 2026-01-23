import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cvSections } from "@/data/sections";
import { ContactMe } from "@/components/contact/contact-me";
import { Hero } from "@/components/home/hero";
import { Award, Briefcase, Globe, GraduationCap, User } from "lucide-react";
import { HomeSectionCard } from "@/components/home/home-section-card";
import { Center, Container, Text, VStack } from "@chakra-ui/react";

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

export default function HomePage() {
  const sections = cvSections;
  return (
    <Container>
      <Center>
        <VStack>
          <Hero />
          <Text>Explore my professional journey, skills, and achievements through an organized presentation of my career highlights.</Text>
          {/* <Center>
          {sections.map((section, index) =>
            <HomeSectionCard key={index} {...section} />
          )}
        </Center> */}
        </VStack>
      </Center>
    </Container >
  )
}
