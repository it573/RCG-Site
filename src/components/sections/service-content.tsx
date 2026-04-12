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
  buttonText,
  buttonHref = "/doctors",
  sections,
  imageBox,
}: ServiceContentProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-12 items-center">
          {/* Top row spanning all columns */}
          <div className="lg:col-span-3 text-center">
            <h2 className="text-4xl md:text-5xl"> Com o Líder em Medicina Laboratorial</h2>
          </div>

          {image && (
            <div className="flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 600}
                height={image.height || 900}
                className="h-auto w-3/4 rounded-lg object-cover"
              />
              {buttonText && (
                <div className="mt-6 text-right">
                  <Button variant="outline" asChild>
                    <a href={buttonHref}>{buttonText}</a>
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="space-y-6">
            {sections?.map((section, index) => (
              <div key={index}>
                {section.title && (
                  <Heading as="h2" className="mb-8 text-4xl md:text-5xl font-normal">{section.title}</Heading>
                )}
                <p
                  className="text-muted-foreground text-justify"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/fachada2.jpg"
              alt="RCG Fachada"
              width={600}
              height={900}
              className="h-auto w-full rounded-lg object-cover"
            />
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




