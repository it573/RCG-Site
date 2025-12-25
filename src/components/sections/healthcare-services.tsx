import Heading from "@/components/ui/heading";
import Badge from "@/components/ui/badge";
import ServiceCard from "@/components/ui/service-card";
import {
  Stethoscope,
  Heart,
  Smile,
  Activity,
  Droplet,
  Circle,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

interface HealthcareServicesProps {
  badge?: string;
  title?: string;
  description?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "General Care",
    description: "Lorem ipsum dolor labore et dolore suit",
    icon: <Circle className="w-8 h-8" />,
  },
  {
    title: "Emergency",
    description: "Lorem ipsum dolor labore et dolore suit",
    icon: <Activity className="w-8 h-8" />,
  },
  {
    title: "Dental Care",
    description: "Lorem ipsum dolor labore et dolore suit",
    icon: <Smile className="w-8 h-8" />,
  },
  {
    title: "Cardiology",
    description: "Lorem ipsum dolor labore et dolore suit",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "Laboratory",
    description: "Lorem ipsum dolor labore et dolore suit",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    title: "Mental Care",
    description: "Lorem ipsum dolor labore et dolore suit",
    icon: <Heart className="w-8 h-8" />,
  },
];

export default function HealthcareServices({
  badge = "Department",
  title = "Healthcare Services",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.",
  services = defaultServices,
}: HealthcareServicesProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <Badge>{badge}</Badge>
          <Heading as="h1">{title}</Heading>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

