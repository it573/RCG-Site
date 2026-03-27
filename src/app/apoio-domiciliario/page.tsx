import Hero from "@/components/sections/hero";
import Services5 from "@/components/sections/services5";
import AppointmentForm from "@/components/forms/appointment-form";

export const metadata = {
  title: "Apoio Domiciliário - RCG",
  description: "Serviços de apoio domiciliário personalizados e de excelência",
};

export default function ApoioDomiciliarioPage() {
  return (
    <>
      <Hero
        title="Apoio Domiciliário"
        description="Proporcionamos cuidados de saúde personalizados no conforto do seu lar, com uma equipa dedicada e disponível 24 horas por dia"
        showForm={false}
        backgroundImage="/images/hero/caregiver.png"
      />
      <Services5 />
      <section className="py-20" style={{ background: '#fed7aa' }}>
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
