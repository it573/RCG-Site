import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Services5Props {
  services?: ServiceCard[];
}

const defaultServices: ServiceCard[] = [
  {
    image: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/56.jpg",
    title: "Orthopedic Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    link: "#",
  },
  {
    image: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/57.jpg",
    title: "Intensive Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    link: "#",
  },
  {
    image: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/58.jpg",
    title: "Vision Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    link: "#",
  },
];

export default function Services5({
  services = defaultServices,
}: Services5Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <Link href={service.link} className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    {/* Button */}
                    <div className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
