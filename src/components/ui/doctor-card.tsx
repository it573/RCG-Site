import Image from "next/image";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  className?: string;
}

export default function DoctorCard({
  name,
  specialty,
  image,
  className,
}: DoctorCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 400}
          height={image.height || 600}
          className="h-auto w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <h5 className="mb-1 text-lg font-semibold">{name}</h5>
      <p className="text-sm text-muted-foreground">{specialty}</p>
    </div>
  );
}




