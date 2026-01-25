"use client";

import { usePathname } from "next/navigation";
import { DownloadCV } from "./download-cv";
import { PortFolioLink } from "./portfolio-link";
import { NavMenu } from "./nav-menu";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";

export function SiteHeader() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <Container maxW="7xl" py="4" px={{ base: 4, sm: 6, lg: 8 }}>
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
        </Container>
    );
}