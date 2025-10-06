
"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, MessageCircle, Instagram, Facebook, Phone, Tv, Brush, BarChart, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import DotGrid from "@/components/dot-grid";

const mainLinks = [
    { name: "Website", href: "https://www.primezonecomputer.com/", icon: <Globe /> },
    { name: "WhatsApp", href: "https://wa.me/919769730087", icon: <MessageCircle /> },
    { name: "Call Us", href: "tel:+919769730087", icon: <Phone /> },
];

const courseLinks = [
    { name: "MS Office", href: "/courses/short-term", icon: <Tv /> },
    { name: "Web Designing", href: "/courses/short-term", icon: <Brush /> },
    { name: "Power BI", href: "/courses/short-term", icon: <BarChart /> },
    { name: "C Programming", href: "/courses/short-term", icon: <Code /> },
];

const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/primezone_computer_education/", icon: <Instagram /> },
    { name: "Facebook", href: "https://www.facebook.com/primezonecomputerjogeshwari/", icon: <Facebook /> },
]

export default function LinksPage() {
    return (
        <div className="relative min-h-screen w-full">
            <DotGrid 
                dotSize={2}
                gap={25}
                baseColor="#003049"
                activeColor="#4095c6"
                className="absolute inset-0 -z-10" 
            />
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center text-primary-foreground relative z-10">
                <div className="w-full max-w-md mx-auto">
                    <header className="flex flex-col items-center mb-8">
                        <div className="mb-4">
                            <Image
                                src="/favicon.ico"
                                alt="Primezone Logo"
                                width={100}
                                height={100}
                                className="rounded-full shadow-lg border-2 border-white/50"
                                data-ai-hint="company logo"
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-white">@PrimezoneComputer</h1>
                        <p className="text-white/80 mt-1">Your Gateway to Tech Learning</p>
                    </header>

                    <main className="space-y-4">
                        {mainLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-full p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-primary font-semibold text-lg"
                            >
                                {link.icon && <div className="absolute left-4">{link.icon}</div>}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </main>

                    <section className="mt-10">
                        <h2 className="text-xl font-bold text-white mb-4">Featured Courses</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {courseLinks.map((course) => (
                                <Link
                                    key={course.name}
                                    href={course.href}
                                    className="group flex flex-col items-center justify-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-primary"
                                >
                                    <div className="text-primary mb-2 group-hover:text-accent transition-colors">
                                        {course.icon}
                                    </div>
                                    <span className="font-semibold text-sm">{course.name}</span>
                                </Link>
                            ))}
                        </div>
                        <Button asChild className="w-full mt-4 bg-white/90 text-primary hover:bg-white">
                            <Link href="/courses">
                                Show All Courses <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </section>

                    <footer className="mt-12">
                        <div className="flex justify-center gap-6">
                            {socialLinks.map((link) => (
                                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                                    {React.cloneElement(link.icon, { size: 28 })}
                                    <span className="sr-only">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
