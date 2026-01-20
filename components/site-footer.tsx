"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function SiteFooter() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <footer>
            {!isHomePage &&
                < div className="mt-12 py-8 border-t text-center border-slate-200" >
                    <div className="flex flex-wrap place-content-center gap-3">
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Home
                            </Button>
                        </Link>
                        <Link href="/cv-info/basics">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Basic Details
                            </Button>
                        </Link>
                        <Link href="/cv-info/experience">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Experience
                            </Button>
                        </Link>
                        <Link href="/cv-info/skills">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Professional Skills
                            </Button>
                        </Link>
                        <Link href="/cv-info/education">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Education
                            </Button>
                        </Link>
                        <Link href="/cv-info/certificates">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Certificates
                            </Button>
                        </Link>
                        <Link href="/cv-info/languages-interests">
                            <Button
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                            >
                                Languages & Interests
                            </Button>
                        </Link>
                    </div>
                </div >
            }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 text-white py-12">
                <p className="text-slate-400">© 2026 Professional Portfolio. Built by Brady Kelly with Next.js and Tailwind CSS.</p>
            </div>
        </footer>
    )
}