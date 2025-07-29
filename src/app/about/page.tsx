import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Target, Users, BookOpen, Handshake, CheckCircle } from "lucide-react";
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

const whyChooseUsItems = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Commitment',
      description: 'We are dedicated to providing the highest quality education and fostering a learning environment where students can thrive and achieve their career goals.',
      details: ['Quality First', 'Student Success', 'Continuous Improvement']
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Our Focus',
      description: 'Our focus is on practical, hands-on training that equips students with the skills and knowledge demanded by the industry today.',
      details: ['Industry Aligned', 'Practical Skills', 'Project-based Learning']
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Our Goal',
      description: 'Our goal is to empower our students to become skilled professionals and leaders in the tech industry, ready to take on new challenges.',
      details: ['Empowerment', 'Leadership', 'Future-Ready']
    }
  ];

export default function AboutUs() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Page Header */}
      <section className="py-12">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our commitment to excellence and student success sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
                <div key={index} className="flip-card h-80">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card className="text-center glass-effect h-full flex flex-col justify-center">
                                <CardHeader>
                                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="mt-4">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{item.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flip-card-back">
                            <Card className="text-center glass-effect h-full flex flex-col justify-center">
                                <CardHeader>
                                    <CardTitle className="mt-4">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-left">
                                        {item.details.map((detail, i) => (
                                            <li key={i} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            ))}
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
                <Card key={index} className="glass-effect">
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
