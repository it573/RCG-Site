import { Plus, Play } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  text: string;
}

interface Services4Props {
  title?: string;
  description?: string;
  servicesLeft?: ServiceItem[];
  servicesRight?: ServiceItem[];
  backgroundImage?: string;
}

const defaultServicesLeft: ServiceItem[] = [
  { text: "Nutritional support" },
  { text: "Prenatal care" },
  { text: "Cancer center" },
  { text: "Women's health" },
];

const defaultServicesRight: ServiceItem[] = [
  { text: "Neurosurgery" },
  { text: "Outpatient care" },
  { text: "Orthopedics" },
  { text: "Nutritional support" },
];

export default function Services4({
  title = "Programs & Services",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  servicesLeft = defaultServicesLeft,
  servicesRight = defaultServicesRight,
  backgroundImage = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133",
}: Services4Props) {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Programs & Services */}
          <div className="relative min-h-[600px] flex flex-col animate-fade-in-left">
            <div className="space-y-8 p-12 flex-1">
              {/* Title & Description */}
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-3">
                  {title}
                </h4>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </div>

              {/* Services Lists */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left List */}
                <ul className="space-y-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  {servicesLeft.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">
                        <Plus className="w-4 h-4" />
                      </span>
                      <span className="text-foreground">
                        {service.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Right List */}
                <ul className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  {servicesRight.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">
                        <Plus className="w-4 h-4" />
                      </span>
                      <span className="text-foreground">
                        {service.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="relative min-h-[600px] overflow-hidden animate-fade-in-right bg-cover bg-right hidden md:block"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
          </div>
        </div>
      </div>

      {/* Video Play Button - Centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Link
          href="https://www.youtube.com/watch?v=w6lqLoSOcLI"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 hover:scale-110 transition-all duration-300 animate-fade-in-up shadow-lg"
          style={{ animationDelay: '300ms' }}
        >
          <Play className="w-8 h-8 ml-1" />
        </Link>
      </div>
    </section>
  );
}
