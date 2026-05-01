import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import About2 from "@/components/sections/about2";
import About4 from "@/components/sections/about4";
import { AboutJsonLd } from "@/components/ai-about-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.about?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Quem Somos - RCG",
    description: metadataMessages?.description || "A RCG é líder em cuidados de saúde ao domicílio em Portugal.",
    keywords: metadataMessages?.keywords || ["quem somos", "sobre nós", "RCG"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'quem-somos' : 'about-us'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Quem Somos - RCG",
      description: metadataMessages?.description || "A RCG é líder em cuidados de saúde ao domicílio em Portugal.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'quem-somos' : 'about-us'}`,
    },
  };
}

export default async function QuemSomosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const aboutMessages = messages.about as {
    hero?: { title?: string; description?: string };
    about2?: {
      history?: { title?: string; description?: string[] };
      doctors?: { image?: { src?: string; alt?: string }; buttonText?: string; buttonLink?: string };
      mission?: { title?: string; description?: string; image?: { src?: string; alt?: string } };
    };
    about4?: {
      title?: string;
      description?: string;
      features?: Array<{ title?: string; description?: string }>;
    };
  };

  return (
    <>
      <AboutJsonLd />
      <Hero
        title={aboutMessages?.hero?.title || "Quem Somos"}
        description={aboutMessages?.hero?.description || "Cuidados de saúde de excelência ao Domicílio."}
        showForm={false}
        backgroundImage="/images/hero/family.jpeg"
      />
      <About2
        history={aboutMessages?.about2?.history ? {
          title: aboutMessages?.about2?.history?.title || "",
          description: aboutMessages?.about2?.history?.description || []
        } : undefined}
        doctors={aboutMessages?.about2?.doctors ? {
          image: {
            src: aboutMessages?.about2?.doctors?.image?.src || "/images/rita.jpg",
            alt: aboutMessages?.about2?.doctors?.image?.alt || "A nossa equipa"
          },
          buttonText: aboutMessages?.about2?.doctors?.buttonText || "",
          buttonLink: aboutMessages?.about2?.doctors?.buttonLink || ""
        } : undefined}
        mission={aboutMessages?.about2?.mission ? {
          title: aboutMessages?.about2?.mission?.title || "",
          description: aboutMessages?.about2?.mission?.description || "",
          image: {
            src: aboutMessages?.about2?.mission?.image?.src || "/images/fachada2.jpg",
            alt: aboutMessages?.about2?.mission?.image?.alt || "Cuidados de qualidade"
          }
        } : undefined}
      />
      <About4
        title={aboutMessages?.about4?.title}
        description={aboutMessages?.about4?.description}
        features={aboutMessages?.about4?.features?.map(feature => ({
          number: "",
          title: feature.title || "",
          description: feature.description || ""
        }))}
      />
    </>
  );
}