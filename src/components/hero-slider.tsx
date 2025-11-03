
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from 'next/link';
import { Button } from './ui/button';
import Image from "next/image";

const initialItems = [
    {
        imageUrl: "/images/dpc.jpeg",
        hint: "programming course",
        title: "Diploma in Programming",
        description: "Master coding languages and build a solid foundation for a career in software development.",
    },
    {
        imageUrl: "/images/ddm.jpeg",
        hint: "financial management",
        title: "Financial Management",
        description: "Develop key skills in finance and management to excel in the business world.",
    },
    {
        imageUrl: "/images/dga.jpg",
        hint: "graphic animation",
        title: "Graphic & Animation",
        description: "Unleash your creativity and bring ideas to life with our design and animation courses.",
    },
    {
        imageUrl: "/images/dm.jpg",
        hint: "digital marketing",
        title: "Digital Marketing",
        description: "Learn the latest strategies in SEO, social media, and online advertising to grow businesses.",
    },
    {
        imageUrl: "/images/gallery/data.webp",
        hint: "data analytics",
        title: "Data-Driven Decisions",
        description: "Unlock insights and drive business growth with data.",
    },
   
];


const HeroSlider = () => {
    const [items, setItems] = useState(initialItems);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = useCallback(() => {
        setItems((prevItems) => {
            const [first, ...rest] = prevItems;
            return [...rest, first];
        });
    }, []);

    const startSlider = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    }, [handleNext]);

    const stopSlider = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startSlider();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startSlider]);


    return (
        <main
            className='hero-slider-main'
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
        >
            <ul className='hero-slider'>
                {items.map((item, index) => (
                    <li key={item.title + index} className='item'>
                       <Image 
                            src={item.imageUrl} 
                            alt={item.title} 
                            fill
                            sizes="100vw"
                            quality={80}
                            priority={index === 0}
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

    
