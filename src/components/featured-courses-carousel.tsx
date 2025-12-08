

"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import imageData from '@/lib/placeholder-images.json';

const featuredCourses = [
  {
    slug: "web-designing",
    title: "Web Designing",
    description: "Create visually stunning and user-friendly websites with the latest design trends and technologies.",
    image: "/images/courses/coursetrend/webdesigning.png",
    hint: "web design"
  },
  {
    slug: "advanced-excel",
    title: "Advanced Excel",
    description: "Master complex formulas, data analysis, and visualization techniques to become an Excel power user.",
    image: "/images/courses/coursetrend/advexcel.png",
    hint: "excel spreadsheet"
  },
  {
    slug: "power-bi",
    title: "PowerBI",
    description: "Turn complex data into clear, interactive visualizations and dashboards with Microsoft Power BI.",
    image: "/images/courses/coursetrend/powerbi.webp",
    hint: "business intelligence dashboard"
  },
  {
    slug: "tally-gst",
    title: "Tally+GST",
    description: "Learn comprehensive accounting and GST management with the industry-standard Tally software.",
    image: "/images/courses/coursetrend/tally.webp",
    imageId: "tally",
  },
  {
    slug: "video-editing",
    title: "Video & Sound Editing",
    description: "Master the art of video and audio editing to create professional-quality media content.",
    image: "/images/courses/coursetrend/Video & Sound Editing.webp",
    imageId: "video-editing",
  },
  {
    slug: "autocad",
    title: "AutoCad 2D-3D",
    description: "Learn to create precise 2D and 3D drawings with AutoCAD, the leading software for design and drafting.",
    image: "/images/courses/coursetrend/AutoCad 2D-3D.webp",
    imageId: "autocad",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Engage audiences and build brands on social platforms.",
    image: "/images/courses/coursetrend/AutoCad 2D-3D.webp",
    imageId: "smm",
  },
  {
    slug: "search-engine-marketing",
    title: "Search Engine Marketing",
    description: "Drive traffic and conversions with paid search campaigns.",
    image: "/images/courses/coursetrend/AutoCad 2D-3D.webp",
    imageId: "sem",
  },
  {
    slug: "google-facebook-ads",
    title: "Google Ads & Facebook Ads",
    description: "Master the two largest advertising platforms.",
    image: "/images/courses/coursetrend/Google Ads & Facebook Ads.webp",
    imageId: "online-ads",
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
                        
                        const imageInfo = course.imageId ? imageData.find(img => img.id === course.imageId) : null;
                        const src = course.image || imageInfo?.src || "https://placehold.co/400x600";
                        const width = imageInfo?.width || 400;
                        const height = imageInfo?.height || 600;
                        const hint = course.hint || imageInfo?.hint || "image";

                        return (
                            <div key={i} className={cn("course-card", cardClass)} onClick={() => updateCarousel(i)}>
                                <Image 
                                    src={src} 
                                    alt={course.title} 
                                    width={width}
                                    height={height}
                                    data-ai-hint={hint}
                                    priority={offset === 0}
                                    loading={offset > 1 && offset < featuredCourses.length - 1 ? "lazy" : "eager"}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px"
                                    className='object-cover w-full h-full'
                                />
                                <div className="course-card-content">
                                    <h3 className="course-card-title">{course.title}</h3>
                                    <Button asChild variant="secondary" size="sm">
                                        <Link href={`/courses/details/${course.slug}`}>Learn More</Link>
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
