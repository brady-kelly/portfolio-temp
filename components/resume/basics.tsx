/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { Calendar, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate, getAddressLine, getInitials } from "@/lib/utils";
import type { Profile } from "@/lib/resume/basics/types";
import type { Location } from "@/lib/resume/basics/types";
import { ContactMe } from "../contact/contact-me";
import Image from 'next/image';
import { PageHeading } from "../shared/page-heading";

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <PageHeading text="Basic Details" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <Card className="border-slate-200">
                        <CardContent className="p-6 text-center">
                            {/* Profile Photo Placeholder */}
                            <div className="relative w-32 h-32 mx-auto mb-6 border-2 border-emerald-500/20 shadow-lg">
                                <Image
                                    src="/profile-small.jpg" // Path to your image in the public folder
                                    alt="Profile picture"
                                    fill
                                    className="object-contain"
                                    priority // Ensures fast loading for profile sections
                                />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-2">{props.name}</h2>
                            <p className="text-lg text-emerald-600 font-medium mb-4">{props.label}</p>

                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                                    Full Stack Developer
                                </Badge>
                            </div>

                            <ContactMe />
                        </CardContent>
                    </Card>
                </div>

                {/* Details Cards */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Contact Information */}
                    <Card className="border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-slate-900 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-emerald-600" />
                                Contact Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">{props.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">{props.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">{getAddressLine(props.location)}</span>
                            </div>
                            {/* TODO: Only include website if provided. */}
                            <div className="flex items-center gap-3">
                                <Globe className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700"><a href={props.url}>{props.url}</a></span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Personal Information */}
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

                    {/* Professional Summary */}
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
                    </Card>
                </div>
            </div>
        </div>
    );
}