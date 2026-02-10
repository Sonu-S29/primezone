
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, Loader2, Map as MapIcon } from "lucide-react";
import { Map, Marker, Popup, Polyline, useMap } from "@/components/ui/map";
import type { DivIcon, LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
const userIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--destructive))" stroke="white" stroke-width="1.5"><circle cx="12" cy="12" r="10" /></svg>`;

// Haversine formula to calculate distance between two points
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

function ChangeMapView({ bounds }: { bounds: LatLngBoundsExpression | null }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, map]);

  return null;
}

export default function ContactMap() {
  const [customIcon, setCustomIcon] = useState<DivIcon | null>(null);
  const [userIcon, setUserIcon] = useState<DivIcon | null>(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
  const [route, setRoute] = useState<LatLngExpression[] | null>(null);
  const [bounds, setBounds] = useState<LatLngBoundsExpression | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    import('leaflet').then(L => {
      const schoolIconInstance = L.divIcon({
        html: `<div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer pulsating-marker">${schoolIconSvg}</div>`,
        className: '',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });
      setCustomIcon(schoolIconInstance);

      const userIconInstance = L.divIcon({
        html: `<div class="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center border-2 border-white shadow-lg">${userIconSvg}</div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
      setUserIcon(userIconInstance);
    });
  }, []);

  const findNearestBranch = async () => {
    if (!location.trim()) {
      toast({
        title: "Location Required",
        description: "Please enter your location.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate geocoding API call
    setTimeout(() => {
      // Mock geocoding result for "Andheri Station"
      const currentUserLocation: LatLngExpression = [19.1197, 72.8464];

      let nearestBranch = locations[0];
      let minDistance = getDistance(
        currentUserLocation[0],
        currentUserLocation[1],
        locations[0].latitude,
        locations[0].longitude
      );

      locations.slice(1).forEach((branch) => {
        const distance = getDistance(
          currentUserLocation[0],
          currentUserLocation[1],
          branch.latitude,
          branch.longitude
        );
        if (distance < minDistance) {
          minDistance = distance;
          nearestBranch = branch;
        }
      });
      
      const nearestBranchLocation: LatLngExpression = [nearestBranch.latitude, nearestBranch.longitude];
      
      setUserLocation(currentUserLocation);
      setRoute([currentUserLocation, nearestBranchLocation]);
      setBounds([currentUserLocation, nearestBranchLocation]);
      setLoading(false);

      toast({
        title: "Route Found!",
        description: `Showing the direct path to the ${nearestBranch.title}.`,
      });

    }, 1500);
  };

  return (
    <div className="space-y-8">
        <Card>
            <CardHeader>
            <CardTitle>Our Locations</CardTitle>
            <CardDescription>Hover a marker for details or find the nearest branch below.</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border">
                <Map>
                {locations.map((loc) => customIcon && (
                    <Marker 
                    key={loc.title} 
                    position={[loc.latitude, loc.longitude]} 
                    icon={customIcon}
                    eventHandlers={{
                        mouseover: (event) => {
                            event.target.openPopup();
                        },
                        mouseout: (event) => {
                            event.target.closePopup();
                        },
                    }}
                    >
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
                {userLocation && userIcon && (
                    <Marker position={userLocation} icon={userIcon}>
                        <Popup>Your Location</Popup>
                    </Marker>
                )}
                {route && (
                    <Polyline pathOptions={{ color: 'hsl(var(--primary))', dashArray: '5, 10', weight: 3 }} positions={route} />
                )}
                <ChangeMapView bounds={bounds} />
                </Map>
            </div>
            </CardContent>
            <CardFooter>
            <Dialog>
                <DialogTrigger asChild>
                <Button className="w-full">
                    <MapIcon className="mr-2 h-4 w-4" />
                    Find Your Nearest Branch
                </Button>
                </DialogTrigger>
                <DialogContent>
                <DialogHeader>
                    <DialogTitle>Find Your Nearest Branch</DialogTitle>
                    <DialogDescription>
                    Enter your location to see the route to the closest Primezone center.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., Andheri Station, Mumbai"
                        disabled={loading}
                    />
                    </div>
                    <Button onClick={findNearestBranch} className="w-full" disabled={loading}>
                    {loading ? (
                        <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Searching...
                        </>
                    ) : (
                        <>
                        <MapIcon className="mr-2 h-4 w-4" />
                        Show Route
                        </>
                    )}
                    </Button>
                </div>
                </DialogContent>
            </Dialog>
            </CardFooter>
        </Card>
    </div>
  );
}
