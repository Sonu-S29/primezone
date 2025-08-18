
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const jobOpenings = [
  {
    title: "Senior Web Development Instructor",
    location: "Mumbai (On-site)",
    type: "Full-time",
    description: "We are looking for an experienced web developer with a passion for teaching. You will be responsible for delivering our web development curriculum, mentoring students, and updating course material.",
    link: "#"
  },
  {
    title: "Admissions Counselor",
    location: "Vile Parle, Mumbai",
    type: "Full-time",
    description: "Join our dynamic admissions team. You will guide prospective students, help them choose the right courses, and manage the enrollment process.",
    link: "#"
  },
  {
    title: "Digital Marketing Executive",
    location: "Jogeshwari, Mumbai",
    type: "Part-time",
    description: "We need a creative digital marketer to manage our online presence, run campaigns, and engage with our community on social media.",
    link: "#"
  },
];

export default function CareerPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Careers at Primezone</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our team of passionate educators and professionals dedicated to shaping the future of tech.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Why Work With Us?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Primezone, we foster a collaborative and innovative environment where your ideas can flourish. We believe in continuous learning and provide our team with opportunities for professional growth. Be a part of a mission-driven organization that makes a real impact on students' lives.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-accent text-accent-foreground rounded-full mr-4"><Briefcase/></div>
                <div>
                  <h3 className="font-semibold">Professional Growth</h3>
                  <p className="text-muted-foreground text-sm">Access to courses, workshops, and opportunities to upskill.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-accent text-accent-foreground rounded-full mr-4"><Clock/></div>
                <div>
                  <h3 className="font-semibold">Work-Life Balance</h3>
                  <p className="text-muted-foreground text-sm">We value our team's well-being with flexible work arrangements.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team at Primezone"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="happy diverse team"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Current Openings</h2>
            <p className="text-muted-foreground mt-2">Find your next opportunity with us.</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Button asChild className="mt-4 sm:mt-0">
                      <Link href={job.link}>Apply Now <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 mb-4">
                    <div className="flex items-center gap-1"><MapPin className="h-4 w-4"/> {job.location}</div>
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4"/> {job.type}</div>
                  </div>
                  <p className="text-sm">{job.description}</p>
                </CardContent>
              </Card>
            ))}
             <Card className="text-center bg-transparent border-dashed">
                <CardContent className="p-8">
                    <h3 className="font-semibold">Don't see a role for you?</h3>
                    <p className="text-muted-foreground mt-2 mb-4">We are always looking for talented individuals. Send your resume to <a href="mailto:careers@primezone.com" className="text-primary hover:underline">careers@primezone.com</a>.</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
