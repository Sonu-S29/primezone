import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import imageData from "@/lib/placeholder-images.json";
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: "Student Projects",
  description: "Explore the creative and innovative work of our talented students at Primezone Computer Education.",
  alternates: {
    canonical: "/student-projects",
  },
};

const DomeGallery = dynamic(() => import('@/components/dome-gallery'), {
    loading: () => <Skeleton className="w-full h-full" />,
    ssr: false
});

const projectData = [
    { 
        src: imageData.find(img => img.id === 'web-dev-future')?.src, 
        alt: imageData.find(img => img.id === 'web-dev-future')?.hint,
        student: "Priya Sharma",
        course: "Full-Stack Web Development",
        projectLink: "https://github.com/priyasharma/portfolio-project",
        company: "TechSolutions Inc.",
        videoLink: "https://youtube.com/watch?v=example1"
    },
    { 
        src: imageData.find(img => img.id === 'accounting-guide')?.src, 
        alt: imageData.find(img => img.id === 'accounting-guide')?.hint,
        student: "Rajesh Kumar",
        course: "Diploma in Financial Accounting",
        projectLink: "https://github.com/rajeshkumar/accounting-app",
        company: "FinancePro",
        videoLink: "https://youtube.com/watch?v=example2"
    },
    { 
        src: imageData.find(img => img.id === 'python-ds')?.src, 
        alt: imageData.find(img => img.id === 'python-ds')?.hint,
        student: "Anita Desai",
        course: "Data Analytics",
        projectLink: "https://github.com/anitadesai/data-analysis-report",
        company: "Data Insights Co.",
        videoLink: "https://youtube.com/watch?v=example3"
    },
    { 
        src: imageData.find(img => img.id === 'design-trends')?.src, 
        alt: imageData.find(img => img.id === 'design-trends')?.hint,
        student: "Sunil Verma",
        course: "Graphic Design & Animation",
        projectLink: "https://www.behance.net/sunilverma/project-1",
        company: "Creative Minds Studio",
        videoLink: "https://youtube.com/watch?v=example4"
    },
].filter(item => item.src);


export default function StudentProjectsPage() {
  return (
    <div>
        <section className="bg-card py-12">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Student Projects</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore the creative and innovative work of our talented students.
              </p>
            </div>
        </section>
        <section className='relative h-[80vh] bg-gradient-to-br from-blue-100 to-white'>
            <DomeGallery images={projectData} overlayBlurColor="#e2ebf0" grayscale={false} />
        </section>
    </div>
  );
}
