
"use client";

import Image from "next/image";

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    characterImage: string;
    titleImage: string;
    hint: string;
}

export default function TeamCard({ name, role, image, characterImage, titleImage, hint }: TeamCardProps) {
    return (
        <div className="card">
            <div className="wrapper">
                <Image src={image} alt={name} width={300} height={450} className="cover-image" data-ai-hint={hint} />
            </div>
            <Image src={titleImage} alt={`${name} title`} width={300} height={100} className="title" />
            <Image src={characterImage} alt={`${name} character`} width={300} height={500} className="character" data-ai-hint={hint} />
        </div>
    );
}
