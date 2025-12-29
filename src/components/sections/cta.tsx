import Heading from "@/components/ui/heading";
import IconList from "@/components/ui/icon-list";
import ImageBox from "@/components/ui/image-box";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title?: string;
  buttonText?: string;
  services?: string[];
  facilityTitle?: string;
  facilityDescription?: string;
}

const defaultServices = [
  "Cardiopulmonary",
  "Dermatology",
  "Diagnostic Imaging",
  "Hematology",
  "Oncology",
  "Rehabilitation Services",
];

export default function CTA({
  title = "Your Health is Our Priority",
  buttonText = "Request Appointment",
  services = defaultServices,
  facilityTitle = "Licensed Facility",
  facilityDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.",
}: CTAProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Heading as="h2">{title}</Heading>
            <Button size="lg">{buttonText}</Button>
          </div>
          <div>
            <IconList items={services.map((service) => ({ text: service }))} />
          </div>
          <div>
            <ImageBox
              title={facilityTitle}
              description={facilityDescription}
              position="top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


