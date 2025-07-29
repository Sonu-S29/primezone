import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Target, Users, BookOpen, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Expert-Led Training",
      description: "Learn from industry professionals with years of experience in their fields."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Career Counseling",
      description: "Receive personalized guidance to help you choose the right career path."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Job Placement Assistance",
      description: "We help our students find job opportunities through our network of partner companies."
    }
];

export default function AboutUs() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Page Header */}
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Primezone</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to shaping the future of tech professionals through quality education and hands-on training.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our mission is to bridge the gap between academic learning and industry requirements by providing students with the latest technical knowledge and practical skills. We aim to create a generation of innovators and leaders who can contribute to the technological advancement of society.
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to be a leading center for computer education, recognized for our excellence in teaching, innovation, and student success. We aspire to empower individuals from all backgrounds to achieve their full potential in the digital age.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Team working together"
              width={600}
              height={400}
              className="w-full object-cover"
              data-ai-hint="students learning"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our commitment to excellence and student success sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We are dedicated to providing the highest quality education and fostering a learning environment where students can thrive and achieve their career goals.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit">
                  <Briefcase className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Our Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our focus is on practical, hands-on training that equips students with the skills and knowledge demanded by the industry today.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Our Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our goal is to empower our students to become skilled professionals and leaders in the tech industry, ready to take on new challenges.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We offer more than just courses. We provide a complete support system for your career.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                            {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
