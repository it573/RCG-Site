import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";
import Image from "next/image";
import { getMessages } from 'next-intl/server';

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
  backgroundImage?: string;
  showStampImage?: boolean;
  locale?: string;
}

async function HeroContent({
  title,
  description,
  showForm = true,
  backgroundImage = "/images/hero/oldman.jpg",
  showStampImage = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden h-[80dvh] max-h-[80svh] hero-section-height">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={70}
          fetchPriority="high"
        />
      </div>

      {/* Black overlay with 25% opacity */}
      <div className="absolute inset-0 bg-black/22 pointer-events-none" style={{ zIndex: 5 }} />

      <div className={`container mx-auto px-4 max-w-full md:max-w-[80%] relative z-10 h-full flex items-center pb-20 md:pb-20 max-[700px]:pb-12 ${showForm ? 'pt-[240px] md:pt-[220px] max-[700px]:pt-[180px] max-[600px]:pt-[140px]' : 'pt-[180px] md:pt-20'}`}>
        <div className="w-full">
          <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 max-[700px]:ml-4 max-[700px]:mr-4">
            <div className="space-y-4 max-w-2xl animate-fade-in-left-double max-[700px]:space-y-2">
              <Heading as="h1" className="text-white max-[700px]:text-3xl max-[600px]:text-2xl">{title}</Heading>
              <p className="text-[21.6px] md:text-3xl text-white font-bold md:font-light max-[700px]:text-lg max-[600px]:text-base">{description}</p>
            </div>
          </div>
          {showForm && (
            <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 max-[700px]:ml-4 max-[700px]:mr-4">
              <div className="pt-3 md:pt-8 max-w-xl mt-0 animate-fade-in-up max-[700px]:pt-2">
                <AppointmentForm />
              </div>
            </div>
          )}
          {showStampImage && (
            <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 max-[700px]:ml-4 max-[700px]:mr-4 mt-8 max-[700px]:mt-4">
              {/* Mobile: centered */}
              <div className="flex justify-center md:hidden w-[70%] mx-auto animate-fade-in-up">
                <Image
                  src="/images/acp-stamp.png"
                  alt="ACP Stamp"
                  width={200}
                  height={200}
                  className="w-full scale-50"
                />
              </div>
              {/* Desktop: left aligned */}
              <div className="hidden md:block animate-fade-in-up">
                <Image
                  src="/images/acp-stamp.png"
                  alt="ACP Stamp"
                  width={434}
                  height={144}
                  className="w-[150px] h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function Hero(props: HeroProps) {
  // If title/description are provided, use them directly (for client components)
  if (props.title && props.description) {
    return <HeroContent {...props} />;
  }

  // Get locale from props or default to 'pt'
  const locale = props.locale || 'pt';

  // Otherwise, fetch translations and render
  const messages = await getMessages({ locale });
  const heroMessages = messages.home?.hero as { title?: string; description?: string };

  return (
    <HeroContent
      {...props}
      title={heroMessages?.title || "Cuidados Especializados no Domicílio"}
      description={heroMessages?.description || "O melhor lugar para Cuidar, Curar e Viver"}
    />
  );
}
