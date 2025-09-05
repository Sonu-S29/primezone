
"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Book, Clock, Star, Users, Award, Briefcase, Cpu, GraduationCap, ChevronsRight } from "lucide-react";

const scrollingFeatures = [
    {
        title: "Affiliation & Recognizations",
        content: (
             <div className="flex items-center justify-center md:justify-end gap-2 md:gap-2 flex-nowrap">
                <div className="relative h-10 md:h-12 w-24 md:w-32">
                    <Image
                        src="/images/certificates/certipoint.png"
                        alt="Certipoint logo"
                        fill
                        className="object-contain"
                        data-ai-hint="organization logo"
                    />
                </div>
                <div className="relative h-10 md:h-12 w-24 md:w-32">
                    <Image
                        src="/images/certificates/nsdc.png"
                        alt="NSDC logo"
                        fill
                        className="object-contain"
                        data-ai-hint="organization logo"
                    />
                </div>
                 <div className="relative h-10 md:h-12 w-24 md:w-32">
                    <Image
                        src="/images/certificates/unnamed.png"
                        alt="Unnamed logo"
                        fill
                        className="object-contain"
                        data-ai-hint="organization logo"
                    />
                </div>
            </div>
        ),
        link: "/about"
    },
    {
        title: "Our Diploma and Short-term Courses",
        content: (
             <div className="flex flex-col md:flex-row gap-4 items-start justify-center text-sm">
                <div className="flex flex-col items-start p-2 rounded-lg">
                    <div className="flex items-center font-bold">
                        <Book className="mr-2 h-4 w-4 text-accent" />
                        <span>10+ Diploma Courses</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                         <span>6 Months to 1 Year</span>
                    </div>
                </div>
                 <div className="hidden md:block h-10 w-px bg-border"></div>
                 <div className="flex flex-col items-start p-2 rounded-lg">
                    <div className="flex items-center font-bold">
                        <Book className="mr-2 h-4 w-4 text-accent" />
                        <span>35+ Short-Term Courses</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                         <span>2 to 6 Months</span>
                    </div>
                </div>
            </div>
        ),
        link: "/courses"
    },
    {
        title: "Why Choose Us?",
        content: (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div className="flex items-center gap-2"><Briefcase className="h-3 w-3 text-accent"/><span>Best in Industry</span></div>
                <div className="flex items-center gap-2"><Award className="h-3 w-3 text-accent"/><span>Award-Winning</span></div>
                <div className="flex items-center gap-2"><Cpu className="h-3 w-3 text-accent"/><span>State-of-the-Art Labs</span></div>
                <div className="flex items-center gap-2"><Users className="h-3 w-3 text-accent"/><span>Expert Faculty</span></div>
                <div className="flex items-center gap-2"><GraduationCap className="h-3 w-3 text-accent"/><span>Free Career Counseling</span></div>
                <div className="flex items-center gap-2"><Star className="h-3 w-3 text-accent"/><span>Job-Oriented Training</span></div>
            </div>
        ),
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
    <Card className="p-8 md:p-10 glass-effect relative overflow-hidden min-h-[160px] md:min-h-[120px]">
      <div className="absolute top-4 right-6 w-full pr-12 text-right">
        <p className="font-bold text-xs text-muted-foreground">{scrollingFeatures[currentIndex].title}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="hidden md:flex flex-col items-start gap-1">
            <p className="font-semibold text-2xl text-muted-foreground">Primezone Computer Education</p>
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">BEST COMPUTER CLASSES</p>
              <div className="h-8 w-px bg-border"></div>
            </div>
        </div>
        <div className="flex-1 h-20 relative pt-8 min-h-[100px]">
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
                       {scrollingFeatures[currentIndex].content}
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
