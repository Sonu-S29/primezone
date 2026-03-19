
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Briefcase, BookOpen, Tv, BarChart, Code, Brush, Download, Monitor, Phone, HelpCircle, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { courseDetails } from '@/lib/course-details';
import BrochureDownloadForm from '@/components/brochure-download-form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courseDetails[params.slug];
  if (!course) return { title: "Course Not Found" };

  return {
    title: course.title,
    description: course.metaDescription || course.description,
    alternates: {
      canonical: `/courses/details/${params.slug}`,
    },
  };
}

const KeyHighlight = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium text-sm md:text-base">{text}</span>
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
        Landmark: <MapPin className="h-5 w-5 text-accent" />,
        Palette: <Brush className="h-5 w-5 text-accent" />,
        MonitorCheck: <Monitor className="h-5 w-5 text-accent" />,
        FileText: <BookOpen className="h-5 w-5 text-accent" />,
        Bot: <Code className="h-5 w-5 text-accent" />,
        Users: <GraduationCap className="h-5 w-5 text-accent" />,
        default: <BookOpen className="h-5 w-5 text-accent" />,
    };

    // Group syllabus by semester if applicable
    const groupedSyllabus = course.syllabus.reduce((acc: any, module: any) => {
        const semester = module.semester || 'Course Modules';
        if (!acc[semester]) acc[semester] = [];
        acc[semester].push(module);
        return acc;
    }, {});

    const semesterKeys = Object.keys(groupedSyllabus).sort();

    return (
        <div className="-mt-12 md:-mt-16 pb-16">
            {/* Hero Section */}
            <section className="bg-card py-16 border-b">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary leading-tight">
                                {course.title.split('|')[0].trim()}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">{course.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.highlights.map((highlight: string, index: number) => (
                                    <KeyHighlight key={index} icon={<CheckCircle className="h-5 w-5 text-green-500" />} text={highlight} />
                                ))}
                                <KeyHighlight icon={<Monitor className="h-5 w-5 text-accent" />} text="Learning Mode: Offline | Hybrid | Online" />
                            </div>
                             <div className="flex flex-wrap gap-4 pt-4">
                                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                                    <Link href={`/enroll?course=${encodeURIComponent(course.title.split('|')[0].trim())}`}>Enroll Now</Link>
                                </Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                       <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
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
                        <div className="hidden md:block relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image 
                                src={course.image} 
                                alt={course.title} 
                                fill
                                className="object-cover" 
                                data-ai-hint={course.hint} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            {course.whyLearn && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-primary mb-6 font-headline">Why Learn {course.title.split('|')[0].trim()}?</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {course.whyLearn}
                        </p>
                    </div>
                </section>
            )}

             {/* Overview Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3">
                                <Briefcase className="h-6 w-6 text-accent" /> Career Opportunities
                            </h2>
                            <ul className="space-y-4">
                                {course.careerOpportunities.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                                        <span className="font-medium text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border">
                            <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3">
                                <GraduationCap className="h-6 w-6 text-accent" /> What You'll Learn
                            </h2>
                             <ul className="space-y-4">
                                {course.whatYouWillLearn.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                                        <span className="font-medium text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* Syllabus Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Course Curriculum</h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A detailed, step-by-step breakdown of the modules covered in this training program.</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {semesterKeys.map((key) => (
                            <div key={key} className="space-y-6">
                                {key !== 'Course Modules' && (
                                    <div className="flex items-center gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-accent uppercase tracking-widest">Semester {key}</h3>
                                        <div className="h-px bg-accent/20 flex-grow"></div>
                                    </div>
                                )}
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {groupedSyllabus[key].map((module: any, index: number) => (
                                        <AccordionItem key={index} value={`item-${key}-${index}`} className="border rounded-xl px-4 bg-white shadow-sm overflow-hidden">
                                            <AccordionTrigger className="hover:no-underline py-6">
                                                <div className="flex items-center gap-4 text-left w-full">
                                                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                                                    {iconMap[module.icon] || iconMap.default}
                                                    </div>
                                                    <div className="flex flex-col items-start text-left">
                                                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Module {index + 1}</span>
                                                        <h4 className="font-bold text-lg md:text-xl text-primary leading-tight">{module.title}</h4>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-6">
                                                <div className="pl-16 grid sm:grid-cols-2 gap-2">
                                                {module.topics.map((topic: string, i: number) => (
                                                    <div key={i} className="flex items-center gap-2 text-muted-foreground">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                                                        <span className="text-sm">{topic}</span>
                                                    </div>
                                                ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Placement Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
                                <MapPin className="h-8 w-8 text-accent" /> Best Classes in Mumbai
                            </h2>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our institute is conveniently located in <strong>Jogeshwari East</strong> and <strong>Vile Parle</strong>, making it the perfect choice for students from <strong>Andheri, Goregaon, and Malad</strong>. We offer flexible batches to accommodate college students and working professionals.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <p className="font-bold text-xl">100%</p>
                                    <p className="text-xs opacity-70 uppercase tracking-tighter">Placement Assistance</p>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <p className="font-bold text-xl">5000+</p>
                                    <p className="text-xs opacity-70 uppercase tracking-tighter">Students Trained</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-primary p-8 rounded-2xl shadow-xl space-y-6">
                            <h3 className="text-2xl font-bold">Start Your Career Today</h3>
                            <p className="text-muted-foreground">Get certified and secure a high-paying job in the tech industry with our expert-led training.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-accent text-white rounded-lg"><Phone className="h-5 w-5"/></div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-bold uppercase">Call for Demo</p>
                                        <a href="tel:+91 9619529867" className="text-xl font-bold hover:text-accent transition-colors">+91 9619529867</a>
                                    </div>
                                </div>
                                <Button asChild className="w-full" size="lg">
                                    <Link href="/enroll">Book Free Demo Class</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools You'll Master */}
            {course.tools && course.tools.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Industry Tools You'll Master</h2>
                            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Get hands-on experience with the exact software and technologies used by professionals in top companies.</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            {course.tools.map((tool: any, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-3 text-center group">
                                    <div className="p-4 bg-muted/50 rounded-2xl group-hover:bg-accent/10 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <Image 
                                            src={tool.logo} 
                                            alt={tool.name} 
                                            width={64} 
                                            height={64} 
                                            className="h-12 w-12 md:h-16 md:w-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                                        />
                                    </div>
                                    <p className="text-sm font-bold text-primary">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {course.faqs && (
                <section className="py-16 bg-muted/30 border-y">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline text-primary flex items-center justify-center gap-3">
                                <HelpCircle className="h-8 w-8 text-accent" /> Frequently Asked Questions
                            </h2>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {course.faqs.map((faq: any, i: number) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-xl px-6 shadow-sm">
                                    <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            )}

            {/* Internal Linking / Related Courses */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8 text-primary font-headline">Other Trending Courses in Mumbai</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <RelatedCourseCard title="Digital Marketing" slug="digital-marketing" />
                        <RelatedCourseCard title="Advanced Excel" slug="advanced-excel" />
                        <RelatedCourseCard title="Full-Stack Dev" slug="full-stack-development" />
                        <RelatedCourseCard title="Data Analysis" slug="data-analysis" />
                    </div>
                </div>
            </section>
        </div>
    );
}

const RelatedCourseCard = ({ title, slug }: { title: string, slug: string }) => (
    <Link href={`/courses/details/${slug}`} className="group p-6 bg-white border rounded-2xl hover:border-accent hover:shadow-lg transition-all flex items-center justify-between">
        <span className="font-bold text-primary group-hover:text-accent">{title}</span>
        <ArrowRight className="h-5 w-5 text-accent transform group-hover:translate-x-1 transition-transform" />
    </Link>
);
