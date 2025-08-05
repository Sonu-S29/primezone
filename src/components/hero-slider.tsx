"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const initialItems = [
    {
        imageUrl: "https://placehold.co/1920x1080.png",
        hint: "modern classroom students",
        title: "Unlock Your Potential",
        description: "World-class training to shape your future in technology.",
    },
    {
        imageUrl: "https://placehold.co/1920x1080.png",
        hint: "student coding",
        title: "Learn from the Best",
        description: "Industry experts guiding you every step of the way.",
    },
    {
        imageUrl: "https://placehold.co/1920x1080.png",
        hint: "students collaborating",
        title: "Your Future Starts Here",
        description: "Join a community of learners and innovators.",
    },
    {
        imageUrl: "https://placehold.co/1920x1080.png",
        hint: "graphic design",
        title: "Creative Careers",
        description: "Master the art of visual communication and design.",
    },
    {
        imageUrl: "https://placehold.co/1920x1080.png",
        hint: "data analytics",
        title: "Data-Driven Decisions",
        description: "Unlock insights and drive business growth with data.",
    },
    {
        imageUrl: "https://placehold.co/1920x1080.png",
        hint: "cyber security",
        title: "Secure the Future",
        description: "Become an expert in protecting digital assets.",
    },
];


const HeroSlider = () => {
    const [items, setItems] = useState(initialItems);

    const handleNext = () => {
        setItems(prevItems => {
            const [first, ...rest] = prevItems;
            return [...rest, first];
        });
    };

    const handlePrev = () => {
        setItems(prevItems => {
            const last = prevItems[prevItems.length - 1];
            const rest = prevItems.slice(0, prevItems.length - 1);
            return [last, ...rest];
        });
    };

    return (
        <main className='hero-slider-main'>
            <ul className='hero-slider'>
                {items.map((item, index) => (
                    <li key={index} className='item' style={{ backgroundImage: `url(${item.imageUrl})` }}>
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
            <nav className='hero-slider-nav'>
                <button className='btn prev' onClick={handlePrev} aria-label="Previous Slide">
                    <ArrowLeft size={24}/>
                </button>
                <button className='btn next' onClick={handleNext} aria-label="Next Slide">
                    <ArrowRight size={24}/>
                </button>
            </nav>
        </main>
    );
};

export default HeroSlider;
