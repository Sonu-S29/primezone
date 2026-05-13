"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CareerGuidanceForm() {
  const [state, handleSubmit] = useForm("xnnawrlz");
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Request Sent!",
        description: "Thank you for your interest. We will be in touch shortly.",
      });
      const timer = setTimeout(() => {
        router.push('/courses/diploma');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, toast, router]);

  if (state.succeeded) {
    return (
      <div className="text-center p-12 space-y-4">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h3 className="text-2xl font-bold font-headline">Thank You!</h3>
        <p className="text-muted-foreground text-lg">
          Your request for career guidance has been submitted successfully. Our expert counselors will contact you within 24 hours.
        </p>
        <p className="text-sm text-muted-foreground mt-8 italic">Redirecting you to our courses in 10 seconds...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="guidance-name">Full Name</Label>
        <Input id="guidance-name" name="fullName" placeholder="Enter your full name" required />
        <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-destructive text-sm" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="guidance-email">Email Address</Label>
        <Input id="guidance-email" name="email" type="email" placeholder="Enter your email address" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="guidance-phone">Phone Number</Label>
        <Input id="guidance-phone" name="phone" type="tel" placeholder="Enter your phone number" required />
         <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-sm" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="guidance-message">Your Query (Optional)</Label>
        <Textarea id="guidance-message" name="message" placeholder="Enter your query here..." />
      </div>
      <Button type="submit" className="w-full" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
}
