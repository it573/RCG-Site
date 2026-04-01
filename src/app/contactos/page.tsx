import Hero from "@/components/sections/hero";
import Contacts2 from "@/components/sections/contacts2";

export const metadata = {
  title: "Contactos - RCG",
  description: "Entre em contacto connosco",
};

export default function ContactosPage() {
  return (
    <>
      <Hero
        title="Contactos"
        description="Estamos disponíveis para responder a todas as suas questões e fornecer-lhe as informações de que necessita sobre os cuidados de saúde que prestamos."
        showForm={false}
        backgroundImage="/images/hero/contacts.png"
      />
      <Contacts2 />
    </>
  );
}
