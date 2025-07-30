
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ThreeDCard, CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";


const diplomaCourses = [
  {
    title: "DIA (Diploma In Accounting)",
    description: "Gain comprehensive knowledge in financial, managerial, and tax accounting, preparing you for various roles in the accounting field.",
    image: "https://placehold.co/600x400.png",
    hint: "accounting collage",
    modules: ["Financial Accounting Basics", "Advanced Excel for Accountants", "Tally Prime with GST", "Corporate Accounting", "Taxation", "Auditing"],
  },
  {
    title: "DFA (Diploma In Financial Accounting)",
    description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
    image: "https://placehold.co/600x400.png",
    hint: "financial report",
    modules: ["Principles of Accounting", "Tally ERP 9", "GST & Taxation", "Financial Statement Analysis", "Advanced Excel", "Payroll Management"],
  },
  {
    title: "DCA (Diploma In Computer Application)",
    description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
    image: "https://placehold.co/600x400.png",
    hint: "computer application",
    modules: ["Computer Fundamentals", "MS Office Suite", "Internet & Web Concepts", "Introduction to C Programming", "Database Management Systems", "Final Project"],
  },
  {
    title: "DFAM (Diploma In Financial & Management)",
    description: "Develop skills in financial analysis, investment strategies, and management principles to prepare for careers in finance and business administration.",
    image: "https://placehold.co/600x400.png",
    hint: "financial management",
    modules: ["Financial Management", "Management Accounting", "Investment Analysis", "Portfolio Management", "Business Law", "Strategic Management"],
  },
  {
    title: "DPC (Diploma In Programming Course)",
    description: "Master various programming languages and concepts for front-end, back-end, mobile, and machine learning development to become a versatile programmer.",
    image: "https://placehold.co/600x400.png",
    hint: "programming course",
    modules: ["C & C++ Programming", "Data Structures & Algorithms", "Python Programming", "Java Core & Advanced", "Web Development (HTML, CSS, JS)", "Database Management (SQL)"],
  },
  {
    title: "DGA (Diploma In Graphic & Animation)",
    description: "Explore graphic design principles, digital illustration, and animation techniques to create visually appealing content for various media platforms.",
    image: "https://placehold.co/600x400.png",
    hint: "graphic animation",
    modules: ["Design Principles", "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "2D Animation", "Video Editing"],
  },
  {
    title: "DEH (Diploma In Ethical Hacking)",
    description: "Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking practices to protect systems and networks from malicious attacks.",
    image: "https://placehold.co/600x400.png",
    hint: "ethical hacking",
    modules: ["Networking Fundamentals", "Linux Essentials", "Cryptography", "Web Application Hacking", "Metasploit Framework", "Ethical Hacking Labs"],
  },
  {
    title: "DDM (Diploma In Digital Marketing)",
    description: "Master digital marketing strategies, including SEO, social media marketing, content creation, and analytics to promote businesses in the online world.",
    image: "https://placehold.co/600x400.png",
    hint: "digital marketing",
    modules: ["Marketing Fundamentals", "SEO & SEM", "Social Media Marketing", "Content Marketing", "Email Marketing", "Google Analytics"],
  },
  {
    title: "Full-Stack Development",
    description: "Become proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, Node.js, and MySQL for comprehensive web development.",
    image: "https://placehold.co/600x400.png",
    hint: "full stack",
    modules: ["Front-End (HTML, CSS, JS)", "React.js", "Node.js & Express", "Databases (SQL/NoSQL)", "API Development", "Deployment & DevOps"],
  },
  {
    title: "Data Analytics",
    description: "Develop skills in data mining, statistical analysis, and data visualization to extract meaningful insights and support data-driven decision-making in businesses.",
    image: "https://placehold.co/600x400.png",
    hint: "data analytics",
    modules: ["Statistics Fundamentals", "Python for Data Science", "Data Wrangling with Pandas", "Data Visualization (Matplotlib, Seaborn)", "Machine Learning Basics", "Power BI"],
  },
];

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
                            <CardContainer>
                                <CardBody className="bg-card relative group/card w-auto h-auto rounded-xl p-6 border-black/[0.1] shadow-2xl">
                                    <DialogClose asChild>
                                        <button className="absolute top-4 right-4 z-50 text-muted-foreground hover:text-foreground">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close</span>
                                        </button>
                                    </DialogClose>
                                    <CardItem
                                    translateZ="50"
                                    className="text-2xl font-bold text-primary pr-8"
                                    >
                                    {selectedCourse.title}
                                    </CardItem>
                                    <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-muted-foreground text-sm max-w-sm mt-2"
                                    >
                                    Course Modules Roadmap
                                    </CardItem>
                                    <CardItem translateZ="80" className="w-full mt-6">
                                        <div className="space-y-4">
                                            {selectedCourse.modules.map((module, index) => (
                                                <div key={index} className="flex items-center">
                                                    <div className="flex-shrink-0 bg-accent text-accent-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                                                    <div className="h-px bg-border flex-grow mx-4"></div>
                                                    <p className="font-medium text-right">{module}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardItem>
                                    <div className="flex justify-end mt-8">
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
