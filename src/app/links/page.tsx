'use client';

import Image from "next/image";
import React, { useState } from "react";
import { Globe, MessageCircle, Instagram, Facebook, Phone, Youtube, Linkedin, MapPin } from "lucide-react";
import Dock from "@/components/Dock";
import WhatWeDo from "@/components/WhatWeDo";

const mainLinks = [
    { name: "Website", href: "https://www.primezonecomputer.com/", icon: <Globe /> },
    { name: "WhatsApp", href: "https://wa.me/919769730087", icon: <MessageCircle /> },
    { name: "Instagram", href: "https://www.instagram.com/primezone_computer_education/", icon: <Instagram /> },
    { name: "Facebook", href: "https://www.facebook.com/primezonecomputerjogeshwari/", icon: <Facebook /> },
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: <Linkedin /> },
    { name: "YouTube", href: "https://www.youtube.com", icon: <Youtube /> },
];

const locations = [
    { name: "Jogeshwari", url: "https://g.co/kgs/e12TVNF" },
    { name: "Vile Parle", url: "https://g.co/kgs/rvyVD8w" }
]

const contacts = [
    { name: "Jogeshwari", tel: "+919769730087" },
    { name: "Vile Parle", tel: "+919321773941" }
]

export default function LinksPage() {
    const [showLocations, setShowLocations] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-100 to-white text-slate-800 flex flex-col p-4">
            <div className="absolute top-4 right-4 z-20">
                <button 
                    onClick={() => {
                        setShowLocations(!showLocations);
                        setShowContacts(false);
                    }}
                    className="p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:bg-white/50 transition-colors"
                    aria-label="Toggle locations"
                >
                    <MapPin className="h-6 w-6 text-slate-700" />
                </button>

                    {showLocations && (
                        <div
                            
                            className="absolute top-14 right-0 w-64 bg-white/50 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-4"
                        >
                            <h3 className="font-bold text-center mb-3">Our Branches</h3>
                            <div className="space-y-3">
                                {locations.map(loc => (
                                    <div key={loc.name} className="flex items-center justify-between p-2 bg-white/40 rounded-lg">
                                        <span className="font-semibold">{loc.name}</span>
                                        <a href={loc.url} target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                                            Show
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

            </div>
            
            <div className="absolute top-4 left-4 z-20">
                <button 
                    onClick={() => {
                        setShowContacts(!showContacts);
                        setShowLocations(false);
                    }}
                    className="p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:bg-white/50 transition-colors"
                    aria-label="Toggle contacts"
                >
                    <Phone className="h-6 w-6 text-slate-700" />
                </button>

                    {showContacts && (
                        <div
                            className="absolute top-14 left-0 w-64 bg-white/50 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-4"
                        >
                            <h3 className="font-bold text-center mb-3">Contact Us</h3>
                            <div className="space-y-3">
                                {contacts.map(contact => (
                                    <div key={contact.name} className="flex items-center justify-between p-2 bg-white/40 rounded-lg">
                                        <span className="font-semibold">{contact.name}</span>
                                        <a href={`tel:${contact.tel}`} className="px-4 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                                            Call
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
            </div>

            <header className="flex flex-col items-center text-center pt-16">
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
                <p className="text-slate-600 mt-1">Your Gateway to Tech Learning</p>
            </header>

            <div className="flex-grow flex items-center justify-center">
                <WhatWeDo />
            </div>
            
            <footer className="w-full pb-8">
                <Dock items={mainLinks} />
            </footer>
        </div>
    );
}
