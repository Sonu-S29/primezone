
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { PinContainer } from "@/components/ui/3d-pin";
import { useState, useEffect } from "react";

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
                <div className="grid sm:grid-cols-2 gap-4 h-[25rem] md:h-[30rem] items-center justify-center">
                  {isClient && (
                    <>
                      <PinContainer
                          title="Jogeshwari"
                          href="https://g.co/kgs/e12TVNF"
                      >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-foreground sm:basis-1/2 w-[18rem] h-[22rem]">
                          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base">
                            Jogeshwari Branch
                          </h3>
                          <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-muted-foreground">
                              Click to see the location on Google Maps.
                            </span>
                          </div>
                          <div className="flex flex-1 w-full rounded-lg mt-4 bg-card overflow-hidden">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.378772392474!2d72.8550920749877!3d19.13490904921614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d45084457f%3A0x956b464b5d63fef0!2sPrimezone%20Computer%20Education%20(Jogeshwari)!5e0!3m2!1sen!2sin!4v1700486858178!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                        </div>
                      </PinContainer>
                      <PinContainer
                          title="Vile Parle"
                          href="https://g.co/kgs/rvyVD8w"
                      >
                         <div className="flex basis-full flex-col p-4 tracking-tight text-foreground sm:basis-1/2 w-[18rem] h-[22rem]">
                          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base">
                           Vile Parle Branch
                          </h3>
                          <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-muted-foreground">
                              Click to see the location on Google Maps.
                            </span>
                          </div>
                          <div className="flex flex-1 w-full rounded-lg mt-4 bg-card overflow-hidden">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.473523558113!2d72.85246287498642!3d19.08688405085814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ac7f1f0085%3A0x33df871465324269!2sPrimezone%20Computer%20Education%20(Vile%20Parle)!5e0!3m2!1sen!2sin!4v1700486948577!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                          </div>
                        </div>
                      </PinContainer>
                    </>
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
