
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from 'next/link';
import { Button } from './ui/button';
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const initialItems = [
    {
        imageUrl: "/images/heroslider/cover.webp",
        hint: "computer course",
        title: "50% Off on all computer Courses",
        description: "Master the fundamentals and become a professional in computer applications and software.",
    },
    {
        imageUrl: "/images/heroslider/dca.webp",
        hint: "computer application course",
        title: "Diploma in Computer Application",
        description: "Master the fundamentals of computer applications and software.",
    },
    {
        imageUrl: "/images/heroslider/dfam.webp",
        hint: "financial management",
        title: "Financial Management",
        description: "Develop key skills in finance and management to excel in the business world.",
    },
    {
        imageUrl: "/images/heroslider/dga.webp",
        hint: "graphic animation",
        title: "Graphic & Animation",
        description: "Unleash your creativity and bring ideas to life with our design and animation courses.",
    },
    {
        imageUrl: "/images/heroslider/ddm.webp",
        hint: "digital marketing",
        title: "Digital Marketing",
        description: "Learn the latest strategies in SEO, social media, and online advertising to grow businesses.",
    },
     {
        imageUrl: "/images/heroslider/dpc.webp",
        hint: "programming course",
        title: "Diploma in Programming",
        description: "Master coding languages and build a solid foundation for a career in software development.",
    },
];


const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isMobile = useIsMobile();

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % initialItems.length);
    }, []);

    const startSlider = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    }, [handleNext]);

    useEffect(() => {
        if (!isMobile) {
            startSlider();
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startSlider, isMobile]);

    if (isMobile) {
        return (
             <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="flex flex-col items-center px-4"
                >
                    <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                        Unlock Your Potential with Primezone
                    </h1>
                    <p className="max-w-xl mx-auto mt-4 text-center text-base text-neutral-400">
                        Access our collection of premium, meticulously crafted courses. Save time and focus on what matters—building standout skills that captivate employers.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button asChild>
                            <Link href="/courses">Explore Courses</Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                            <Link href="/enroll">Enroll Now</Link>
                        </Button>
                    </div>
                </motion.div>
            </LampContainer>
        )
    }

    return (
        <main
            className='hero-slider-main'
            onMouseEnter={() => { if (intervalRef.current) clearInterval(intervalRef.current) }}
            onMouseLeave={startSlider}
        >
            <ul className='hero-slider'>
                {initialItems.map((item, index) => (
                    <li key={item.title + index} className={cn('item', index === currentIndex && 'active')}>
                       <Image 
                            src={item.imageUrl} 
                            alt={item.title} 
                            fill
                            sizes="100vw"
                            quality={80}
                            priority={index <= 1} // Prioritize first two images
                            className="object-cover"
                            data-ai-hint={item.hint}
                        />
                        <div className='content'>
                            <h2 className='title'>{item.title}</h2>
                            <p className='description'>{item.description}</p>
                            <Button asChild>
                               <Link href="/courses">Read More</Link>
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default HeroSlider;
