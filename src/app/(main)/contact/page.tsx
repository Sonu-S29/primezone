
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { Map, Marker, Popup } from "@/components/ui/map";
import MapRoute from "@/components/map-route";
import L from 'leaflet';

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

const schoolIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(205 100% 14%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><path d="M12 5v17"/></svg>`;

export default function ContactUsPage() {
  const [customIcon, setCustomIcon] = useState<L.DivIcon | null>(null);

  useEffect(() => {
    // Leaflet's L object is only available on the client.
    // We create the icon inside useEffect to ensure it runs client-side.
    if (typeof window !== 'undefined') {
      const icon = L.divIcon({
        html: `<div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer pulsating-marker">${schoolIconSvg}</div>`,
        className: '', // This is important to override default Leaflet styles
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });
      setCustomIcon(icon);
    }
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
          {/* Map and Route Finder */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Locations</CardTitle>
                <CardDescription>Click on a marker to see branch details.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border">
                   <Map>
                    {locations.map((loc) => customIcon && (
                      <Marker key={loc.title} position={[loc.latitude, loc.longitude]} icon={customIcon}>
                         <Popup>
                            <div className="space-y-2 w-64">
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
                         </Popup>
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
