
"use client";

import DomeGallery from '@/components/dome-gallery';
import imageData from "@/lib/placeholder-images.json";

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
    { 
        src: imageData.find(img => img.id === 'happy-diverse-team')?.src, 
        alt: imageData.find(img => img.id === 'happy-diverse-team')?.hint,
        student: "Team Phoenix",
        course: "Group Project",
        projectLink: "https://github.com/team-phoenix/group-project",
        company: "N/A",
        videoLink: "https://youtube.com/watch?v=example5"
    },
    { 
        src: imageData.find(img => img.id === 'students-learning')?.src,
        alt: imageData.find(img => img.id === 'students-learning')?.hint,
        student: "Meera Iyer",
        course: "Digital Marketing",
        projectLink: "https://meeras-portfolio.com/case-study-1",
        company: "LeadGen Experts",
        videoLink: "https://youtube.com/watch?v=example6"
    },
    { 
        src: imageData.find(img => img.id === 'capstone-presentation')?.src,
        alt: imageData.find(img => img.id === 'capstone-presentation')?.hint,
        student: "Arjun Mehta",
        course: "Ethical Hacking",
        projectLink: "https://github.com/arjunmehta/security-audit",
        company: "CyberSafe LLC",
        videoLink: "https://youtube.com/watch?v=example7"
    },
    { 
        src: imageData.find(img => img.id === 'prototype')?.src,
        alt: imageData.find(img => img.id === 'prototype')?.hint,
        student: "Sneha Reddy",
        course: "UI/UX Design with Figma",
        projectLink: "https://www.figma.com/proto/example",
        company: "UserFlow Designs",
        videoLink: "https://youtube.com/watch?v=example8"
    },
    { 
        src: imageData.find(img => img.id === 'final-award')?.src,
        alt: imageData.find(img => img.id === 'final-award')?.hint,
        student: "Vikram Singh",
        course: "Advanced Excel & PowerBI",
        projectLink: "https://github.com/vikramsingh/sales-dashboard",
        company: "BizAnalytics",
        videoLink: "https://youtube.com/watch?v=example9"
    },
    { 
        src: imageData.find(img => img.id === 'office-tour')?.src,
        alt: imageData.find(img => img.id === 'office-tour')?.hint,
        student: "Aisha Khan",
        course: "Diploma in Computer Applications",
        projectLink: "https://github.com/aishakhan/office-management-system",
        company: "Smart Office Solutions",
        videoLink: "https://youtube.com/watch?v=example10"
    },
    { 
        src: imageData.find(img => img.id === 'creative-dept')?.src,
        alt: imageData.find(img => img.id === 'creative-dept')?.hint,
        student: "Rohan Joshi",
        course: "Adobe Creative Suite",
        projectLink: "https://www.behance.net/rohanjoshi/brand-identity",
        company: "Visionary Designs",
        videoLink: "https://youtube.com/watch?v=example11"
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
             <DomeGallery images={projectData} overlayBlurColor="#e2ebf0" />
        </section>
    </div>
  );
}
