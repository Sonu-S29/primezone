
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Calculator, Code, Megaphone, Paintbrush, CheckCircle, Clock, Users, BookOpen, Download, Filter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BrochureDownloadForm from "@/components/brochure-download-form";
import Image from "next/image";


const courseData = [
  {
    id: "accounting",
    name: "Account",
    description: "Master accounting and finance",
    icon: <Calculator className="h-8 w-8" />,
    courses: [
        {
          title: 'Office Automation',
          description: 'Master essential office tools',
          modules: 5,
          topics: ['Word Processing', 'Spreadsheet Management', 'Presentation Software', 'Email Communication', 'Basic IT Skills'],
          image: "/images/shortterm/OA.png",
          hint: "office software"
        },
        {
          title: 'Advanced Excel',
          description: 'Master advanced Excel functions',
          modules: 5,
          topics: ['Formulas and Functions', 'Pivot Tables', 'Data Analysis Tools', 'Macros and VBA', 'Advanced Charting'],
          image: "/images/shortterm/advexcel.png",
          hint: "excel spreadsheet"
        },
        
        {
          title: 'Tally Prime + GST',
          description: 'Learn GST compliance',
          modules: 5,
          topics: ['GST Registration', 'Filing GST Returns', 'Input Tax Credit', 'GST Audit', 'Compliance Management'],
          image: "/images/shortterm/tallygst.png",
          hint: "tax document"
        },
        {
          title: 'Taxation Auditing',
          description: 'Understand tax laws and auditing',
          modules: 5,
          topics: ['Tax Laws Overview', 'Auditing Techniques', 'Tax Returns Preparation', 'Compliance and Regulations', 'Tax Planning Strategies'],
          image: "https://placehold.co/600x400.png",
          hint: "auditing report"
        },
        {
          title: 'Management Skill',
          description: 'Develop leadership and team management',
          modules: 5,
          topics: ['Leadership Skills', 'Team Management', 'Conflict Resolution', 'Time Management', 'Decision Making'],
          image: "https://placehold.co/600x400.png",
          hint: "team management"
        },
        {
          title: 'Share Market',
          description: 'Understand the basics of share trading',
          modules: 5,
          topics: ['Introduction to Share Market', 'Types of Shares', 'Stock Market Analysis', 'Trading Strategies', 'Risk Management'],
          image: "https://placehold.co/600x400.png",
          hint: "stock market chart"
        },
        {
          title: 'CCC',
          description: 'Learn computer fundamentals',
          modules: 5,
          topics: ['Computer Fundamentals', 'Internet and Web Technologies', 'Word Processing', 'Spreadsheet Applications', 'Presentation Software'],
          image: "/images/shortterm/ccc.png",
          hint: "computer basics"
        }
    ]
  },
  {
    id: "programming",
    name: "Programming",
    description: "Learn coding and development",
    icon: <Code className="h-8 w-8" />,
    courses: [
        {
            title: 'Web Development',
            description: 'Build modern web applications',
            modules: 5,
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Backend Integration'],
            image: "/images/shortterm/web.png",
            hint: "web development"
        },
        {
            title: 'Web Designing',
            description: 'Create visually appealing websites',
            modules: 5,
            topics: ['UI/UX Principles', 'Color Theory', 'Typography', 'Design Tools', 'Prototyping'],
            image: "/images/shortterm/webd.png",
            hint: "web design"
        },
        {
            title: 'DSA',
            description: 'Master data structures and algorithms',
            modules: 5,
            topics: ['Data Structures', 'Algorithms', 'Problem Solving', 'Complexity Analysis', 'Coding Challenges'],
            image: "https://placehold.co/600x400.png",
            hint: "data structures"
        },
        {
            title: 'C',
            description: 'Learn C programming',
            modules: 5,
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++'],
            image: "/images/shortterm/c.png",
            hint: "c code"
        },
        {
            title: 'C++',
            description: 'Learn C++',
            modules: 5,
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++'],
            image: "/images/shortterm/c++.png",
            hint: "c++ code"
        },
        {
            title: 'Python',
            description: 'Learn Python programming',
            modules: 5,
            topics: ['Python Basics', 'Data Types and Structures', 'Functions and Modules', 'File I/O', 'Libraries and Frameworks'],
            image: "/images/shortterm/python.png",
            hint: "python code"
        },
        {
            title: 'Front-End Development',
            description: 'Build front-end web applications',
            modules: 5,
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Version Control with Git'],
            image: "https://placehold.co/600x400.png",
            hint: "front end code"
        },
        {
            title: 'Back-End Development',
            description: 'Build back-end web applications',
            modules: 5,
            topics: ['Server-Side Programming', 'Database Management', 'API Development', 'Authentication and Security', 'Deployment Strategies'],
            image: "https://placehold.co/600x400.png",
            hint: "back end code"
        },
        {
            title: 'Database',
            description: 'Learn database management',
            modules: 5,
            topics: ['SQL Basics', 'Database Design', 'Data Normalization', 'Query Optimization', 'NoSQL Databases'],
            image: "https://placehold.co/600x400.png",
            hint: "database diagram"
        },
        {
            title: 'Angular',
            description: 'Learn Angular framework',
            modules: 5,
            topics: ['Angular Basics', 'Components and Modules', 'Services and Dependency Injection', 'Routing and Navigation', 'State Management'],
            image: "https://placehold.co/600x400.png",
            hint: "angular code"
        },
        {
            title: 'HTML-CSS',
            description: 'Master HTML and CSS',
            modules: 5,
            topics: ['HTML Structure', 'CSS Styling', 'Responsive Design', 'CSS Frameworks', 'Accessibility'],
            image: "https://placehold.co/600x400.png",
            hint: "html css code"
        },
        {
            title: 'JavaScript',
            description: 'Learn JavaScript',
            modules: 5,
            topics: ['JavaScript Basics', 'DOM Manipulation', 'Event Handling', 'AJAX and Fetch API', 'ES6 Features'],
            image: "https://placehold.co/600x400.png",
            hint: "javascript code"
        },
        {
            title: 'Core Java',
            description: 'Learn Java programming',
            modules: 5,
            topics: ['Java Basics', 'Object-Oriented Programming', 'Exception Handling', 'Collections Framework', 'Multithreading'],
            image: "/images/shortterm/java.png",
            hint: "java code"
        },
        {
            title: 'C#',
            description: 'Learn C# programming',
            modules: 5,
            topics: ['C# Basics', 'Object-Oriented Programming', 'LINQ Queries', 'Asynchronous Programming', '.NET Framework'],
            image: "https://placehold.co/600x400.png",
            hint: "c# code"
        },
        {
            title: 'React',
            description: 'Learn React framework',
            modules: 5,
            topics: ['React Basics', 'Components and Props', 'State Management', 'React Router', 'Hooks'],
            image: "https://placehold.co/600x400.png",
            hint: "react code"
        },
        {
            title: 'Advanced Java',
            description: 'Learn advanced Java',
            modules: 5,
            topics: ['Java EE', 'Spring Framework', 'Hibernate', 'RESTful Services', 'Microservices'],
            image: "https://placehold.co/600x400.png",
            hint: "java ee code"
        },
        {
            title: 'PowerBI',
            description: 'Learn PowerBI for data visualization',
            modules: 5,
            topics: ['Data Visualization', 'DAX Functions', 'Power Query', 'Report Sharing', 'Dashboard Creation'],
            image: "/images/shortterm/powerbi.png",
            hint: "powerbi dashboard"
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
            modules: 5,
            topics: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'SEO Tools'],
            image: "https://placehold.co/600x400.png",
            hint: "seo analysis"
        },
        {
            title: 'SMM',
            description: 'Manage social media marketing',
            modules: 5,
            topics: ['Social Media Strategy', 'Content Creation', 'Engagement Techniques', 'Analytics', 'Community Management'],
            image: "https://placehold.co/600x400.png",
            hint: "social media marketing"
        },
        {
            title: 'SEM',
            description: 'Manage search engine marketing',
            modules: 5,
            topics: ['PPC Campaigns', 'Ad Copywriting', 'Bid Management', 'Conversion Tracking', 'A/B Testing'],
            image: "https://placehold.co/600x400.png",
            hint: "search engine marketing"
        },
        {
            title: 'WordPress',
            description: 'Build and manage WordPress websites',
            modules: 5,
            topics: ['WordPress Setup', 'Theme Customization', 'Plugin Management', 'SEO for WordPress', 'Security Best Practices'],
            image: "https://placehold.co/600x400.png",
            hint: "wordpress dashboard"
        },
        {
            title: 'Content Creation',
            description: 'Create engaging content',
            modules: 5,
            topics: ['Blogging', 'Video Content', 'Social Media Posts', 'Copywriting', 'Content Strategy'],
            image: "https://placehold.co/600x400.png",
            hint: "content creation"
        },
        {
            title: 'Facebook & Google Ads',
            description: 'Manage paid ad campaigns',
            modules: 5,
            topics: ['Facebook Ads', 'Google Ads', 'Campaign Management', 'Ad Copywriting', 'Conversion Tracking'],
            image: "https://placehold.co/600x400.png",
            hint: "social media ads"
        },
        {
            title: 'SMO',
            description: 'Manage social media optimization',
            modules: 5,
            topics: ['Social Media Strategy', 'Content Planning', 'Engagement Techniques', 'Analytics', 'Community Management'],
            image: "https://placehold.co/600x400.png",
            hint: "social media optimization"
        },
        {
            title: 'Google Analytics',
            description: 'Track website performance',
            modules: 5,
            topics: ['Setting Up Google Analytics', 'Understanding Metrics', 'Tracking Conversions', 'Reporting', 'Data Interpretation'],
            image: "https://placehold.co/600x400.png",
            hint: "analytics dashboard"
        }
    ]
  },
  {
    id: "graphics",
    name: "Graphics",
    description: "Create stunning visuals",
    icon: <Paintbrush className="h-8 w-8" />,
    courses: [
      {
        title: 'CorelDRAW',
        description: 'Learn vector graphics design',
        modules: 5,
        topics: ['Vector Graphics', 'Logo Design', 'Layout Design', 'Typography', 'Color Management'],
        image: "/images/courses/short/CorelDRAW.png",
        hint: "vector design"
      },
      {
        title: 'Adobe Photoshop',
        description: 'Master photo editing',
        modules: 5,
        topics: ['Photo Editing', 'Retouching Techniques', 'Layer Management', 'Color Correction', 'Graphic Design'],
        image: "/images/courses/short/AdobePhotoshop.png",
        hint: "photoshop editing"
      },
      {
        title: 'Adobe Illustrator',
        description: 'Create vector illustrations',
        modules: 5,
        topics: ['Vector Illustration', 'Logo Creation', 'Infographics', 'Icon Design', 'Print Design'],
        image: "/images/courses/short/Illustrator.png",
        hint: "illustrator art"
      },
      {
        title: 'Adobe InDesign',
        description: 'Learn layout design',
        modules: 5,
        topics: ['Layout Design', 'Typography', 'Print Production', 'Interactive PDFs', 'Book Design'],
        image: "/images/courses/short/InDesign.png",
        hint: "indesign layout"
      },
      {
        title: 'Video|Sound Editing',
        description: 'Edit videos and audio',
        modules: 5,
        topics: ['Video Editing Basics', 'Audio Editing Techniques', 'Color Grading', 'Motion Graphics', 'Exporting and Compression'],
        image: "/images/courses/short/PremierePro.png",  // Used PremierePro as closest match
        hint: "video editing"
      },
      {
        title: 'Adobe Animation',
        description: 'Create animations',
        modules: 5,
        topics: ['Animation Principles', 'Character Animation', 'Motion Graphics', 'Storyboarding', 'Exporting Animations'],
        image: "/images/courses/short/animates.png",
        hint: "character animation"
      },
      {
        title: '3D MAX',
        description: 'Learn 3D modeling',
        modules: 5,
        topics: ['3D Modeling', 'Texturing', 'Lighting Techniques', 'Animation', 'Rendering'],
        image: "/images/courses/short/3DMAX.png",
        hint: "3d modeling"
      },
      {
        title: 'Canva Design',
        description: 'Create designs for social media',
        modules: 5,
        topics: ['Graphic Design Basics', 'Social Media Graphics', 'Presentation Design', 'Branding', 'Marketing Materials'],
        image: "/images/courses/short/Canva.png",
        hint: "canva design"
      },
      {
        title: 'After Effects',
        description: 'Create motion graphics and visual effects.',
        modules: 5,
        topics: ['Motion Graphics', 'Visual Effects', 'Compositing', 'Animation', 'Exporting'],
        image: "/images/courses/short/AfterEffects.png",
        hint: "motion graphics"
      },
      {
        title: 'Premiere Pro',
        description: 'Learn professional video editing.',
        modules: 5,
        topics: ['Video Editing', 'Audio Editing', 'Color Correction', 'Titling', 'Exporting'],
        image: "/images/courses/short/PremierePro.png",
        hint: "video editing software"
      },
      {
        title: 'Figma',
        description: 'Design and prototype user interfaces.',
        modules: 5,
        topics: ['UI Design', 'Prototyping', 'Collaboration', 'Design Systems', 'Components'],
        image: "/images/courses/short/Figma.png",
        hint: "ui design figma"
      },
      {
        title: 'AutoCAD',
        description: 'Learn 2D and 3D design and drafting.',
        modules: 5,
        topics: ['2D Drafting', '3D Modeling', 'Technical Drawing', 'Layouts', 'Plotting'],
        image: "/images/courses/short/AutoCAD.png",
        hint: "autocad drawing"
      },
      {
        title: 'Revit',
        description: 'Learn BIM for architectural design.',
        modules: 5,
        topics: ['BIM Modeling', 'Architectural Design', 'Construction Documentation', 'Collaboration', 'Families'],
        image: "/images/courses/short/Revit.png",
        hint: "revit architecture"
      }
    ]
  },
];

export default function ShortTermCoursesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

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
        <div className="flex flex-col items-center mb-12">
            {/* Mobile Filter Button */}
            <Button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full mb-4"
            >
                <Filter className="mr-2 h-4 w-4" />
                Filter
            </Button>

            {/* Desktop Filters (always visible) */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
                 <Button
                    onClick={() => setActiveFilter(null)}
                    variant={activeFilter === null ? "default" : "outline"}
                    className="h-10"
                >
                    All
                </Button>
                {courseData.map((category) => (
                    <Button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    className="h-10"
                    >
                    <div className="flex items-center gap-3 p-2">
                        {category.icon}
                        <div className="text-left">
                        <p className="font-bold">{category.name}</p>
                        </div>
                    </div>
                    </Button>
                ))}
            </div>

            {/* Mobile Filters (conditionally rendered) */}
            {showFilters && (
                <div className="md:hidden flex flex-nowrap overflow-x-auto justify-start gap-2 pb-2 w-full animate-scale-in-center">
                    <Button
                        onClick={() => {setActiveFilter(null); setShowFilters(false);}}
                        variant={activeFilter === null ? "default" : "outline"}
                        className="h-10 flex-shrink-0"
                    >
                        All
                    </Button>
                    {courseData.map((category) => (
                        <Button
                        key={category.id}
                        onClick={() => {setActiveFilter(category.id); setShowFilters(false);}}
                        variant={activeFilter === category.id ? "default" : "outline"}
                        className="h-10 flex-shrink-0"
                        >
                        {category.name}
                        </Button>
                    ))}
                </div>
            )}
        </div>


        {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
                <Card key={course.title} className="bg-white flex flex-col justify-between overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl">
                    <div className="relative h-40 w-full p-4 bg-white rounded-t-2xl">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            style={{objectFit: "contain"}}
                            data-ai-hint={course.hint}
                            className=""
                        />
                    </div>
                    <CardHeader className="space-y-1">
                        <div className="flex justify-between items-start">
                            <p className="text-sm text-blue-500 font-semibold">Short Term</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">View Topics</Button>
                                </DialogTrigger>
                                <DialogContent className="bg-white/80 backdrop-blur-sm">
                                    <DialogHeader>
                                        <DialogTitle>{course.title}</DialogTitle>
                                        <DialogDescription>Key topics you will learn:</DialogDescription>
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
                                        <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="secondary"><Download className="mr-2"/> Download Brochure</Button>
                                        </DialogTrigger>
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
                                    </CardFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    </CardContent>
                    <CardFooter className="bg-blue-50 text-blue-900 p-3 rounded-b-2xl flex justify-between items-center text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            <span>{course.modules} Modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>{course.topics.length} Total Topics</span>
                        </div>
                    </CardFooter>
                </Card>
            ))}
            </div>
      </section>
    </div>
  );
}

    