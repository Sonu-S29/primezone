
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
                <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center rounded-lg overflow-hidden">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120652.5539294975!2d72.78413812553956!3d19.1118676239109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c67!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1622582824982!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full opacity-30"
                  ></iframe>

                  {isClient && (
                    <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-center gap-4">
                      {locations.map((loc) => (
                        <PinContainer
                            key={loc.title}
                            title={loc.title}
                            href={loc.href}
                        >
                          <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20">
                            <MapPin className="h-10 w-10 md:h-12 md:w-12 text-primary" />
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

