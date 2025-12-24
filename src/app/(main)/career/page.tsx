
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ApplicationForm from "@/components/application-form";
import imageData from "@/lib/placeholder-images.json";

const jobOpenings = [
  {
    title: "Graphic Designer",
    location: "Mumbai",
    type: "Full-time",
    description: "We are looking for a creative Graphic Designer to be responsible for giving lectures and creating engaging content for daily posts and banners.",
  },
  {
    title: "Student Counselor",
    location: "Mumbai",
    type: "Full-time",
    description: "We are seeking a compassionate and experienced Student Counselor to provide guidance, support, and enrollment assistance to our students.",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai",
    type: "Full-time",
    description: "We are looking for a skilled Full-Stack Developer to design, develop, and maintain our web applications and internal systems.",
  },
  {
    title: "Java Developer",
    location: "Mumbai",
    type: "Full-time",
    description: "Join our team as a Java Developer to build robust and scalable backend services and educational applications.",
  },
  {
    title: "Digital Marketer",
    location: "Mumbai",
    type: "Full-time",
    description: "We're hiring a Digital Marketer to manage our online presence, run campaigns, and analyze performance to drive student enrollments.",
  },
  {
    title: "Telecaller (Female preferred)",
    location: "Mumbai",
    type: "Full-time",
    description: "We are looking for a friendly and persuasive Telecaller to connect with prospective students, answer inquiries, and schedule counseling sessions.",
  },
  {
    title: "Microsoft Office Trainer",
    location: "Mumbai",
    type: "Part-time / Full-time",
    description: "Seeking an expert trainer for Microsoft Office 365, Tally, and GST to deliver high-quality instruction to our students, which can take lectures and manage student properly.",
  },
  {
    title: "Data Scientist Trainer",
    location: "Mumbai",
    type: "Part-time / Full-time",
    description: "We are seeking an industry expert in Data Science Trainer who can take lectures and manage students effectively.",
  },
  {
    title: "Data Engineer Trainer",
    location: "Mumbai",
    type: "Full-time",
    description: "We are seeking an industry expert in Data Engineer who can take lectures and manage students effectively.",
  },
];

const teamImage = imageData.find(img => img.id === 'happy-diverse-team');

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
            {teamImage && <Image
              src={"/images/logo.png"}
              alt="Team at Primezone"
              width={teamImage.width}
              height={teamImage.height}
              className="rounded-lg shadow-lg"
              data-ai-hint={teamImage.hint}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />}
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
                    <Dialog>
                        <DialogTrigger asChild>
                           <Button className="mt-4 sm:mt-0">Apply Now <ArrowRight className="ml-2 h-4 w-4"/></Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Apply for {job.title}</DialogTitle>
                            </DialogHeader>
                            <ApplicationForm />
                        </DialogContent>
                    </Dialog>
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
                    <p className="text-muted-foreground mt-2 mb-4">We are always looking for talented individuals. Send your resume to <a href="mailto:pzofficial123@gmail.com" className="text-primary hover:underline">pzofficial123@gmail.com</a>.</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
    