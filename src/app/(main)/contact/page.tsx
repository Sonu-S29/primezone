
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const courses = [
    "Diploma In Accounting",
    "Diploma In Financial Accounting",
    "Diploma In Computer Application",
    "Diploma In Financial & Management",
    "Diploma In Programming Course",
    "Diploma In Graphic & Animation",
    "Diploma In Ethical Hacking",
    "Diploma In Digital Marketing",
    "Full-Stack Development",
    "Data Analytics",
    "Office Automation",
    "MS Office",
    "Advanced Excel",
    "Tally Prime + GST",
    "Taxation Auditing",
    "Management Skill",
    "Share Market",
    "CCC",
    "Web Development",
    "Web Designing",
    "DSA",
    "C",
    "C++",
    "Python",
    "Front-End Development",
    "Back-End Development",
    "Database",
    "Angular",
    "HTML-CSS",
    "JavaScript",
    "Core Java",
    "C#",
    "React",
    "Advanced Java",
    "PowerBI",
    "SEO",
    "SMM",
    "SEM",
    "WordPress",
    "Content Creation",
    "Facebook & Google Ads",
    "SMO",
    "Google Analytics",
    "CorelDRAW",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Video|Sound Editing",
    "Adobe Animation",
    "3D MAX",
    "Canva Design",
    "After Effects",
    "Premiere Pro",
    "Figma",
    "AutoCAD",
    "Revit",
  ];

export default function ContactUsPage() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCourseSelect = (course: string) => {
    if (!course) return;
    
    setSelectedCourses(prev => 
      prev.includes(course) 
        ? prev.filter(c => c !== course) 
        : [...prev, course]
    );
  };

  const handleCourseRemove = (course: string) => {
    setSelectedCourses(selectedCourses.filter(c => c !== course));
  };


  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Maps */}
          <Card>
              <CardHeader>
                <CardTitle>Our Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                     <div>
                        <h3 className="font-bold flex items-center gap-2 mb-2"><MapPin/> Jogeshwari</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241238.81418146254!2d72.54561129453127!3d19.135867299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7337ae704d1%3A0xeb9d18351a79413f!2sPrimezone%20Computer%20Education%20%7C%20Best%20computer%20institute%20%26%20classes%20in%20Jogeshwari%20Mumbai!5e0!3m2!1sen!2sin!4v1753973268532!5m2!1sen!2sin" width="100%" height="250" style={{border:0, borderRadius: "0.5rem"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                     <div>
                        <h3 className="font-bold flex items-center gap-2 mb-2"><MapPin/> Vile Parle</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241238.81418146254!2d72.54561129453127!3d19.135867299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93b792d5e83%3A0xd7635d0de4b921f1!2sPrimezone%20Computer%20Education%20%7C%20Best%20computer%20institute%20%26%20classes%20in%20Vile%20Parle%20Mumbai!5e0!3m2!1sen!2sin!4v1753973302240!5m2!1sen!2sin" width="100%" height="250" style={{border:0, borderRadius: "0.5rem"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-headline">Get in Touch</h2>
                  <div className="grid sm:grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Email Us</h3>
                        <a href="mailto:pzofficial123@gmail.com" className="text-muted-foreground hover:text-primary">pzofficial123@gmail.com</a> | <a href="mailto:primezonecomputer@gmail.com" className="text-muted-foreground hover:text-primary">primezonecomputer@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Call Us</h3>
                        <a href="tel:+919769730087" className="text-muted-foreground hover:text-primary">(+91) 97697 30087</a> | <a href="tel:+919321773941" className="text-muted-foreground hover:text-primary">(+91) 93217 73941</a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={handleCourseSelect} value="">
                        <SelectTrigger id="subject">
                            <SelectValue placeholder="Select courses..." />
                        </SelectTrigger>
                        <SelectContent>
                            {courses.map((course) => (
                                <SelectItem key={course} value={course}>
                                  {selectedCourses.includes(course) ? "✓ " : ""}{course}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                     <div className="flex flex-wrap gap-2 pt-2 min-h-[2.25rem]">
                        {selectedCourses.map(course => (
                            <Badge key={course} variant="secondary" className="pl-3 pr-1 py-1">
                                {course}
                                <button type="button" onClick={() => handleCourseRemove(course)} className="ml-2 rounded-full hover:bg-background/50 p-0.5">
                                    <X className="h-3 w-3" />
                                </button>
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" rows={5} placeholder="Please type your message here..."/>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}


