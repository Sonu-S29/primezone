
"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const scrollingFeatures = [
    {
        title: "Affiliation & Recognizations",
        image: [
            "/images/certificates/certipoint.png",
            "/images/certificates/nsdc.png",
            "/images/certificates/unnamed.png",
            "https://placehold.co/150x60/png"
        ],
        hint: "organization logos",
        link: "/about"
    },
    {
        title: "Our Diploma and Short-term Courses",
        image: "https://placehold.co/150x60/png",
        hint: "course certificates",
        link: "/courses"
    },
    {
        title: "Why Choose Us?",
        image: "https://placehold.co/150x60/png",
        hint: "students learning",
        link: "/about"
    }
];

export default function AccreditationLogos() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollingFeatures.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <Card className="p-6 md:p-8 glass-effect relative overflow-hidden">
      <div className="absolute top-4 right-6">
        <p className="font-bold text-xs text-muted-foreground">{scrollingFeatures[currentIndex].title}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="hidden md:flex items-center gap-4">
          <p className="font-bold text-lg">BEST COMPUTER CLASSES</p>
          <div className="h-12 w-px bg-border"></div>
        </div>
        <div className="flex-1 h-20 relative pt-4 min-h-[100px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center md:justify-end"
                >
                    <div className="flex flex-1 items-center justify-center md:justify-end">
                       {Array.isArray(scrollingFeatures[currentIndex].image) ? (
                            <div className="flex items-center justify-center gap-4 md:gap-6 flex-nowrap">
                                {(scrollingFeatures[currentIndex].image as string[]).slice(0, 4).map((img, idx) => (
                                    <div key={idx} className="relative h-10 md:h-12 w-24 md:w-32">
                                        <Image
                                            src={img}
                                            alt={`${scrollingFeatures[currentIndex].title} logo ${idx + 1}`}
                                            fill
                                            className="object-contain"
                                            data-ai-hint={scrollingFeatures[currentIndex].hint}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                             <div className="relative h-16 w-40">
                                <Image
                                    src={scrollingFeatures[currentIndex].image as string}
                                    alt={scrollingFeatures[currentIndex].title}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={scrollingFeatures[currentIndex].hint}
                                />
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
        <div className="absolute bottom-4 right-6">
            <Button asChild variant="link" className="p-0 h-auto text-xs">
                <Link href={scrollingFeatures[currentIndex].link}>
                    Read More <ArrowRight className="ml-1 h-3 w-3"/>
                </Link>
            </Button>
        </div>
    </Card>
  );
}
