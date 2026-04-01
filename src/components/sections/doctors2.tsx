interface Doctor {
  image: string;
  name: string;
  specialty: string;
}

interface Doctors2Props {
  title?: string;
  doctors?: Doctor[];
}

const defaultDoctors: Doctor[] = [
  {
    image: "/images/wheel-chair2.png",
    name: "Cadeira de Rodas",
    specialty: "",
  },
  {
    image: "/images/bended-bed.jpg",
    name: "Camas Articuladas",
    specialty: "",
  },
  {
    image: "/images/andarilho.jpg",
    name: "Andarilho",
    specialty: "",
  },
  {
    image: "/images/bengala-3.jpg",
    name: "Bengala Tripé",
    specialty: "",
  },

];

export default function Doctors2({
  title = "Ajudas Técnicas Disponíveis",
  doctors = defaultDoctors,
}: Doctors2Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[80%]">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-foreground">
            {title}
          </h3>
        </div>

        {/* Doctors Grid - 3 Columns */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="animate-fade-in-up border-2 border-primary rounded-2xl px-2 py-4"
              style={{
                animationDelay: `${index * 50}ms`,
                minWidth: '280px',
                maxWidth: '320px'
              }}
            >
              <div className="flex flex-col items-center gap-4 overflow-hidden">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-56 h-72 object-cover rounded-lg"
                  />
                </div>

                {/* Doctor Info */}
                <div className="text-center">
                  <h5 className="text-lg font-semibold text-foreground mb-1">
                    {doc.name}
                  </h5>
                  <p className="text-muted-foreground">
                    {doc.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
