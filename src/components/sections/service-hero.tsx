import Heading from "@/components/ui/heading";

interface ServiceHeroProps {
  title: string;
  description?: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Heading as="h1">{title}</Heading>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}

