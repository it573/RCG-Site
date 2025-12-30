"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  title: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  title,
  duration = 2000,
  className,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl font-bold text-primary">{count}</div>
      <div className="mt-2 text-sm font-medium text-muted-foreground">
        {title}
      </div>
    </div>
  );
}




