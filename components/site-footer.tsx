"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Box, Container, Flex, HStack, VStack, Text } from "@chakra-ui/react";
import { PortFolioLink } from "./portfolio-link";
import { NavMenu } from "./nav-menu";
import { DownloadCV } from "./download-cv";

export function SiteFooter() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <Container maxW="7xl" py="4" px={{ base: 4, sm: 6, lg: 8 }}>
            <VStack>
                <Flex align="center" justify="space-between">
                    {!isHomePage ? (
                        <PortFolioLink />
                    ) : (
                        <Flex /> /* Keeps the layout balanced if using space-between */
                    )}
                    <HStack gap="4">
                        {!isHomePage && <NavMenu />}
                        <DownloadCV />
                    </HStack>
                </Flex>
                <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 text-white py-12">
                    <Text bg="slate">© 2026 Professional Portfolio. Built by Brady Kelly with Next.js and Tailwind CSS.</Text>
                </Box>
            </VStack>
        </Container>
    )
}