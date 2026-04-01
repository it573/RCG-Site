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
        description="Cuidados de saúde de excelência ao Domicílio, com cobertura nacional."
        showForm={false}
        backgroundImage="/images/hero/family.jpeg"
      />
      <About2 />
      <About4 />
    </>
  );
}