
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, X, Users, ListChecks, Palette, Code, LayoutTemplate, Globe, MonitorCheck, Rocket, Landmark, FileText, BarChart, Settings, Bot, ShieldCheck, Fingerprint, TerminalSquare, Network, Mail, ShieldAlert, ShieldOff, Wifi, Bug, ServerCrash, KeyRound, BugPlay, BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { DiplomaCourse } from "@/lib/course-data";

const iconMap: { [key: string]: React.ReactNode } = {
    Landmark: <Landmark />,
    BarChart: <BarChart />,
    FileText: <FileText />,
    MonitorCheck: <MonitorCheck />,
    Palette: <Palette />,
    Globe: <Globe />,
    Bot: <Bot />,
    Rocket: <Rocket />,
    Users: <Users />,
    Code: <Code />,
    ShieldCheck: <ShieldCheck />,
    Fingerprint: <Fingerprint />,
    Search: <Search />,
    Mail: <Mail />,
    Bug: <Bug />,
    TerminalSquare: <TerminalSquare />,
    BugPlay: <BugPlay />,
    Wifi: <Wifi />,
    ShieldOff: <ShieldOff />,
    ServerCrash: <ServerCrash />,
    ShieldAlert: <ShieldAlert />,
    KeyRound: <KeyRound />,
    Megaphone: <Megaphone />,
    Newspaper: <Newspaper />,
    Settings: <Settings />,
    LayoutTemplate: <LayoutTemplate />,
    default: <BookOpen />,
}

function RoadmapPopup({ course }: { course: DiplomaCourse }) {
    "use client"; // This component uses hooks, so it must be a client component.

    const [activeModule, setActiveModule] = useState(0);
    const moduleRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = useCallback(() => {
        setActiveModule((prev) => (prev + 1) % course.modules.length);
    }, [course.modules.length]);

    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(handleNext, 3000);
    }, [handleNext]);

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [activeModule, resetTimer]);
    
    useEffect(() => {
        moduleRefs.current[activeModule]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }, [activeModule]);

    return (
        <Card className="bg-card relative w-[95vw] md:w-[1000px] h-auto max-h-[90vh] md:max-h-[600px] rounded-xl p-0 border-black/[0.1] shadow-2xl flex flex-col md:flex-row overflow-hidden">
            {/* Desktop: Left Panel */}
            <div className="hidden md:block w-2/5 p-6 overflow-y-auto">
                <h3 className="text-lg font-bold text-primary">
                    Course Modules
                </h3>
                 <div className="w-full mt-4 h-full">
                    <ScrollArea className="h-full w-full pr-4">
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10"></div>
                            
                            {course.modules.map((module, index) => (
                                <div key={index} className="flex items-center gap-4 mb-6">
                                    <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeModule === index ? 'bg-primary text-primary-foreground scale-110' : 'bg-accent text-accent-foreground'}`}>
                                        {iconMap[module.icon] || iconMap.default}
                                    </div>
                                    <div className="pt-2">
                                        <p className={`font-bold transition-colors ${activeModule === index ? 'text-primary' : 'text-muted-foreground'}`}>{`0${index + 1}`}</p>
                                        <p className={`font-medium text-sm transition-colors ${activeModule === index ? 'text-foreground' : 'text-muted-foreground'}`}>{module.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
            
            {/* Mobile: Top Carousel */}
            <div className="md:hidden w-full p-4 bg-muted/50 rounded-t-xl">
                <h3 className="text-lg font-bold text-primary mb-2 px-2">Course Modules</h3>
                <div className="relative">
                    <ScrollArea className="w-full whitespace-nowrap" onPointerEnter={() => { if(timerRef.current) clearInterval(timerRef.current)}} onPointerLeave={resetTimer}>
                         <div className="flex space-x-4 p-2">
                            {course.modules.map((module, index) => (
                                <button 
                                    key={index}
                                    ref={el => moduleRefs.current[index] = el}
                                    onClick={() => {setActiveModule(index); resetTimer();}}
                                    className={`flex-shrink-0 flex items-center gap-2 p-3 rounded-lg transition-all duration-300 ${activeModule === index ? 'bg-primary text-primary-foreground' : 'bg-background'}`}>
                                    <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${activeModule === index ? 'bg-primary-foreground text-primary' : 'bg-accent text-accent-foreground'}`}>
                                        {iconMap[module.icon] || iconMap.default}
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs">{`0${index + 1}`}</p>
                                        <p className="font-medium text-xs text-left">{module.title}</p>
                                    </div>
                                </button>
                            ))}
                         </div>
                         <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>

             <div className="w-full md:w-3/5 p-6 bg-muted md:rounded-r-xl flex flex-col relative">
                <div className="w-full flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground h-14 w-14 rounded-full flex items-center justify-center">
                                {iconMap[course.modules[activeModule].icon] || iconMap.default}
                            </div>
                            <h3 className="text-xl font-bold text-primary">{course.modules[activeModule].title}</h3>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                            Module {activeModule + 1} of {course.modules.length}
                        </p>
                    </div>
                    <div className="flex-grow overflow-y-auto h-[240px] md:h-auto">
                        <ul className="space-y-2 mt-4 text-sm">
                          {(course.modules[activeModule].subTopics ?? []).map((topic, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end items-center pt-4 mt-auto">
                    <Button
                        asChild
                        className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                    >
                        <Link href={`/courses/details/${course.slug}`}>Learn More</Link>
                    </Button>
                </div>
             </div>
        </Card>
    )
};

export default function DiplomaCourseCard({ course }: { course: DiplomaCourse }) {
    const [selectedCourse, setSelectedCourse] = useState<DiplomaCourse | null>(null);

    return (
        <Card className="bg-white flex flex-col justify-between overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl">
            <div className="relative h-56 sm:h-64 w-full rounded-t-2xl overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint={course.hint}
                />
            </div>
            <CardHeader className="space-y-1">
                <div className="flex justify-between items-center">
                    <Dialog open={!!selectedCourse} onOpenChange={(isOpen) => !isOpen && setSelectedCourse(null)}>
                        <DialogTrigger asChild>
                           <Button onClick={() => setSelectedCourse(course)} variant="outline" size="sm">View Modules</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-transparent border-none shadow-none p-0 w-auto max-w-[95vw] md:max-w-7xl rounded-lg data-[state=open]:w-auto">
                            {selectedCourse && course.slug === selectedCourse.slug && (
                                <>
                                    <DialogHeader className="sr-only">
                                        <DialogTitle>{selectedCourse.title}</DialogTitle>
                                    </DialogHeader>
                                    <RoadmapPopup course={selectedCourse} />
                                </>
                            )}
                        </DialogContent>
                    </Dialog>
                    <div className="flex items-center text-xs font-medium text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        Duration: {course.duration}
                    </div>
                </div>
                <CardTitle className="text-xl font-bold pt-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-3">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="bg-blue-50 text-blue-900 p-3 rounded-b-2xl flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.modules.length} Modules</span>
                </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>{course.totalTopics} Total Topics</span>
                </div>
            </CardFooter>
        </Card>
    )
}
