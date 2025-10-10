

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Users, Send, IndianRupee, Star, HelpCircle } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import imageData from "@/lib/placeholder-images.json";

const faqs = [
    {
        question: "How do I get my referral link?",
        answer: "Simply enter your name and email in the form on this page, and we'll generate a unique referral link for you to share."
    },
    {
        question: "What rewards do I get?",
        answer: "You get a ₹2000 cash reward for a Diploma course enrollment, ₹1000 for a Short-Term course enrollment, and 50 points for every valid inquiry."
    },
    {
        question: "How can I use my referral points?",
        answer: "You can redeem your points for a discount on your own course fees. 10 points are equivalent to ₹5. Points are redeemable at the time of your own admission."
    },
    {
        question: "Is there a limit to how many friends I can refer?",
        answer: "No, there is no limit! You can refer as many friends as you like and earn rewards for every successful enrollment and inquiry."
    },
    {
        question: "When do I receive my cash reward?",
        answer: "Cash rewards are processed after your referred friend has successfully completed their enrollment and fee payment."
    }
];

const referImage = imageData.find(img => img.id === 'refer-earn');

export default function ReferAndEarnPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Refer & Earn</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Share the gift of knowledge with your friends and get rewarded for it!
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-primary mb-4 font-headline">How It Works</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our referral program is simple. Share your unique referral link with your friends. When they inquire or enroll in any of our courses, you both get exciting rewards. It's a win-win!
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">1. Share Your Link</h3>
                  <p className="text-muted-foreground text-sm">Share your unique referral link via social media, email, or text.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">2. Your Friend Inquires or Enrolls</h3>
                  <p className="text-muted-foreground text-sm">Your friend uses your link to either inquire about a course or enroll directly.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">3. You Get Rewarded</h3>
                  <p className="text-muted-foreground text-sm">You receive cash rewards for successful enrollments or points for inquiries.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {referImage && <Image
              src={referImage.src}
              alt="Refer and Earn"
              width={referImage.width}
              height={referImage.height}
              className="rounded-lg shadow-lg"
              data-ai-hint={referImage.hint}
            />}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Referral Rewards</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We offer rewards for both course enrollments and inquiries made through your referral.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="flex flex-col text-center border-2 border-primary/20 shadow-lg rounded-xl overflow-hidden">
                  <CardHeader className="bg-green-500/10 p-4">
                      <div className="mx-auto bg-green-500/20 text-green-600 rounded-full p-3 w-fit mb-2">
                          <Star className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-green-800">Short-Term Course</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 space-y-4">
                      <p className="text-4xl font-bold text-primary"><IndianRupee className="inline h-8 w-8 -mt-2" />1000</p>
                      <CardDescription>When your friend enrolls in any Short-Term course.</CardDescription>
                  </CardContent>
                   <CardContent className="p-6 mt-auto">
                      <p className="text-sm font-bold text-green-600 bg-green-100 border border-green-200 rounded-md py-2 px-4">Cash Reward</p>
                  </CardContent>
              </Card>
              <Card className="flex flex-col text-center border-2 border-accent shadow-lg rounded-xl overflow-hidden scale-105 bg-card">
                  <CardHeader className="bg-red-500/10 p-4">
                      <div className="mx-auto bg-red-500/20 text-red-600 rounded-full p-3 w-fit mb-2">
                          <IndianRupee className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-red-800">Diploma Course</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 space-y-4">
                      <p className="text-4xl font-bold text-primary"><IndianRupee className="inline h-8 w-8 -mt-2" />2000</p>
                      <CardDescription>When your friend enrolls in any Diploma course.</CardDescription>
                  </CardContent>
                   <CardContent className="p-6 mt-auto">
                       <p className="text-sm font-bold text-red-600 bg-red-100 border border-red-200 rounded-md py-2 px-4">Cash Reward</p>
                  </CardContent>
              </Card>
              <Card className="flex flex-col text-center border-2 border-primary/20 shadow-lg rounded-xl overflow-hidden">
                  <CardHeader className="bg-blue-500/10 p-4">
                      <div className="mx-auto bg-blue-500/20 text-blue-600 rounded-full p-3 w-fit mb-2">
                          <Star className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-blue-800">Course Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 space-y-4">
                      <p className="text-4xl font-bold text-primary">50 <span className="text-xl font-medium">Points</span></p>
                      <CardDescription>When your referred friend makes an inquiry but doesn't enroll.</CardDescription>
                  </CardContent>
                   <CardContent className="p-6 mt-auto">
                      <p className="text-sm font-bold text-blue-600 bg-blue-100 border border-blue-200 rounded-md py-2 px-4">10 Points = <IndianRupee className="inline h-4 w-4 -mt-1" />5</p>
                      <p className="text-xs text-muted-foreground mt-2">Redeemable on admission</p>
                  </CardContent>
              </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2">Find answers to common questions about our referral program.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

    