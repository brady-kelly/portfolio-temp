"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function HeaderMenu() {
    return (
        <nav className="flex gap-2">
            <Link href="/cv-info/basics">
                <Button variant="ghost" size="sm">
                    Basic Details
                </Button>
            </Link>
            <Link href="/cv-info/experience">
                <Button variant="ghost" size="sm">
                    Experience
                </Button>
            </Link>
            <Link href="/cv-info/skills">
                <Button variant="ghost" size="sm">
                    Skills
                </Button>
            </Link>
            <Link href="/cv-info/education">
                <Button variant="ghost" size="sm">
                    Education
                </Button>
            </Link>
        </nav>
    )
}