
import ShortTermCourseGrid from "@/components/short-term-course-grid";
import { courseData } from "@/lib/course-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short-Term Certification Courses in Mumbai | Fast-Track Skills | Primezone",
  description: "Upgrade your skills quickly with Primezone's short-term certification courses in Mumbai. Master Advanced Excel, Tally, SQL, Python, and more in just 2-6 months. Perfect for job seekers and working professionals.",
  alternates: {
    canonical: "/courses/short-term",
  },
};

export default function ShortTermCoursesPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary leading-tight">Short-Term Courses in Mumbai</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Fast-track your career with specialized certificate programs. Perfect for skill upgradation and quick job placement.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <ShortTermCourseGrid courseData={courseData} />
      </section>
    </div>
  );
}
