"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { NavMenu } from "./nav-menu";
import { PortFolioLink } from "./portfolio-link";
import { DownloadCV } from "./download-cv";

export function SiteFooter() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <footer>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center place-content-between">
                    {!isHomePage &&
                        <PortFolioLink />
                    }
                    {isHomePage &&
                        <div />
                    }
                    {!isHomePage && (
                        <div className="flex flex-row">
                            <NavMenu />
                            <DownloadCV />
                        </div>
                    )}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 text-white py-12">
                <p className="text-slate-400">© 2026 Professional Portfolio. Built by Brady Kelly with Next.js and Tailwind CSS.</p>
            </div>
        </footer>
    )
}