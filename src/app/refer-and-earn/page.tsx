
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Users, Send, IndianRupee, Star, MessageSquare } from "lucide-react";
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Referral Rewards</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We offer rewards for both course enrollments and inquiries made through your referral.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                  <CardHeader>
                      <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-2">
                          <IndianRupee className="h-8 w-8" />
                      </div>
                      <CardTitle>Diploma Course Enrollment</CardTitle>
                      <CardDescription>When your friend enrolls in any Diploma course.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-3xl font-bold text-primary">₹2000</p>
                      <p className="text-muted-foreground">Cash Reward</p>
                  </CardContent>
              </Card>
              <Card className="text-center">
                  <CardHeader>
                      <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-2">
                          <IndianRupee className="h-8 w-8" />
                      </div>
                      <CardTitle>Short-Term Course Enrollment</CardTitle>
                      <CardDescription>When your friend enrolls in any Short-Term course.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-3xl font-bold text-primary">₹1000</p>
                      <p className="text-muted-foreground">Cash Reward</p>
                  </CardContent>
              </Card>
              <Card className="text-center">
                  <CardHeader>
                      <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-2">
                          <Star className="h-8 w-8" />
                      </div>
                      <CardTitle>Course Inquiry</CardTitle>
                      <CardDescription>When your referred friend makes an inquiry but doesn't enroll.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-3xl font-bold text-primary">50 Points</p>
                      <p className="text-muted-foreground text-sm">(10 Points = ₹5, redeemable on admission)</p>
                  </CardContent>
              </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
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
