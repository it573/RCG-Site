import Image from "next/image";
import Heading from "@/components/ui/heading";
import Badge from "@/components/ui/badge";
import ImageBox from "@/components/ui/image-box";

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: Feature[];
  backgroundImage?: string;
}

const defaultFeatures: Feature[] = [
  {
    number: "01",
    title: "Clinical Excellence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
  {
    number: "02",
    title: "Personalized Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
  {
    number: "03",
    title: "Quality Standards",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
  },
];

export default function WhyChooseUs({
  badge = "HealthCare",
  title = "Why Choose Us",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi aliquip.",
  features = defaultFeatures,
  backgroundImage,
}: WhyChooseUsProps) {
  return (
    <section className="py-20 relative">
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Badge>{badge}</Badge>
            <Heading as="h2">{title}</Heading>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-3xl font-bold text-primary">
                  {feature.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

