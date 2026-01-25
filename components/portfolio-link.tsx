"use client";

import { Button } from "@chakra-ui/react/button";
import { Link } from "@chakra-ui/react/link";
import { ArrowLeft } from "lucide-react";

export function PortFolioLink() {
    return (
        <Link href="/">
            <Button
                variant="ghost"
                className="text-slate-600 hover:text-slate-900"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
            </Button>
        </Link>
    );
}