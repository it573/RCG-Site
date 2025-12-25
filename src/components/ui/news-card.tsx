import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  href: string;
  className?: string;
}

export default function NewsCard({
  title,
  image,
  href,
  className,
}: NewsCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 768}
          height={image.height || 512}
          className="h-auto w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
        {title}
      </h3>
    </Link>
  );
}

