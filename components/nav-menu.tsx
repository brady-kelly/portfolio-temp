"use client";

import { Box } from "@chakra-ui/react/box";
import { Button } from "@chakra-ui/react/button";
import { Flex } from "@chakra-ui/react/flex";
import { Link } from "@chakra-ui/react/link";

// TODO: Test header menu.
export function NavMenu() {
    return (
        <Box as="nav">
            <Flex direction="row" gap="2">
                <Link variant="plain" href="/cv-info/basics">
                    <Button variant="ghost" size="sm">
                        Basic Details
                    </Button>
                </Link>
                <Link variant="plain" href="/cv-info/experience">
                    <Button variant="ghost" size="sm">
                        Experience
                    </Button>
                </Link>
                <Link variant="plain" href="/cv-info/skills">
                    <Button variant="ghost" size="sm">
                        Skills
                    </Button>
                </Link>
                <Link variant="plain" href="/cv-info/education">
                    <Button variant="ghost" size="sm">
                        Education
                    </Button>
                </Link>
                <Link variant="plain" href="/cv-info/certificates">
                    <Button variant="ghost" size="sm">
                        Certificates
                    </Button>
                </Link>
                <Link variant="plain" href="/cv-info/languages-interests">
                    <Button variant="ghost" size="sm">
                        Languages & Interests
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}