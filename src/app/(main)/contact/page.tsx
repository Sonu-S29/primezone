
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, School, ExternalLink } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { Map, Marker } from "@/components/ui/map";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import MapRoute from "@/components/map-route";

const locations = [
  {
    title: "Jogeshwari Branch",
    address: "Shop No.5, Plot No.2, Ghaswala C.H.S.L, Opp. S.V. Road, Jogeshwari West, Mumbai, Maharashtra 400102, India",
    href: "https://g.co/kgs/e12TVNF",
    email: "pzofficial123@gmail.com",
    phone: "(+91) 97697 30087",
    longitude: 72.8524,
    latitude: 19.1354,
  },
  {
    title: "Vile Parle Branch",
    address: "Paranjape Udyog Mandir, Paranjape B Scheme, 3rd Rd, Vile Parle East, Mumbai, Maharashtra 400057, India",
    href: "https://g.co/kgs/rvyVD8w",
    email: "primezonecomputer@gmail.com",
    phone: "(+91) 93217 73941",
    longitude: 72.8441,
    latitude: 19.1009,
  }
];

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
          {/* Map and Route Finder */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Locations</CardTitle>
                <CardDescription>Hover over a marker to see branch details.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border">
                   <Map>
                    {locations.map((loc) => (
                      <Marker key={loc.title} longitude={loc.longitude} latitude={loc.latitude}>
                        <HoverCard>
                           <HoverCardTrigger asChild>
                              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer pulsating-marker">
                                <School className="h-6 w-6 text-primary" />
                              </div>
                           </HoverCardTrigger>
                           <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                  <h4 className="font-semibold">{loc.title}</h4>
                                  <p className="text-sm text-muted-foreground">{loc.address}</p>
                                  <div className="flex items-center pt-2">
                                    <Mail className="mr-2 h-4 w-4 opacity-70" />
                                    <span className="text-xs text-muted-foreground">{loc.email}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Phone className="mr-2 h-4 w-4 opacity-70" />
                                    <span className="text-xs text-muted-foreground">{loc.phone}</span>
                                  </div>
                                  <Button asChild variant="link" className="p-0 h-auto text-xs">
                                     <a href={loc.href} target="_blank" rel="noopener noreferrer">
                                        View on Google Maps <ExternalLink className="ml-2 h-3 w-3" />
                                     </a>
                                  </Button>
                                </div>
                           </HoverCardContent>
                        </HoverCard>
                      </Marker>
                    ))}
                  </Map>
                </div>
              </CardContent>
            </Card>
            <MapRoute />
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
