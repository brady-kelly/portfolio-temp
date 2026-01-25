"use client";

import { whatsapp } from "@/lib/config/contact";
import { Whatsapp } from "./whatsapp";
import { Button } from "@chakra-ui/react/button";

export function ContactMe() {
    const number = whatsapp.number.replace("+", "");
    const msg = whatsapp.message;
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

    return (
        <a href={whatsappUrl}>
            <Button colorPalette="teal" variant="solid">
                <Whatsapp /> Contact Me
            </Button>
        </a>
    );
}