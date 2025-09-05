
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, X, Users, ListChecks, Palette, Code, LayoutTemplate, Globe, MonitorCheck, Rocket, Landmark, FileText, BarChart, Settings, Bot, ShieldCheck, Search, Megaphone, Newspaper, CheckCircle, ArrowLeft, ArrowRight, Fingerprint, TerminalSquare, Network, Mail, ShieldAlert, ShieldOff, Wifi, Bug, ServerCrash, KeyRound, BugPlay, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const diplomaCourses = [
  {
    title: "Diploma In Accounting",
    description: "Gain comprehensive knowledge in financial, managerial, and tax accounting, preparing you for various roles in the accounting field.",
    image: "/images/courses/DIA.jpg",
    hint: "accounting collage",
    modules: [
        { title: "Financial Accounting Basics", icon: <Landmark />, subTopics: ["Introduction to Accounting", "Journal Entries", "Ledger and Trial Balance", "Final Accounts Preparation", "Bank Reconciliation", "and many more..."] },
        { title: "Advanced Excel for Accountants", icon: <BarChart />, subTopics: ["Advanced Formulas", "PivotTables & PivotCharts", "Data Validation & Protection", "Financial Modeling Basics", "Macros & VBA for Accountants", "and many more..."] },
        { title: "Tally Prime with GST", icon: <FileText />, subTopics: ["Company Creation & Configuration", "Voucher Entry", "GST Setup and Compliance", "Inventory Management", "Payroll Processing", "and many more..."] },
    ],
  },
  {
    title: "Diploma In Financial Accounting",
    description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
    image: "/images/courses/DFA.jpg",
    hint: "financial report",
    modules: [
        { title: "Office Automation", icon: <MonitorCheck />, subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Microsoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting", "and many more..."] },
        { title: "Tally Prime (GST)", icon: <FileText />, subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
        { title: "Taxation Auditing", icon: <Landmark />, subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] }
    ],
  },
  {
    title: "Diploma In Computer Application",
    description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
    image: "/images/courses/DCA.jpg",
    hint: "computer application",
    modules: [
        { title: "Office Automation", icon: <MonitorCheck />, subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Mircosoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting"] },
        { title: "Tally Prime (GST)", icon: <FileText />, subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
        { title: "Graphic Designing", icon: <Palette />, subTopics: ["CorelDRAW", "Adobe PHOTOSHOP", "Adobe ILLUSTRATOR", "Adobe INDESIGN", "CANVA DESIGN", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Web Designing", icon: <Globe />, subTopics: ["Html / CSS", "Adobe Animate", "Javascript", "Web Hosting", "Adobe Dreamweaver", "ASSIGNMENTS / PROJECT", "and many more..."] }
    ],
  },
  {
    title: "Diploma In Financial & Management",
    description: "Develop skills in financial analysis, investment strategies, and management principles to prepare for careers in finance and business administration.",
    image: "/images/courses/DFAM.jpg",
    hint: "financial management",
    modules: [
        { title: "Office Automation", icon: <MonitorCheck />, subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Mircosoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting"] },
        { title: "Tally Prime (GST)", icon: <FileText />, subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "GST, TDS (Tax Deducted at Source)", "ASSIGNMENTS/PROJECT", "and many more..."] },
        { title: "Taxation Auditing", icon: <Landmark />, subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] },
        { title: "Management Skills", icon: <Users />, subTopics: ["Understanding of Management Skills", "Managing Business Finance", "Practical Work on Project Reports", "Export / Import Management", "Case Study of Successful Employee", "Office & Marketing Management", "and many more..."] },
        { title: "Share Market", icon: <BarChart />, subTopics: ["Primary Markets, Book Building", "IPOS & Listings Trading", "Clearance & Settlements", "Mutual Funds", "Depositories, Derivatives", "and many more..."] }
    ],
  },
  {
    title: "Diploma In Programming Course",
    description: "Master various programming languages and concepts for front-end, back-end, mobile, and machine learning development to become a versatile programmer.",
    image: "/images/courses/DPC.jpg",
    hint: "programming course",
    modules: [
        { title: "C, C++ & DSA", icon: <Code />, subTopics: ["Intro Flow Algorithm", "C Syntax, Operators & Data Types", "C++ with OOPS Concepts", "Control Statements & Loops", "Data Structures & Algorithms", "File Handling & Preprocessor"] },
        { title: "Web Technologies", icon: <Globe />, subTopics: ["HTML", "CSS", "JavaScript", "PHP for server-side scripting", "Database Management (MySQL/SSMS)", "WordPress basics", "Web Hosting & Deployment"] },
        { title: "Python Programming", icon: <Bot />, subTopics: ["Python Setup & Installation", "Core Python Features", "Data Types & Variables", "Operators and Control Flow", "Functions & Modules", "File Handling", "and many more..."] },
        { title: "Java (Core & Advanced)", icon: <Code />, subTopics: ["Introduction to Java", "Java Class, Inheritances, Polymorphism", "GUI with Swing Controls", "Multithreading & Exception Handling", "Servlet, JSP, JDBC", "and many more..."] },
        { title: ".NET or MERN Stack", icon: <Rocket />, subTopics: ["ASP.NET with C#", "Angular or React", "State Management", "Handling HTTP requests", "Server-side Rendering (SSR)", "API Integration", "and many more..."] }
    ],
  },
  {
    title: "Diploma In Graphic & Animation",
    description: "Explore graphic design principles, digital illustration, and animation techniques to create visually appealing content for various media platforms.",
    image: "/images/courses/DGA.jpg",
    hint: "graphic animation",
    modules: [
        { title: "Graphic Designing", icon: <Palette />, subTopics: ["CorelDRAW", "Adobe PHOTOSHOP", "Adobe ILLUSTRATOR", "Adobe INDESIGN", "CANVA DESIGN", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Web Designing", icon: <Globe />, subTopics: ["Introduction to Web Page Designing", "Html / CSS", "Adobe Animate", "Web Hosting", "Domain / Sub Domain", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Adobe Animate", icon: <Bot />, subTopics: ["Frame By Frame Animation", "Movie Clips, Symbols, Buttons", "Shape Tweening", "Walk Through Animation", "Smoke Animation", "Action Script 2.0", "and many more..."] },
        { title: "Video / Sound Editing", icon: <LayoutTemplate />, subTopics: ["Introduction", "Workspace, Project, Sequence", "Editing Frame with Tools", "Slow & Fast - Speed Duration", "Transition Effects", "Animation Effects", "and many more..."] },
        { title: "3DS MAX", icon: <Rocket />, subTopics: ["Interface - 2D Tools - Modifiers", "2D / 3D Interior Designing", "Architecture - Civil", "3D Modelling - Character", "Materials - Camera Walkthrough", "ASSIGNMENTS / PROJECT", "and many more..."] }
    ],
  },
  {
    title: "Diploma In Ethical Hacking",
    description: "Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking practices to protect systems and networks from malicious attacks.",
    image: "https://placehold.co/600x400.png",
    hint: "ethical hacking",
    modules: [
      { title: "Intro to Ethical Hacking", icon: <ShieldCheck />, subTopics: ["Key terminology", "Penetration testing", "Cyber ethics", "Hacking phases"] },
      { title: "Footprinting", icon: <Fingerprint />, subTopics: ["Using search engines", "Website footprinting", "Email footprinting", "DNS footprinting", "Network footprinting", "Social engineering"] },
      { title: "Network Scanning", icon: <Search />, subTopics: ["Checking for live systems", "Checking for open ports", "Scanning techniques", "Scanning beyond an IDS", "Banner grabbing", "Vulnerability scanning", "Drawing network diagrams", "Preparing proxies"] },
      { title: "Enumeration", icon: <Mail />, subTopics: ["NetBIOS enumeration", "SNMP enumeration", "LDAP enumeration", "NTP enumeration", "SMTP enumeration", "DNS enumeration"] },
      { title: "Vulnerability Analysis", icon: <Bug />, subTopics: ["Vulnerability classification", "Vulnerability assessment", "Vulnerability-assessment tools"] },
      { title: "System Hacking", icon: <TerminalSquare />, subTopics: ["Gaining access", "Escalating privileges", "Maintaining access", "Hiding files", "Covering tracks"] },
      { title: "Malware Threats", icon: <BugPlay />, subTopics: ["Trojan concepts", "Virus and worm concepts", "Malware analysis", "Countermeasures"] },
      { title: "Sniffing", icon: <Wifi />, subTopics: ["MAC attacks", "DHCP attacks", "ARP poisoning", "Spoofing attacks", "DNS poisoning"] },
      { title: "Social Engineering", icon: <Users />, subTopics: ["Social engineering concepts", "Social engineering techniques", "Insider threats", "Impersonation on social networking sites"] },
      { title: "Denial-of-Service", icon: <ShieldOff />, subTopics: ["DoS/DDoS concepts", "DoS/DDoS attack techniques", "Botnets", "DDoS case study", "DoS/DDoS attack tools"] },
      { title: "Session Hijacking", icon: <ServerCrash />, subTopics: ["Session hijacking concepts", "Application-level session hijacking", "Network-level session hijacking", "Session hijacking tools"] },
      { title: "Evading IDS, Firewalls, and Honeypots", icon: <ShieldAlert />, subTopics: ["IDS, firewall, and honeypot concepts", "IDS, firewall, and honeypot solutions", "Evading IDS", "Evading firewalls", "Detecting honeypots"] },
      { title: "Hacking Web Servers", icon: <ServerCrash />, subTopics: ["Web server concepts", "Web server attacks", "Web server attack methodology", "Patch management"] },
      { title: "Hacking Web Applications", icon: <Code />, subTopics: ["Web app concepts", "Web app threats", "Web app hacking methodology"] },
      { title: "SQL Injection", icon: <KeyRound />, subTopics: ["SQL injection concepts", "Types of SQL injection", "SQL injection methodology", "SQL injection tools", "Evasion techniques"] }
    ],
  },
  {
    title: "Diploma In Digital Marketing",
    description: "Master digital marketing strategies, including SEO, social media marketing, content creation, and analytics to promote businesses in the online world.",
    image: "/images/courses/dm.jpg",
    hint: "digital marketing",
    modules: [
        { title: "Marketing Fundamentals", icon: <Megaphone />, subTopics: ["Introduction to Digital Marketing", "Website Analysis", "Google Algorithms", "Duplicate Content Checking", "Web Master Tools"] },
        { title: "SEO & SEM", icon: <Search />, subTopics: ["On-Page Optimization", "Off-Page Optimization", "Keyword Research", "Meta Tag Optimization", "Search Engine Marketing (SEM)", "PPC Marketing", "Google Analytics"] },
        { title: "Social Media Marketing", icon: <Users />, subTopics: ["Social Media Marketing (SMM)", "Facebook & Instagram Marketing", "LinkedIn for Business", "Twitter for Business", "Pinterest Marketing", "YouTube Marketing"] },
        { title: "Content Marketing", icon: <Newspaper />, subTopics: ["Content Creation Strategy", "Blogging for Business", "Website Creation using WordPress", "Post Formats & Comments", "Link Management", "Domain & Hosting"] },
        { title: "Email Marketing", icon: <Megaphone />, subTopics: ["Introduction to Email Marketing", "Building Mailing Lists", "Creating Email Layouts & Templates", "Types of Forms & Reports", "Campaign Analysis"] },
        { title: "Google Analytics", icon: <BarChart />, subTopics: ["Introduction to Google Analytics", "Tracking Website Traffic", "Analyzing User Behavior", "Conversion Tracking", "Reporting and Dashboards"] }
    ],
  },
  {
    title: "Full-Stack Development",
    description: "Become proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, Node.js, and MySQL for comprehensive web development.",
    image: "/images/courses/FSD.jpg",
    hint: "full stack",
    modules: [
        { title: "HTML & CSS", icon: <Code />, subTopics: ["HTML Tags, Fonts, Image, Heading", "Table, Links, Source, Form, Frames", "CSS Tags, Styles, Syntax, Model, IDS"] },
        { title: "JavaScript", icon: <Code />, subTopics: ["Developer Essentials", "Language, Events", "Methods, Using Names, Objects", "Validation options, Rollovers & More"] },
        { title: "AngularJS", icon: <Code />, subTopics: ["Expressions, Modules, Directives", "Model, Data Binding, Controllers", "Scopes, Filters, Services, Http", "Tables, Select, SQL, DOM, Events", "Validation, API, W3.CSS, Animation", "AngularJS Routing, Application"] },
        { title: "ReactJS", icon: <Code />, subTopics: ["Components in React", "State management Lists & keys", "Handling events, Forms", "Handling HTTP requests", "Server-side rendering (SSR)"] },
        { title: "Bootstrap", icon: <Code />, subTopics: ["Bootstrap Framework, Features", "Bootstrap Components, Grid", "Responsive web page, Bootstrap Plug-Ins"] },
        { title: "Back-End Technologies", icon: <ServerCrash />, subTopics: ["Django", "Node.js", "Express.js", "Python", "PHP", "Laravel"] },
        { title: "Database Technologies", icon: <Settings />, subTopics: ["MySQL", "MongoDB"] },
        { title: "Java Technology", icon: <Code />, subTopics: ["Core Java", "Advanced Java", "Hibernate", "Spring"] }
    ],
  },
  {
    title: "Data Analytics",
    description: "Develop skills in data mining, statistical analysis, and data visualization to extract meaningful insights and support data-driven decision-making in businesses.",
    image: "/images/courses/DATA-ANALYTICS.jpg",
    hint: "data analytics",
    modules: [
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Complex Functions, What - if - Analysis", "Working with Macros, MIS Reporting", "Dashboard Creation, Data Validation"] },
        { title: "Power BI", icon: <BarChart />, subTopics: ["Introducing PowerPivot", "Working with Data", "Enhancing the Data Model", "Analysing Data", "Data Analysis Expressions (DAX)", "Publishing & Managing PowerPivot Models", "Importing Data with Power Query"] },
        { title: "MY SQL", icon: <Code />, subTopics: ["Introduction to SQL Server", "Database & Types", "Using DDL / DML", "Simple Queries, Sub-Queries", "Queries using Joins", "Constraints", "Using Aggregate Functions"] },
        { title: "Python", icon: <Bot />, subTopics: ["Basic Python Syntax", "Data Types & Operators", "Decision Making & Looping", "Lists, Tuples, Dictionary", "Functions & Modules", "Files Input & Output", "Exceptional Handling, Class & Object"] },
        { title: "Tableau", icon: <BarChart />, subTopics: ["Working with Tableau", "Deep Diving with Data & Connections", "Creating Charts", "Calculations in your Workbook", "Data Mapping in Tableau", "Dashboards", "Visualization"] }
    ],
  },
];

const RoadmapPopup = ({ course }: { course: (typeof diplomaCourses)[0] }) => {
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
                                        {module.icon}
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
                                        {module.icon}
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
                                {course.modules[activeModule].icon}
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
                        <Link href="/enroll">Enroll Now</Link>
                    </Button>
                </div>
             </div>
        </Card>
    )
}

export default function DiplomaCoursesPage() {
    const [selectedCourse, setSelectedCourse] = useState<(typeof diplomaCourses)[0] | null>(null);

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Diploma Courses for your Better Career</h1>
        </div>
      </section>

       <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {diplomaCourses.map((course) => (
            <Card key={course.title} className="bg-white flex flex-col justify-between overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl">
                <div className="relative h-48 w-full">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        style={{objectFit: "cover"}}
                        data-ai-hint={course.hint}
                        className="rounded-t-2xl"
                    />
                </div>
                <CardHeader className="space-y-1">
                    <div className="flex justify-between items-start">
                        <p className="text-sm text-blue-500 font-semibold">Diploma</p>
                        <Dialog>
                            <DialogTrigger asChild>
                               <Button onClick={() => setSelectedCourse(course)} variant="outline" size="sm">View Modules</Button>
                            </DialogTrigger>
                            <DialogContent className="bg-transparent border-none shadow-none p-0 w-auto max-w-[95vw] md:max-w-7xl rounded-lg data-[state=open]:w-auto">
                                {selectedCourse && course.title === selectedCourse.title && (
                                    <>
                                        <DialogHeader className="sr-only">
                                            <DialogTitle>{selectedCourse.title}</DialogTitle>
                                        </DialogHeader>
                                        <RoadmapPopup course={selectedCourse} />
                                    </>
                                )}
                            </DialogContent>
                        </Dialog>
                    </div>
                    <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
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
                        <span>{course.modules.reduce((acc, m) => acc + (m.subTopics?.length || 0), 0)} Total Topics</span>
                    </div>
                </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

    

    

    