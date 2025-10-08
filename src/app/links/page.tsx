"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, MessageCircle, Instagram, Facebook, Phone, Youtube, Linkedin } from "lucide-react";
import React from "react";

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
        <div className="relative min-h-screen w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white flex items-center justify-center">
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10 w-full">
                <div className="w-full max-w-md mx-auto">
                    <header className="flex flex-col items-center mb-8">
                        <div className="mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="Primezone Logo"
                                width={100}
                                height={100}
                                className="rounded-full shadow-lg border-2 border-white/50"
                                data-ai-hint="company logo"
                            />
                        </div>
                        <h1 className="text-2xl font-bold">@PrimezoneComputer</h1>
                        <p className="text-white/80 mt-1">Your Gateway to Tech Learning</p>
                    </header>

                    <main className="flex justify-center gap-4">
                        {mainLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-md hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                title={link.name}
                            >
                                {link.icon && React.cloneElement(link.icon, { size: 24 })}
                            </Link>
                        ))}
                    </main>

                    <footer className="mt-12">
                       
                    </footer>
                </div>
            </div>
        </div>
    );
}
