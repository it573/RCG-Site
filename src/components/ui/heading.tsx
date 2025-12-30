import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  as: Component = "h2",
  children,
  className,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-bold leading-tight",
        Component === "h1" && "text-4xl md:text-5xl",
        Component === "h2" && "text-3xl md:text-4xl",
        Component === "h3" && "text-2xl md:text-3xl",
        Component === "h4" && "text-xl md:text-2xl",
        Component === "h5" && "text-lg md:text-xl",
        Component === "h6" && "text-base md:text-lg",
        className
      )}
    >
      {children}
    </Component>
  );
}




