
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, FileText, Download, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import BrochureDownloadForm from "./brochure-download-form";


const courses = [
  {
    slug: "data-analysis",
    title: "Data Analysis",
    description: "Unlock insights from data to drive business decisions.",
    duration: "6 Months",
    idealFor: "10th, 12th, Graduates",
    tags: ["Unlimited Interviews", "Integrated Internship"],
    technologies: ["/images/tech/excel.png", "/images/tech/powerbi.png", "/images/tech/sql.png", "/images/tech/python.png", "/images/tech/tableau.png"],
    batchStarts: new Date(new Date().getTime() + 72 * 60 * 60 * 1000), // 72 hours from now
    seatsLeft: 5
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    description: "Master front-end and back-end technologies to build complete web applications.",
    duration: "1 Year",
    idealFor: "12th, Graduates",
    tags: ["Unlimited Interviews", "Integrated Internship"],
    technologies: ["/images/tech/html.png", "/images/tech/css.png", "/images/tech/js.png", "/images/tech/react.png", "/images/tech/node.png"],
    batchStarts: new Date(new Date().getTime() + 96 * 60 * 60 * 1000),
    seatsLeft: 3
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Learn SEO, SEM, and social media strategies to grow businesses online.",
    duration: "6 Months",
    idealFor: "10th, 12th, Graduates",
    tags: ["Unlimited Interviews"],
    technologies: ["/images/tech/ga.png", "/images/tech/google-ads.png", "/images/tech/fb.png", "/images/tech/seo.png", "/images/tech/wordpress.png"],
    batchStarts: new Date(new Date().getTime() + 120 * 60 * 60 * 1000),
    seatsLeft: 8
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking and Cyber Security",
    description: "Protect digital assets by learning to think like a hacker.",
    duration: "1 Year",
    idealFor: "12th, Graduates",
    tags: ["Integrated Internship"],
    technologies: ["/images/tech/python.png", "/images/tech/linux.png", "/images/tech/wireshark.png", "/images/tech/metasploit.png", "/images/tech/nmap.png"],
    batchStarts: new Date(new Date().getTime() + 150 * 60 * 60 * 1000),
    seatsLeft: 4
  },
  {
    slug: "financial-accounting",
    title: "Diploma in Financial Accounting",
    description: "Gain expertise in financial accounting, Tally, and GST.",
    duration: "1 Year",
    idealFor: "10th, 12th, Graduates",
    tags: ["Job Oriented"],
    technologies: ["/images/tech/tally.png", "/images/tech/excel.png", "/images/tech/gst.png", "/images/tech/tax.png", "/images/tech/automation.png"],
    batchStarts: new Date(new Date().getTime() + 200 * 60 * 60 * 1000),
    seatsLeft: 6
  },
  {
    slug: "programming",
    title: "Diploma in Programming",
    description: "Build a strong foundation in programming with C, C++, Java, and Python.",
    duration: "1 Year",
    idealFor: "12th, Graduates",
    tags: ["Integrated Internship"],
    technologies: ["/images/tech/c.png", "/images/tech/cplusplus.png", "/images/tech/java.png", "/images/tech/python.png", "/images/tech/dsa.png"],
    batchStarts: new Date(new Date().getTime() + 250 * 60 * 60 * 1000),
    seatsLeft: 2
  },
];

const Countdown = ({ toDate }: { toDate: Date }) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const interval = setInterval(() => {
            const now = new Date();
            const difference = toDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24) + Math.floor(difference / (1000 * 60 * 60 * 24)) * 24,
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [toDate]);
    
    return (
        <p className="text-xs text-muted-foreground">
            Next batch starts in <br />
            <span className="font-semibold text-primary">{String(timeLeft.hours).padStart(2, '0')} hrs : {String(timeLeft.minutes).padStart(2, '0')} mins : {String(timeLeft.seconds).padStart(2, '0')} sec</span>
        </p>
    );
};

export default function TrendingCourses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
      if (typeof window === 'undefined') return;
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      }
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 3;
  const numDots = Math.ceil(courses.length / itemsPerSlide);

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
          prevIndex === numDots - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, numDots]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: numDots }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
              {courses.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((course) => (
                <Card key={course.title} className="flex flex-col border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300">
                    <CardHeader className="flex-row items-center justify-between pb-2">
                        <Countdown toDate={course.batchStarts} />
                        <Badge variant="destructive">{course.seatsLeft} seats left</Badge>
                    </CardHeader>
                    <CardContent className="text-center pt-4 pb-0">
                        <div className="flex justify-around items-center">
                            <div className="w-1/3"></div>
                            <div className="w-1/3 flex justify-center">
                                <Image src="/images/tech/python_stacked.png" alt="Python" width={60} height={60} />
                            </div>
                            <div className="w-1/3"></div>
                        </div>
                         <div className="flex justify-center items-center gap-4 mt-4">
                           {course.technologies.map((tech, index) => (
                             <div key={index} className="flex flex-col items-center gap-1">
                                <Image src={tech} alt="" width={24} height={24} className="object-contain" />
                             </div>
                           ))}
                         </div>
                    </CardContent>
                    <CardContent className="mt-4 border-t pt-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {course.tags.map((tag) => (
                                <Badge key={tag} variant={tag === "Integrated Internship" ? "secondary" : "default"} className={cn(
                                    tag === "Integrated Internship" ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-100 text-blue-800'
                                )}>{tag}</Badge>
                            ))}
                        </div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <CardDescription className="mt-2">{course.description}</CardDescription>
                        
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground border-t pt-4">
                            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {course.duration} Classroom & Online Training</p>
                            <p className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Weekday and Weekend Batches</p>
                        </div>
                    </CardContent>
                    <CardFooter className="grid grid-cols-2 gap-2 pt-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download Brochure</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>Download Brochure</DialogTitle>
                                <DialogDescription>
                                    Please provide your details to receive the brochure.
                                </DialogDescription>
                                </DialogHeader>
                                <BrochureDownloadForm />
                            </DialogContent>
                        </Dialog>
                        <Button asChild>
                            <Link href={`/courses/details/${course.slug}`}>
                                Know More <ArrowRight className="ml-2 h-4 w-4" />
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
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
