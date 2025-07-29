
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Calculator, Code, Megaphone, Paintbrush, CheckCircle, MoreVertical, Clock, Users, BookOpen, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BrochureDownloadForm from "@/components/brochure-download-form";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";


const courseData = [
  {
    id: "accounting",
    name: "Account Courses",
    description: "Master accounting and finance",
    icon: <Calculator className="h-8 w-8" />,
    courses: [
        {
          title: 'Office Automation',
          description: 'Master essential office tools',
          topics: ['Word Processing', 'Spreadsheet Management', 'Presentation Software', 'Email Communication', 'Basic IT Skills']
        },
        {
          title: 'Advanced Excel',
          description: 'Master advanced Excel functions',
          topics: ['Formulas and Functions', 'Pivot Tables', 'Data Analysis Tools', 'Macros and VBA', 'Advanced Charting']
        },
        {
          title: 'Tally Prime',
          description: 'Learn Tally ERP 9 basics',
          topics: ['Accounting Basics', 'Inventory Management', 'GST Compliance', 'Financial Reporting', 'Payroll Management']
        },
        {
          title: 'Tally Prime GST',
          description: 'Learn GST compliance',
          topics: ['GST Registration', 'Filing GST Returns', 'Input Tax Credit', 'GST Audit', 'Compliance Management']
        },
        {
          title: 'Taxation Auditing',
          description: 'Understand tax laws and auditing',
          topics: ['Tax Laws Overview', 'Auditing Techniques', 'Tax Returns Preparation', 'Compliance and Regulations', 'Tax Planning Strategies']
        },
        {
          title: 'Management Skill',
          description: 'Develop leadership and team management',
          topics: ['Leadership Skills', 'Team Management', 'Conflict Resolution', 'Time Management', 'Decision Making']
        },
        {
          title: 'Share Market',
          description: 'Understand the basics of share trading',
          topics: ['Introduction to Share Market', 'Types of Shares', 'Stock Market Analysis', 'Trading Strategies', 'Risk Management']
        },
        {
          title: 'CCC',
          description: 'Learn computer fundamentals',
          topics: ['Computer Fundamentals', 'Internet and Web Technologies', 'Word Processing', 'Spreadsheet Applications', 'Presentation Software']
        }
    ]
  },
  {
    id: "programming",
    name: "Programming Courses",
    description: "Learn coding and development",
    icon: <Code className="h-8 w-8" />,
    courses: [
        {
            title: 'Web Development',
            description: 'Build modern web applications',
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Backend Integration']
        },
        {
            title: 'Web Designing',
            description: 'Create visually appealing websites',
            topics: ['UI/UX Principles', 'Color Theory', 'Typography', 'Design Tools', 'Prototyping']
        },
        {
            title: 'DSA',
            description: 'Master data structures and algorithms',
            topics: ['Data Structures', 'Algorithms', 'Problem Solving', 'Complexity Analysis', 'Coding Challenges']
        },
        {
            title: 'C & C++',
            description: 'Learn C and C++ programming',
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++']
        },
        {
            title: 'Python',
            description: 'Learn Python programming',
            topics: ['Python Basics', 'Data Types and Structures', 'Functions and Modules', 'File I/O', 'Libraries and Frameworks']
        },
        {
            title: 'Front-End Development',
            description: 'Build front-end web applications',
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Version Control with Git']
        },
        {
            title: 'Back-End Development',
            description: 'Build back-end web applications',
            topics: ['Server-Side Programming', 'Database Management', 'API Development', 'Authentication and Security', 'Deployment Strategies']
        },
        {
            title: 'Database',
            description: 'Learn database management',
            topics: ['SQL Basics', 'Database Design', 'Data Normalization', 'Query Optimization', 'NoSQL Databases']
        },
        {
            title: 'Angular',
            description: 'Learn Angular framework',
            topics: ['Angular Basics', 'Components and Modules', 'Services and Dependency Injection', 'Routing and Navigation', 'State Management']
        },
        {
            title: 'HTML-CSS',
            description: 'Master HTML and CSS',
            topics: ['HTML Structure', 'CSS Styling', 'Responsive Design', 'CSS Frameworks', 'Accessibility']
        },
        {
            title: 'JavaScript',
            description: 'Learn JavaScript',
            topics: ['JavaScript Basics', 'DOM Manipulation', 'Event Handling', 'AJAX and Fetch API', 'ES6 Features']
        },
        {
            title: 'Core Java',
            description: 'Learn Java programming',
            topics: ['Java Basics', 'Object-Oriented Programming', 'Exception Handling', 'Collections Framework', 'Multithreading']
        },
        {
            title: 'C#',
            description: 'Learn C# programming',
            topics: ['C# Basics', 'Object-Oriented Programming', 'LINQ Queries', 'Asynchronous Programming', '.NET Framework']
        },
        {
            title: 'React',
            description: 'Learn React framework',
            topics: ['React Basics', 'Components and Props', 'State Management', 'React Router', 'Hooks']
        },
        {
            title: 'Advanced Java',
            description: 'Learn advanced Java',
            topics: ['Java EE', 'Spring Framework', 'Hibernate', 'RESTful Services', 'Microservices']
        },
        {
            title: 'PowerBI',
            description: 'Learn PowerBI for data visualization',
            topics: ['Data Visualization', 'DAX Functions', 'Power Query', 'Report Sharing', 'Dashboard Creation']
        }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "Master online marketing",
    icon: <Megaphone className="h-8 w-8" />,
    courses: [
        {
            title: 'SEO',
            description: 'Optimize websites for search engines',
            topics: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'SEO Tools']
        },
        {
            title: 'SMM',
            description: 'Manage social media marketing',
            topics: ['Social Media Strategy', 'Content Creation', 'Engagement Techniques', 'Analytics', 'Community Management']
        },
        {
            title: 'SEM',
            description: 'Manage search engine marketing',
            topics: ['PPC Campaigns', 'Ad Copywriting', 'Bid Management', 'Conversion Tracking', 'A/B Testing']
        },
        {
            title: 'WordPress',
            description: 'Build and manage WordPress websites',
            topics: ['WordPress Setup', 'Theme Customization', 'Plugin Management', 'SEO for WordPress', 'Security Best Practices']
        },
        {
            title: 'Content Creation',
            description: 'Create engaging content',
            topics: ['Blogging', 'Video Content', 'Social Media Posts', 'Copywriting', 'Content Strategy']
        },
        {
            title: 'Email Marketing',
            description: 'Manage email campaigns',
            topics: ['Email Campaigns', 'List Building', 'A/B Testing', 'Analytics and Reporting', 'Automation']
        },
        {
            title: 'SMO',
            description: 'Manage social media optimization',
            topics: ['Social Media Strategy', 'Content Planning', 'Engagement Techniques', 'Analytics', 'Community Management']
        },
        {
            title: 'Google Analytics',
            description: 'Track website performance',
            topics: ['Setting Up Google Analytics', 'Understanding Metrics', 'Tracking Conversions', 'Reporting', 'Data Interpretation']
        }
    ]
  },
  {
    id: "graphics",
    name: "Graphics Courses",
    description: "Create stunning visuals",
    icon: <Paintbrush className="h-8 w-8" />,
    courses: [
        {
          title: 'CorelDRAW',
          description: 'Learn vector graphics design',
          topics: ['Vector Graphics', 'Logo Design', 'Layout Design', 'Typography', 'Color Management']
        },
        {
          title: 'Adobe Photoshop',
          description: 'Master photo editing',
          topics: ['Photo Editing', 'Retouching Techniques', 'Layer Management', 'Color Correction', 'Graphic Design']
        },
        {
          title: 'Adobe Illustrator',
          description: 'Create vector illustrations',
          topics: ['Vector Illustration', 'Logo Creation', 'Infographics', 'Icon Design', 'Print Design']
        },
        {
          title: 'Adobe InDesign',
          description: 'Learn layout design',
          topics: ['Layout Design', 'Typography', 'Print Production', 'Interactive PDFs', 'Book Design']
        },
        {
          title: 'Video|Sound Editing',
          description: 'Edit videos and audio',
          topics: ['Video Editing Basics', 'Audio Editing Techniques', 'Color Grading', 'Motion Graphics', 'Exporting and Compression']
        },
        {
          title: 'Adobe Animation',
          description: 'Create animations',
          topics: ['Animation Principles', 'Character Animation', 'Motion Graphics', 'Storyboarding', 'Exporting Animations']
        },
        {
          title: '3D MAX',
          description: 'Learn 3D modeling',
          topics: ['3D Modeling', 'Texturing', 'Lighting Techniques', 'Animation', 'Rendering']
        },
        {
          title: 'Canva Design',
          description: 'Create designs for social media',
          topics: ['Graphic Design Basics', 'Social Media Graphics', 'Presentation Design', 'Branding', 'Marketing Materials']
        }
    ]
  },
];

export default function ShortTermCoursesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredCourses = activeFilter
    ? courseData.find((category) => category.id === activeFilter)?.courses || []
    : courseData.flatMap((category) => category.courses);

  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Short-Term Courses</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Fast-track your skills with our specialized certificate programs. Perfect for professionals and students looking to upgrade their knowledge.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveFilter(null)}
            variant={activeFilter === null ? "default" : "outline"}
            className="h-10"
          >
            All Courses
          </Button>
          {courseData.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className="h-auto"
            >
              <div className="flex items-center gap-3 p-2">
                {category.icon}
                <div className="text-left">
                  <p className="font-bold">{category.name}</p>
                  <p className="text-xs font-normal">{category.description}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Course Grid */}
        <Dialog>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
                <Card key={course.title} className="bg-card/60 flex flex-col justify-between">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <p className="text-sm text-muted-foreground">Short Term</p>
                             <Button variant="ghost" size="icon" className="w-8 h-8">
                                <MoreVertical className="w-4 h-4"/>
                            </Button>
                        </div>
                        <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>Progress</span>
                                <span>20%</span>
                            </div>
                           <Progress value={20} className="h-2"/>
                       </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                            <Avatar className="border-2 border-card">
                                <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="professional man"/>
                                <AvatarFallback>V</AvatarFallback>
                            </Avatar>
                             <Avatar className="border-2 border-card">
                                <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="professional woman"/>
                                <AvatarFallback>K</AvatarFallback>
                            </Avatar>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                 <Button variant="outline" size="sm">View Topics</Button>
                            </DialogTrigger>
                             <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{course.title}</DialogTitle>
                                    <DialogDescription>
                                        Key topics you will learn in this course.
                                    </DialogDescription>
                                </DialogHeader>
                                <ul className="space-y-2 pt-2">
                                    {course.topics.map(topic => (
                                        <li key={topic} className="flex items-center text-sm">
                                            <CheckCircle className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                                <CardFooter className="flex-col items-stretch gap-2 p-0 pt-4">
                                     <Button asChild>
                                        <a href="tel:+919769730087"><Clock className="mr-2"/> Enroll Now</a>
                                    </Button>
                                    <DialogTrigger asChild>
                                        <Button variant="secondary"><Download className="mr-2"/> Download Brochure</Button>
                                    </DialogTrigger>
                                </CardFooter>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
            ))}
            </div>
             <DialogContent>
                <DialogHeader>
                    <DialogTitle>Download Brochure</DialogTitle>
                    <DialogDescription>
                        Please provide your details to receive the brochure.
                    </DialogDescription>
                </DialogHeader>
                <BrochureDownloadForm />
            </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
