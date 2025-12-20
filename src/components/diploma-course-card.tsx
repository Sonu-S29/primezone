
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, BookOpen, Clock, Users, Landmark, BarChart, FileText, MonitorCheck, Palette, Globe, Bot, Rocket, Code, ShieldCheck, Fingerprint, Search, Mail, Bug, TerminalSquare, BugPlay, Wifi, ShieldOff, ServerCrash, ShieldAlert, KeyRound, Megaphone, Newspaper, Settings, LayoutTemplate, Hand, HandIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { DiplomaCourse } from "@/lib/course-data";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: { [key: string]: React.ReactNode } = {
    Landmark: <Landmark className="h-6 w-6" />,
    BarChart: <BarChart className="h-6 w-6" />,
    FileText: <FileText className="h-6 w-6" />,
    MonitorCheck: <MonitorCheck className="h-6 w-6" />,
    Palette: <Palette className="h-6 w-6" />,
    Globe: <Globe className="h-6 w-6" />,
    Bot: <Bot className="h-6 w-6" />,
    Rocket: <Rocket className="h-6 w-6" />,
    Users: <Users className="h-6 w-6" />,
    Code: <Code className="h-6 w-6" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6" />,
    Fingerprint: <Fingerprint className="h-6 w-6" />,
    Search: <Search className="h-6 w-6" />,
    Mail: <Mail className="h-6 w-6" />,
    Bug: <Bug className="h-6 w-6" />,
    TerminalSquare: <TerminalSquare className="h-6 w-6" />,
    BugPlay: <BugPlay className="h-6 w-6" />,
    Wifi: <Wifi className="h-6 w-6" />,
    ShieldOff: <ShieldOff className="h-6 w-6" />,
    ServerCrash: <ServerCrash className="h-6 w-6" />,
    ShieldAlert: <ShieldAlert className="h-6 w-6" />,
    KeyRound: <KeyRound className="h-6 w-6" />,
    Megaphone: <Megaphone className="h-6 w-6" />,
    Newspaper: <Newspaper className="h-6 w-6" />,
    Settings: <Settings className="h-6 w-6" />,
    LayoutTemplate: <LayoutTemplate className="h-6 w-6" />,
    default: <BookOpen className="h-6 w-6" />,
};

export default function DiplomaCourseCard({ course }: { course: DiplomaCourse }) {
    const [selectedModule, setSelectedModule] = useState<number | null>(null);
    const [isAutoCycling, setIsAutoCycling] = useState(false);
    const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopCycle = () => {
        if (cycleIntervalRef.current) {
            clearInterval(cycleIntervalRef.current);
            cycleIntervalRef.current = null;
        }
        setIsAutoCycling(false);
    };

    const startCycle = () => {
        stopCycle(); // Stop any existing cycle
        setIsAutoCycling(true);
        cycleIntervalRef.current = setInterval(() => {
            setSelectedModule(prev => (prev === null ? 0 : (prev + 1) % course.modules.length));
        }, 2000);
    };

    const handleModuleClick = (index: number) => {
        stopCycle();
        setSelectedModule(index);
    };

    const handleAutoCycleClick = () => {
        if (isAutoCycling) {
            stopCycle();
        } else {
            startCycle();
        }
    };
    
    useEffect(() => {
        // Cleanup on component unmount
        return () => {
            stopCycle();
        };
    }, []);


    return (
        <Card className="diploma-card-container flex flex-col justify-between overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl w-full max-w-sm mx-auto">
            
            {/* Row 1: Image or Module Content */}
            <div className="relative h-56 w-full bg-muted overflow-hidden">
                <AnimatePresence mode="wait">
                    {selectedModule === null ? (
                        <motion.div
                            key="image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                data-ai-hint={course.hint}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="module-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="p-4 h-full flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-primary">{course.modules[selectedModule].title}</h4>
                                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleModuleClick(null)}>
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                            </div>
                            <ul className="space-y-1 text-sm text-muted-foreground overflow-y-auto flex-grow">
                                {(course.modules[selectedModule].subTopics ?? []).map((topic, i) => (
                                    <li key={i} className="flex items-center">
                                    <Check className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                                    <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                {/* Row 2: Module Circles */}
                 <div className="module-carousel-container my-3">
                    <div className="module-carousel">
                        {course.modules.map((module, index) => (
                            <button
                                key={index}
                                onClick={() => handleModuleClick(index)}
                                className={`module-circle group ${selectedModule === index ? 'active' : ''}`}
                                title={module.title}
                            >
                                <div className="module-icon">
                                    {iconMap[module.icon] || iconMap.default}
                                </div>
                                <span className="module-tooltip">{module.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
                 <div onClick={handleAutoCycleClick} className="flex items-center justify-center text-xs text-muted-foreground -mt-2 mb-3 cursor-pointer">
                  <HandIcon className="h-3 w-3 mr-1 animate-pulse" />
                  Click to view
                </div>

                <CardHeader className="p-0">
                    <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                </CardHeader>

                {/* Row 3: Duration & Topics */}
                <div className="flex justify-between items-center text-xs font-medium text-muted-foreground mt-auto py-3 border-y">
                     <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.totalTopics} Topics</span>
                    </div>
                </div>
            </div>

            {/* Row 4: Register Button */}
            <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                    <Link href={`/enroll?course=${encodeURIComponent(course.title)}`}>Register Now</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
