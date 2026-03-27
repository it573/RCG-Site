import Hero from "@/components/sections/hero";
import Reviews3 from "@/components/sections/reviews3";
import AppointmentForm from "@/components/forms/appointment-form";

export const metadata = {
  title: "Acordos e Convenções - RCG",
  description: "Conheça os nossos acordos e parcerias com entidades de saúde",
};

export default function AcordosConvencoesPage() {
  return (
    <>
      <Hero
        title="Acordos e Convenções"
        description="Colaboramos com as principais entidades de saúde para proporcionar os melhores cuidados aos nossos doentes"
        showForm={false}
        backgroundImage="/images/hero/convencoes.jpg"
      />
      <Reviews3 />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
