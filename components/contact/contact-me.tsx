import { whatsapp } from "@/lib/config/contact";
import { Button } from "../ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Whatsapp } from "./whatsapp";

export function ContactMe() {
    const number = whatsapp.number.replace("+", "");
    const msg = whatsapp.message;
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-white hover:bg-slate-100 hover:text-emerald-600 px-8 bg-emerald-600"
                asChild
            >
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Whatsapp className="mr-2 h-4 w-4 fill-current" />
                    <span>Contact Me</span>
                </Link>
            </Button>
        </div>
    );
}