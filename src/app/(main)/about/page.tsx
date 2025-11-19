
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Target, Users, BookOpen, Handshake, CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/team-card";
import imageData from "@/lib/placeholder-images.json";
import { Timeline } from "@/components/ui/timeline";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
      description: 'We are dedicated to providing the highest quality education and fostering a learning environment where students can thrive and achieve their career goals.'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Our Focus',
      description: 'Our focus is on practical, hands-on training that equips students with the skills and knowledge demanded by the industry today.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Our Goal',
      description: 'Our goal is to empower our students to become skilled professionals and leaders in the tech industry, ready to take on new challenges.'
    }
  ];

const welcomeFeatures = [
    "Award Winning",
    "Professional Staff",
    "Free Counseling",
    "Fair Prices"
];

const teamMembers = [
	{ 
        name: "Karan Singh", 
        role: "Founder & CEO", 
        image: "/images/karan.jpg",
        characterImage: "/images/karan-removebg.png",
        hint: "professional man"
    },
    { 
        name: "Vedika Singh",
        role: "Managing Director", 
        image: "/images/karan.jpg",
        characterImage: "/images/karan-removebg.png",
        hint: "professional woman"
    }
];

const timelineData = [
    {
      title: "2020 – Primezone is Founded",
      content:
        "Primezone Computer Education is established with a mission to bring quality computer education within reach of every student. The institute begins with a vision to create skilled, confident, and career-ready professionals.",
    },
    {
      title: "2021 – Expanding Quality Education",
      content:
        "Primezone introduces a wide range of courses including Software Development, Hardware & Networking, Multimedia, Animation, E-Accounting, and Digital Literacy. Both online and offline classes are launched to ensure maximum accessibility.",
    },
    {
      title: "2022 – Excellence Recognized",
      content:
        "Primezone gains recognition for its excellence, experienced faculty, and consistent training quality. The institute receives awards and builds a strong reputation among students across Mumbai.",
    },
    {
      title: "2023 – Student Success & Career Support",
      content:
        "Career counseling, job placement assistance, and personality development programs are introduced. Primezone begins forming partnerships with companies to help students secure real job opportunities.",
    },
    {
      title: "2024 – Growth of Primezone Community",
      content:
        "With thousands of students trained, Primezone becomes one of Mumbai’s most trusted computer education institutes. Practical, hands-on industry-oriented learning becomes the institute’s core strength.",
    },
    {
      title: "2025 – Moving Toward the Future",
      content:
        "Primezone continues to innovate with advanced diploma programs, modern teaching methods, and an expanded team. The institute remains committed to shaping future tech leaders and supporting students from every background.",
    },
  ];

const educationLogo = imageData.find(img => img.id === 'education-logo');
const studentsLearning = imageData.find(img => img.id === 'students-learning');

export default function AboutUs() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Page Header */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Primezone</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to shaping the future of tech professionals through quality education and hands-on training.
          </p>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Journey</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Tracing our path from a humble beginning to a trusted name in computer education.
            </p>
        </div>
        <Timeline data={timelineData} />
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
            {studentsLearning && (
              <Image 
                src={studentsLearning.src}
                alt="Team working together"
                width={studentsLearning.width}
                height={studentsLearning.height}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full object-cover"
                data-ai-hint={studentsLearning.hint}
              />
            )}
          </div>
        </div>
      </section>

       {/* Team Members Section */}
        <section className="relative py-16 overflow-hidden">
             <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        The driving force behind our success.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
                    {teamMembers.map(member => (
                        <TeamCard 
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            characterImage={member.characterImage}
                            hint={member.hint}
                        />
                    ))}
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
          <BentoGrid className="max-w-4xl mx-auto">
            {whyChooseUsItems.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
          </BentoGrid>
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
        <BentoGrid className="max-w-4xl mx-auto">
            {services.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
      </section>
    </div>
  );
}
