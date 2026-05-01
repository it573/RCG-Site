import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Doctors2 from "@/components/sections/doctors2";
import AppointmentForm from "@/components/forms/appointment-form";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.hospitalEquipment?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Equipamento Hospitalar e Ajudas Técnicas",
    description: metadataMessages?.description || "Aluguer e venda de equipamento hospitalar e ajudas técnicas.",
    keywords: metadataMessages?.keywords || ["equipamento hospitalar", "ajudas técnicas"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'equipamento-hospitalar' : 'hospital-equipment'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Equipamento Hospitalar e Ajudas Técnicas",
      description: metadataMessages?.description || "Aluguer e venda de equipamento hospitalar e ajudas técnicas.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'equipamento-hospitalar' : 'hospital-equipment'}`,
    },
  };
}

export default async function EquipamentoHospitalarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const hospitalEquipmentMessages = messages.hospitalEquipment as {
    hero?: { title?: string; description?: string };
    doctors2?: { title?: string; equipment?: Array<{ name?: string }> };
    form?: { title?: string };
    metadata?: { description?: string }
  };

  // Prepare equipment for Doctors2 component
  const equipmentImages = [
    "/images/wheel-chair2.png",
    "/images/bended-bed.jpg",
    "/images/andarilho.jpg",
    "/images/bengala-3.jpg",
  ];

  const equipmentData = equipmentImages.map((image, index) => ({
    image,
    name: hospitalEquipmentMessages?.doctors2?.equipment?.[index]?.name || "",
    specialty: "",
  }));

  return (
    <>
      <ServiceJsonLd
        serviceName={locale === 'pt' ? 'Equipamento Hospitalar' : 'Hospital Equipment'}
        description={hospitalEquipmentMessages?.metadata?.description || "Aluguer e venda de equipamento hospitalar e ajudas técnicas."}
        url={`/${locale === 'pt' ? 'equipamento-hospitalar' : 'hospital-equipment'}`}
      />
      <Hero
        title={hospitalEquipmentMessages?.hero?.title || "Equipamento Hospitalar"}
        description={hospitalEquipmentMessages?.hero?.description || "Disponibilizamos produtos de apoio, ajudas técnicas, com entrega ao Domicílio."}
        showForm={false}
        backgroundImage="/images/hero/equipamentos.jpg"
      />
      <Doctors2
        title={hospitalEquipmentMessages?.doctors2?.title}
        doctors={equipmentData}
      />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{hospitalEquipmentMessages?.form?.title || "Nós Ligamos!"}</h2>
            <AppointmentForm campaign="" source="equipamento-hospitalar" />
          </div>
        </div>
      </section>
    </>
  );
}
