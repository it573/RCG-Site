import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";
import Image from "next/image";

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
  backgroundImage?: string;
  showStampImage?: boolean;
}

export default function Hero({
  title = "Cuidados Especializados no Domicílio",
  description = "O melhor lugar para Cuidar, Curar e Viver",
  showForm = true,
  backgroundImage = "/images/hero/oldman.jpg",
  showStampImage = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ height: '80vh', marginTop: 0, paddingTop: 0 }}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
          fetchPriority="high"
        />
      </div>

      {/* Black overlay with 25% opacity */}
      <div className="absolute inset-0 bg-black/22 pointer-events-none" style={{ zIndex: 5 }} />

      <div className={`container mx-auto px-4 max-w-[80%] relative z-10 h-full flex items-center pb-32 md:pb-20 ${showForm ? 'pt-[280px] md:pt-[220px]' : 'pt-[180px] md:pt-20'}`}>
        <div className="w-full">
          <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 md:mx-auto">
            <div className="space-y-6 max-w-2xl animate-fade-in-left-double">
              <Heading as="h1" className="text-white">{title}</Heading>
              <p className="text-[21.6px] md:text-3xl text-white font-bold md:font-light">{description}</p>
            </div>
          </div>
          {showForm && (
            <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 md:mx-auto">
              <div className="p-4 md:p-8 max-w-xl mt-0 animate-fade-in-up">
                <AppointmentForm />
              </div>
            </div>
          )}
          {showStampImage && (
            <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 md:mx-auto mt-8">
              <div className="max-w-xs animate-fade-in-up">
                <Image
                  src="/images/acp-stamp.png"
                  alt="ACP Stamp"
                  width={200}
                  height={200}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

