
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
	{ 
        name: "Vedika Karan Singh",
        role: "Managing Director", 
        image: "https://placehold.co/400x600.png",
        hint: "professional woman"
    },
	{ 
        name: "Karan Singh", 
        role: "Founder & CEO", 
        image: "https://placehold.co/400x600.png",
        hint: "professional man"
    },
	{ 
        name: "Emma Rodriguez", 
        role: "Lead Developer", 
        image: "https://placehold.co/400x600.png",
        hint: "lead developer"
    },
	{ 
        name: "Julia Gimmel", 
        role: "UX Designer", 
        image: "https://placehold.co/400x600.png",
        hint: "ux designer"
    },
	{ 
        name: "Lisa Anderson", 
        role: "Marketing Manager", 
        image: "https://placehold.co/400x600.png",
        hint: "marketing manager"
    },
	{ 
        name: "James Wilson", 
        role: "Product Manager",
        image: "https://placehold.co/400x600.png",
        hint: "product manager"
    }
];

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateCarousel = useCallback((newIndex: number) => {
        const normalizedIndex = (newIndex + teamMembers.length) % teamMembers.length;
        setCurrentIndex(normalizedIndex);
    }, []);

    useEffect(() => {
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
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex, updateCarousel]);


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="about-title">OUR TEAM</h1>
            <div className="carousel-container">
                <button 
                    className="nav-arrow left" 
                    onClick={() => updateCarousel(currentIndex - 1)}
                    aria-label="Previous team member"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="carousel-track">
                    {teamMembers.map((member, i) => {
                        const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
                        let cardClass = "hidden";
                        if (offset === 0) cardClass = "center";
                        else if (offset === 1) cardClass = "right-1";
                        else if (offset === 2) cardClass = "right-2";
                        else if (offset === teamMembers.length - 1) cardClass = "left-1";
                        else if (offset === teamMembers.length - 2) cardClass = "left-2";

                        return (
                            <div key={i} className={cn("team-card", cardClass)} onClick={() => updateCarousel(i)}>
                                <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    width={400}
                                    height={600}
                                    data-ai-hint={member.hint}
                                />
                            </div>
                        );
                    })}
                </div>
                <button 
                    className="nav-arrow right"
                    onClick={() => updateCarousel(currentIndex + 1)}
                    aria-label="Next team member"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="member-info">
                <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
                <p className="member-role">{teamMembers[currentIndex].role}</p>
            </div>

            <div className="dots">
                {teamMembers.map((_, i) => (
                    <button
                        type="button"
                        key={i} 
                        className={cn("dot", { active: i === currentIndex })}
                        onClick={() => updateCarousel(i)}
                        aria-label={'View team member ' + (i + 1)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
