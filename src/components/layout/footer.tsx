import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
        {children}
    </div>
)

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <GraduationCap className="h-7 w-7" />
                <span className="font-headline">Primezone</span>
            </Link>
            <p className="text-primary-foreground/70">
              Your gateway to a successful career in the tech industry. We offer a range of courses to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
                {/* Placeholder social icons */}
                <SocialIcon><p className="font-bold text-sm">f</p></SocialIcon>
                <SocialIcon><p className="font-bold text-sm">in</p></SocialIcon>
                <SocialIcon><p className="font-bold text-sm">X</p></SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground">Gallery</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground">Contact Us</Link></li>
              <li><Link href="/enroll" className="text-primary-foreground/70 hover:text-primary-foreground">Enroll Now</Link></li>
              <li><Link href="/recommendations" className="text-primary-foreground/70 hover:text-primary-foreground">AI Recommender</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link href="/courses/diploma" className="text-primary-foreground/70 hover:text-primary-foreground">Diploma Courses</Link></li>
              <li><Link href="/courses/short-term" className="text-primary-foreground/70 hover:text-primary-foreground">Short-Term Courses</Link></li>
              <li><Link href="/courses/short-term#tally" className="text-primary-foreground/70 hover:text-primary-foreground">Tally Prime</Link></li>
              <li><Link href="/courses/short-term#webdev" className="text-primary-foreground/70 hover:text-primary-foreground">Web Development</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
             <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
             <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0"/>
                    <span>123 Tech Street, Innovation City, 12345</span>
                </li>
                <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 shrink-0"/>
                    <a href="mailto:contact@primezone.edu" className="hover:text-primary-foreground">contact@primezone.edu</a>
                </li>
                 <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 shrink-0"/>
                    <a href="tel:+1234567890" className="hover:text-primary-foreground">+1 (234) 567-890</a>
                </li>
             </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Primezone Computer Education. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
