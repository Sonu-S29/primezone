
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Star, Reply, Clock, Users, Phone, Award, Briefcase, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { Suspense, lazy, useEffect, useState } from "react";
import AccreditationLogos from "@/components/accreditation-logos";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import ParticleHero from "@/components/particle-hero";
import HeroSlider from "@/components/hero-slider";
import { useIsMobile } from "@/hooks/use-mobile";
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { testimonials } from "@/lib/testimonials-data";

const TrendingCourses = lazy(() => import("@/components/trending-courses"));
const FeaturedCoursesCarousel = lazy(() => import("@/components/featured-courses-carousel"));
const EmpoweringCareer = lazy(() => import("@/components/empowering-career"));

const Carousel = dynamic(() => import("@/components/ui/carousel").then(module => ({ default: module.Carousel })), {
    loading: () => <Skeleton className="h-64 w-full" />,
    ssr: false
});
const CarouselContent = dynamic(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselContent })), { ssr: false });
const CarouselItem = dynamic(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselItem })), { ssr: false });
const CarouselPrevious = dynamic(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselPrevious })), { ssr: false });
const CarouselNext = dynamic(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselNext })), { ssr: false });


const quoteCourses = [
    "Diploma course",
    "Short Term Course",
    "Career Counseling",
    "Other",
  ];
  
const QuoteForm = () => {
    const [state, handleSubmit] = useForm("xnnawrlz");
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        if (state.succeeded) {
          toast({
            title: "Quote Request Sent!",
            description: "Thank you for your interest. We will get back to you shortly.",
          });
          setTimeout(() => {
            router.push('/courses/diploma');
          }, 2000);
        }
      }, [state.succeeded, router, toast]);

    if (state.succeeded) {
        return (
            <Card className="bg-accent/20 p-8 rounded-2xl text-center">
                 <CardHeader>
                    <CardTitle>Thank You!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your quote request has been sent. Redirecting...</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="bg-accent/20 p-8 rounded-2xl">
            <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                       <Label htmlFor="quoteName" className="sr-only">Your Name</Label>
                       <Input id="quoteName" name="name" placeholder="Your Name" className="bg-background"/>
                    </div>
                     <div className="space-y-2">
                       <Label htmlFor="quoteEmail" className="sr-only">Your Email</Label>
                       <Input id="quoteEmail" name="email" type="email" placeholder="Your Email" className="bg-background"/>
                       <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="quoteCourse" className="sr-only">Select a Course</Label>
                        <Select name="course">
                            <SelectTrigger id="quoteCourse" className="bg-background">
                                <SelectValue placeholder="Select a Course" />
                            </SelectTrigger>
                            <SelectContent>
                                {quoteCourses.map((course) => (
                                    <SelectItem key={course} value={course}>{course}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                       <Label htmlFor="quoteMessage" className="sr-only">Message</Label>
                       <Textarea id="quoteMessage" name="message" placeholder="Message" rows={4} className="bg-background"/>
                       <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm" />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" disabled={state.submitting}>Request A Quote</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default function Home() {
   const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
       {!isClient ? (
        <div className="h-screen -mt-24 w-full bg-background" />
      ) : isMobile ? <ParticleHero /> : <HeroSlider />}
      

      {/* Accreditation Logos Section */}
      <section className="container mx-auto px-4">
        <div className="hidden md:block w-[85%] md:w-[75%] mx-auto">
          <AccreditationLogos />
        </div>
      </section>

      {/* Trending Courses Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Diploma Courses for your Better Career</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Explore our most popular diploma programs designed to launch your career.
                    </p>
                </div>
                <Suspense fallback={<Skeleton className="h-64 w-full" />}>
                  <TrendingCourses />
                </Suspense>
            </div>
        </section>

      {/* Featured Courses Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Courses</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Kickstart your career with our most popular courses.
            </p>
          </div>
           <Suspense fallback={<Skeleton className="h-96 w-full" />}>
                <FeaturedCoursesCarousel />
            </Suspense>
        </div>
      </section>

      {/* Request a Quote Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <p className="font-semibold text-accent">REQUEST A QUOTE</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Need A Free Quote? Please Feel Free to Contact Us</h2>
                <div className="w-24 h-1 bg-accent"></div>

                <div className="flex items-center gap-4">
                    <Reply className="h-6 w-6 text-accent"/>
                    <p className="font-semibold">Reply within 24 hours</p>
                </div>
                <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-accent"/>
                    <p className="font-semibold">24 hrs telephone support</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                    It might be helpful to include information like the date you want your course, the date you want to ensure suitability, and the reason you're choosing this course. This can help in the class to respond accurately to your request. You can also provide a list of questions and include your contact information so that any course query we can contact you.
                </p>

                <div className="flex items-center gap-4 pt-4">
                    <div className="p-4 bg-accent text-accent-foreground rounded-lg">
                       <Phone className="h-8 w-8" />
                    </div>
                    <div>
                        <p className="text-muted-foreground">Call to ask any question</p>
                        <a href="tel:+919769730087" className="text-2xl font-bold text-primary hover:underline">(+91) 97697 30087</a>
                    </div>
                </div>
            </div>
            <QuoteForm />
        </div>
      </section>

      {/* Empowering Your Career Section */}
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <EmpoweringCareer />
      </Suspense>

      {/* Testimonials Section */}
      <section className="w-full py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Success Stories</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Hear what our students have to say about their journey with us.
            </p>
          </div>
          <div className="container mx-auto px-4">
            <Suspense fallback={<Skeleton className="h-64 w-full" />}>
                <Carousel 
                plugins={[plugin.current]}
                opts={{ loop: true, align: "start" }} 
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                        <Card className="glass-effect h-full flex flex-col">
                            <CardContent className="pt-6 flex flex-col h-full">
                                <div className="flex items-start mb-4">
                                    <div className="ml-4 flex-grow">
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                                    </div>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic flex-grow">"{testimonial.story}"</p>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </Suspense>
             <div className="mt-8 flex justify-center gap-4">
                <Button asChild>
                    <Link href="https://share.google/hAEhk3Rr4UeMvWz1G" target="_blank" aria-label="Read more reviews on Google">Read more reviews</Link>
                </Button>
                <Button asChild>
                    <Link href="https://share.google/yCpYlbYBe259n6zr5" target="_blank" aria-label="More student feedback on Google">More student feedback</Link>
                </Button>
            </div>
          </div>
      </section>

    </div>
  );
}
    

    
