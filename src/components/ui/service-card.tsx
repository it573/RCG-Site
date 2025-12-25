import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href = "#",
  className,
}: ServiceCardProps) {
  const content = (
    <Card className={cn("p-6 transition-all hover:shadow-lg", className)}>
      <div className="mb-4 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <h5 className="mb-2 text-lg font-semibold">{title}</h5>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );

  if (href !== "#") {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

