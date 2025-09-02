
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AccreditationLogos() {
  return (
    <Card className="p-6 md:p-8 glass-effect">
      <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <p className="font-bold text-sm">BEST COMPUTER CLASSES</p>
          </div>
        </div>
        <div className="h-12 w-px bg-border hidden md:block"></div>
        <div className="flex items-center gap-4">
          <Image
            src="https://placehold.co/150x60/png"
            alt="Media and Entertainment Skills Council"
            width={150}
            height={60}
            className="object-contain"
            data-ai-hint="skills council logo"
          />
           <div className="hidden md:block">
            <p className="font-bold text-sm">Accredited by</p>
            <p className="text-xs text-muted-foreground">Media and Entertainment Skills Council</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
