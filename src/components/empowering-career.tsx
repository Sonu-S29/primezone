
"use client";

import Image from "next/image";
import { Award, Briefcase, Users, MessageSquare } from "lucide-react";

const empoweringFeatures = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Best In Industry",
      description: "Primezone Computer Education, established in 2020, is committed to delivering industry-leading computer education. We focus on providing cutting-edge courses that align with current market demands, ensuring our students are well-prepared for successful careers in the ever-evolving tech industry."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award Winning",
      description: "Primezone's commitment to excellence has been recognized through numerous awards and accolades. Our innovative teaching methods, state-of-the-art facilities, and outstanding student outcomes have positioned us as a leader in computer education, earning us recognition from industry experts and educational institutions alike."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Staff",
      description: "Primezone boasts a team of highly qualified and experienced professionals who are passionate about teaching. Our instructors are industry experts with practical knowledge, ensuring that students receive not just theoretical education but also valuable insights into real-world applications and current industry practices."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Free Counseling",
      description: "Primezone offers free career counseling to all students and prospective learners. Our experienced counselors provide personalized guidance to help you choose the right course, understand career paths in the tech industry, and make informed decisions about your educational journey. We're committed to supporting your success every step of the way."
    }
];

export default function EmpoweringCareer() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <p className="font-semibold text-accent">WHY CHOOSE US</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mt-2">Empowering your career journey with in-demand skills and knowledge</h2>
                <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 space-y-8">
                    {empoweringFeatures.slice(0, 2).map((feature, index) => (
                        <div key={index} className="text-left md:text-right">
                            <div className="flex md:flex-row-reverse items-center gap-4">
                               <div className="flex-grow">
                                   <h3 className="font-bold text-lg">{feature.title}</h3>
                                   <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                               </div>
                               <div className="p-3 bg-accent text-accent-foreground rounded-lg flex-shrink-0">
                                   {feature.icon}
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:col-span-4 row-start-1 md:row-start-auto">
                    <Image 
                        src="/images/logo.png"
                        alt="Computer lab"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-xl mx-auto"
                        data-ai-hint="computer lab"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                    />
                </div>
                <div className="md:col-span-4 space-y-8">
                    {empoweringFeatures.slice(2, 4).map((feature, index) => (
                        <div key={index} className="text-left">
                            <div className="flex items-center gap-4">
                               <div className="p-3 bg-accent text-accent-foreground rounded-lg flex-shrink-0">
                                   {feature.icon}
                               </div>
                               <div className="flex-grow">
                                   <h3 className="font-bold text-lg">{feature.title}</h3>
                                   <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

    