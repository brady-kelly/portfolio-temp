"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export function DownloadCV() {
    return (
        <Link href="/brady-kelly-senior-software-engineer.pdf" download="brady-kelly-senior-software-engineer.pdf">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download CV
            </Button>
        </Link>
    );
}