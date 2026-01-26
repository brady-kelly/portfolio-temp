"use client";

import { usePathname } from "next/navigation";
import { DownloadCV } from "./download-cv";
import { PortFolioLink } from "./portfolio-link";
import { HeaderMenu } from "./header-menu";

export function SiteHeader() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <header className="bg-[#0D4F52]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center place-content-between">
                    {!isHomePage &&
                        <PortFolioLink />
                    }
                    {isHomePage &&
                        <div />
                    }
                    <div className="flex flex-row">
                        {!isHomePage &&
                            <HeaderMenu />
                        }
                        <DownloadCV />
                    </div>

                </div>
            </div>
        </header>
    );
}