
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, X, Users, ListChecks, Palette, Code, LayoutTemplate, Globe, MonitorCheck, Rocket, Landmark, FileText, BarChart, Settings, Bot, ShieldCheck, Search, Megaphone, Newspaper } from "lucide-react";
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
        { title: "Financial Accounting Basics", icon: <Landmark />, description: "Learn the fundamental principles of accounting, including debits, credits, and financial statements." },
        { title: "Advanced Excel for Accountants", icon: <BarChart />, description: "Master advanced Excel functions to analyze financial data and create insightful reports." },
        { title: "Tally Prime with GST", icon: <FileText />, description: "Become proficient in Tally Prime for managing accounts, inventory, and GST compliance." },
        { title: "Corporate Accounting", icon: <Landmark />, description: "Understand the accounting practices of corporations, including share capital and debentures." },
        { title: "Taxation", icon: <Newspaper />, description: "Get a comprehensive overview of direct and indirect taxes in India." },
        { title: "Auditing", icon: <ShieldCheck />, description: "Learn the principles and techniques of auditing financial statements." }
    ],
  },
  {
    title: "DFA (Diploma In Financial Accounting)",
    description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
    image: "https://placehold.co/600x400.png",
    hint: "financial report",
    modules: [
        { title: "Principles of Accounting", icon: <Landmark />, description: "Build a strong foundation in accounting principles and concepts." },
        { title: "Tally ERP 9", icon: <FileText />, description: "Learn to use Tally ERP 9 for complete business management." },
        { title: "GST & Taxation", icon: <Newspaper />, description: "Understand the GST framework and its implications on businesses." },
        { title: "Financial Statement Analysis", icon: <BarChart />, description: "Analyze financial statements to make informed business decisions." },
        { title: "Advanced Excel", icon: <BarChart />, description: "Utilize advanced features of Excel for financial modeling and analysis." },
        { title: "Payroll Management", icon: <Users />, description: "Learn to process payroll, including statutory deductions and compliance." }
    ],
  },
  {
    title: "DCA (Diploma In Computer Application)",
    description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
    image: "https://placehold.co/600x400.png",
    hint: "computer application",
    modules: [
        { title: "Computer Fundamentals", icon: <MonitorCheck />, description: "Get introduced to the basics of computers, hardware, and software." },
        { title: "MS Office Suite", icon: <FileText />, description: "Become proficient in MS Word, Excel, and PowerPoint." },
        { title: "Internet & Web Concepts", icon: <Globe />, description: "Learn about the internet, web browsers, and online safety." },
        { title: "Introduction to C Programming", icon: <Code />, description: "Start your programming journey with the C language." },
        { title: "Database Management Systems", icon: <Settings />, description: "Understand the basics of databases and SQL." },
        { title: "Final Project", icon: <Rocket />, description: "Apply your learned skills to build a real-world application." }
    ],
  },
  {
    title: "DFAM (Diploma In Financial & Management)",
    description: "Develop skills in financial analysis, investment strategies, and management principles to prepare for careers in finance and business administration.",
    image: "https://placehold.co/600x400.png",
    hint: "financial management",
    modules: [
        { title: "Financial Management", icon: <Landmark />, description: "Learn to manage the finances of an organization effectively." },
        { title: "Management Accounting", icon: <BarChart />, description: "Use accounting information for managerial decision-making." },
        { title: "Investment Analysis", icon: <Search />, description: "Learn to analyze and value investment proposals." },
        { title: "Portfolio Management", icon: <FileText />, description: "Understand how to construct and manage investment portfolios." },
        { title: "Business Law", icon: <Landmark />, description: "Get an overview of the legal aspects of running a business." },
        { title: "Strategic Management", icon: <Users />, description: "Learn to formulate and implement business strategies." }
    ],
  },
  {
    title: "DPC (Diploma In Programming Course)",
    description: "Master various programming languages and concepts for front-end, back-end, mobile, and machine learning development to become a versatile programmer.",
    image: "https://placehold.co/600x400.png",
    hint: "programming course",
    modules: [
        { title: "C & C++ Programming", icon: <Code />, description: "Build a strong foundation in programming with C and C++." },
        { title: "Data Structures & Algorithms", icon: <Settings />, description: "Learn to organize data efficiently and solve complex problems." },
        { title: "Python Programming", icon: <Code />, description: "Master Python for web development, data science, and automation." },
        { title: "Java Core & Advanced", icon: <Code />, description: "Learn Java for building robust and scalable applications." },
        { title: "Web Development (HTML, CSS, JS)", icon: <Globe />, description: "Build modern and responsive websites from scratch." },
        { title: "Database Management (SQL)", icon: <Settings />, description: "Learn to manage and query relational databases using SQL." }
    ],
  },
  {
    title: "DGA (Diploma In Graphic & Animation)",
    description: "Explore graphic design principles, digital illustration, and animation techniques to create visually appealing content for various media platforms.",
    image: "https://placehold.co/600x400.png",
    hint: "graphic animation",
    modules: [
        { title: "Design Principles", icon: <Palette />, description: "Learn the fundamental principles of graphic design." },
        { title: "Adobe Photoshop", icon: <Palette />, description: "Master the world's leading photo editing software." },
        { title: "Adobe Illustrator", icon: <Palette />, description: "Create stunning vector graphics and illustrations." },
        { title: "CorelDRAW", icon: <Palette />, description: "Learn to use CorelDRAW for creating professional designs." },
        { title: "2D Animation", icon: <Bot />, description: "Bring your characters and stories to life with 2D animation." },
        { title: "Video Editing", icon: <LayoutTemplate />, description: "Learn to edit and produce professional-quality videos." }
    ],
  },
  {
    title: "DEH (Diploma In Ethical Hacking)",
    description: "Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking practices to protect systems and networks from malicious attacks.",
    image: "https://placehold.co/600x400.png",
    hint: "ethical hacking",
    modules: [
        { title: "Networking Fundamentals", icon: <Globe />, description: "Understand the basics of computer networks and protocols." },
        { title: "Linux Essentials", icon: <Code />, description: "Learn the command line and administration of Linux systems." },
        { title: "Cryptography", icon: <ShieldCheck />, description: "Understand the principles of encryption and secure communication." },
        { title: "Web Application Hacking", icon: <Code />, description: "Learn to find and exploit vulnerabilities in web applications." },
        { title: "Metasploit Framework", icon: <LayoutTemplate />, description: "Master the Metasploit framework for penetration testing." },
        { title: "Ethical Hacking Labs", icon: <MonitorCheck />, description: "Practice your skills in a safe and legal environment." }
    ],
  },
  {
    title: "DDM (Diploma In Digital Marketing)",
    description: "Master digital marketing strategies, including SEO, social media marketing, content creation, and analytics to promote businesses in the online world.",
    image: "https://placehold.co/600x400.png",
    hint: "digital marketing",
    modules: [
        { title: "Marketing Fundamentals", icon: <Megaphone />, description: "Understand the core concepts of marketing in the digital age." },
        { title: "SEO & SEM", icon: <Search />, description: "Learn to drive organic and paid traffic to your website." },
        { title: "Social Media Marketing", icon: <Users />, description: "Master the art of marketing on social media platforms." },
        { title: "Content Marketing", icon: <Newspaper />, description: "Learn to create and distribute valuable content to attract and retain customers." },
        { title: "Email Marketing", icon: <Megaphone />, description: "Build and manage effective email marketing campaigns." },
        { title: "Google Analytics", icon: <BarChart />, description: "Learn to measure and analyze website traffic and user behavior." }
    ],
  },
  {
    title: "Full-Stack Development",
    description: "Become proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, Node.js, and MySQL for comprehensive web development.",
    image: "https://placehold.co/600x400.png",
    hint: "full stack",
    modules: [
        { title: "Front-End (HTML, CSS, JS)", icon: <Code />, description: "Build the user interface of websites and web applications." },
        { title: "React.js", icon: <Code />, description: "Learn the most popular JavaScript library for building user interfaces." },
        { title: "Node.js & Express", icon: <Code />, description: "Build scalable and high-performance back-end applications." },
        { title: "Databases (SQL/NoSQL)", icon: <Settings />, description: "Learn to work with both relational and non-relational databases." },
        { title: "API Development", icon: <Code />, description: "Build robust and secure APIs for your applications." },
        { title: "Deployment & DevOps", icon: <Rocket />, description: "Learn to deploy and manage your applications in the cloud." }
    ],
  },
  {
    title: "Data Analytics",
    description: "Develop skills in data mining, statistical analysis, and data visualization to extract meaningful insights and support data-driven decision-making in businesses.",
    image: "https://placehold.co/600x400.png",
    hint: "data analytics",
    modules: [
        { title: "Statistics Fundamentals", icon: <BarChart />, description: "Understand the fundamental concepts of statistics." },
        { title: "Python for Data Science", icon: <Code />, description: "Learn to use Python for data analysis and manipulation." },
        { title: "Data Wrangling with Pandas", icon: <Settings />, description: "Master the Pandas library for cleaning and transforming data." },
        { title: "Data Visualization (Matplotlib, Seaborn)", icon: <Palette />, description: "Create compelling visualizations to communicate your findings." },
        { title: "Machine Learning Basics", icon: <Bot />, description: "Get introduced to the exciting world of machine learning." },
        { title: "Power BI", icon: <BarChart />, description: "Build interactive dashboards and reports with Power BI." }
    ],
  },
];

const RoadmapPopup = ({ course }: { course: (typeof diplomaCourses)[0] }) => {
    const [activeModule, setActiveModule] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleScroll = useCallback(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const { scrollTop, clientHeight } = scrollContainer;
        const scrollCenter = scrollTop + clientHeight / 2;

        let closestModule = 0;
        let minDistance = Infinity;

        moduleRefs.current.forEach((ref, index) => {
            if (ref) {
                const { offsetTop, offsetHeight } = ref;
                const moduleCenter = offsetTop + offsetHeight / 2;
                const distance = Math.abs(scrollCenter - moduleCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestModule = index;
                }
            }
        });

        setActiveModule(closestModule);
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    return (
        <CardContainer containerClassName="py-0">
            <CardBody className="bg-card relative group/card w-full h-[400px] rounded-xl p-0 border-black/[0.1] shadow-2xl flex">
                 <div className="w-1/2 p-6 overflow-hidden">
                    <CardItem
                        translateZ="40"
                        className="text-xl font-bold text-primary"
                    >
                        {course.title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="50"
                        className="text-muted-foreground text-sm max-w-sm mt-2"
                    >
                        Course Modules
                    </CardItem>
                     <CardItem translateZ="60" className="w-full mt-4 h-[250px]">
                        <ScrollArea ref={scrollRef} className="h-full w-full pr-6">
                            <div className="relative">
                                {course.modules.map((module, index) => (
                                    <div key={index} ref={el => moduleRefs.current[index] = el} className="flex items-start gap-4 mb-4">
                                        <div className="flex flex-col items-center">
                                            <div className="flex-shrink-0 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300">
                                                {module.icon}
                                            </div>
                                            {index < course.modules.length - 1 &&
                                                <div className="h-10 w-0.5 bg-border mt-2"></div>
                                            }
                                        </div>
                                        <div className="pt-2">
                                            <p className="font-bold text-primary">{`0${index + 1}`}</p>
                                            <p className="font-medium text-sm">{module.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardItem>
                </div>
                 <div className="w-1/2 p-6 bg-muted rounded-r-xl flex flex-col justify-center">
                    <CardItem translateZ="50" className="w-full h-full">
                         <div className="flex flex-col justify-center h-full">
                            {course.modules.map((module, index) => (
                                <div key={index} className={`transition-opacity duration-300 ${activeModule === index ? 'opacity-100' : 'opacity-0 absolute'}`}>
                                    <div className="flex-shrink-0 bg-primary text-primary-foreground h-14 w-14 rounded-full flex items-center justify-center mb-4">
                                        {module.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary">{module.title}</h3>
                                    <p className="text-muted-foreground mt-2">{module.description}</p>
                                </div>
                            ))}
                        </div>
                    </CardItem>
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
                        <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-2xl">
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
