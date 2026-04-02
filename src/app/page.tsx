import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import News2 from "@/components/sections/news2";
import CoverageArea from "@/components/sections/coverage-area";

export const metadata: Metadata = {
  title: "RCG - Cuidados de Saúde e Apoio Domiciliário em Portugal",
  description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário 24/7, análises clínicas ao domicílio e equipamento hospitalar em Portugal. Cuidamos de si e da sua família com dedicação e excelência.",
  keywords: ["cuidados de saúde portugal", "apoio domiciliário", "cuidadores", "análises clínicas domicílio", "cuidados continuados", "saúde familiar"],
  openGraph: {
    title: "RCG - Cuidados de Saúde e Apoio Domiciliário em Portugal",
    description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal. Equipa disponível 24/7.",
    url: "https://new.reabilitar-em-casa.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        //backgroundVideo="https://www.youtube.com/watch?v=bs_7jWqSeIM"
        backgroundVideoMobile="CareGiverVertical1" />
      <News2 />
      <CoverageArea />
    </>
  );
}
