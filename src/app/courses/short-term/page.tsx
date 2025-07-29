import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const shortTermCourses = [
  {
    id: "tally",
    title: "Advanced Tally Prime with GST",
    description: "Gain expertise in the latest version of Tally for accounting, inventory, and GST compliance.",
    duration: "3 Months",
    targetAudience: "Commerce students, Accountants, Small Business Owners.",
    image: "https://placehold.co/600x400.png",
    hint: "accounting software screen",
  },
  {
    id: "webdev",
    title: "Certificate in Web Designing",
    description: "Learn the essentials of web design including HTML5, CSS3, and JavaScript to create stunning websites.",
    duration: "4 Months",
    targetAudience: "Aspiring web designers, students, entrepreneurs.",
    image: "https://placehold.co/600x400.png",
    hint: "web design layout",
  },
  {
    title: "C & C++ Programming",
    description: "Build a strong foundation in programming with two of the most powerful languages in the industry.",
    duration: "3 Months",
    targetAudience: "Beginners in programming, Engineering students.",
    image: "https://placehold.co/600x400.png",
    hint: "c++ code",
  },
  {
    title: "Python for Data Science",
    description: "An introduction to Python programming for data analysis and visualization.",
    duration: "4 Months",
    targetAudience: "Aspiring data scientists, IT professionals, analysts.",
    image: "https://placehold.co/600x400.png",
    hint: "data science dashboard",
  },
];

export default function ShortTermCoursesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Short-Term Courses</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Fast-track your skills with our specialized certificate programs. Perfect for professionals and students looking to upgrade their knowledge.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shortTermCourses.map((course) => (
            <Card key={course.title} id={course.id} className="flex flex-col overflow-hidden group">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={course.hint}
              />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                 <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <strong>Duration:</strong> <span className="ml-2">{course.duration}</span>
                  </div>
                <div className="flex items-start text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Target Audience:</strong> <span className="ml-2">{course.targetAudience}</span>
                    </div>
                  </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/enroll">Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
