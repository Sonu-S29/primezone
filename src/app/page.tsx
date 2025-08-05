
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Target, Award, BookOpen, User, Calendar, CheckCircle, Phone, Download, Reply, Clock, Users, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BrochureDownloadForm from "@/components/brochure-download-form";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import HeroSlider from "@/components/hero-slider";
import FeaturedCoursesCarousel from "@/components/featured-courses-carousel";

const allCourses = [
    "Diploma in Computer Application & Programming (DCAP)",
    "Diploma in Financial Accounting (DFA)",
    "Diploma in Web Development (DWD)",
    "Diploma in Graphic Designing (DGD)",
    "Advanced Tally Prime with GST",
    "Certificate in Web Designing",
    "C & C++ Programming",
    "Python for Data Science",
  ];

const testimonials = [
  {
    name: "John Doe",
    course: "Web Development",
    avatar: "https://placehold.co/100x100.png",
    hint: "smiling student",
    story: "Primezone provided me with the skills I needed to land my dream job as a web developer. The instructors are fantastic and the curriculum is top-notch."
  },
  {
    name: "Jane Smith",
    course: "Diploma in Computer Application",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional woman",
    story: "The diploma course gave me a solid foundation in computer applications. I feel much more confident in my technical abilities now. Highly recommended!"
  },
  {
    name: "Samuel Green",
    course: "Advanced Tally Prime",
    avatar: "https://placehold.co/100x100.png",
    hint: "happy person",
    story: "The Tally Prime course was incredibly practical. I was able to apply what I learned directly to my business. The hands-on approach is excellent."
  },
  {
    name: "Emily White",
    course: "Diploma in Graphic Designing",
    avatar: "https://placehold.co/100x100.png",
    hint: "creative designer",
    story: "The graphic design course was amazing! The instructors were so supportive and I learned so much. I now have a professional portfolio I'm proud of."
  },
  {
    name: "Michael Brown",
    course: "Python for Data Science",
    avatar: "https://placehold.co/100x100.png",
    hint: "data analyst",
    story: "I had no programming experience, but the Python course was very beginner-friendly. I'm now able to analyze data and create visualizations with ease."
  },
  {
    name: "Sarah Johnson",
    course: "C & C++ Programming",
    avatar: "https://placehold.co/100x100.png",
    hint: "software developer",
    story: "A fantastic course for anyone looking to get into software development. The concepts were explained clearly and the projects were challenging and fun."
  }
];

const whyChooseUsItems = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Commitment',
      description: 'We are dedicated to providing the highest quality education and fostering a learning environment where students can thrive and achieve their career goals.',
      details: ['Quality First', 'Student Success', 'Continuous Improvement']
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Our Focus',
      description: 'Our focus is on practical, hands-on training that equips students with the skills and knowledge demanded by the industry today.',
      details: ['Industry Aligned', 'Practical Skills', 'Project-based Learning']
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Our Goal',
      description: 'Our goal is to empower our students to become skilled professionals and leaders in the tech industry, ready to take on new challenges.',
      details: ['Empowerment', 'Leadership', 'Future-Ready']
    }
  ];

const welcomeFeatures = [
    "Award Winning",
    "Professional Staff",
    "Free Counseling",
    "Fair Prices"
];

const empoweringFeatures = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Best In Industry",
      description: "Primezone Computer Education, established in 2020, is committed to delivering industry-leading computer education. We focus on providing cutting-edge courses that align with current market demands, ensuring our students are well-prepared for successful careers in the ever-evolving tech industry."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award Winning",
      description: "Primezone's commitment to excellence has been recognized through numerous awards and accolades. Our innovative teaching methods, state-of-the-art facilities, and outstanding student outcomes have positioned us as a leader in computer education, earning us recognition from industry experts and educational institutions alike."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Staff",
      description: "Primezone boasts a team of highly qualified and experienced professionals who are passionate about teaching. Our instructors are industry experts with practical knowledge, ensuring that students receive not just theoretical education but also valuable insights into real-world applications and current industry practices."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Free Counseling",
      description: "Primezone offers free career counseling to all students and prospective learners. Our experienced counselors provide personalized guidance to help you choose the right course, understand career paths in the tech industry, and make informed decisions about your educational journey. We're committed to supporting your success every step of the way."
    }
  ];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>
      
      {/* Why Choose Us Section */}
        <section className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Our commitment to excellence and student success sets us apart.
            </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUsItems.map((item, index) => (
                    <div key={index} className="flip-card h-56">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card className="text-center glass-effect h-full flex flex-col justify-center p-4">
                                    <CardHeader className="p-1">
                                        <div className="mx-auto bg-primary text-primary-foreground rounded-full p-2 w-fit">
                                            {item.icon}
                                        </div>
                                        <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-1">
                                        <p className="text-xs">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flip-card-back">
                                <Card className="text-center glass-effect h-full flex flex-col justify-center p-4">
                                    <CardHeader className="p-1">
                                        <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-1">
                                        <ul className="space-y-1 text-left">
                                            {item.details.map((detail, i) => (
                                                <li key={i} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                                    <span className="text-xs">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Welcome Section */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Welcome to Primezone Computer Education</h2>
                    <div className="w-24 h-1 bg-accent mt-2"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    PRIMEZONE COMPUTER EDUCATION was founded in 2020. It was instrumental in bringing computer education within the reach of common people, supporting students to add professional skills and achieve higher goals in life.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {welcomeFeatures.map(feature => (
                        <div key={feature} className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 items-center pt-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent text-accent-foreground rounded-full">
                           <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-muted-foreground">Call to ask any question</p>
                            <a href="tel:+919769730087" className="text-lg font-bold text-primary hover:underline">+91 9769730087</a>
                        </div>
                    </div>
                    <Button asChild size="lg">
                        <Link href="/contact">Request A Quote</Link>
                    </Button>
                </div>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x600.png"
                alt="Primezone Education Crest"
                width={600}
                height={600}
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="education logo"
              />
            </div>
          </div>
        </section>

      {/* Featured Courses Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Courses</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Kickstart your career with our most popular courses.
            </p>
          </div>
          <FeaturedCoursesCarousel />
           <div className="text-center mt-12">
            <Button asChild>
              <Link href="/courses/diploma">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Request a Quote Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <p className="font-semibold text-accent">REQUEST A QUOTE</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Need A Free Quote? Please Feel Free to Contact Us</h2>
                <div className="w-24 h-1 bg-accent"></div>

                <div className="flex items-center gap-4">
                    <Reply className="h-6 w-6 text-accent"/>
                    <p className="font-semibold">Reply within 24 hours</p>
                </div>
                <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-accent"/>
                    <p className="font-semibold">24 hrs telephone support</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                    It might be helpful to include information like the date you want your course, the date you want to ensure suitability, and the reason you're choosing this course. This can help in the class to respond accurately to your request. You can also provide a list of questions and include your contact information so that any course query we can contact you.
                </p>

                <div className="flex items-center gap-4 pt-4">
                    <div className="p-4 bg-accent text-accent-foreground rounded-lg">
                       <Phone className="h-8 w-8" />
                    </div>
                    <div>
                        <p className="text-muted-foreground">Call to ask any question</p>
                        <a href="tel:+919769730087" className="text-2xl font-bold text-primary hover:underline">+91 9769730087</a>
                    </div>
                </div>
            </div>
            <Card className="bg-accent/20 p-8 rounded-2xl">
                <CardContent className="p-0">
                    <form className="space-y-4">
                        <div className="space-y-2">
                           <Label htmlFor="quoteName" className="sr-only">Your Name</Label>
                           <Input id="quoteName" placeholder="Your Name" className="bg-background"/>
                        </div>
                         <div className="space-y-2">
                           <Label htmlFor="quoteEmail" className="sr-only">Your Email</Label>
                           <Input id="quoteEmail" type="email" placeholder="Your Email" className="bg-background"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="quoteCourse" className="sr-only">Select a Course</Label>
                            <Select>
                                <SelectTrigger id="quoteCourse" className="bg-background">
                                    <SelectValue placeholder="Select a Course" />
                                </SelectTrigger>
                                <SelectContent>
                                    {allCourses.map((course) => (
                                        <SelectItem key={course} value={course}>{course}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                           <Label htmlFor="quoteMessage" className="sr-only">Message</Label>
                           <Textarea id="quoteMessage" placeholder="Message" rows={4} className="bg-background"/>
                        </div>
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">Request A Quote</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Empowering Your Career Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <p className="font-semibold text-accent">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mt-2">Empowering your career journey with in-demand skills and knowledge</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 space-y-8">
                {empoweringFeatures.slice(0, 2).map((feature, index) => (
                    <div key={index} className="text-right">
                        <div className="inline-flex items-center gap-4">
                           <div className="text-right">
                               <h3 className="font-bold text-lg">{feature.title}</h3>
                               <p className="text-muted-foreground text-sm">{feature.description}</p>
                           </div>
                           <div className="p-3 bg-accent text-accent-foreground rounded-lg">
                               {feature.icon}
                           </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:col-span-4">
                <Image 
                    src="https://placehold.co/400x500.png" 
                    alt="Computer lab"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-xl mx-auto"
                    data-ai-hint="computer lab"
                />
            </div>
            <div className="md:col-span-4 space-y-8">
                {empoweringFeatures.slice(2, 4).map((feature, index) => (
                    <div key={index} className="text-left">
                        <div className="inline-flex items-center gap-4">
                           <div className="p-3 bg-accent text-accent-foreground rounded-lg">
                               {feature.icon}
                           </div>
                           <div>
                               <h3 className="font-bold text-lg">{feature.title}</h3>
                               <p className="text-muted-foreground text-sm">{feature.description}</p>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Success Stories</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hear what our students have to say about their journey with us.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <Card key={index} className="glass-effect flex-shrink-0 w-80 md:w-96 mx-4">
                        <CardContent className="pt-6">
                            <div className="flex items-center mb-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="ml-4">
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground italic">"{testimonial.story}"</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
       {/* Call to Action for Brochure */}
       <section className="bg-primary text-primary-foreground">
        <Dialog>
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4 font-headline">Ready to Start Your Journey?</h2>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    Download our brochure to get detailed information about all our courses, fee structures, and admission process.
                </p>
                <DialogTrigger asChild>
                    <Button size="lg" variant="secondary">Download Brochure</Button>
                </DialogTrigger>
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
    

    
