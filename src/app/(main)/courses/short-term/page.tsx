
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
          slug: 'office-automation',
          title: 'Office Automation',
          description: 'Master essential office tools',
          modules: 6,
          topics: ['Word', 'Excel', 'PPT', 'OneNote', 'Outlook', 'Access'],
          image: "/images/courses/short/account/oa.png",
          hint: "office software"
        },
        {
          slug: 'ms-office',
          title: 'MS Office',
          description: 'Become proficient in Microsoft Office Suite.',
          modules: 6,
          topics: ['Word', 'Excel', 'PowerPoint', 'OneNote', 'Outlook', 'Access'],
          image: "/images/courses/short/account/msoffice.png",
          hint: "ms office"
        },
        {
          slug: 'advanced-excel',
          title: 'Advanced Excel',
          description: 'Master advanced Excel functions',
          modules: 5,
          topics: ['Formulas and Functions', 'Pivot Tables', 'Data Analysis Tools', 'Macros and VBA', 'Advanced Charting'],
          image: "/images/courses/short/account/advexcel.png",
          hint: "excel spreadsheet"
        },
        
        {
          slug: 'tally-gst',
          title: 'Tally Prime + GST',
          description: 'Learn GST compliance',
          modules: 5,
          topics: ['GST Registration', 'Filing GST Returns', 'Input Tax Credit', 'GST Audit', 'Compliance Management'],
          image: "/images/courses/short/account/tallygst.png",
          hint: "tax document"
        },
        {
          slug: 'taxation-auditing',
          title: 'Taxation Auditing',
          description: 'Understand tax laws and auditing',
          modules: 5,
          topics: ['Tax Laws Overview', 'Auditing Techniques', 'Tax Returns Preparation', 'Compliance and Regulations', 'Tax Planning Strategies'],
          image: "/images/courses/short/account/TaxationAuditing.png",
          hint: "auditing report"
        },
        {
          slug: 'management-skill',
          title: 'Management Skill',
          description: 'Develop leadership and team management',
          modules: 5,
          topics: ['Leadership Skills', 'Team Management', 'Conflict Resolution', 'Time Management', 'Decision Making'],
          image: "/images/courses/short/account/management.png",
          hint: "team management"
        },
        {
          slug: 'share-market',
          title: 'Share Market',
          description: 'Understand the basics of share trading',
          modules: 5,
          topics: ['Introduction to Share Market', 'Types of Shares', 'Stock Market Analysis', 'Trading Strategies', 'Risk Management'],
          image: "/images/courses/short/account/sharemarket.png",
          hint: "stock market chart"
        },
        {
          slug: 'ccc',
          title: 'CCC',
          description: 'Learn computer fundamentals',
          modules: 5,
          topics: ['Computer Fundamentals', 'Internet and Web Technologies', 'Word Processing', 'Spreadsheet Applications', 'Presentation Software'],
          image: "/images/courses/short/account/ccc.png",
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
            slug: 'web-development',
            title: 'Web Development',
            description: 'Build modern web applications',
            modules: 5,
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Backend Integration'],
            image: "/images/courses/short/programming/webdev.png",
            hint: "web development"
        },
        {
            slug: 'web-designing',
            title: 'Web Designing',
            description: 'Create visually appealing websites',
            modules: 5,
            topics: ['UI/UX Principles', 'Color Theory', 'Typography', 'Design Tools', 'Prototyping'],
            image: "/images/courses/short/programming/webdesign.png",
            hint: "web design"
        },
        {
            slug: 'dsa',
            title: 'DSA',
            description: 'Master data structures and algorithms',
            modules: 5,
            topics: ['Data Structures', 'Algorithms', 'Problem Solving', 'Complexity Analysis', 'Coding Challenges'],
            image: "/images/courses/short/programming/dsa.png",
            hint: "data structures"
        },
        {
            slug: 'c-programming',
            title: 'C',
            description: 'Learn C programming',
            modules: 5,
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++'],
            image: "/images/courses/short/programming/cprog.png",
            hint: "c code"
        },
        {
            slug: 'c-plus-plus',
            title: 'C++',
            description: 'Learn C++',
            modules: 5,
            topics: ['Syntax and Semantics', 'Object-Oriented Programming', 'Memory Management', 'File Handling', 'Data Structures in C/C++'],
            image: "/images/courses/short/programming/c++.png",
            hint: "c++ code"
        },
        {
            slug: 'python',
            title: 'Python',
            description: 'Learn Python programming',
            modules: 5,
            topics: ['Python Basics', 'Data Types and Structures', 'Functions and Modules', 'File I/O', 'Libraries and Frameworks'],
            image: "/images/courses/short/programming/python.png",
            hint: "python code"
        },
        {
            slug: 'front-end-development',
            title: 'Front-End Development',
            description: 'Build front-end web applications',
            modules: 5,
            topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Frontend Frameworks', 'Version Control with Git'],
            image: "/images/courses/short/programming/frontend.png",
            hint: "front end code"
        },
        {
            slug: 'back-end-development',
            title: 'Back-End Development',
            description: 'Build back-end web applications',
            modules: 5,
            topics: ['Server-Side Programming', 'Database Management', 'API Development', 'Authentication and Security', 'Deployment Strategies'],
            image: "/images/courses/short/programming/backend.png",
            hint: "back end code"
        },
        {
            slug: 'database',
            title: 'Database',
            description: 'Learn database management',
            modules: 5,
            topics: ['SQL Basics', 'Database Design', 'Data Normalization', 'Query Optimization', 'NoSQL Databases'],
            image: "/images/courses/short/programming/database.png",
            hint: "database diagram"
        },
        {
            slug: 'angular',
            title: 'Angular',
            description: 'Learn Angular framework',
            modules: 5,
            topics: ['Angular Basics', 'Components and Modules', 'Services and Dependency Injection', 'Routing and Navigation', 'State Management'],
            image: "/images/courses/short/programming/angular.png",
            hint: "angular code"
        },
        {
            slug: 'html-css',
            title: 'HTML-CSS',
            description: 'Master HTML and CSS',
            modules: 5,
            topics: ['HTML Structure', 'CSS Styling', 'Responsive Design', 'CSS Frameworks', 'Accessibility'],
            image: "/images/courses/short/programming/htmlcss.png",
            hint: "html css code"
        },
        {
            slug: 'javascript',
            title: 'JavaScript',
            description: 'Learn JavaScript',
            modules: 5,
            topics: ['JavaScript Basics', 'DOM Manipulation', 'Event Handling', 'AJAX and Fetch API', 'ES6 Features'],
            image: "/images/courses/short/programming/js.png",
            hint: "javascript code"
        },
        {
            slug: 'core-java',
            title: 'Core Java',
            description: 'Learn Java programming',
            modules: 5,
            topics: ['Java Basics', 'Object-Oriented Programming', 'Exception Handling', 'Collections Framework', 'Multithreading'],
            image: "/images/shortterm/java.png",
            hint: "java code"
        },
        {
            slug: 'c-sharp',
            title: 'C#',
            description: 'Learn C# programming',
            modules: 5,
            topics: ['C# Basics', 'Object-Oriented Programming', 'LINQ Queries', 'Asynchronous Programming', '.NET Framework'],
            image: "/images/courses/short/programming/csharp.png",
            hint: "c# code"
        },
        {
            slug: 'react',
            title: 'React',
            description: 'Learn React framework',
            modules: 5,
            topics: ['React Basics', 'Components and Props', 'State Management', 'React Router', 'Hooks'],
            image: "/images/courses/short/programming/react.png",
            hint: "react code"
        },
        {
            slug: 'advanced-java',
            title: 'Advanced Java',
            description: 'Learn advanced Java',
            modules: 5,
            topics: ['Java EE', 'Spring Framework', 'Hibernate', 'RESTful Services', 'Microservices'],
            image: "/images/courses/short/programming/advjava.png",
            hint: "java ee code"
        },
        {
            slug: 'power-bi',
            title: 'PowerBI',
            description: 'Learn PowerBI for data visualization',
            modules: 5,
            topics: ['Data Visualization', 'DAX Functions', 'Power Query', 'Report Sharing', 'Dashboard Creation'],
            image: "/images/courses/short/programming/powerbi.png",
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
            slug: 'seo',
            title: 'SEO',
            description: 'Optimize websites for search engines',
            modules: 5,
            topics: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'SEO Tools'],
            image: "/images/courses/short/dm/SEO.png",
            hint: "seo analysis"
        },
        {
            slug: 'smm',
            title: 'SMM',
            description: 'Manage social media marketing',
            modules: 5,
            topics: ['Social Media Strategy', 'Content Creation', 'Engagement Techniques', 'Analytics', 'Community Management'],
            image: "/images/courses/short/dm/smm.png",
            hint: "social media marketing"
        },
        {
            slug: 'sem',
            title: 'SEM',
            description: 'Manage search engine marketing',
            modules: 5,
            topics: ['PPC Campaigns', 'Ad Copywriting', 'Bid Management', 'Conversion Tracking', 'A/B Testing'],
            image: "/images/courses/short/dm/sem.png",
            hint: "search engine marketing"
        },
        {
            slug: 'wordpress',
            title: 'WordPress',
            description: 'Build and manage WordPress websites',
            modules: 5,
            topics: ['WordPress Setup', 'Theme Customization', 'Plugin Management', 'SEO for WordPress', 'Security Best Practices'],
            image: "/images/courses/short/dm/wordpress.png",
            hint: "wordpress dashboard"
        },
        {
            slug: 'content-creation',
            title: 'Content Creation',
            description: 'Create engaging content',
            modules: 5,
            topics: ['Blogging', 'Video Content', 'Social Media Posts', 'Copywriting', 'Content Strategy'],
            image: "/images/courses/short/dm/Content.png",
            hint: "content creation"
        },
        {
            slug: 'facebook-google-ads',
            title: 'Facebook & Google Ads',
            description: 'Manage paid ad campaigns',
            modules: 5,
            topics: ['Facebook Ads', 'Google Ads', 'Campaign Management', 'Ad Copywriting', 'Conversion Tracking'],
            image: "/images/courses/short/dm/facebookgoogleads.png",
            hint: "social media ads"
        },
        {
            slug: 'smo',
            title: 'SMO',
            description: 'Manage social media optimization',
            modules: 5,
            topics: ['Social Media Strategy', 'Content Planning', 'Engagement Techniques', 'Analytics', 'Community Management'],
            image: "/images/courses/short/dm/SMO.png",
            hint: "social media optimization"
        },
        {
            slug: 'google-analytics',
            title: 'Google Analytics',
            description: 'Track website performance',
            modules: 5,
            topics: ['Setting Up Google Analytics', 'Understanding Metrics', 'Tracking Conversions', 'Reporting', 'Data Interpretation'],
            image: "/images/courses/short/dm/googleanalytics.png",
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
        slug: 'coreldraw',
        title: 'CorelDRAW',
        description: 'Learn vector graphics design',
        modules: 5,
        topics: ['Vector Graphics', 'Logo Design', 'Layout Design', 'Typography', 'Color Management'],
        image: "/images/courses/short/graphics/CorelDRAW.png",
        hint: "vector design"
      },
      {
        slug: 'adobe-photoshop',
        title: 'Adobe Photoshop',
        description: 'Master photo editing',
        modules: 5,
        topics: ['Photo Editing', 'Retouching Techniques', 'Layer Management', 'Color Correction', 'Graphic Design'],
        image: "/images/courses/short/graphics/AdobePhotoshop.png",
        hint: "photoshop editing"
      },
      {
        slug: 'adobe-illustrator',
        title: 'Adobe Illustrator',
        description: 'Create vector illustrations',
        modules: 5,
        topics: ['Vector Illustration', 'Logo Creation', 'Infographics', 'Icon Design', 'Print Design'],
        image: "/images/courses/short/graphics/Illustrator.png",
        hint: "illustrator art"
      },
      {
        slug: 'adobe-indesign',
        title: 'Adobe InDesign',
        description: 'Learn layout design',
        modules: 5,
        topics: ['Layout Design', 'Typography', 'Print Production', 'Interactive PDFs', 'Book Design'],
        image: "/images/courses/short/graphics/InDesign.png",
        hint: "indesign layout"
      },
      {
        slug: 'video-sound-editing',
        title: 'Video|Sound Editing',
        description: 'Edit videos and audio',
        modules: 5,
        topics: ['Video Editing Basics', 'Audio Editing Techniques', 'Color Grading', 'Motion Graphics', 'Exporting and Compression'],
        image: "/images/courses/short/graphics/PremierePro.png",  // Used PremierePro as closest match
        hint: "video editing"
      },
      {
        slug: 'adobe-animation',
        title: 'Adobe Animation',
        description: 'Create animations',
        modules: 5,
        topics: ['Animation Principles', 'Character Animation', 'Motion Graphics', 'Storyboarding', 'Exporting Animations'],
        image: "/images/courses/short/graphics/animates.png",
        hint: "character animation"
      },
      {
        slug: '3d-max',
        title: '3D MAX',
        description: 'Learn 3D modeling',
        modules: 5,
        topics: ['3D Modeling', 'Texturing', 'Lighting Techniques', 'Animation', 'Rendering'],
        image: "/images/courses/short/graphics/3DMAX.png",
        hint: "3d modeling"
      },
      {
        slug: 'canva-design',
        title: 'Canva Design',
        description: 'Create designs for social media',
        modules: 5,
        topics: ['Graphic Design Basics', 'Social Media Graphics', 'Presentation Design', 'Branding', 'Marketing Materials'],
        image: "/images/courses/short/graphics/Canva.png",
        hint: "canva design"
      },
      {
        slug: 'after-effects',
        title: 'After Effects',
        description: 'Create motion graphics and visual effects.',
        modules: 5,
        topics: ['Motion Graphics', 'Visual Effects', 'Compositing', 'Animation', 'Exporting'],
        image: "/images/courses/short/graphics/AfterEffects.png",
        hint: "motion graphics"
      },
      {
        slug: 'premiere-pro',
        title: 'Premiere Pro',
        description: 'Learn professional video editing.',
        modules: 5,
        topics: ['Video Editing', 'Audio Editing', 'Color Correction', 'Titling', 'Exporting'],
        image: "/images/courses/short/graphics/PremierePro.png",
        hint: "video editing software"
      },
      {
        slug: 'figma',
        title: 'Figma',
        description: 'Design and prototype user interfaces.',
        modules: 5,
        topics: ['UI Design', 'Prototyping', 'Collaboration', 'Design Systems', 'Components'],
        image: "/images/courses/short/graphics/Figma.png",
        hint: "ui design figma"
      },
      {
        slug: 'autocad',
        title: 'AutoCAD',
        description: 'Learn 2D and 3D design and drafting.',
        modules: 5,
        topics: ['2D Drafting', '3D Modeling', 'Technical Drawing', 'Layouts', 'Plotting'],
        image: "/images/courses/short/graphics/AutoCAD.png",
        hint: "autocad drawing"
      },
      {
        slug: 'revit',
        title: 'Revit',
        description: 'Learn BIM for architectural design.',
        modules: 5,
        topics: ['BIM Modeling', 'Architectural Design', 'Construction Documentation', 'Collaboration', 'Families'],
        image: "/images/courses/short/graphics/Revit.png",
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
                                            <Link href={`/courses/details/${course.slug}`}>Learn More</Link>
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
