import type { Metadata } from "next";
import React from "react";
import Hero from "@/components/sections/hero";
import Contacts2 from "@/components/sections/contacts2";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.contact?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Contactos - RCG | Fale Connosco",
    description: metadataMessages?.description || "Contacte a RCG para cuidados de saúde ao domicílio em Portugal.",
    keywords: metadataMessages?.keywords || ["contactos", "telefone", "morada", "email"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'contactos' : 'contact'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Contactos - RCG | Fale Connosco",
      description: metadataMessages?.description || "Contacte a RCG para cuidados de saúde ao domicílio.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'contactos' : 'contact'}`,
    },
  };
}

export default async function ContactosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const contactMessages = messages.contact as {
    hero?: { title?: string; description?: string };
    contacts2?: {
      subtitle?: string;
      description?: string;
      phoneNote?: string;
      email?: string;
      address?: string;
      phone?: string;
      workingHours?: string;
      imageAlt?: string;
    };
  };

  // Prepare contact items for Contacts2 component
  const contactItems = [
    {
      icon: React.createElement('svg', { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" })
      ),
      text: contactMessages?.contacts2?.phone || "210 136 676 / 917 861 795",
      href: "tel:+351210136760",
      note: contactMessages?.contacts2?.phoneNote || "chamada para rede fixa e móvel nacional",
    },
    {
      icon: React.createElement('svg', { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
      ),
      text: contactMessages?.contacts2?.email || "geral@reabilitar-em-casa.com",
      href: "mailto:geral@reabilitar-em-casa.com",
    },
    {
      icon: React.createElement('svg', { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
      ),
      text: contactMessages?.contacts2?.address || "Rua Itália, nº1, Piso 1, Escritório 6, 2775-407 Carcavelos, Portugal",
      href: "#",
    },
    {
      icon: React.createElement('svg', { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })
      ),
      text: contactMessages?.contacts2?.workingHours || "Segunda a Sexta (8h - 19h)\nSábado (9h - 17h)",
    },
  ];

  return (
    <>
      <LocalBusinessJsonLd />
      <Hero
        title={contactMessages?.hero?.title || "Contactos"}
        description={contactMessages?.hero?.description || "Estamos disponíveis para responder a todas as suas questões."}
        showForm={false}
        backgroundImage="/images/hero/contact.jpg"
      />
      <Contacts2
        subtitle={contactMessages?.contacts2?.subtitle}
        description={contactMessages?.contacts2?.description}
        contactItems={contactItems}
        image={{
          src: "/images/google-earth.png",
          alt: contactMessages?.contacts2?.imageAlt || "A nossa equipa",
        }}
      />
    </>
  );
}
