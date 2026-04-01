import Hero from "@/components/sections/hero";
import Services51 from "@/components/sections/services51";
import AppointmentForm from "@/components/forms/appointment-form";

export const metadata = {
  title: "Cuidados de Saúde - RCG",
  description: "Conheça os nossos serviços de cuidados de saúde ao domicílio",
};

export default function CuidadosDeSaudePage() {
  return (
    <>
      <Hero
        title="Cuidados de Saúde"
        description="Proporcionamos cuidados de saúde personalizados e de excelência, com cobertura nacional."
        showForm={false}
        backgroundImage="/images/hero/pediatria.jpg"
      />
      <Services51 />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
