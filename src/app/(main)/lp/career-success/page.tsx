import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, MessageCircle, Users, Award, MapPin, Star, Clock, GraduationCap, ArrowRight, ShieldCheck, Database, Laptop } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
    "Small Batch Size",
    "Flexible Timings",
    "Global Certification",
    "Placement Assistance"
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen -mt-24">
      {/* Hero Section */}
      <section className="relative pt-24 bg-[#EAF2F8] overflow-hidden flex items-center w-full">
        <div className="w-full">
            <Image 
                src="/images/landingpage/landing1.svg"
                alt="Become Job-Ready in 3-6 Months with Industry-Focused Computer Courses"
                width={1920}
                height={800}
                className="w-full h-auto block"
                priority
            />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">COURSES WE OFFER</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
             {/* DCA */}
             <div className="group relative bg-blue-50/30 backdrop-blur-sm border border-blue-100/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                        <Laptop className="h-6 w-6" />
                    </div>
                    <div className="h-1 w-12 bg-blue-500/20 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-5 leading-tight">DCA – Diploma in Computer Applications</h3>
                <div className="space-y-4 flex-grow">
                    <ul className="space-y-3 text-muted-foreground text-sm">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Basic to Advanced Computer Skills</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>MS Office (Word, Excel, PowerPoint)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Internet & Email Usage</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-blue-100/50">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600/50 text-center">Ideal for Students & Beginners</p>
                </div>
             </div>

             {/* Data Analyst */}
             <div className="group relative bg-amber-50/30 backdrop-blur-sm border border-amber-100/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-white rounded-2xl shadow-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                        <Database className="h-6 w-6" />
                    </div>
                    <div className="h-1 w-12 bg-amber-500/20 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-5 leading-tight">Data Analyst Course</h3>
                <div className="space-y-4 flex-grow">
                    <ul className="space-y-3 text-muted-foreground text-sm">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Advanced Excel + Data Visualization</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Basic SQL & Data Handling</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Industry-standard Live Projects</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-amber-100/50">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600/50 text-center">Perfect for Job Seekers</p>
                </div>
             </div>

             {/* Cyber Security */}
             <div className="group relative bg-red-50/30 backdrop-blur-sm border border-red-100/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/30 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-white rounded-2xl shadow-sm text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div className="h-1 w-12 bg-red-500/20 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-5 leading-tight">Cyber Security / Ethical Hacking</h3>
                <div className="space-y-4 flex-grow">
                    <ul className="space-y-3 text-muted-foreground text-sm">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Network Security Fundamentals</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Ethical Hacking Techniques</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>End-to-End Threat Protection</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-red-100/50">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-600/50 text-center">High-demand career field</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4 uppercase tracking-tight">WHY CHOOSE US</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We provide the highest quality computer education in Mumbai with a focus on practical results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                  <div key={i} className="group p-6 bg-white rounded-3xl border border-transparent hover:border-accent/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-accent/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                          <CheckCircle className="h-6 w-6 text-accent group-hover:text-white" />
                      </div>
                      <span className="font-bold text-primary group-hover:text-accent transition-colors">{feature}</span>
                  </div>
              ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <Badge variant="secondary" className="bg-primary/5 text-primary border-none px-4 py-1">OUR PRESENCE</Badge>
                    <h2 className="text-3xl sm:text-5xl font-bold font-headline text-primary leading-tight">Serving students <br className="hidden md:block" /> across Mumbai</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Find us at our two major hubs in Mumbai. Both branches are strategically located for easy access via public transport.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-8 bg-primary rounded-[2.5rem] text-primary-foreground space-y-4 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                        <MapPin className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                        <div>
                            <h3 className="text-2xl font-bold">Jogeshwari</h3>
                            <p className="text-sm opacity-60 mt-1 leading-relaxed">Opp. JES College, <br /> Jogeshwari East</p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-white/5 rounded-full blur-2xl" />
                    </div>
                    <div className="p-8 bg-primary rounded-[2.5rem] text-primary-foreground space-y-4 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                        <MapPin className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                        <div>
                            <h3 className="text-2xl font-bold">Vile Parle</h3>
                            <p className="text-sm opacity-60 mt-1 leading-relaxed">Near Station, <br /> Vile Parle East</p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-white/5 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-headline text-primary mb-4">STUDENT REVIEWS</h2>
                <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {reviews.map((review, i) => (
                    <Card key={i} className="bg-white/80 backdrop-blur-xl border-none shadow-xl shadow-primary/5 rounded-[2rem] overflow-hidden group hover:translate-y-[-4px] transition-all duration-300">
                        <CardContent className="p-8">
                            <div className="flex mb-6">
                                {[...Array(review.stars)].map((_, index) => (
                                    <Star key={index} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="italic text-muted-foreground mb-8 text-lg leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <p className="font-bold text-primary">{review.name}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="bg-accent py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-white text-center">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                        <Clock className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tighter">LIMITED TIME OFFER</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-lg font-bold">
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">👉 Free Demo Class</span>
                    <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">👉 Special Discount</span>
                </div>
            </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
      </section>

      {/* Form & CTA Section */}
      <section id="lead-form" className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
                <div className="space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-6xl font-bold font-headline text-primary leading-tight tracking-tighter">
                            Ready to Upgrade Your Career?
                        </h2>
                        <p className="text-xl text-muted-foreground">Join the elite league of certified professionals. Get instant support from our senior counselors.</p>
                    </div>
                    
                    <div className="grid gap-4">
                        <a href="tel:+919702570087" className="flex items-center gap-5 p-6 bg-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border border-muted group">
                            <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                <Phone className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-[11px] text-muted-foreground uppercase font-black tracking-widest">VILE PARLE CENTER</p>
                                <p className="text-2xl font-bold text-primary">+91 97025 70087</p>
                            </div>
                            <ArrowRight className="ml-auto h-5 w-5 text-muted/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </a>
                        <a href="tel:+919769730087" className="flex items-center gap-5 p-6 bg-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border border-muted group">
                            <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                <Phone className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-[11px] text-muted-foreground uppercase font-black tracking-widest">JOGESHWARI CENTER</p>
                                <p className="text-2xl font-bold text-primary">+91 97697 30087</p>
                            </div>
                            <ArrowRight className="ml-auto h-5 w-5 text-muted/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>
                    
                    <Button size="lg" className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-[1.5rem] text-xl font-bold shadow-xl shadow-green-500/20" asChild>
                        <a href="https://wa.me/919769730087" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-3 h-7 w-7 shrink-0" /> WhatsApp for Details
                        </a>
                    </Button>
                </div>

                <div className="relative">
                    <LpLeadForm />
                    <div className="absolute -z-10 -top-20 -right-20 h-64 w-64 bg-accent/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute -z-10 -bottom-20 -left-20 h-64 w-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
                </div>
            </div>
        </div>
      </section>

      {/* Final Trust Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-3">
                    <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Award className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-2xl font-bold">ISO Certified</p>
                    <p className="text-xs opacity-50 tracking-widest uppercase font-bold">Quality Education</p>
                </div>
                <div className="space-y-3">
                    <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Clock className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-2xl font-bold">5+ Years</p>
                    <p className="text-xs opacity-50 tracking-widest uppercase font-bold">Teaching Excellence</p>
                </div>
                <div className="space-y-3">
                    <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Users className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-2xl font-bold">10k+</p>
                    <p className="text-xs opacity-50 tracking-widest uppercase font-bold">Students Trained</p>
                </div>
                <div className="space-y-3">
                    <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <ShieldCheck className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xs opacity-50 tracking-widest uppercase font-bold">Placement Support</p>
                </div>
            </div>
            
            <div className="mt-16 space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold font-headline">Start Your Journey Today</h3>
                <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 h-14 px-12 text-lg font-bold shadow-2xl shadow-accent/20">
                    <Link href="#lead-form">Enroll Now <ArrowRight className="ml-2 h-5 w-5"/></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
