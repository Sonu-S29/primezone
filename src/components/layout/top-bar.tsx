import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Youtube, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { href: "https://www.instagram.com/primezone_computer_education/", icon: <Instagram className="h-4 w-4" />, name: "Instagram" },
    { href: "https://www.facebook.com/primezonecomputerjogeshwari/", icon: <Facebook className="h-4 w-4" />, name: "Facebook" },
    { href: "https://x.com/primezone", icon: <Twitter className="h-4 w-4" />, name: "X" },
    { href: "https://www.youtube.com", icon: <Youtube className="h-4 w-4" />, name: "YouTube" },
];

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground hidden md:block">
        <div className="container flex h-10 items-center justify-between text-xs font-medium">
             <div className="flex items-center gap-6">
                <a href="mailto:pzofficial123@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>pzofficial123@gmail.com</span>
                </a>
                <a href="tel:+919769730087" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>(+91) 97697 30087</span>
                </a>
             </div>
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    {socialLinks.map(link => (
                         <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="hover:text-secondary transition-colors">
                            {link.icon}
                        </a>
                    ))}
                </div>
                 <div className="h-5 w-px bg-primary-foreground/30"></div>
                 <Button asChild variant="secondary" size="sm" className="h-auto py-1 px-3 text-xs">
                    <a href="https://wa.me/919769730087" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Connect Now
                    </a>
                </Button>
             </div>
        </div>
    </div>
  );
}
