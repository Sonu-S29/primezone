
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from 'next/link';
import { Button } from './ui/button';
import Image from "next/image";

const initialItems = [
    {
        imageUrl: "/images/gallery/DPC-Course-Website-Slider-1920x600-theme.jpg",
        hint: "modern classroom students",
        title: "Unlock Your Potential",
        description: "World-class training to shape your future in technology.",
        width: 600,
        height: 400
    },
    {
        imageUrl: "/images/gallery/26.jpg",
        hint: "student coding",
        title: "Learn from the Best",
        description: "Industry experts guiding you every step of the way.",
        width: 400,
        height: 600
    },
    {
        imageUrl: "/images/gallery/50.jpg",
        hint: "students collaborating",
        title: "Your Future Starts Here",
        description: "Join a community of learners and innovators.",
        width: 400,
        height: 600
    },
    {
        imageUrl: "/images/gallery/37.jpg",
        hint: "graphic design",
        title: "Creative Careers",
        description: "Master the art of visual communication and design.",
        width: 400,
        height: 600
    },
    {
        imageUrl: "/images/gallery/data.webp",
        hint: "data analytics",
        title: "Data-Driven Decisions",
        description: "Unlock insights and drive business growth with data.",
        width: 400,
        height: 600
    },
    {
        imageUrl: "/images/gallery/fullstack.png",
        hint: "cyber security",
        title: "Secure the Future",
        description: "Become an expert in protecting digital assets.",
        width: 400,
        height: 600
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
                            fill={index === 0}
                            width={index !== 0 ? item.width : undefined}
                            height={index !== 0 ? item.height : undefined}
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

    
