interface Organization {
  name: string;
  image: string;
}

const organizations: Organization[] = [
  { name: "SNS", image: "/images/synlab-orgs/sns.png" },
  { name: "ADSE", image: "/images/synlab-orgs/adse.png" },
  { name: "AdvanceCare", image: "/images/synlab-orgs/advancecare.png" },
  { name: "ÁgilCARE", image: "/images/synlab-orgs/agilcare.png" },
  { name: "Allianz", image: "/images/synlab-orgs/allianz.png" },
  { name: "Cimpor", image: "/images/synlab-orgs/cimpor.png" },
  { name: "Future Healthcare", image: "/images/synlab-orgs/future-healthcare.png" },
  { name: "IASFA", image: "/images/synlab-orgs/iasfa.png" },
  { name: "INCM", image: "/images/synlab-orgs/incm.png" },
  { name: "Instituto Oftalmológico", image: "/images/synlab-orgs/instituto-oftalmologico.png" },
  { name: "Lusitânia", image: "/images/synlab-orgs/lusitania.png" },
  { name: "Medicare", image: "/images/synlab-orgs/medicare.png" },
  { name: "Medis CTT", image: "/images/synlab-orgs/medis-ctt.png" },
  { name: "Medis", image: "/images/synlab-orgs/medis.png" },
  { name: "MEO Cuidados de Saúde", image: "/images/synlab-orgs/meo-cuidados-saude.png" },
  { name: "MGEN", image: "/images/synlab-orgs/mgen.png" },
  { name: "Mondial Assistance", image: "/images/synlab-orgs/mondial-assistance.png" },
  { name: "Multicare", image: "/images/synlab-orgs/multicare.png" },
  { name: "Novo Banco", image: "/images/synlab-orgs/novo-banco.png" },
  { name: "Popular Seguros", image: "/images/synlab-orgs/popular-seguros.png" },
  { name: "SAD GNR", image: "/images/synlab-orgs/sad-gnr.png" },
  { name: "SAD PSP", image: "/images/synlab-orgs/sad-psp.png" },
  { name: "Safecare", image: "/images/synlab-orgs/safecare.png" },
  { name: "SAMS Quadros", image: "/images/synlab-orgs/sams-quadros.png" },
  { name: "SAMS SBC", image: "/images/synlab-orgs/sams-sbc.png" },
  { name: "SAMS SIB", image: "/images/synlab-orgs/sams-sib.png" },
  { name: "SAMS", image: "/images/synlab-orgs/sams.png" },
  { name: "Sorriso Mais", image: "/images/synlab-orgs/sorriso-mais.png" },
  { name: "SRA Açores", image: "/images/synlab-orgs/sra-acores.png" },
  { name: "SRAM", image: "/images/synlab-orgs/sram.png" },
  { name: "SS CGD", image: "/images/synlab-orgs/ss-cgd.png" },
  { name: "Tranquilidade", image: "/images/synlab-orgs/tranquilidade.png" },
  { name: "Victoria", image: "/images/synlab-orgs/victoria.png" },
  { name: "Wells", image: "/images/synlab-orgs/wells.png" },
];

interface SynlabDealsProps {
  title?: string;
  description?: string;
}

export default function SynlabDeals({
  title = "Acordos e Convenções",
  description = "Trabalhamos com os principais subsistemas de saúde para garantir o melhor acesso às análises clínicas.",
}: SynlabDealsProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 max-w-7xl mx-auto">
          {organizations.map((org) => (
            <div key={org.name} className="aspect-square flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={org.image}
                alt={org.name}
                className="h-full w-auto object-contain max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
