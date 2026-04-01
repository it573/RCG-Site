import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AppointmentForm from "@/components/forms/appointment-form";

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  href?: string;
  note?: string;
}

interface Contacts2Props {
  subtitle?: string;
  description?: string;
  contactItems?: ContactItem[];
  image?: {
    src: string;
    alt: string;
  };
}

const defaultContactItems: ContactItem[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    text: "210 136 676 / 917 861 795",
    href: "tel:+351210136760",
    note: "chamada para rede fixa e móvel nacional",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    text: "geral@reabilitar-em-casa.com",
    href: "mailto:geral@reabilitar-em-casa.com",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Rua Itália, nº1, Piso 1, Escritório 6, 2775-407 Carcavelos, Portugal",
    href: "#",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Segunda a Sexta (8h - 19h)\nSábado (9h - 17h)",
  },
];

export default function Contacts2({
  subtitle = "Entre em Contacto",
  description = "A nossa eqiipa está disponível para responder às suas dúvidas e fornecer-lhe as informações de que necessita sobre os cuidados de saúde que prestamos.",
  contactItems = defaultContactItems,
  image = {
    src: "/images/google-earth.png",
    alt: "A nossa equipa",
  },
}: Contacts2Props) {
  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Form */}
          <div className="space-y-8">
            {/* Subtitle */}
            <div className="animate-fade-in-left overflow-x-hidden">
              <h6 className="text-primary font-semibold text-2xl uppercase tracking-wider">
                {subtitle}
              </h6>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up overflow-x-hidden" style={{ animationDelay: '100ms' }}>
              <p className="text-muted-foreground text-lg text-justify">
                {description}
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 animate-fade-in-up overflow-x-hidden" style={{ animationDelay: '200ms' }}>
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-foreground whitespace-pre-line">{item.text}</span>
                    )}
                    {item.note && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up overflow-x-hidden" style={{ animationDelay: '300ms' }}>
              <AppointmentForm />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-fade-in-right overflow-x-hidden">
            <div className="overflow-hidden rounded-lg w-2/3 mx-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
