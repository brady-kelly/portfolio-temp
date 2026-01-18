"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function HeaderMenu() {
    return (
        <nav className="flex gap-2">
            <Link href="/basic-details">
                <Button variant="ghost" size="sm">
                    Basic Details
                </Button>
            </Link>
            <Link href="/work-experience">
                <Button variant="ghost" size="sm">
                    Experience
                </Button>
            </Link>
            <Link href="/skills">
                <Button variant="ghost" size="sm">
                    Skills
                </Button>
            </Link>
            <Link href="/education">
                <Button variant="ghost" size="sm">
                    Education
                </Button>
            </Link>
        </nav>
    )
}