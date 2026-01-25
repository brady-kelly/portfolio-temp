import { resumePath } from "@/lib/config/json";
import { getBasics } from "@/lib/resume/basics/actions";
import { notFound } from "next/navigation";
import { Basics } from "@/components/resume/basics";
import { Container } from "@chakra-ui/react/container";
import { Center } from "@chakra-ui/react/center";

export default async function BasicDetailsPage() {
    const result = await getBasics(resumePath);

    if (!result.success)
        notFound();

    const basics = result.data;

    return (
        <Container>
            <Center>
                <Basics {...basics} />
            </Center>
        </Container>
    );
}