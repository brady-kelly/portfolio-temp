/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { Calendar, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate, formatDateEx, getAddressLine, getInitials } from "@/lib/utils";
import type { Profile } from "@/lib/resume/basics/types";
import type { Location } from "@/lib/resume/basics/types";
import { ContactMe } from "../contact/contact-me";
import { Center, Heading, VStack, Text, HStack, Box, Square } from "@chakra-ui/react";
import { ContactInfo } from "../basics/contact-info";

export type BasicsProps = {
    name: string,
    label: string,
    image?: string,
    email: string,
    phone: string,
    url?: string,
    summary: string,
    location: Location,
    dateOfBirth: string,
    nationality: string,
    workAuth: string,
    profiles: Profile[],
    availability: string,
}

export function Basics(props: BasicsProps) {
    const initials = getInitials(props.name);
    return (
        <VStack align={"center"} justify="start">
            <Heading as="h1" size="4xl" marginY="5" fontWeight="600">
                Basic Details
            </Heading>
            <HStack gap="8" align="start">
                <Box w="64" padding="4" bg="white" borderColor="gray.200" borderWidth="1px" borderRadius="md">
                    <VStack gap="3">
                        <Square width="50px" height="50px" padding="4" rounded="full" bg="teal">
                            <Text fontSize="4xl">{initials}</Text>
                        </Square>
                        <Heading as="h2" size="2xl">{props.name}</Heading>
                        <Text fontSize="lg">{props.label}</Text>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                            Full Stack Developer
                        </Badge>
                        <ContactMe />
                    </VStack>
                </Box>
                <Box padding="4" bg="white" borderColor="gray.200" borderWidth="1px" borderRadius="md">
                    <VStack gap="6" justify="start" rounded="md">
                        <ContactInfo
                            email={props.email}
                            phone={props.phone}
                            location={props.location}
                            url={props.url}
                        />

                        {/* Personal Information
                    <Card className="border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-slate-900 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-emerald-600" />
                                Personal Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Date of Birth</label>
                                    <p className="text-slate-700">{formatDate(props.dateOfBirth, true)}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Nationality</label>
                                    <p className="text-slate-700">{props.nationality}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Work Authorization</label>
                                    <p className="text-slate-700">{props.workAuth}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Availability</label>
                                    <p className="text-slate-700">{props.availability}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>


                    <Card className="border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-slate-900">Professional Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="text-slate-700 leading-relaxed text-pretty space-y-4"
                                dangerouslySetInnerHTML={{
                                    __html: props.summary
                                        .split('\n\n')
                                        .filter(p => p.trim())
                                        .map(p => `<p>${p.trim()}</p>`)
                                        .join('')
                                }}
                            />
                        </CardContent>
                    </Card> */}
                    </VStack>
                </Box>
            </HStack>
        </VStack>
    );
}