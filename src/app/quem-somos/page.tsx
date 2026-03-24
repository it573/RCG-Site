import Hero from "@/components/sections/hero";
import About2 from "@/components/sections/about2";
import About4 from "@/components/sections/about4";

export const metadata = {
  title: "Quem Somos - RCG",
  description: "Conheça a nossa história, missão e valores em cuidados de saúde",
};

export default function QuemSomosPage() {
  return (
    <>
      <Hero
        title="Quem Somos"
        description="Cuidados de saúde de excelência ao domicílio, comprometidos com o bem-estar e qualidade de vida dos nossos doentes"
        showForm={false}
      />
      <About4 />
    </>
  );
}