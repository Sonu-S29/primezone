import Image from "next/image";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Classroom session in progress", hint: "classroom students" },
  { src: "https://placehold.co/400x600.png", alt: "Student receiving a certificate", hint: "student certificate" },
  { src: "https://placehold.co/600x400.png", alt: "Modern computer lab", hint: "computer lab" },
  { src: "https://placehold.co/600x400.png", alt: "Group of students collaborating", hint: "students collaborating" },
  { src: "https://placehold.co/400x600.png", alt: "Instructor helping a student", hint: "teacher student" },
  { src: "https://placehold.co/600x400.png", alt: "Annual tech event", hint: "tech event" },
  { src: "https://placehold.co/600x400.png", alt: "Seminar on web development", hint: "seminar presentation" },
  { src: "https://placehold.co/400x600.png", alt: "Student working on a project", hint: "student coding" },
  { src: "https://placehold.co/600x400.png", alt: "Our institution building", hint: "education building" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into life at Primezone Computer Education. Explore our campus, events, and student activities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.hint}
                    />
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
