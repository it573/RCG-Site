import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  href?: string;
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
    text: "+351 210 000 000",
    href: "tel:+351210000000",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    text: "geral@rcg.pt",
    href: "mailto:geral@rcg.pt",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Lisboa, Portugal",
    href: "#",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Segunda a Sexta (8h - 17h)",
  },
];

export default function Contacts2({
  subtitle = "Entre em Contacto",
  description = "Estamos disponíveis para responder a todas as suas questões e fornecer-lhe as informações de que necessita sobre os nossos cuidados de saúde. Não hesite em contactar-nos.",
  contactItems = defaultContactItems,
  image = {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/51.jpg",
    alt: "A nossa equipa",
  },
}: Contacts2Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Form */}
          <div className="space-y-8">
            {/* Subtitle */}
            <div className="animate-fade-in-left">
              <h6 className="text-primary font-semibold text-sm uppercase tracking-wider">
                {subtitle}
              </h6>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <p className="text-muted-foreground text-lg text-justify">
                {description}
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
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
                      <span className="text-foreground">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form className="space-y-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <input
                  type="text"
                  placeholder="Apelido"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <textarea
                placeholder="A sua mensagem"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Right Column - Image */}
          <div className="animate-fade-in-right">
            <div className="overflow-hidden rounded-lg">
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
