import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Briefcase, BookOpen, Tv, BarChart, Code, Brush, Download, Monitor } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { courseDetails } from '@/lib/course-details';
import BrochureDownloadForm from '@/components/brochure-download-form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courseDetails[params.slug];
  if (!course) return { title: "Course Not Found" };

  return {
    title: course.title,
    description: course.description,
    alternates: {
      canonical: `/courses/details/${params.slug}`,
    },
  };
}

const KeyHighlight = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{text}</span>
    </div>
);

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
    const course = courseDetails[params.slug];

    if (!course) {
        notFound();
    }
    
    const iconMap: { [key: string]: React.ReactNode } = {
        Tv: <Tv className="h-5 w-5 text-accent" />,
        BarChart: <BarChart className="h-5 w-5 text-accent" />,
        Code: <Code className="h-5 w-5 text-accent" />,
        Brush: <Brush className="h-5 w-5 text-accent" />,
        default: <BookOpen className="h-5 w-5 text-accent" />,
    };

    return (
        <div className="-mt-12 md:-mt-16">
            {/* Hero Section */}
            <section className="bg-card py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{course.title}</h1>
                            <p className="text-lg text-muted-foreground">{course.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.highlights.map((highlight: string, index: number) => (
                                    <KeyHighlight key={index} icon={<CheckCircle className="h-5 w-5 text-green-500" />} text={highlight} />
                                ))}
                                <KeyHighlight icon={<Monitor className="h-5 w-5 text-accent" />} text="Learning Mode: Offline | Hybrid | Online" />
                            </div>
                             <div className="flex flex-wrap gap-4 pt-4">
                                <Button asChild size="lg">
                                    <Link href={`/enroll?course=${encodeURIComponent(course.title)}`}>Enroll Now</Link>
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
                            <h2 className="text-3xl font-bold font-headline">Career Opportunities</h2>
                            <ul className="space-y-2">
                                {course.careerOpportunities.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start">
                                        <Briefcase className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-headline">What You'll Learn</h2>
                             <ul className="space-y-2">
                                {course.whatYouWillLearn.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
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
                            {course.syllabus.map((module: any, index: number) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="hover:no-underline">
                                        <div className="flex items-center gap-4 text-left w-full">
                                            <div className="p-2.5 bg-accent/10 rounded-lg shrink-0">
                                               {iconMap[module.icon] || iconMap.default}
                                            </div>
                                            <div className="flex flex-col items-start text-left">
                                                <span className="text-[10px] uppercase tracking-wider text-accent font-bold">Module {index + 1}</span>
                                                <h4 className="font-bold text-base md:text-lg leading-tight">{module.title}</h4>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc list-inside pl-4 space-y-1 text-muted-foreground mt-2">
                                           {module.topics.map((topic: string, i: number) => <li key={i}>{topic}</li>)}
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
                        {course.tools.map((tool: any, index: number) => (
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
