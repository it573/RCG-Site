"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  title: string;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  valueClassName?: string;
  titleClassName?: string;
  /** Pulse the value with the heartbeat animation once the count-up finishes. */
  pulseOnComplete?: boolean;
}

export default function Counter({
  value,
  title,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
  valueClassName,
  titleClassName,
  pulseOnComplete = false,
}: CounterProps) {
  // Start at the final value so SSR/no-JS renders real numbers, not zeros.
  // The client resets to 0 just before animating.
  const [count, setCount] = useState(value);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrame: number;

    const runCountUp = () => {
      let startTime: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out so large values decelerate instead of ticking linearly
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
          setIsComplete(true);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    // Respect users who prefer reduced motion: show the final value immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Values this small can't roll meaningfully (counting to 1 just reads "0"
    // until it snaps), so show them outright.
    if (prefersReducedMotion || value <= 2) {
      setCount(value);
      // Pulsing is motion too, so only mark complete when motion is allowed
      if (!prefersReducedMotion) setIsComplete(true);
      return;
    }

    // If the section is already on screen at mount, animate right away;
    // otherwise park at 0 so there is a visible roll when it scrolls in.
    const rect = element.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight * 0.7 && rect.bottom > 0;

    if (alreadyVisible) {
      hasAnimated.current = true;
      setCount(0);
      runCountUp();
      return () => cancelAnimationFrame(animationFrame);
    }

    setCount(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            runCountUp();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn("text-4xl font-bold text-primary", valueClassName)}
        style={
          pulseOnComplete && isComplete
            ? { animation: "heartbeat 1.5s ease-in-out infinite" }
            : undefined
        }
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-medium text-muted-foreground",
          titleClassName
        )}
      >
        {title}
      </div>
    </div>
  );
}




