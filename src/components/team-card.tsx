
"use client";

import Image from "next/image";

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    characterImage: string;
    hint: string;
}

export default function TeamCard({ name, role, image, characterImage, hint }: TeamCardProps) {
    return (
        <div className="team-card">
            <div className="wrapper">
                <Image src={image} alt={name} width={300} height={450} className="cover-image" data-ai-hint={hint} loading="lazy" sizes="(max-width: 768px) 80vw, 300px"/>
            </div>
            <div className="team-card-title">
              <h2>{name}</h2>
              <p>{role}</p>
            </div>
            <Image src={characterImage} alt={`${name} character`} width={300} height={500} className="character" data-ai-hint={hint} loading="lazy" sizes="(max-width: 768px) 80vw, 300px"/>
        </div>
    );
}
