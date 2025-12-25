import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageBoxProps {
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: string;
  description?: string;
  position?: "top" | "left";
  className?: string;
}

export default function ImageBox({
  image,
  title,
  description,
  position = "top",
  className,
}: ImageBoxProps) {
  return (
    <div className={cn("flex gap-4", position === "left" && "flex-row", position === "top" && "flex-col", className)}>
      {image && (
        <div className={cn("flex-shrink-0", position === "left" && "w-32", position === "top" && "w-full")}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      )}
      <div className="flex-1">
        {title && (
          <h4 className="mb-2 text-lg font-semibold">{title}</h4>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

