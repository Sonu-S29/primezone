
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const trendingCourses = [
  {
    title: "Data Analysis",
    description: "Unlock insights from data to drive business decisions.",
    duration: "6 Months",
    idealFor: "10th, 12th, Graduates",
  },
  {
    title: "Full-Stack Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    duration: "1 Year",
    idealFor: "12th, Graduates",
  },
  {
    title: "Digital Marketing",
    description: "Learn SEO, SEM, and social media strategies to grow businesses online.",
    duration: "6 Months",
    idealFor: "10th, 12th, Graduates",
  },
  {
    title: "Ethical Hacking and Cyber Security",
    description: "Protect digital assets by learning to think like a hacker.",
    duration: "1 Year",
    idealFor: "12th, Graduates",
  },
  {
    title: "Diploma in Financial Accounting",
    description: "Gain expertise in financial accounting, Tally, and GST.",
    duration: "1 Year",
    idealFor: "10th, 12th, Graduates",
  },
  {
    title: "Diploma in Programming",
    description: "Build a strong foundation in programming with C, C++, Java, and Python.",
    duration: "1 Year",
    idealFor: "12th, Graduates",
  },
];

export default function TrendingCourses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === Math.ceil(trendingCourses.length / 2) - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const numDots = Math.ceil(trendingCourses.length / 2);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: numDots }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-8">
              {trendingCourses.slice(slideIndex * 2, slideIndex * 2 + 2).map((course) => (
                <Card key={course.title} className="flex flex-col border-primary/20 hover:border-primary transition-colors">
                   <CardHeader>
                        <div className="flex justify-between items-center">
                           <Badge>Trending</Badge>
                           <span className="text-xs text-muted-foreground">Duration: {course.duration}</span>
                        </div>
                        <CardTitle className="pt-2">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>{course.description}</CardDescription>
                         <p className="text-xs text-muted-foreground mt-4">
                            <span className="font-semibold">Ideal For:</span> {course.idealFor}
                         </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="link" className="p-0">
                            <Link href="/courses/diploma">
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: numDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              currentIndex === i ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}
