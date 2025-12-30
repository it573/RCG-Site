import Heading from "@/components/ui/heading";
import Badge from "@/components/ui/badge";
import IconList from "@/components/ui/icon-list";
import VideoButton from "@/components/ui/video-button";
import { Button } from "@/components/ui/button";

interface ProgramsServicesProps {
  title?: string;
  description?: string;
  servicesLeft?: string[];
  servicesRight?: string[];
  videoUrl?: string;
}

const defaultServicesLeft = [
  "Nutritional support",
  "Prenatal care",
  "Cancer center",
  "Women's health",
];

const defaultServicesRight = [
  "Neurosurgery",
  "Outpatient care",
  "Orthopedics",
  "Nutritional support",
];

export default function ProgramsServices({
  title = "Programs & Services",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  servicesLeft = defaultServicesLeft,
  servicesRight = defaultServicesRight,
  videoUrl = "https://www.youtube.com/embed/VhBl3dHT5SY",
}: ProgramsServicesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Heading as="h4">{title}</Heading>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="grid grid-cols-2 gap-6">
              <IconList
                items={servicesLeft.map((service) => ({ text: service }))}
              />
              <IconList
                items={servicesRight.map((service) => ({ text: service }))}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <VideoButton videoUrl={videoUrl} />
          </div>
          <div className="flex items-center justify-center">
            <Button variant="outline">Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}




