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
import { IconUrl } from "../shared/icon-url";

export type ContactInfoProps = {
    email: string,
    phone: string,
    location: Location,
    url?: string;
}

export function ContactInfo(props: ContactInfoProps) {
    return (
        <VStack align="left">
            <HStack gap="4" marginBottom="4">
                <Contact color="teal" />
                <Heading as="h1">Contact Information</Heading>
            </HStack>
            <VStack align="left" gap="3">
                <IconText iconName="mail" text={props.email} textColor={"slate"} />
                <IconText iconName="phone" text={props.phone} textColor={"slate"} />
                <IconText iconName="map-pin" text={getAddressLine(props.location)} textColor={"slate"} />
                {props.url && (
                    <IconText iconName="globe" text={props.url} url={props.url} textColor={"slate"} />
                )}
            </VStack>
        </VStack >
    );
}