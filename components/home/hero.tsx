import { Box, Center, Container, Heading, Mark, Stack, Text } from "@chakra-ui/react";
import { ContactMe } from "../contact/contact-me";

export function Hero() {
    return (

        <Box>
            <Center>
                <Stack align={"center"}>
                    <Heading as="h1">
                        Brady Kelly - Senior Software Engineer
                    </Heading>
                    <Stack align={"center"}>
                        <Text>I offer quality software development and related services at reasonable rates.</Text>
                        <Text>I have 25 years experience in the field and deliver quality solutions with personal care and attention.</Text>
                        <Text>I specialize in websites, but also do desktop applications, and I am open to discussing any other requirements.</Text>
                        <Text><Mark>(Please note that this site is still under construction and lacks several features. I will have them added as soon as possible.)</Mark></Text>
                        {/* <ContactMe /> */}
                    </Stack>
                </Stack>
            </Center>
        </Box>

    );
}