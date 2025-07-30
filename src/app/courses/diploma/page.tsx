
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, X, Users, ListChecks, Palette, Code, LayoutTemplate, Globe, MonitorCheck, Rocket, Landmark, FileText, BarChart, Settings, Bot, ShieldCheck, Search, Megaphone, Newspaper, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const diplomaCourses = [
  {
    title: "DIA (Diploma In Accounting)",
    description: "Gain comprehensive knowledge in financial, managerial, and tax accounting, preparing you for various roles in the accounting field.",
    image: "https://placehold.co/600x400.png",
    hint: "accounting collage",
    modules: [
        { title: "Financial Accounting Basics", icon: <Landmark />, subTopics: ["Introduction to Accounting", "Journal Entries", "Ledger and Trial Balance", "Final Accounts Preparation", "Bank Reconciliation", "and many more..."] },
        { title: "Advanced Excel for Accountants", icon: <BarChart />, subTopics: ["Advanced Formulas", "PivotTables & PivotCharts", "Data Validation & Protection", "Financial Modeling Basics", "Macros & VBA for Accountants", "and many more..."] },
        { title: "Tally Prime with GST", icon: <FileText />, subTopics: ["Company Creation & Configuration", "Voucher Entry", "GST Setup and Compliance", "Inventory Management", "Payroll Processing", "and many more..."] },
    ],
  },
  {
    title: "DFA (Diploma In Financial Accounting)",
    description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
    image: "https://placehold.co/600x400.png",
    hint: "financial report",
    modules: [
        { title: "Office Automation", icon: <MonitorCheck />, subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Microsoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting", "and many more..."] },
        { title: "Tally Prime (GST)", icon: <FileText />, subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "GST, Apply GST Number", "and many more..."] },
        { title: "Taxation Auditing", icon: <Landmark />, subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] }
    ],
  },
  {
    title: "DCA (Diploma In Computer Application)",
    description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
    image: "https://placehold.co/600x400.png",
    hint: "computer application",
    modules: [
        { title: "Office Automation", icon: <MonitorCheck />, subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Mircosoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "and many more..."] },
        { title: "Tally Prime (GST)", icon: <FileText />, subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "TDS (Tax Deducted at Source)", "and many more..."] },
        { title: "Graphic Designing", icon: <Palette />, subTopics: ["CorelDRAW", "Adobe PHOTOSHOP", "Adobe ILLUSTRATOR", "Adobe INDESIGN", "ASSIGNMENTS / PROJECT", "and many more..."] },
        { title: "Web Designing", icon: <Globe />, subTopics: ["Html / CSS", "Adobe Animate", "Javascript", "Web Hosting", "Adobe Dreamweaver", "and many more..."] }
    ],
  },
  {
    title: "DFAM (Diploma In Financial & Management)",
    description: "Develop skills in financial analysis, investment strategies, and management principles to prepare for careers in finance and business administration.",
    image: "https://placehold.co/600x400.png",
    hint: "financial management",
    modules: [
        { title: "Office Automation", icon: <MonitorCheck />, subTopics: ["Typing Speed", "Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Internet - Upload,Download,Booking", "Mircosoft Windows Fundamental", "and many more..."] },
        { title: "Advanced Excel", icon: <BarChart />, subTopics: ["Basic Functions, Tabs & Ribbons", "Advanced Conditional Formatting", "Pivot Tables & Pivot Charts", "Sparkline, Timeline, What if Analysis", "V-Lookup & H-Lookup", "Working with Macros, MIS Reporting", "and many more..."] },
        { title: "Tally Prime (GST)", icon: <FileText />, subTopics: ["Basics of Accounting", "Accounting Principal", "Golden Rules of Accounting", "Receipt / Journal Vouchers & Contra", "GST, TDS (Tax Deducted at Source)", "ASSIGNMENTS/PROJECT", "and many more..."] },
        { title: "Taxation Auditing", icon: <Landmark />, subTopics: ["Direct & Indirect Taxes", "Framework of Income Tax", "Heads of Income", "ITR & Pan Application", "Invoicing Formats, GST Return", "and many more..."] },
        { title: "Management Skills", icon: <Users />, subTopics: ["Understanding of Management Skills", "Managing Business Finance", "Practical Work on Project Reports", "Export / Import Management", "Case Study of Successful Employee", "Office & Marketing Management", "and many more..."] },
        { title: "Share Market", icon: <BarChart />, subTopics: ["Primary Markets, Book Building", "IPOS & Listings Trading", "Clearance & Settlements", "Mutual Funds", "Depositories, Derivatives", "and many more..."] }
    ],
  },
  {
    title: "DPC (Diploma In Programming Course)",
    description: "Master various programming languages and concepts for front-end, back-end, mobile, and machine learning development to become a versatile programmer.",
    image: "https://placehold.co/600x400.png",
    hint: "programming course",
    modules: [
        { title: "C, C++ & DSA", icon: <Code />, subTopics: ["Intro Flow Algorithm", "C Syntax, Operators & Data Types", "C++ with OOPS Concepts", "Control Statements & Loops", "Data Structures & Algorithms", "File Handling & Preprocessor", "and many more..."] },
        { title: "Web Technologies", icon: <Globe />, subTopics: ["HTML, CSS, JavaScript", "PHP for server-side scripting", "Database Management (MySQL/SSMS)", "WordPress basics", "Web Hosting & Deployment", "Building dynamic websites", "and many more..."] },
        { title: "Python Programming", icon: <Bot />, subTopics: ["Python Setup & Installation", "Core Python Features", "Data Types & Variables", "Operators and Control Flow", "Functions & Modules", "File Handling", "and many more..."] },
        { title: "Java (Core & Advanced)", icon: <Code />, subTopics: ["Introduction to Java", "Java Class, Inheritances, Polymorphism", "GUI with Swing Controls", "Multithreading & Exception Handling", "Servlet, JSP, JDBC", "and many more..."] },
        { title: ".NET or MERN Stack", icon: <Rocket />, subTopics: ["ASP.NET with C#", "Angular or React", "State Management", "Handling HTTP requests", "Server-side Rendering (SSR)", "API Integration", "and many more..."] }
    ],
  },
  {
    title: "DGA (Diploma In Graphic & Animation)",
    description: "Explore graphic design principles, digital illustration, and animation techniques to create visually appealing content for various media platforms.",
    image: "https://placehold.co/600x400.png",
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
    title: "DEH (Diploma In Ethical Hacking)",
    description: "Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking practices to protect systems and networks from malicious attacks.",
    image: "https://placehold.co/600x400.png",
    hint: "ethical hacking",
    modules: [
        { title: "Networking Fundamentals", icon: <Globe />, description: "Understand the basics of computer networks and protocols.", subTopics: [] },
        { title: "Linux Essentials", icon: <Code />, description: "Learn the command line and administration of Linux systems.", subTopics: [] },
        { title: "Cryptography", icon: <ShieldCheck />, description: "Understand the principles of encryption and secure communication.", subTopics: [] },
        { title: "Web Application Hacking", icon: <Code />, description: "Learn to find and exploit vulnerabilities in web applications.", subTopics: [] },
        { title: "Metasploit Framework", icon: <LayoutTemplate />, description: "Master the Metasploit framework for penetration testing.", subTopics: [] },
        { title: "Ethical Hacking Labs", icon: <MonitorCheck />, description: "Practice your skills in a safe and legal environment.", subTopics: [] }
    ],
  },
  {
    title: "DDM (Diploma In Digital Marketing)",
    description: "Master digital marketing strategies, including SEO, social media marketing, content creation, and analytics to promote businesses in the online world.",
    image: "https://placehold.co/600x400.png",
    hint: "digital marketing",
    modules: [
        { title: "Marketing Fundamentals", icon: <Megaphone />, description: "Understand the core concepts of marketing in the digital age.", subTopics: [] },
        { title: "SEO & SEM", icon: <Search />, description: "Learn to drive organic and paid traffic to your website.", subTopics: [] },
        { title: "Social Media Marketing", icon: <Users />, description: "Master the art of marketing on social media platforms.", subTopics: [] },
        { title: "Content Marketing", icon: <Newspaper />, description: "Learn to create and distribute valuable content to attract and retain customers.", subTopics: [] },
        { title: "Email Marketing", icon: <Megaphone />, description: "Build and manage effective email marketing campaigns.", subTopics: [] },
        { title: "Google Analytics", icon: <BarChart />, description: "Learn to measure and analyze website traffic and user behavior.", subTopics: [] }
    ],
  },
  {
    title: "Full-Stack Development",
    description: "Become proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, Node.js, and MySQL for comprehensive web development.",
    image: "https://placehold.co/600x400.png",
    hint: "full stack",
    modules: [
        { title: "Front-End (HTML, CSS, JS)", icon: <Code />, description: "Build the user interface of websites and web applications.", subTopics: [] },
        { title: "React.js", icon: <Code />, description: "Learn the most popular JavaScript library for building user interfaces.", subTopics: [] },
        { title: "Node.js & Express", icon: <Code />, description: "Build scalable and high-performance back-end applications.", subTopics: [] },
        { title: "Databases (SQL/NoSQL)", icon: <Settings />, description: "Learn to work with both relational and non-relational databases.", subTopics: [] },
        { title: "API Development", icon: <Code />, description: "Build robust and secure APIs for your applications.", subTopics: [] },
        { title: "Deployment & DevOps", icon: <Rocket />, description: "Learn to deploy and manage your applications in the cloud.", subTopics: [] }
    ],
  },
  {
    title: "Data Analytics",
    description: "Develop skills in data mining, statistical analysis, and data visualization to extract meaningful insights and support data-driven decision-making in businesses.",
    image: "https://placehold.co/600x400.png",
    hint: "data analytics",
    modules: [
        { title: "Statistics Fundamentals", icon: <BarChart />, description: "Understand the fundamental concepts of statistics.", subTopics: [] },
        { title: "Python for Data Science", icon: <Code />, description: "Learn to use Python for data analysis and manipulation.", subTopics: [] },
        { title: "Data Wrangling with Pandas", icon: <Settings />, description: "Master the Pandas library for cleaning and transforming data.", subTopics: [] },
        { title: "Data Visualization (Matplotlib, Seaborn)", icon: <Palette />, description: "Create compelling visualizations to communicate your findings.", subTopics: [] },
        { title: "Machine Learning Basics", icon: <Bot />, description: "Get introduced to the exciting world of machine learning.", subTopics: [] },
        { title: "Power BI", icon: <BarChart />, description: "Build interactive dashboards and reports with Power BI.", subTopics: [] }
    ],
  },
];

const RoadmapPopup = ({ course }: { course: (typeof diplomaCourses)[0] }) => {
    const [activeModule, setActiveModule] = useState(0);
    const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        moduleRefs.current[activeModule]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, [activeModule]);

    const handleNext = useCallback(() => {
        setActiveModule((prev) => (prev + 1) % course.modules.length);
    }, [course.modules.length]);

    const handlePrev = useCallback(() => {
        setActiveModule((prev) => (prev - 1 + course.modules.length) % course.modules.length);
    }, [course.modules.length]);

    return (
        <CardContainer containerClassName="py-0">
            <CardBody className="bg-card relative group/card w-full h-[400px] rounded-xl p-0 border-black/[0.1] shadow-2xl flex">
                <div className="w-2/5 p-6 overflow-hidden">
                    <CardItem
                        translateZ="40"
                        className="text-lg font-bold text-primary"
                    >
                        Course Modules
                    </CardItem>
                     <CardItem translateZ="60" className="w-full mt-4 h-[280px]">
                        <ScrollArea className="h-full w-full pr-4">
                            <div className="relative">
                                {/* Vertical line */}
                                <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10"></div>
                                
                                {course.modules.map((module, index) => (
                                    <div key={index} ref={el => moduleRefs.current[index] = el} className="flex items-center gap-4 mb-6">
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
                    </CardItem>
                </div>
                 <div className="w-3/5 p-6 bg-muted rounded-r-xl flex flex-col justify-between">
                    <CardItem translateZ="50" className="w-full h-full flex flex-col">
                        <div className="flex-grow">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground h-14 w-14 rounded-full flex items-center justify-center mb-4">
                                {course.modules[activeModule].icon}
                            </div>
                            <h3 className="text-lg font-bold text-primary">{course.modules[activeModule].title}</h3>
                            <ul className="space-y-2 mt-4 text-sm">
                              {(course.modules[activeModule].subTopics ?? []).map((topic, i) => (
                                <li key={i} className="flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                        </div>
                    </CardItem>
                    <div className="flex justify-between items-center pt-4">
                        <Button variant="outline" onClick={handlePrev}>
                            Previous
                        </Button>
                        <p className="text-sm font-medium text-muted-foreground">
                            Module {activeModule + 1} of {course.modules.length}
                        </p>
                        <Button variant="outline" onClick={handleNext}>
                            Next
                        </Button>
                    </div>
                 </div>
                 <div className="absolute bottom-6 right-6 flex justify-end">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="/enroll"
                        className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                    >
                        Enroll Now
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
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
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {diplomaCourses.map((course) => (
            <Card key={course.title} className="flex flex-col md:flex-row overflow-hidden group glass-effect">
              <div className="md:w-2/5 relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={course.hint}
                />
              </div>
              <div className="md:w-3/5 flex flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{course.title.split('(')[0]}</CardTitle>
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="pt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-0 mt-auto pt-6">
                   <Dialog>
                        <DialogTrigger asChild>
                           <Button onClick={() => setSelectedCourse(course)}>Learn More <ChevronRight className="ml-2 h-4 w-4"/></Button>
                        </DialogTrigger>
                        <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-3xl">
                          {selectedCourse && (
                            <>
                            <DialogHeader className="sr-only">
                                <DialogTitle>{selectedCourse.title}</DialogTitle>
                            </DialogHeader>
                             <DialogClose asChild>
                                <button className="absolute top-4 right-4 z-50 text-white hover:text-gray-300">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Close</span>
                                </button>
                            </DialogClose>
                            <RoadmapPopup course={selectedCourse} />
                            </>
                          )}
                        </DialogContent>
                    </Dialog>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

    

    




    
