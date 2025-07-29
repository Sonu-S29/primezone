import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const diplomaCourses = [
  {
    title: "DIA (Diploma In Accounting)",
    description: "Gain comprehensive knowledge in financial, managerial, and tax accounting, preparing you for various roles in the accounting field.",
    image: "https://placehold.co/600x400.png",
    hint: "accounting collage",
  },
  {
    title: "DFA (Diploma In Financial Accounting)",
    description: "Master financial accounting principles, practices, and software tools essential for managing an organization's financial records and reports.",
    image: "https://placehold.co/600x400.png",
    hint: "financial report",
  },
  {
    title: "DCA (Diploma In Computer Application)",
    description: "Learn essential computer skills, including hardware basics, operating systems, and popular software applications for personal and professional use.",
    image: "https://placehold.co/600x400.png",
    hint: "computer application",
  },
  {
    title: "DFAM (Diploma In Financial & Management)",
    description: "Develop skills in financial analysis, investment strategies, and management principles to prepare for careers in finance and business administration.",
    image: "https://placehold.co/600x400.png",
    hint: "financial management",
  },
  {
    title: "DPC (Diploma In Programming Course)",
    description: "Master various programming languages and concepts for front-end, back-end, mobile, and machine learning development to become a versatile programmer.",
    image: "https://placehold.co/600x400.png",
    hint: "programming course",
  },
  {
    title: "DGA (Diploma In Graphic & Animation)",
    description: "Explore graphic design principles, digital illustration, and animation techniques to create visually appealing content for various media platforms.",
    image: "https://placehold.co/600x400.png",
    hint: "graphic animation",
  },
  {
    title: "DEH (Diploma In Ethical Hacking)",
    description: "Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking practices to protect systems and networks from malicious attacks.",
    image: "https://placehold.co/600x400.png",
    hint: "ethical hacking",
  },
  {
    title: "DDM (Diploma In Digital Marketing)",
    description: "Master digital marketing strategies, including SEO, social media marketing, content creation, and analytics to promote businesses in the online world.",
    image: "https://placehold.co/600x400.png",
    hint: "digital marketing",
  },
  {
    title: "Full-Stack Development",
    description: "Become proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, Angular, Node.js, and MySQL for comprehensive web development.",
    image: "https://placehold.co/600x400.png",
    hint: "full stack",
  },
  {
    title: "Data Analytics",
    description: "Develop skills in data mining, statistical analysis, and data visualization to extract meaningful insights and support data-driven decision-making in businesses.",
    image: "https://placehold.co/600x400.png",
    hint: "data analytics",
  },
];

export default function DiplomaCoursesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Diploma Courses for your Better Career</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {diplomaCourses.map((course) => (
            <Card key={course.title} className="flex flex-col md:flex-row overflow-hidden group glass-effect">
              <div className="md:w-2/5 relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={course.hint}
                />
              </div>
              <div className="md:w-3/5 flex flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{course.title.split('(')[0]}</CardTitle>
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="pt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-0 mt-auto pt-6">
                  <Button asChild>
                    <Link href="/enroll">Learn More <ChevronRight className="ml-2 h-4 w-4"/></Link>
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
