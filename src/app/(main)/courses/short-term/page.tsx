import ShortTermCourseGrid from "@/components/short-term-course-grid";
import { courseData } from "@/lib/course-data";

export default function ShortTermCoursesPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Short-Term Courses</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Fast-track your skills with our specialized certificate programs. Perfect for professionals and students looking to upgrade their knowledge.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <ShortTermCourseGrid courseData={courseData} />
      </section>
    </div>
  );
}
