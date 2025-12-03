
"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@/hooks/use-toast';

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


function EnrollmentForm() {
    const searchParams = useSearchParams();
    const courseFromUrl = searchParams.get('course');
    const [state, handleSubmit] = useForm("xnnawrlz");
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        if (state.succeeded) {
          toast({
            title: "Enrollment Submitted!",
            description: "Thank you for your interest. We will contact you shortly.",
          });
          setTimeout(() => {
            router.push('/courses/diploma');
          }, 2000);
        }
      }, [state.succeeded, router, toast]);

    if (state.succeeded) {
        return (
             <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Thank You!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your enrollment request has been submitted. Redirecting...</p>
                </CardContent>
            </Card>
        );
    }
  
    return (
        <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Enrollment Form</CardTitle>
          <CardDescription>
            Please provide your details, and our team will get in touch with you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (234) 567-890" />
              </div>
              <div className="space-y-2">
                  <Label htmlFor="course">Course of Interest</Label>
                  <Select name="course" defaultValue={courseFromUrl || undefined}>
                      <SelectTrigger id="course">
                          <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                          {courses.map((course) => (
                              <SelectItem key={course} value={course}>{course}</SelectItem>
                          ))}
                      </SelectContent>
                  </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" name="address" placeholder="123 Tech Street, Innovation City" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="background">Educational Background</Label>
              <Textarea id="background" name="educationalBackground" placeholder="e.g., High School Diploma, Bachelor's in Arts" />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>Submit Enrollment</Button>
          </form>
        </CardContent>
      </Card>
    )
}

export default function EnrollPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Enroll Now</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the next step in your career journey. Fill out the form below to enroll in a course.
          </p>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <Suspense fallback={<div>Loading...</div>}>
            <EnrollmentForm />
        </Suspense>
      </section>
    </div>
  );
}
