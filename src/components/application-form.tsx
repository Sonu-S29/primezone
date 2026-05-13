"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from '@formspree/react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { DialogClose } from "./ui/dialog";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  linkedin: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  resume: z.string().url({ message: "Please enter a valid Google Drive link." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ApplicationForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [formspreeState, handleFormspreeSubmit] = useForm("xnnawrlz");

  const form = useReactHookForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      linkedin: "",
      resume: "",
    },
  });

  useEffect(() => {
    if (formspreeState.succeeded) {
      toast({ title: "Success", description: "Your application has been submitted successfully!" });
      const timer = setTimeout(() => {
        router.push('/courses/diploma');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [formspreeState.succeeded, router, toast]);

  if (formspreeState.succeeded) {
      return (
          <div className="text-center p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-headline">Thank You!</h3>
              <p className="text-muted-foreground mt-4 text-lg">Your application has been sent successfully. We will review your profile and get back to you.</p>
              <p className="text-sm text-muted-foreground mt-8 italic">Redirecting to courses in 10 seconds...</p>
          </div>
      )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => handleFormspreeSubmit(data))} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter your 10-digit phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
                <FormItem>
                <FormLabel>LinkedIn Profile</FormLabel>
                <FormControl>
                    <Input placeholder="Enter your LinkedIn profile URL" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Resume (Google Drive Link)</FormLabel>
                <FormControl>
                    <Input placeholder="Enter your resume's Google Drive link" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />

        <div className="flex justify-end gap-2 pt-4">
            <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={formspreeState.submitting}>
              {formspreeState.submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
        </div>
      </form>
    </Form>
  );
}