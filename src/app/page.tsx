import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import News2 from "@/components/sections/news2";
import { AIOptimizedFAQ } from "@/components/sections/ai-optimized-faq";

export const metadata: Metadata = {
  title: "Cuidados de Saúde ao Domicílio em Portugal | RCG",
  description: "Cuidados de saúde personalizados e apoio domiciliário 24/7 em Portugal. Análises clínicas e equipamento hospitalar ao domicílio.",
  keywords: ["cuidados de saúde portugal", "apoio domiciliário", "cuidadores", "análises clínicas domicílio", "cuidados continuados", "saúde familiar"],
  openGraph: {
    title: "Cuidados de Saúde ao Domicílio em Portugal | RCG",
    description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal. Equipa disponível 24/7.",
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

export default function Home() {
  return (
    <>
      <Hero />
      <News2 />
      <AIOptimizedFAQ />
    </>
  );
}
