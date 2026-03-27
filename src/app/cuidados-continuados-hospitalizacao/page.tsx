import Hero from "@/components/sections/hero";
import Service2 from "@/components/sections/service2";
import Service2Inverted from "@/components/sections/service2inverted";
import AppointmentForm from "@/components/forms/appointment-form";

export const metadata = {
  title: "Cuidados Continuados e Hospitalização - RCG",
  description: "Cuidados de saúde continuados e hospitalização ao domicílio",
};

export default function CuidadosContinuadosHospitalizacaoPage() {
  return (
    <>
      <Hero
        title="Cuidados Continuados e Hospitalização"
        description="Cuidados especializados de longa duração e hospitalização ao domicílio com equipa médica disponível 24 horas"
        showForm={false}
        backgroundImage="/images/hero/hospital.jpg"
      />
      <Service2 />
      <Service2Inverted />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
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
