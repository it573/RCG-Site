import Hero from "@/components/sections/hero";
import Services4 from "@/components/sections/services4";
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
        description="Proporcionamos cuidados de saúde personalizados e de excelência, adaptados às necessidades específicas de cada doente"
        showForm={false}
        backgroundImage="/images/hero/healthcare.png"
      />
      <Services4 />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
