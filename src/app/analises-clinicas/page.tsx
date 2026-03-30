import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import AppointmentForm from "@/components/forms/appointment-form";
import Services3 from "@/components/sections/service3";
import ServiceContent from "@/components/sections/service-content";

export const metadata = {
  title: "Análises Clínicas - RCG",
  description: "Serviços de análises clínicas ao domicílio com rigor e rapidez",
};

export default function AnalisesClinicasPage() {
  return (
    <>
      <Hero
        title="Análises Clínicas"
        description="No nosso Posto de Colheitas ou no Domicílio, realizamos análises clínicas com rapidez e confidencialidade."
        showForm={false}
        backgroundImage="/images/hero/blood-test.jpg"
      />
      <ServiceContent
        title="Por que escolher os nossos serviços de análises clínicas?"
        description="Com uma equipa de profissionais especializados e tecnologia de ponta, garantimos resultados fiáveis e rápidos para uma melhor gestão da sua saúde."
        image={{
        src: "/images/synlab-logo.png",
          alt: "Equipamento de análises clínicas",
          width: 600,
          height: 900
        }}
        sections={[
          
          {
            title: "",
            content: `A Reabilitar em Casa continua em expansão e, em 2026, coloca ao serviço dos seus clientes, em Carcavelos, um posto de colheitas de Análises Clínicas, em parceria com a Synlab, laboratório líder europeu em serviços de laboratório médico e diagnósticos clínicos.

Independentemente do seu subsistema pode fazer as suas análises clínicas no nosso posto de colheitas (Carcavelos) ou no conforto do seu lar.

Para marcar as suas Análises Clínicas ou o seu check-up pode obter mais informações sobre os nossos perfis de análises clínicas, contacte-nos.`
          },
        ]}
      />
      <Services3 />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm />
          </div>
        </div>
    </section>    </>
  );
}
