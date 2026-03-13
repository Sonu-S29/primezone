
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, CheckCircle } from "lucide-react";
import { diplomaCourses } from "@/lib/course-data";
import DiplomaCourseCard from "@/components/diploma-course-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Diploma Courses in Mumbai | Certified Career Programs | Primezone",
  description: "Explore the most popular Diploma Courses in Mumbai after 10th, 12th, and Graduation. Primezone offers certified training in Accounting, Programming, Design, and Digital Marketing with job placement in Mumbai.",
  alternates: {
    canonical: "/courses/diploma",
  },
};

export default function DiplomaCoursesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight">Job-Oriented Diploma Courses in Mumbai</h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">Accelerate your career with our government-recognized diploma programs designed for students and graduates.</p>
        </div>
      </section>

       <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diplomaCourses.map((course) => (
            <DiplomaCourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
