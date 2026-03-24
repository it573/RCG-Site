interface ServiceBox {
  title: string;
  description: string;
}

interface Service2InvertedProps {
  title?: string;
  services?: ServiceBox[];
}

const defaultServices: ServiceBox[] = [
  {
    title: "Always Caring",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Our priority",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Service2Inverted({
  title = "Hospitalização Domiciliária",
  services = defaultServices,
}: Service2InvertedProps) {
  return (
    <section className="py-20" style={{ background: 'rgba(16, 155, 130, 0.85)' }}>
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white">
          {/* Title - Mobile Top, Desktop Right */}
          <div className="px-8 md:pl-8 md:pr-0 pb-8 md:pb-0 flex items-center md:order-3 animate-fade-in-right">
            <h2 className="text-5xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Left Column - First Service */}
          <div className="px-8 pt-4 pb-8 md:pt-0 md:pb-0 animate-fade-in-up md:order-1" style={{ animationDelay: '100ms' }}>
            <h4 className="text-2xl font-semibold text-white mb-4">
              {services[0].title}
            </h4>
            <p className="text-white text-lg text-justify">
              {services[0].description}
            </p>
          </div>

          {/* Center Column - Second Service */}
          <div className="px-8 pt-4 pb-8 md:pt-0 md:pb-0 animate-fade-in-up md:order-2" style={{ animationDelay: '200ms' }}>
            <h4 className="text-2xl font-semibold text-white mb-4">
              {services[1].title}
            </h4>
            <p className="text-white text-lg text-justify">
              {services[1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
