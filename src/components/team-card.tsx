
"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook } from "lucide-react";

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    hint: string;
}

export default function TeamCard({ name, role, image, hint }: TeamCardProps) {
    return (
        <div className="team-card-container">
            <div className="wrapper">
                <Image src={image} alt={name} width={300} height={450} className="cover-image" data-ai-hint={hint} />
                <div className="team-card-title text-center text-white">
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <p className="text-lg">{role}</p>
                </div>
                <div className="team-card-content">
                    <div className="flex justify-center gap-4">
                        <Link href="#" className="text-white hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-accent transition-colors">
                            <Twitter size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-accent transition-colors">
                            <Facebook size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
