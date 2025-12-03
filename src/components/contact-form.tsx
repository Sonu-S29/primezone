
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { allCoursesList } from "@/lib/course-data";
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [state, handleSubmit] = useForm("xnnawrlz");
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      setTimeout(() => {
        router.push('/courses/diploma');
      }, 2000);
    }
  }, [state.succeeded, router, toast]);

  if (state.succeeded) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Thank You!</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Your message has been sent successfully. Redirecting you to our diploma courses...</p>
            </CardContent>
        </Card>
    );
  }

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
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
              <Select onValueChange={handleCourseSelect} value="">
                  <SelectTrigger id="subject">
                      <SelectValue placeholder="Select courses..." />
                  </SelectTrigger>
                  <SelectContent>
                      {allCoursesList.map((course) => (
                          <SelectItem key={course} value={course}>
                            {selectedCourses.includes(course) ? "✓ " : ""}{course}
                          </SelectItem>
                      ))}
                  </SelectContent>
              </Select>
              <input type="hidden" name="subject" value={selectedCourses.join(', ')} />
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
            <Textarea id="message" name="message" rows={5} placeholder="Please type your message here..."/>
             <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm" />
          </div>
          <Button type="submit" className="w-full" disabled={state.submitting}>Send Message</Button>
        </form>
      </CardContent>
    </Card>
  );
}
