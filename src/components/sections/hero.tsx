import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
}

export default function Hero({
  title = "Professional Medical Care",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  showForm = true,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-4">
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

