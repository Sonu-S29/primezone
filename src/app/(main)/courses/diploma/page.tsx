import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, CheckCircle } from "lucide-react";
import { diplomaCourses } from "@/lib/course-data";
import DiplomaCourseCard from "@/components/diploma-course-card";

export default function DiplomaCoursesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Most Popular Diploma Courses After 10th, 12th, and Graduation.</h1>
        </div>
      </section>

       <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {diplomaCourses.map((course) => (
            <DiplomaCourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
