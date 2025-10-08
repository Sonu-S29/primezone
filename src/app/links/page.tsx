'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Globe, MessageCircle, Instagram, Facebook, Phone, Youtube, Linkedin } from "lucide-react";
import Dock from "@/components/Dock";
import RotatingText from "@/components/RotatingText";

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
    const [isMobile, setIsMobile] = useState(false);
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentLinkIndex(prevIndex => (prevIndex + 1) % mainLinks.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);


    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white flex flex-col items-center justify-center p-4">
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

                {isMobile && (
                    <div className="flex items-center justify-center text-lg font-medium mb-12 h-10">
                       <span className="mr-2">Connect with us on:</span>
                       <div className="flex items-center gap-2">
                           <div className="relative w-28 h-8">
                                <RotatingText
                                    texts={mainLinks.map(link => link.name)}
                                    mainClassName="px-2 bg-cyan-300 text-black overflow-hidden py-0.5 justify-center rounded-lg"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                           </div>
                           <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md">
                             {mainLinks[currentLinkIndex].icon}
                           </div>
                       </div>
                    </div>
                )}
            </div>

            <footer className="absolute bottom-8 w-full">
                <Dock items={mainLinks} />
            </footer>
        </div>
    );
}
