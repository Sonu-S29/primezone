
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Users, Send } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
              Our referral program is simple. Share your unique referral link with your friends. When they enroll in any of our diploma courses, you both get exciting rewards. It's a win-win!
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
                  <h3 className="font-semibold">2. Your Friend Enrolls</h3>
                  <p className="text-muted-foreground text-sm">Your friend signs up for a course using your referral link.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">3. You Both Get Rewarded</h3>
                  <p className="text-muted-foreground text-sm">Once they confirm their admission, you and your friend receive your rewards!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Refer and Earn"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
              data-ai-hint="friends celebrating"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                    <CardTitle>Start Referring Now</CardTitle>
                    <CardDescription>Enter your details to get your unique referral link.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                        <Button type="submit" className="w-full">Get My Referral Link</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
