/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { Contact, Globe } from "lucide-react";
import type { Location } from "@/lib/resume/basics/types";
import { getAddressLine } from "@/lib/utils";
import { IconText } from "../shared/icon-text";
import { HStack, VStack } from "@chakra-ui/react/stack";
import { Heading } from "@chakra-ui/react/heading";
import { Square } from "@chakra-ui/react/square";
import { Link } from "@chakra-ui/react/link";

export type ContactInfoProps = {
    email: string,
    phone: string,
    location: Location,
    url?: string;
}

export function ContactInfo(props: ContactInfoProps) {
    return (
        <VStack>
            <HStack gap="4">
                <Contact />
                <Heading as="h1">Contact Information</Heading>
            </HStack>
            <VStack gap="4">
                <IconText iconName="mail" text={props.email} />
                <IconText iconName="phone" text={props.phone} />
                <IconText iconName="map-pin" text={getAddressLine(props.location)} />
                {props.url && (
                    <HStack gap="3">
                        <Square width="25px" height="25px" bg="teal" flexShrink={0} rounded="md">
                            <Globe />
                        </Square>
                        <Link href={props.url}>{props.url}</Link>
                    </HStack>
                )}
            </VStack>
        </VStack >
    );
}