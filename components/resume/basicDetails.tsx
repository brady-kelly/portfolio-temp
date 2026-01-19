"use client";

import { Calendar, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDateEx, getAddressLine, getInitials } from "@/lib/utils";
import type { Basics } from "@/lib/resume/basics/types";

export type BasicDetailsProps = {
    basics: Basics;
}

export function BasicDetails({ basics }: BasicDetailsProps) {
    const initials = getInitials(basics.name);
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Basic Details</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                    Personal information and contact details
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <Card className="border-slate-200">
                        <CardContent className="p-6 text-center">
                            {/* Profile Photo Placeholder */}
                            <div className="w-32 h-32 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-4xl font-bold text-white">{initials}</span>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-2">{basics.name}</h2>
                            <p className="text-lg text-emerald-600 font-medium mb-4">{basics.label}</p>

                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                                    Full Stack Developer
                                </Badge>
                            </div>

                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Contact Me</Button>
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
                                <span className="text-slate-700">{basics.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">{basics.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">{getAddressLine(basics.location)}</span>
                            </div>
                            {/* TODO: Only include website if provided. */}
                            <div className="flex items-center gap-3">
                                <Globe className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700"><a href={basics.website}>{basics.website}</a></span>
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
                                    <p className="text-slate-700">{formatDateEx(basics.dateOfBirth, true)}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Nationality</label>
                                    <p className="text-slate-700">{basics.nationality}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Work Authorization</label>
                                    <p className="text-slate-700">{basics.workAuth}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-500">Availability</label>
                                    <p className="text-slate-700">{basics.availability}</p>
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
                                    __html: basics.summary
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