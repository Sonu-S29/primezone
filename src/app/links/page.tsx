"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, MessageCircle, Instagram, Facebook, Phone, Tv, Brush, BarChart, Code } from "lucide-react";

const mainLinks = [
    { name: "Website", href: "https://www.primezonecomputer.com/", icon: <Globe /> },
    { name: "WhatsApp", href: "https://wa.me/919769730087", icon: <MessageCircle /> },
    { name: "Instagram", href: "https://www.instagram.com/primezone_computer_education/", icon: <Instagram /> },
    { name: "Facebook", href: "https://www.facebook.com/primezonecomputerjogeshwari/", icon: <Facebook /> },
    { name: "Call Us", href: "tel:+919769730087", icon: <Phone /> },
];

const courseLinks = [
    { name: "MS Office", href: "/courses/short-term", icon: <Tv /> },
    { name: "Web Designing", href: "/courses/short-term", icon: <Brush /> },
    { name: "Power BI", href: "/courses/short-term", icon: <BarChart /> },
    { name: "C Programming", href: "/courses/short-term", icon: <Code /> },
];

export default function LinksPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <div className="w-full max-w-md mx-auto">
                <header className="flex flex-col items-center mb-6">
                    <div className="mb-4">
                        <Image
                            src="/images/logo.png"
                            alt="Primezone Logo"
                            width={100}
                            height={100}
                            className="rounded-full shadow-lg"
                            data-ai-hint="company logo"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Prime Zone Computer</h1>
                    <p className="text-muted-foreground mt-1">Your Gateway to Tech Learning</p>
                </header>

                <main className="space-y-4">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center w-full p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <div className="mr-4 text-primary group-hover:text-accent transition-colors">
                                {link.icon}
                            </div>
                            <span className="flex-grow text-lg font-semibold text-foreground text-left">{link.name}</span>
                        </Link>
                    ))}
                </main>

                <section className="mt-10">
                    <h2 className="text-xl font-bold text-primary mb-4">Featured Courses</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {courseLinks.map((course) => (
                             <Link
                                key={course.name}
                                href={course.href}
                                className="group flex flex-col items-center justify-center p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-primary mb-2 group-hover:text-accent transition-colors">
                                    {course.icon}
                                </div>
                                <span className="font-semibold text-sm text-foreground">{course.name}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
