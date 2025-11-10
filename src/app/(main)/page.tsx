
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
import React, { Suspense, lazy, useRef } from "react";
import HeroSlider from "@/components/hero-slider";
import FeaturedCoursesCarousel from "@/components/featured-courses-carousel";
import AccreditationLogos from "@/components/accreditation-logos";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";
import { allCoursesList } from "@/lib/course-data";

const TrendingCourses = lazy(() => import("@/components/trending-courses"));

const quoteCourses = [
    "Diploma course",
    "Short Term Course",
    "Career Counseling",
    "Other",
  ];

const testimonials = [
    { name: "Riddhi Mestry", course: "Data Analysis", story: "Primezone Computer Education is the best institute for programming, computer fundamentals, and data analysis. I gained real confidence working with Python, SQL, and Advanced Excel, and the practical exercises helped me build career-ready skills." },
    { name: "Madan Sunar", course: "Programming", story: "Best computer class for learning fundamentals like MS Word, Excel, PowerPoint, and also programming. Their training in C/C++, Python and Java gives beginners a clear path to advanced development." },
    { name: "Nirmayee Khot", course: "DIA & Digital Marketing", story: "Excellent faculty and a positive learning experience with lots of practical learning. Teachers explain things step-by-step — from DIA basics to modern topics like Digital Marketing and Data Analytics." },
    { name: "Anushka Gawade", course: "Web Development", story: "Great teaching across all courses — from Word, Excel, PPT to advanced subjects such as React, Django and PowerBI. The lessons are easy to follow and full of hands-on examples." },
    { name: "Bablu Kumar", course: "Vocational Courses", story: "Very good class 👍. I learned both basic computer skills and useful vocational courses like Tally + GST and SQL, which are immediately useful for jobs." },
    { name: "Fatima Salmani", course: "Graphic Designing & Data Analytics", story: "Best class! Teaching is clear and structured. They offer everything from Graphic Designing to Data Analytics, so it’s perfect for beginners and aspirants alike." },
    { name: "Yash Tripathi", course: "Data Analytics", story: "Best class in Jogeshwari. Supportive staff and quality training in PowerBI, Data Analytics, and practical courses that prepare you for real work." },
    { name: "Heer Jain", course: "DIA & Advanced Excel", story: "One of the best computer education institutes in Jogeshwari East. They cover everything — DIA (Word, Excel, PPT), Advanced Excel, and development courses like Python and Java." },
    { name: "Kesar Menge", course: "Advanced Excel & SQL", story: "Best computer coaching classes 🫶. I especially appreciated the Advanced Excel and SQL training — very hands-on and job-oriented." },
    { name: "Vivek Singh", course: "Tally & Graphic Designing", story: "Teaching quality is excellent. All teachers are helpful and friendly, and they cover a wide variety of courses including Tally + GST, Graphic Designing, and programming." },
    { name: "Amey Patel", course: "Programming", story: "Great class! The training is practical — I got hands-on experience in Python, HTML–CSS, and Excel, which boosted my confidence quickly." },
    { name: "Siddhesh Agre", course: "Web Development", story: "Fantastic experience — I learned many courses here. From DIA basics to Java, Django and React, the instructors are patient and thorough." },
    { name: "Alfiya Shaikh", course: "Advanced Excel & PowerBI", story: "Faculty is very helpful and kind. This is the best place for learners — they explained concepts in detail, especially Advanced Excel and PowerBI." },
    { name: "Shaikh Iqra", course: "SQL & Tally", story: "Teachers are very helpful and explain everything in an easy way. I gained strong skills in SQL, Tally + GST, and AutoCAD basics." },
    { name: "Jyoti Nagvekar", course: "Data Analytics & Python", story: "Excellent computer classes, friendly teachers, and a great atmosphere. Ideal for beginners (Word, Excel, PPT) and those seeking advanced courses like Data Analytics and Python." },
    { name: "Priyal Dalvi", course: "Digital Marketing & Graphic Designing", story: "Looking for the best computer institute? Visit Primezone. Knowledgeable teachers, practical courses (like Digital Marketing and Graphic Designing), and a supportive learning environment." },
    { name: "Trupti Shinde", course: "Basic Computer Course", story: "I am pursuing a Basic Computer Course at Primezone. The curriculum included MS Word, Excel, PowerPoint, plus introductions to Advanced Excel and PowerBI — very useful." },
    { name: "Yash Jangam", course: "Web Development", story: "Very excellent — perfect for computer education. I learned Python, SQL, and React, which have been extremely helpful for my projects and job prospects." },
    { name: "Shaila Gawade", course: "DIA & Tally", story: "Excellent teaching 👍👍. The class covers many courses like DIA, Advanced Excel, and Tally + GST. My overall experience was very positive and practical 🤗." },
    { name: "Shreeya Aras", course: "DFAM", story: "I joined a DFAM course here and had a great experience. Polite, helpful staff and courses that expand into Data Analytics and programming as you progress." },
    { name: "Prathamesh Salvi", course: "DFAM", story: "Such a nice class with well-supporting teaching staff. I’m doing DFAM — totally worth it — and the institute strongly supports learning Excel, Tally + GST, and programming essentials." },
    { name: "Nandini", course: "DIA", story: "A very good class where we learned a lot. The sessions balance theory and practice well, covering DIA basics up to more advanced tools." },
    { name: "Shaikh Afsha", course: "DIA & Advanced Excel", story: "I am doing DIA. I like the staff’s friendly teaching style — they teach clearly and make even technical topics like Advanced Excel approachable." },
    { name: "Saania Shaikh", course: "Computer Basics", story: "Teachers are very supportive. They helped me understand everything from Word and Excel basics to more career-oriented courses." },
    { name: "Atharva Shigawan", course: "Tally", story: "I started with zero knowledge and now I’m a Tally expert. The practical approach to Tally + GST made learning fast and effective." },
    { name: "Anway Rane", course: "SQL", story: "I began SQL with no prior experience; after completing the course I can confidently work with databases and queries. The SQL training is hands-on and clear." },
    { name: "Uzma Sufi", course: "Python, SQL, & PowerBI", story: "Very good experience. Teaching style is excellent and the faculty is experienced — especially strong in technical courses like Python, SQL, and PowerBI." },
    { name: "Harsh Warang", course: "Programming", story: "The teaching style inspired me to enjoy learning. Class environment is motivating and teachers are great — they explain everything, whether it’s programming or office automation." },
    { name: "Gaurav Gohil", course: "Graphic & Digital Marketing", story: "Nice — I learned many practical skills here and the overall experience was excellent. Courses like Graphic Designing and Digital Marketing are well structured." },
    { name: "Mohit Yadav", course: "Skill Building", story: "✨Primezone Computer Education Centre – Goregaon Branch✨ is best for skill-building. Trainers teach smoothly and the practical labs helped me master tools quickly." },
    { name: "Falak Shaikh", course: "DIA & PowerBI", story: "Best computer class — friendly environment and clear lessons. Good mix of basic DIA topics and advanced options like PowerBI." },
    { name: "Pravin Patel", course: "MS Office", story: "Good teaching — trainers are patient and cover topics thoroughly, from MS Office to job-oriented courses." },
    { name: "Sara Shaikh", course: "Diploma in Accounting", story: "All teaching staff were cooperative. I’m doing the Diploma in Accounting, which is wonderful — practical and relevant for placements." },
    { name: "Rishabh Yadav (Sonal)", course: "Skill Development", story: "My experience here is great 👍. The institute focuses on real skills and offers a variety of courses that helped me upskill quickly." },
    { name: "Afreen Khilaniya", course: "DIA", story: "My experience was great. Teachers are friendly and supportive, and the classes (from DIA to advanced subjects) are well organized." },
    { name: "Preksha Patil", course: "Computer Class", story: "I thoroughly enjoyed this class and gained much knowledge. Instructors are kind and competent — good for both beginners and advanced learners." },
    { name: "Samanvi Acharya", course: "Data Analytics", story: "The computer class was comprehensive and covered everything I hoped to learn. The instructor was clear and practical, covering Word, Excel, and introductory Data Analytics." },
    { name: "Shweta Kandu", course: "Computer Course", story: "Studying at Primezone was a great experience — friendly and cooperative staff, and courses that are both practical and career-oriented." },
    { name: "Ganesh Rane", course: "Office Automation", story: "I took Office Automation and Advanced Excel at Primezone and really benefited. The training is job-focused and helped me improve productivity significantly." },
    { name: "Dhrisha Shetty", course: "Data Analysis", story: "Best class with good faculty to learn data analysis course. Currently learning Python, Power BI, Tableau and Advanced Excel. The trainers are very professional and flexible learning hours available." },
    { name: "Abhijeet Shetty", course: "Data Analytics", story: "Best faculty for Data Analytics course. Currently I am pursuing Python course. The quality of content and the training given is best." },
    { name: "Shubham Zore", course: "Tally", story: "I am Tally student in Primezone in Vile Parle branch. Teachers are helpful, cooperative and friendly." },
    { name: "Kevan Fernandes", course: "MS Office & Tally", story: "I am student of Primezone computer institution. I have taken Word, PowerPoint, Excel, Advanced Excel, Tally Prime with GST..." },
    { name: "Keith Fernandes", course: "MS Office", story: "I am student of Primezone. I am currently pursuing MS Office, Excel, PPT, Advanced Excel, etc. The management is great, easy to be learned by the faculty. Amazing experience till date." },
    { name: "Arshad Shaikh", course: "Review", story: "" },
    { name: "Siddhesh Agre", course: "JavaScript", story: "It's a best experience for JavaScript and many more courses." },
    { name: "Ananya Paigankar", course: "Coding", story: "Great place to learn coding. 10/10" },
    { name: "Samkit Rambhia", course: "General", story: "Best faculty." },
    { name: "Sanchita Sail", course: "General", story: "I’m in Vile Parle branch. Teachers are very helpful and supportive, they clear all doubts of us." },
    { name: "Sonam Singh", course: "Review", story: "" },
    { name: "Jaiswar Jii (Itz Denny)", course: "Diploma in Financial Accounting", story: "I'm doing DFA course (Diploma in Financial Accounting) in Primezone Computer Institute which is located in Vile Parle..." },
    { name: "UP 62 Sanjay Jaiswar K", course: "Diploma in Financial Accounting", story: "I have taken DFA (Diploma in Financial Accounting). This is an amazing institute, they have nice teachers teaching the course. I got best discount by Primezone Computer Institute." },
    { name: "Sachin Kumar", course: "Diploma in Financial Accounting", story: "I’m taking the DFA (Diploma in Financial Accounting) in Primezone Computer Education in Vile Parle East." },
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
   const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="-mt-20">
        <HeroSlider />
      </section>
      

      {/* Accreditation Logos Section */}
      <section className="container mx-auto px-4">
        <div className="w-[85%] md:w-[75%] mx-auto">
          <AccreditationLogos />
        </div>
      </section>

      {/* Trending Courses Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Diploma Courses for your Better Career</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Explore our most popular diploma programs designed to launch your career.
                    </p>
                </div>
                <Suspense fallback={<Skeleton className="h-64 w-full" />}>
                  <TrendingCourses />
                </Suspense>
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
                        <a href="tel:+919769730087" className="text-2xl font-bold text-primary hover:underline">(+91) 97697 30087</a>
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
                                    {quoteCourses.map((course) => (
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
                    <div key={index} className="text-left md:text-right">
                        <div className="flex md:flex-row-reverse items-center gap-4">
                           <div className="flex-grow">
                               <h3 className="font-bold text-lg">{feature.title}</h3>
                               <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                           </div>
                           <div className="p-3 bg-accent text-accent-foreground rounded-lg flex-shrink-0">
                               {feature.icon}
                           </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:col-span-4 row-start-1 md:row-start-auto">
                <Image 
                    src="/images/logo.png"
                    alt="Computer lab"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-xl mx-auto"
                    data-ai-hint="computer lab"
                    priority
                />
            </div>
            <div className="md:col-span-4 space-y-8">
                {empoweringFeatures.slice(2, 4).map((feature, index) => (
                    <div key={index} className="text-left">
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-accent text-accent-foreground rounded-lg flex-shrink-0">
                               {feature.icon}
                           </div>
                           <div className="flex-grow">
                               <h3 className="font-bold text-lg">{feature.title}</h3>
                               <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
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
          <div className="container mx-auto px-4">
            <Carousel 
              plugins={[plugin.current]}
              opts={{ loop: true, align: "start" }} 
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="glass-effect h-full flex flex-col">
                          <CardContent className="pt-6 flex flex-col h-full">
                              <div className="flex items-start mb-4">
                                  <div className="ml-4 flex-grow">
                                      <p className="font-semibold">{testimonial.name}</p>
                                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                                  </div>
                                  <div className="flex items-center">
                                      {[...Array(5)].map((_, i) => (
                                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                      ))}
                                  </div>
                              </div>
                              <p className="text-muted-foreground italic flex-grow">"{testimonial.story}"</p>
                          </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
             <div className="mt-8 flex justify-center gap-4">
                <Button asChild>
                    <Link href="https://share.google/hAEhk3Rr4UeMvWz1G" target="_blank" aria-label="Read more reviews on Google">Read more reviews</Link>
                </Button>
                <Button asChild>
                    <Link href="https://share.google/yCpYlbYBe259n6zr5" target="_blank" aria-label="More student feedback on Google">More student feedback</Link>
                </Button>
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
