import Hero from "@/components/sections/hero";
import Doctors2 from "@/components/sections/doctors2";
import AppointmentForm from "@/components/forms/appointment-form";

export const metadata = {
  title: "Equipamento Hospitalar - RCG",
  description: "Conheça a nossa equipa de profissionais de saúde",
};

export default function EquipamentoHospitalarPage() {
  return (
    <>
      <Hero
        title="Equipamento Hospitalar"
        description="Uma equipa dedicada de profissionais altamente qualificados ao seu serviço"
        showForm={false}
        backgroundImage="/images/hero/equipamentos.jpg"
      />
      <Doctors2 />
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
