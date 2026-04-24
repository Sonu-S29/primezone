
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, MessageCircle, Users, Award, MapPin, Star, Clock, GraduationCap, ArrowRight, ShieldCheck, Database, Laptop } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import LpLeadForm from "@/components/lp-lead-form";

export const metadata: Metadata = {
  title: "Become Job-Ready with Industry-Focused Computer Courses | Primezone",
  description: "Join Primezone Computer Education in Mumbai. Master DCA, Data Analytics, and Cyber Security with 100% practical training and placement support.",
  alternates: {
    canonical: "/lp/career-success",
  },
};

const reviews = [
    { name: "Siddhesh R.", text: "Best institute for learning computers. Trainers are very supportive.", stars: 5 },
    { name: "Priya K.", text: "I got a job after completing Data Analyst course. Highly recommended!", stars: 5 },
    { name: "Rahul M.", text: "Highly recommended for beginners and professionals looking for practical skills.", stars: 5 },
];

const features = [
    "100% Practical Training",
    "Experienced Trainers",
    "Small Batch Size (Personal Attention)",
    "Flexible Timings (Morning/Evening)",
    "Certification After Course",
    "Placement Assistance"
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen -mt-24">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <Badge className="px-4 py-1 text-xs sm:text-sm bg-accent/10 text-accent border-accent/20 mb-2 sm:mb-4">
              #1 Computer Institute in Mumbai
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline text-primary tracking-tight leading-tight">
              Become Job-Ready in <span className="text-accent">3–6 Months</span> with Industry-Focused Computer Courses
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn DCA, Data Analyst & Cyber Security from Experts. 
              Mumbai | 100% Practical Training | Certification Included.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6">
              <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-white rounded-full w-full sm:w-auto" asChild>
                <Link href="#lead-form">Book Free Demo Class</Link>
              </Button>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-12 px-6 rounded-full flex-1 sm:flex-none" asChild>
                   <a href="tel:+919769730087"><Phone className="mr-2 h-4 w-4" /> Call</a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6 rounded-full border-green-500 text-green-600 hover:bg-green-50 flex-1 sm:flex-none" asChild>
                   <a href="https://wa.me/919769730087" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 text-sm font-semibold text-muted-foreground border-t mt-10 sm:mt-12 border-primary/10">
               <div className="flex items-center gap-2">
                   <Users className="h-5 w-5 text-accent" />
                   <span>1000+ Students Trained</span>
               </div>
               <div className="hidden sm:block h-4 w-px bg-border" />
               <div className="flex items-center gap-2">
                   <GraduationCap className="h-5 w-5 text-accent" />
                   <span>Placement Support Available</span>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background blobs for visual interest */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-0" />
      </section>

      {/* Courses Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold font-headline text-primary">COURSES WE OFFER</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
             {/* DCA */}
             <Card className="border-t-4 border-t-blue-500 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                    <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                        <Laptop className="h-6 w-6 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl">DCA – Diploma in Computer Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Basic to Advanced Computer Skills</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> MS Office (Word, Excel, PowerPoint)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Internet & Email Usage</li>
                    </ul>
                </CardContent>
                <CardContent className="pt-0 pb-6">
                    <Badge variant="secondary" className="w-full justify-center py-1">Perfect for Students & Beginners</Badge>
                </CardContent>
             </Card>

             {/* Data Analyst */}
             <Card className="border-t-4 border-t-amber-500 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                    <div className="p-3 bg-amber-50 rounded-lg w-fit mb-4">
                        <Database className="h-6 w-6 text-amber-500" />
                    </div>
                    <CardTitle className="text-xl">Data Analyst Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Advanced Excel + Data Visualization</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Basic SQL & Data Handling</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Real-time Projects</li>
                    </ul>
                </CardContent>
                <CardContent className="pt-0 pb-6">
                    <Badge variant="secondary" className="w-full justify-center py-1">Ideal for Job Seekers</Badge>
                </CardContent>
             </Card>

             {/* Cyber Security */}
             <Card className="border-t-4 border-t-red-500 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                    <div className="p-3 bg-red-50 rounded-lg w-fit mb-4">
                        <ShieldCheck className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle className="text-xl">Cyber Security / Ethical Hacking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Network Security Basics</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Ethical Hacking Techniques</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Cyber Threat Protection</li>
                    </ul>
                </CardContent>
                <CardContent className="pt-0 pb-6">
                    <Badge variant="secondary" className="w-full justify-center py-1">High-demand career field</Badge>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Locations */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-headline text-primary mb-8">WHY CHOOSE US</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                            </div>
                            <span className="font-medium text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-headline text-primary mb-4">OUR LOCATIONS</h2>
                    <p className="text-muted-foreground">Serving students across Mumbai with easy access from your nearby area.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-primary text-primary-foreground rounded-2xl">
                        <MapPin className="h-8 w-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold">Jogeshwari Branch</h3>
                        <p className="text-sm opacity-80 mt-2">Opp. S.V. Road, Jogeshwari West</p>
                    </div>
                    <div className="p-6 bg-primary text-primary-foreground rounded-2xl">
                        <MapPin className="h-8 w-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold">Vile Parle Branch</h3>
                        <p className="text-sm opacity-80 mt-2">Near Station, Vile Parle East</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl font-bold font-headline text-primary">STUDENT REVIEWS</h2>
                <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {reviews.map((review, i) => (
                    <Card key={i} className="bg-white/50 backdrop-blur-sm border shadow-sm">
                        <CardContent className="pt-6">
                            <div className="flex mb-4">
                                {[...Array(review.stars)].map((_, index) => (
                                    <Star key={index} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="italic text-muted-foreground mb-4 text-sm sm:text-base">"{review.text}"</p>
                            <p className="font-bold text-primary">— {review.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="bg-accent py-6 sm:py-8 overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-white font-bold text-base sm:text-lg md:text-xl uppercase tracking-wider text-center">
                <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 animate-pulse shrink-0" />
                    <span>LIMITED TIME OFFER</span>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2">
                    <span className="flex items-center gap-2">👉 Free Demo Class</span>
                    <span className="flex items-center gap-2">👉 Special Discount</span>
                </div>
            </div>
        </div>
      </section>

      {/* Form & CTA Section */}
      <section id="lead-form" className="py-12 sm:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary leading-tight">
                        Ready to Upgrade Your Career?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg">Contact our counselors immediately for instant support:</p>
                        <div className="flex flex-col gap-3">
                            <a href="tel:+919702570087" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold">Vile Parle</p>
                                    <p className="text-lg sm:text-xl font-bold">+91 97025 70087</p>
                                </div>
                            </a>
                            <a href="tel:+919769730087" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold">Jogeshwari</p>
                                    <p className="text-lg sm:text-xl font-bold">+91 97697 30087</p>
                                </div>
                            </a>
                        </div>
                        <Button size="lg" className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl text-base sm:text-lg mt-2" asChild>
                            <a href="https://wa.me/919769730087" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-6 w-6 shrink-0" /> WhatsApp for Instant Details
                            </a>
                        </Button>
                    </div>
                </div>

                <LpLeadForm />
            </div>
        </div>
      </section>

      {/* Final Trust Section */}
      <section className="py-12 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                <div className="space-y-2">
                    <Award className="h-8 w-8 sm:h-10 sm:w-10 text-accent mx-auto" />
                    <p className="text-xl sm:text-2xl font-bold">ISO Certified</p>
                    <p className="text-xs sm:text-sm opacity-60">Quality Education</p>
                </div>
                <div className="space-y-2">
                    <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-accent mx-auto" />
                    <p className="text-xl sm:text-2xl font-bold">5+ Years</p>
                    <p className="text-xs sm:text-sm opacity-60">Teaching Excellence</p>
                </div>
                <div className="space-y-2">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 text-accent mx-auto" />
                    <p className="text-xl sm:text-2xl font-bold">10k+</p>
                    <p className="text-xs sm:text-sm opacity-60">Students Trained</p>
                </div>
                <div className="space-y-2">
                    <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-accent mx-auto" />
                    <p className="text-xl sm:text-2xl font-bold">100%</p>
                    <p className="text-xs sm:text-sm opacity-60">Placement Support</p>
                </div>
            </div>
            
            <div className="mt-8 sm:mt-16 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Start Your Journey Today</h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 h-12 px-10">
                        <Link href="#lead-form">Enroll Now <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
