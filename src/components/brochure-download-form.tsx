
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendOtp, verifyOtp } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ShieldCheck, Download, CheckCircle } from "lucide-react";
import { DialogClose } from "./ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  otp: z.string().length(6, { message: "OTP must be 6 digits." }).optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BrochureDownloadForm() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"details" | "otp" | "success">("details");
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      otp: "",
    },
  });

  async function handleSendOtp(data: FormData) {
    setLoading(true);
    const response = await sendOtp(data.phone);
    if (response.success) {
      toast({ title: "Success", description: response.message });
      setStep("otp");
    } else {
      toast({ variant: "destructive", title: "Error", description: response.message });
    }
    setLoading(false);
  }

  async function handleVerifyOtp(data: FormData) {
    if (!data.otp) return;
    setLoading(true);
    const response = await verifyOtp(data.otp);
    if (response.success) {
      toast({ title: "Success", description: "Verification successful! Your download will start shortly." });
      setStep("success");
      
      // Trigger download
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'Primezone_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } else {
      form.setError("otp", { type: "manual", message: response.message });
      toast({ variant: "destructive", title: "Error", description: response.message });
    }
    setLoading(false);
  }

  function onSubmit(data: FormData) {
    if (step === "details") {
      handleSendOtp(data);
    } else if (step === "otp") {
      handleVerifyOtp(data);
    }
  }

  if (step === "success") {
    return (
      <div className="text-center p-8">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
        <CardTitle>Download Started!</CardTitle>
        <CardDescription className="mt-2">
            Your brochure is downloading. Please check your browser downloads.
        </CardDescription>
        <DialogClose asChild>
            <Button className="mt-6">Close</Button>
        </DialogClose>
      </div>
    )
  }

  return (
    <>
      <CardHeader>
        <CardTitle>Download Brochure</CardTitle>
        <CardDescription>
          {step === "details"
            ? "Please provide your details to receive the brochure."
            : "Enter the OTP sent to your phone to verify and start the download."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === "details" && (
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
            )}

            {step === "otp" && (
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter OTP</FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : step === "details" ? (
                <>
                  Send OTP
                </>
              ) : (
                <>
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Verify & Download
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
    