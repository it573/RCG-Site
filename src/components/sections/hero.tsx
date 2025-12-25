import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";
import Image from "next/image";

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
  backgroundImage?: string;
}

export default function Hero({
  title = "Professional Medical Care",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  showForm = true,
  backgroundImage = "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/64.jpg",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ height: '100vh', marginTop: 0, paddingTop: 0 }}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-[1140px] relative z-10 h-full flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Heading as="h1">{title}</Heading>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
          {showForm && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <AppointmentForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

