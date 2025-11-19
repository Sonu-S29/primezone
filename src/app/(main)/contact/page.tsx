
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { PinContainer } from "@/components/ui/3d-pin";
import { useState, useEffect } from "react";
import Image from "next/image";

const locations = [
  {
    title: "Jogeshwari Branch",
    href: "https://g.co/kgs/e12TVNF",
  },
  {
    title: "Vile Parle Branch",
    href: "https://g.co/kgs/rvyVD8w",
  }
]

export default function ContactUsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
          {/* Contact Info & Maps */}
          <Card>
              <CardHeader>
                <CardTitle>Our Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
                  <Image 
                    src="/images/world-map.png" 
                    alt="World Map" 
                    fill 
                    className="object-cover opacity-20"
                    data-ai-hint="world map"
                  />
                  {isClient && (
                    <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-center gap-4">
                      {locations.map((loc) => (
                        <PinContainer
                            key={loc.title}
                            title={loc.title}
                            href={loc.href}
                        >
                          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground sm:basis-1/2 w-[16rem] h-[16rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center">
                              {loc.title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal text-center">
                              <span className="text-muted-foreground">
                                Click to see the location on Google Maps.
                              </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-100 via-sky-100 to-blue-200 items-center justify-center">
                                <MapPin className="h-16 w-16 text-primary" />
                            </div>
                          </div>
                        </PinContainer>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-headline">Get in Touch</h2>
                  <div className="grid sm:grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Email Us</h3>
                        <a href="mailto:pzofficial123@gmail.com" className="text-muted-foreground hover:text-primary">pzofficial123@gmail.com</a> | <a href="mailto:primezonecomputer@gmail.com" className="text-muted-foreground hover:text-primary">primezonecomputer@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Call Us</h3>
                        <a href="tel:+919769730087" className="text-muted-foreground hover:text-primary">(+91) 97697 30087</a> | <a href="tel:+919321773941" className="text-muted-foreground hover:text-primary">(+91) 93217 73941</a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
          </Card>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
