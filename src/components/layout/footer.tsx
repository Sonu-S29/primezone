"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronUp, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">PrimeZone Computer Education</h3>
            <p className="text-primary-foreground/70 text-sm">
              PRIMEZONE COMPUTER EDUCATION was founded in 2020. It brings computer education within reach of common people, supporting students to add professional skills and achieve higher goals in life.
            </p>
            <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 shrink-0"/>
                    <a href="mailto:pzofficial123@gmail.com" className="hover:text-primary-foreground text-sm">pzofficial123@gmail.com</a>
                </li>
                 <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 shrink-0"/>
                    <a href="tel:+919702570087" className="hover:text-primary-foreground text-sm">(+91) 97025 70087</a>
                </li>
             </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm"><ChevronRight className="h-4 w-4 mr-1"/>Home</Link></li>
              <li><Link href="/about" className="flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm"><ChevronRight className="h-4 w-4 mr-1"/>About Us</Link></li>
              <li><Link href="/courses/diploma" className="flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm"><ChevronRight className="h-4 w-4 mr-1"/>Courses</Link></li>
              <li><Link href="/contact" className="flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm"><ChevronRight className="h-4 w-4 mr-1"/>Contact us</Link></li>
              <li><Link href="/recommendations" className="flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm"><ChevronRight className="h-4 w-4 mr-1"/>AI Recommender</Link></li>
            </ul>
          </div>

          {/* Our Branches */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Branches</h3>
            <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 mt-1 shrink-0"/>
                    <span className="text-sm">Jogeshwari Branch</span>
                </li>
                 <li className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 mt-1 shrink-0"/>
                    <span className="text-sm">Vile Parle Branch</span>
                </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
             <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
             <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex items-start">
                    <Clock className="h-4 w-4 mr-3 mt-1 shrink-0"/>
                    <span className="text-sm"><b>Monday to Saturday :</b> 8:00 AM - 9:00 PM</span>
                </li>
                <li className="flex items-start">
                    <Clock className="h-4 w-4 mr-3 mt-1 shrink-0"/>
                     <span className="text-sm"><b>Sunday :</b> 11:00 AM - 6:00 PM</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Primezone Computer Education. All Rights Reserved.</p>
        </div>
      </div>
       <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-accent text-accent-foreground rounded-md p-2 hover:bg-accent/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
