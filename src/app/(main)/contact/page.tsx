import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import dynamic from 'next/dynamic';
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Primezone Computer Education. Reach out to our branches in Jogeshwari and Vile Parle for inquiries and course details.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactMap = dynamic(() => import('@/components/contact-map'), {
  ssr: false,
  loading: () => (
    <div className="space-y-8">
      <Card>
        <Card className="w-full h-[600px] rounded-lg">
          <Skeleton className="w-full h-full" />
        </Card>
      </Card>
    </div>
  )
});

export default function ContactUsPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactMap />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
