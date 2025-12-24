
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useForm } from '@formspree/react';

import { CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Download, CheckCircle } from "lucide-react";
import { DialogClose } from "./ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
});

type FormData = z.infer<typeof formSchema>;

export default function BrochureDownloadForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [formspreeState, handleFormspreeSubmit] = useForm("xnnawrlz");
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useReactHookForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (formspreeState.succeeded && !isSuccess) {
        setIsSuccess(true);
        toast({ title: "Success", description: "Thank you! Your download will start shortly." });
        
        const link = document.createElement('a');
        link.href = '/Primezone-Brochure.pdf';
        link.download = 'Primezone_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            router.push('/courses/diploma');
        }, 3000);
    }
  }, [formspreeState.succeeded, isSuccess, toast, router]);

  if (isSuccess) {
    return (
      <div className="text-center p-8">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
        <h3 className="text-xl font-semibold">Download Started!</h3>
        <p className="text-muted-foreground mt-2">
            Your brochure is downloading. Please check your browser downloads. Redirecting...
        </p>
        <DialogClose asChild>
            <Button className="mt-6">Close</Button>
        </DialogClose>
      </div>
    )
  }

  return (
    <>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => handleFormspreeSubmit(data))} className="space-y-6 pt-4">
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                        <Input type="tel" placeholder="9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            

            <Button type="submit" disabled={formspreeState.submitting} className="w-full">
              {formspreeState.submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
