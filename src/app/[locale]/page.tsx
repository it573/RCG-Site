import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import News2 from "@/components/sections/news2";
import { AIOptimizedFAQ } from "@/components/sections/ai-optimized-faq";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.home?.metadata as { title?: string; description?: string };

  return {
    title: metadataMessages?.title || "Cuidados de Saúde ao Domicílio em Portugal | RCG",
    description: metadataMessages?.description || "Cuidados de saúde personalizados e apoio domiciliário 24/7 em Portugal.",
    alternates: {
      canonical: "https://www.reabilitar-em-casa.com",
    },
    openGraph: {
      title: metadataMessages?.title || "Cuidados de Saúde ao Domicílio em Portugal | RCG",
      description: metadataMessages?.description || "Cuidados de saúde personalizados e apoio domiciliário 24/7 em Portugal.",
      url: "https://www.reabilitar-em-casa.com",
      images: [
        {
          url: "https://www.reabilitar-em-casa.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <News2 locale={locale} />
      {/* <AIOptimizedFAQ /> */}
    </>
  );
}
