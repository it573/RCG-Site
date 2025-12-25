import Image from "next/image";
import Heading from "@/components/ui/heading";
import ImageBox from "@/components/ui/image-box";
import { Button } from "@/components/ui/button";

interface ServiceContentProps {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  buttonText?: string;
  buttonHref?: string;
  sections?: Array<{
    title: string;
    content: string;
  }>;
  imageBox?: {
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
  };
}

export default function ServiceContent({
  title,
  description,
  image,
  buttonText = "Our Doctors",
  buttonHref = "/doctors",
  sections,
  imageBox,
}: ServiceContentProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {image && (
            <div>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 600}
                height={image.height || 900}
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="mt-6 text-right">
                <Button variant="outline" asChild>
                  <a href={buttonHref}>{buttonText}</a>
                </Button>
              </div>
            </div>
          )}
          <div className="space-y-6">
            {sections?.map((section, index) => (
              <div key={index}>
                <Heading as="h3" className="mb-4">{section.title}</Heading>
                <p className="text-muted-foreground whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        {imageBox && (
          <div className="mt-12">
            <ImageBox
              image={imageBox.image}
              title={imageBox.title}
              description={imageBox.description}
              position="top"
            />
          </div>
        )}
      </div>
    </section>
  );
}

