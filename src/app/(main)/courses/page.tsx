
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const courseCategories = [
  {
    title: "Diploma Courses",
    description: "In-depth programs for comprehensive skill development.",
    image: "/images/diplomacard.jpg",
    hint: "diploma certificate",
    link: "/courses/diploma",
    details: [
        "Long-term, comprehensive curriculum",
        "Ideal for building a strong career foundation",
        "Covers multiple technologies and concepts",
        "Includes project work and practical assignments"
    ]
  },
  {
    title: "Short-Term Courses",
    description: "Quickly upgrade your skills with our focused certificate courses.",
    image: "/images/shorttermcard.jpg",
    hint: "stopwatch certificate",
    link: "/courses/short-term",
    details: [
        "Short, intensive and focused programs",
        "Perfect for skill upgradation",
        "Covers specific tools or technologies",
        "Quickly adds value to your profile"
    ]
  },
];

export default function CoursesPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Courses</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from a wide range of courses designed to equip you with the skills needed for a successful career in the tech industry.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-12">
          {courseCategories.map((category) => (
            <div key={category.title} className="flip-card h-96 w-full max-w-sm">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Card className="overflow-hidden group glass-effect h-full flex flex-col">
                            <div className="relative w-full h-64">
                                <Image 
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={category.hint}
                                />
                            </div>
                            <CardHeader className="flex-grow">
                                <CardTitle>{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{category.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flip-card-back">
                        <Card className="glass-effect h-full flex flex-col justify-between p-6 animated-network-card">
                            <CardHeader>
                                <CardTitle>{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {category.details.map((detail, index) => (
                                        <li key={index} className="flex items-center">
                                            <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardContent>
                                <Button asChild className="w-full">
                                    <Link href={category.link}>View Courses</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
