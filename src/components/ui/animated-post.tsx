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
  const hasAnimatedRef = useRef(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      isMobileRef.current = mobile;
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            // On mobile: animate immediately, on desktop: use delay
            const animationDelay = isMobileRef.current ? 0 : delay;
            setTimeout(() => {
              setIsVisible(true);
            }, animationDelay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={
        isMobile
          ? "opacity-0"
          : "animate-rise-up"
      }
      style={
        isMobile
          ? {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(100px)",
              transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
              transitionDelay: "0ms"
            }
          : { animationDelay: `${delay}ms` }
      }
    >
      {children}
    </div>
  );
}
