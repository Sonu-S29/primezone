
"use client";

import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Briefcase, Star, Target, Award, Users, BookOpen, Clock, Calendar, ArrowRight, Tv, BarChart, Code, Brush, Download } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { courseDetails } from '@/lib/course-details';
import BrochureDownloadForm from '@/components/brochure-download-form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const KeyHighlight = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{text}</span>
    </div>
);


export default function CourseDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const course = courseDetails[slug];

    if (!course) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold">Course not found</h1>
                <p className="mt-4 text-muted-foreground">The course you are looking for does not exist.</p>
                <Button asChild className="mt-8">
                    <Link href="/courses">Explore other courses</Link>
                </Button>
            </div>
        );
    }
    
    const iconMap: { [key: string]: React.ReactNode } = {
        tv: <Tv className="h-5 w-5 text-accent" />,
        barchart: <BarChart className="h-5 w-5 text-accent" />,
        code: <Code className="h-5 w-5 text-accent" />,
        brush: <Brush className="h-5 w-5 text-accent" />,
        default: <BookOpen className="h-5 w-5 text-accent" />,
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-card py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{course.title}</h1>
                            <p className="text-lg text-muted-foreground">{course.description}</p>
                            <div className="grid grid-cols-2 gap-4">
                                {course.highlights.map((highlight, index) => (
                                    <KeyHighlight key={index} icon={<CheckCircle className="h-5 w-5 text-green-500" />} text={highlight} />
                                ))}
                            </div>
                             <div className="flex flex-wrap gap-4 pt-4">
                                <Button asChild size="lg">
                                    <Link href="/enroll">Enroll Now</Link>
                                </Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                       <Button size="lg" variant="outline">
                                            <Download className="mr-2 h-4 w-4" /> Download Syllabus
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Download Brochure & Syllabus</DialogTitle>
                                            <DialogDescription>
                                                Please provide your details to receive the documents.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <BrochureDownloadForm />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image src={course.image} alt={course.title} width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint={course.hint} />
                        </div>
                    </div>
                </div>
            </section>

             {/* Overview Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-headline">What You'll Learn</h2>
                             <ul className="space-y-2">
                                {course.whatYouWillLearn.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-headline">Career Opportunities</h2>
                            <ul className="space-y-2">
                                {course.careerOpportunities.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <Briefcase className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* Syllabus Section */}
            <section className="py-16 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Course Curriculum</h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A detailed look at the topics and modules you'll cover.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full bg-background p-4 rounded-lg shadow-sm">
                            {course.syllabus.map((module, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-accent/10 rounded-md">
                                               {iconMap[module.icon] || iconMap.default}
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Module {index + 1}</p>
                                                <h4 className="font-semibold text-left">{module.title}</h4>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc list-inside pl-4 space-y-1 text-muted-foreground">
                                           {module.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Tools You'll Master */}
            <section className="py-16">
                 <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Tools You'll Master</h2>
                         <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Get hands-on experience with industry-standard software and platforms.</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {course.tools.map((tool, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 text-center">
                                <Image src={tool.logo} alt={tool.name} width={64} height={64} className="h-12 w-12 md:h-16 md:w-16 object-contain" />
                                <p className="text-sm font-medium">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
