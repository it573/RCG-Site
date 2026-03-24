interface ServiceBox {
  title: string;
  description: string;
}

interface Service2Props {
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

export default function Service2({
  title = "Cuidados Continuados",
  services = defaultServices,
}: Service2Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary">
          {/* Left Column - Title */}
          <div className="pr-8 flex items-center animate-fade-in-left">
            <h2 className="text-5xl font-bold text-foreground">
              {title}
            </h2>
          </div>

          {/* Center Column - First Service */}
          <div className="px-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-2xl font-semibold text-primary mb-4">
              {services[0].title}
            </h4>
            <p className="text-muted-foreground text-lg text-justify">
              {services[0].description}
            </p>
          </div>

          {/* Right Column - Second Service */}
          <div className="pl-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-2xl font-semibold text-primary mb-4">
              {services[1].title}
            </h4>
            <p className="text-muted-foreground text-lg text-justify">
              {services[1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
