
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';

const featuredCourses = [
  {
    title: "Web Designing",
    description: "Create visually stunning and user-friendly websites with the latest design trends and technologies.",
    image: "https://picsum.photos/seed/webdesign/600/400",
    hint: "web design"
  },
  {
    title: "Advanced Excel",
    description: "Master complex formulas, data analysis, and visualization techniques to become an Excel power user.",
    image: "https://picsum.photos/seed/excel/600/400",
    hint: "excel spreadsheet"
  },
  {
    title: "PowerBI",
    description: "Turn complex data into clear, interactive visualizations and dashboards with Microsoft Power BI.",
    image: "https://picsum.photos/seed/powerbi/600/400",
    hint: "business intelligence dashboard"
  },
  {
    title: "Tally+GST",
    description: "Learn comprehensive accounting and GST management with the industry-standard Tally software.",
    image: "https://picsum.photos/seed/tally/600/400",
    hint: "accounting software"
  },
  {
    title: "Video & Sound Editing",
    description: "Master the art of video and audio editing to create professional-quality media content.",
    image: "https://picsum.photos/seed/videoedit/600/400",
    hint: "video editing"
  },
  {
    title: "AutoCad 2D-3D",
    description: "Learn to create precise 2D and 3D drawings with AutoCAD, the leading software for design and drafting.",
    image: "https://picsum.photos/seed/autocad/600/400",
    hint: "autocad drawing"
  },
  {
    title: "Social Media Marketing",
    description: "Engage audiences and build brands on social platforms.",
    image: "https://picsum.photos/seed/smm/600/400",
    hint: "social media strategy"
  },
  {
    title: "Search Engine Marketing",
    description: "Drive traffic and conversions with paid search campaigns.",
    image: "https://picsum.photos/seed/sem/600/400",
    hint: "search engine ads"
  },
  {
    title: "Google Ads & Facebook Ads",
    description: "Master the two largest advertising platforms.",
    image: "https://picsum.photos/seed/onlineads/600/400",
    hint: "online advertising"
  }
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

        return () => clearInterval(interval);
    }, [currentIndex, updateCarousel]);


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="carousel-container">
                <button 
                    className="nav-arrow left" 
                    onClick={() => updateCarousel(currentIndex - 1)}
                    aria-label='Previous slide'>
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
                    onClick={() => updateCarousel(currentIndex + 1)}
                    aria-label='Next slide'>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="dots mt-10">
                {featuredCourses.map((_, i) => (
                    <button
                        key={i} 
                        className={cn("dot", { active: i === currentIndex })}
                        onClick={() => updateCarousel(i)}
                        aria-label={'Go to slide ' + (i + 1)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
