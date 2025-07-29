import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const diplomaCourses = [
  {
    title: "Diploma in Computer Application & Programming (DCAP)",
    description: "A comprehensive course covering computer fundamentals, office automation, programming concepts with C & C++, and web designing.",
    duration: "12 Months",
    careerPaths: "Data Entry Operator, Office Assistant, Junior Programmer, Web Designer.",
    image: "https://placehold.co/600x400.png",
    hint: "programming code",
  },
  {
    title: "Diploma in Financial Accounting (DFA)",
    description: "Master the art of accounting with Tally Prime, covering everything from basic accounting principles to advanced GST compliance.",
    duration: "6 Months",
    careerPaths: "Accountant, Finance Executive, Tally Operator, Tax Consultant.",
    image: "https://placehold.co/600x400.png",
    hint: "financial charts",
  },
  {
    title: "Diploma in Web Development (DWD)",
    description: "Learn to build dynamic websites and applications with HTML, CSS, JavaScript, React, Node.js, and database management.",
    duration: "12 Months",
    careerPaths: "Front-end Developer, Back-end Developer, Full-stack Developer, Webmaster.",
    image: "https://placehold.co/600x400.png",
    hint: "website design",
  },
  {
    title: "Diploma in Graphic Designing (DGD)",
    description: "Unleash your creativity. This course covers graphic design principles, Adobe Photoshop, Illustrator, and CorelDRAW.",
    duration: "6 Months",
    careerPaths: "Graphic Designer, UI/UX Designer, Brand Identity Designer, Illustrator.",
    image: "https://placehold.co/600x400.png",
    hint: "graphic design",
  },
];

export default function DiplomaCoursesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Diploma Courses</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Comprehensive programs designed to build a strong foundation for a successful career in technology.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {diplomaCourses.map((course) => (
            <Card key={course.title} className="flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/3">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={course.hint}
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <strong>Duration:</strong> <span className="ml-2">{course.duration}</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Briefcase className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Career Paths:</strong> <span className="ml-2">{course.careerPaths}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/enroll">Enroll Now</Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
