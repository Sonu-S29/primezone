
"use client";

import { useState } from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { certificateData } from "@/lib/certificate-data";
import { Button } from "@/components/ui/button";

type Certificate = (typeof certificateData)[0];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Page Header */}
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Certifications</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Proudly recognized by leading authorities in skill development and education.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificateData.map((cert) => (
            <Dialog key={cert.id} onOpenChange={(isOpen) => !isOpen && setSelectedCert(null)}>
              <DialogTrigger asChild>
                <button onClick={() => setSelectedCert(cert)} className="focus:outline-none">
                  <CardContainer>
                    <CardBody className="bg-background relative group/card w-auto h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-primary"
                      >
                        {cert.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-muted-foreground text-sm max-w-sm mt-2"
                      >
                        {cert.issuer}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={cert.src}
                          height={cert.height}
                          width={cert.width}
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt={`Certificate for ${cert.title}`}
                          data-ai-hint={cert.hint}
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-10">
                        <CardItem
                          translateZ={20}
                          as="p"
                          className="text-muted-foreground text-xs"
                        >
                          Issued: {cert.year}
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                        >
                          View
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </button>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>
      </section>
      
      {/* Dialog for full-screen view */}
      {selectedCert && (
        <Dialog open={!!selectedCert} onOpenChange={(isOpen) => !isOpen && setSelectedCert(null)}>
            <DialogContent className="max-w-4xl w-full p-2">
                <DialogHeader className="sr-only">
                    <DialogTitle>{selectedCert.title}</DialogTitle>
                </DialogHeader>
                <div className="w-full aspect-[4/3] relative">
                    <Image
                        src={selectedCert.src}
                        alt={`Full view of ${selectedCert.title}`}
                        fill
                        className="object-contain"
                        data-ai-hint={selectedCert.hint}
                    />
                </div>
            </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
