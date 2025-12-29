import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  name,
  company,
  text,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="mb-4 text-primary">
        <Quote className="h-8 w-8" />
      </div>
      <p className="mb-6 text-sm text-muted-foreground">{text}</p>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">{company}</div>
      </div>
    </Card>
  );
}


