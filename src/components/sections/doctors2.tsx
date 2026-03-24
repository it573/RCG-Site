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
    image: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/48.jpg",
    name: "Dr. Adam Lewis",
    specialty: "Cardiology",
  },
  {
    image: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/49.jpg",
    name: "Dr. John Doe",
    specialty: "Neurology",
  },
  {
    image: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/50.jpg",
    name: "Dr. Mike Corp",
    specialty: "Urology",
  },
];

export default function Doctors2({
  title = "Equipamentos Disponiveis",
  doctors = defaultDoctors,
}: Doctors2Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-foreground">
            {title}
          </h3>
        </div>

        {/* Doctors Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {defaultDoctors.map((doc, doctorIndex) => (
                <div
                  key={`${columnIndex}-${doctorIndex}`}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(columnIndex * 3 + doctorIndex) * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-24 h-36 object-cover rounded-lg"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
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
          ))}
        </div>
      </div>
    </section>
  );
}
