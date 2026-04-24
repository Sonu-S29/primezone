
"use client";

import { useForm, ValidationError } from '@formspree/react';
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function LpLeadForm() {
  const [state, handleSubmit] = useForm("xnnawrlz");
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your interest. We will get back to you shortly.",
      });
    }
  }, [state.succeeded, toast]);

  if (state.succeeded) {
    return (
      <Card className="p-8 shadow-2xl border-none text-center bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your request for a free demo class has been sent. Our counselors will contact you soon.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-8 shadow-2xl border-none bg-white">
      <CardHeader className="p-0 mb-6 text-center">
        <CardTitle className="text-2xl leading-tight">Fill in your details and get a free demo class today!</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="lp-name">Name</Label>
          <Input id="lp-name" name="name" placeholder="Enter your full name" required className="bg-muted/30"/>
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-xs" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lp-phone">Mobile Number</Label>
          <Input id="lp-phone" name="phone" type="tel" placeholder="10-digit mobile number" required className="bg-muted/30"/>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-xs" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lp-course">Course Interested In</Label>
          <Select name="course">
            <SelectTrigger id="lp-course" className="bg-muted/30">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dca">DCA - Diploma in Computer Applications</SelectItem>
              <SelectItem value="data">Data Analyst Course</SelectItem>
              <SelectItem value="cyber">Cyber Security / Ethical Hacking</SelectItem>
              <SelectItem value="other">Other Professional Courses</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lp-location">Preferred Location</Label>
          <Select name="location">
            <SelectTrigger id="lp-location" className="bg-muted/30">
              <SelectValue placeholder="Select branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jogeshwari">Jogeshwari Branch</SelectItem>
              <SelectItem value="vileparle">Vile Parle Branch</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" disabled={state.submitting} className="w-full h-12 text-lg bg-accent hover:bg-accent/90 mt-4">
          {state.submitting ? 'Sending...' : 'Get Free Demo'}
        </Button>
      </form>
    </Card>
  );
}
