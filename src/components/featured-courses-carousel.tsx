
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';

const featuredCourses = [
  {
    title: "Diploma in Computer Application",
    description: "A comprehensive course covering the fundamentals of computer applications, office automation, and basic programming.",
    image: "https://placehold.co/600x400.png",
    hint: "computer code"
  },
  {
    title: "Advanced Tally Prime with GST",
    description: "Master accounting with Tally Prime, from basic principles to advanced GST compliance and financial reporting.",
    image: "https://placehold.co/600x400.png",
    hint: "accounting software"
  },
  {
    title: "Web Development",
    description: "Learn to build modern, responsive websites and web applications using HTML, CSS, JavaScript, and popular frameworks.",
    image: "https://placehold.co/600x400.png",
    hint: "web development"
  },
  {
    title: "Diploma in Graphic Designing",
    description: "Unleash your creativity with graphic design principles and software like Adobe Photoshop, Illustrator, and CorelDRAW.",
    image: "https://placehold.co/600x400.png",
    hint: "graphic design"
  },
  {
    title: "C & C++ Programming",
    description: "Build a strong foundation in programming with two of the most powerful and widely-used languages in the industry.",
    image: "https://placehold.co/600x400.png",
    hint: "c++ code"
  },
  {
    title: "Python for Data Science",
    description: "An introduction to Python programming, focusing on libraries and techniques for data analysis, manipulation, and visualization.",
    image: "https://placehold.co/600x400.png",
    hint: "data science dashboard"
  },
];

export default function FeaturedCoursesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateCarousel = useCallback((newIndex: number) => {
        const normalizedIndex = (newIndex + featuredCourses.length) % featuredCourses.length;
        setCurrentIndex(normalizedIndex);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            updateCarousel(currentIndex + 1);
        }, 5000); // Auto-scroll every 5 seconds

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                updateCarousel(currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                updateCarousel(currentIndex + 1);
            }
        };

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    updateCarousel(currentIndex + 1);
                } else {
                    updateCarousel(currentIndex - 1);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            clearInterval(interval);
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex, updateCarousel]);


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="carousel-container">
                <button 
                    className="nav-arrow left" 
                    onClick={() => updateCarousel(currentIndex - 1)}>
                    aria-label='Previous slide'
                    <ChevronLeft size={24} />
                </button>
                <div className="carousel-track">
                    {featuredCourses.map((course, i) => {
                        const offset = (i - currentIndex + featuredCourses.length) % featuredCourses.length;
                        let cardClass = "hidden";
                        if (offset === 0) cardClass = "center";
                        else if (offset === 1) cardClass = "right-1";
                        else if (offset === 2) cardClass = "right-2";
                        else if (offset === 3) cardClass = "right-3";
                        else if (offset === featuredCourses.length - 1) cardClass = "left-1";
                        else if (offset === featuredCourses.length - 2) cardClass = "left-2";
                        else if (offset === featuredCourses.length - 3) cardClass = "left-3";

                        return (
                            <div key={i} className={cn("course-card", cardClass)} onClick={() => updateCarousel(i)}>
                                <Image 
                                    src={course.image} 
                                    alt={course.title} 
                                    width={400}
                                    height={600}
                                    data-ai-hint={course.hint}
                                />
                                <div className="course-card-content">
                                    <h3 className="course-card-title">{course.title}</h3>
                                    <Button asChild variant="secondary" size="sm">
                                        <Link href="/courses/diploma">Learn More</Link>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button 
                    className="nav-arrow right"
                    onClick={() => updateCarousel(currentIndex + 1)}>
                    aria-label='Next slide'
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="dots mt-10">
                {featuredCourses.map((_, i) => (
                    <div 
                        as='button'
                        key={i}
                        onClick={() => updateCarousel(i)}
                        aria-label={'Go to slide ' + (i + 1)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
