"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedPostProps {
  children: React.ReactNode;
  delay: number;
}

export default function AnimatedPost({ children, delay }: AnimatedPostProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={
        isMobile
          ? isVisible
            ? "animate-slide-from-right visible"
            : "animate-slide-from-right"
          : "animate-rise-up"
      }
      style={
        !isMobile ? { animationDelay: `${delay}ms` } : { animationDelay: `${delay}ms` }
      }
    >
      {children}
    </div>
  );
}
