import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const courses = [
  "Diploma in Computer Application & Programming (DCAP)",
  "Diploma in Financial Accounting (DFA)",
  "Diploma in Web Development (DWD)",
  "Diploma in Graphic Designing (DGD)",
  "Advanced Tally Prime with GST",
  "Certificate in Web Designing",
  "C & C++ Programming",
  "Python for Data Science",
];

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
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Enrollment Form</CardTitle>
            <CardDescription>
              Please provide your details, and our team will get in touch with you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="course">Course of Interest</Label>
                    <Select>
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
                <Textarea id="address" placeholder="123 Tech Street, Innovation City" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="background">Educational Background</Label>
                <Textarea id="background" placeholder="e.g., High School Diploma, Bachelor's in Arts" />
              </div>
              <Button type="submit" className="w-full" size="lg">Submit Enrollment</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
