"use client";

import { Center, Heading, List, Mark, Text, VStack } from "@chakra-ui/react";
import { ContactMe } from "../contact/contact-me";

export function Hero() {
    return (
        <Center>
            <VStack align={"center"}>
                <Heading as="h1" size="4xl" marginY="5" fontWeight="600">
                    Brady Kelly - Senior Software Engineer
                </Heading>
                <List.Root marginBottom="5">
                    <List.Item>I offer software development and related services at reasonable rates.</List.Item>
                    <List.Item>I have 25 years experience in the field and deliver quality solutions with personal care and attention.</List.Item>
                    <List.Item>I specialize in websites, but also do desktop applications, and I am open to discussing any other requirements.</List.Item>
                </List.Root>
                <ContactMe />
                <Text><Mark>(Please note that this site is still under construction and lacks several features. I will have them added as soon as possible.)</Mark></Text>
            </VStack>
        </Center>
    );
}