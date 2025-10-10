'use client';

import Image from "next/image";
import React from "react";
import { Globe, MessageCircle, Instagram, Facebook, Phone, Youtube, Linkedin } from "lucide-react";
import Dock from "@/components/Dock";
import WhatWeDo from "@/components/WhatWeDo";

const mainLinks = [
    { name: "Website", href: "https://www.primezonecomputer.com/", icon: <Globe /> },
    { name: "WhatsApp", href: "https://wa.me/919769730087", icon: <MessageCircle /> },
    { name: "Instagram", href: "https://www.instagram.com/primezone_computer_education/", icon: <Instagram /> },
    { name: "Facebook", href: "https://www.facebook.com/primezonecomputerjogeshwari/", icon: <Facebook /> },
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: <Linkedin /> },
    { name: "YouTube", href: "https://www.youtube.com", icon: <Youtube /> },
    { name: "Call Us", href: "tel:+919769730087", icon: <Phone /> },
];

export default function LinksPage() {
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white flex flex-col items-center justify-start p-4 pt-16">
            <div className="flex flex-col items-center justify-center text-center relative z-10 w-full max-w-md mx-auto">
                <header className="flex flex-col items-center mb-12">
                    <div className="mb-4">
                        <Image
                            src="/images/logo.png"
                            alt="Primezone Logo"
                            width={100}
                            height={100}
                            className="rounded-full shadow-lg border-2 border-white/30"
                            data-ai-hint="company logo"
                        />
                    </div>
                    <h1 className="text-2xl font-bold">@PrimezoneComputer</h1>
                    <p className="text-white/80 mt-1">Your Gateway to Tech Learning</p>
                </header>
                <WhatWeDo />
            </div>

            <footer className="absolute bottom-8 w-full">
                <Dock items={mainLinks} />
            </footer>
        </div>
    );
}
