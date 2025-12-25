import Image from "next/image";
import Heading from "@/components/ui/heading";
import DoctorCard from "@/components/ui/doctor-card";
import { Button } from "@/components/ui/button";

interface Doctor {
  name: string;
  specialty: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

interface DoctorsProps {
  title?: string;
  doctors?: Doctor[];
  sideImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

const defaultDoctors: Doctor[] = [
  {
    name: "Dr. Adam Lewis",
    specialty: "Cardiology",
    image: {
      src: "/doctors/dr-adam.jpg",
      alt: "Dr. Adam Lewis",
      width: 400,
      height: 600,
    },
  },
  {
    name: "Dr. John Doe",
    specialty: "Neurology",
    image: {
      src: "/doctors/dr-john.jpg",
      alt: "Dr. John Doe",
      width: 400,
      height: 600,
    },
  },
  {
    name: "Dr. Mike Corp",
    specialty: "Urology",
    image: {
      src: "/doctors/dr-mike.jpg",
      alt: "Dr. Mike Corp",
      width: 400,
      height: 600,
    },
  },
];

export default function Doctors({
  title = "Our Doctors",
  doctors = defaultDoctors,
  sideImage,
}: DoctorsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3">
            <Heading as="h3" className="mb-8">{title}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <DoctorCard key={index} {...doctor} />
              ))}
            </div>
          </div>
          {sideImage && (
            <div className="hidden lg:block">
              <Image
                src={sideImage.src}
                alt={sideImage.alt}
                width={sideImage.width || 500}
                height={sideImage.height || 750}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="text-center">
          <Button variant="outline">View All Doctors</Button>
        </div>
      </div>
    </section>
  );
}

