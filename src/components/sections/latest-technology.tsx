import Image from "next/image";
import Badge from "@/components/ui/badge";
import ImageBox from "@/components/ui/image-box";

interface LatestTechnologyProps {
  badge?: string;
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export default function LatestTechnology({
  badge = "High-tech",
  title = "Latest Technology",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image,
}: LatestTechnologyProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge>{badge}</Badge>
          </div>
          <ImageBox
            image={image}
            title={title}
            description={description}
            position="top"
          />
        </div>
      </div>
    </section>
  );
}

