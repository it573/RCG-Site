"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import PreservingLink from "@/components/ui/preserving-link";

// Keep in sync with the duration-500 class on the slide track
const TRANSITION_MS = 500;

export interface CarouselTestimonial {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  author: string;
}

interface TestimonialsCarouselProps {
  title: string;
  testimonials: CarouselTestimonial[];
  praisedByLabel: string;
  ctaLabel: string;
  ctaHref?: string;
  autoPlayInterval?: number;
}

export default function TestimonialsCarousel({
  title,
  testimonials,
  praisedByLabel,
  ctaLabel,
  ctaHref = "/testemunhos",
  autoPlayInterval = 8000,
}: TestimonialsCarouselProps) {
  // Track position may reach `total` (a clone of the first slide) so the loop
  // from the last slide back to the first keeps moving rightward.
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  // The real testimonial on screen: the trailing clone maps back to the first.
  const currentIndex = position === total ? 0 : position;

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setIsAnimating(true);
      setPosition(((index % total) + total) % total);
    },
    [total]
  );

  // Step from the live position so rapid clicks don't read a stale value
  const step = useCallback(
    (delta: number) => {
      if (total === 0) return;
      setIsAnimating(true);
      setPosition((prevPosition) => {
        // Normalise the clone back to 0 before stepping
        const base = prevPosition === total ? 0 : prevPosition;
        const target = base + delta;
        // Going forward past the last slide lands on the clone (slides in from
        // the right); going back past the first wraps to the last as usual.
        if (target > total - 1) return total;
        if (target < 0) return total - 1;
        return target;
      });
    },
    [total]
  );

  const next = useCallback(() => step(1), [step]);
  const prev = useCallback(() => step(-1), [step]);

  // Once the clone is centred, snap back to the real first slide without
  // animating so the next advance continues rightward. Guarded on the live
  // position so a click landing on the snap boundary can't skip a slide.
  useEffect(() => {
    if (position !== total) return;

    const timer = setTimeout(() => {
      setPosition((prevPosition) => {
        if (prevPosition !== total) return prevPosition; // user already moved on
        setIsAnimating(false);
        return 0;
      });
    }, TRANSITION_MS);

    return () => clearTimeout(timer);
  }, [position, total]);

  // Re-enable the transition on the frame after the silent snap.
  useEffect(() => {
    if (isAnimating) return;

    const frame = requestAnimationFrame(() => setIsAnimating(true));
    return () => cancelAnimationFrame(frame);
  }, [isAnimating]);

  // Autoplay. The timer is keyed to `tick` rather than to `next`/`position`, so
  // re-renders from the wrap-around snap don't tear it down and restart the
  // countdown — which previously stalled the cycle whenever the pointer rested
  // on or crossed the carousel.
  const [tick, setTick] = useState(0);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  useEffect(() => {
    if (total <= 1 || autoPlayInterval <= 0) return;

    const timer = setTimeout(() => {
      if (!isPausedRef.current) next();
      setTick((t) => t + 1);
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [tick, total, autoPlayInterval, next]);

  if (total === 0) return null;

  return (
    <section className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10 text-center">
          {title}
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="group"
          aria-roledescription="carousel"
          aria-label={title}
        >
          {/* Slides — the last entry clones the first so the loop keeps
              travelling rightward instead of rewinding across every slide. */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className={`flex items-start ${
                isAnimating ? "transition-transform duration-500 ease-in-out" : ""
              }`}
              style={{ transform: `translateX(-${position * 100}%)` }}
            >
              {[...testimonials, testimonials[0]].map((testimonial, index) => {
                const isClone = index === total;

                return (
                  <div
                    key={isClone ? `${testimonial.id}-clone` : testimonial.id}
                    className="w-full shrink-0 px-1"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${(isClone ? 0 : index) + 1} / ${total}`}
                    aria-hidden={index !== position}
                  >
                    <div className="h-full px-6 py-8 lg:px-12 lg:py-10 bg-white rounded-2xl shadow-lg border border-black/5">
                      <div
                        className="flex items-center gap-1 mb-4"
                        role="img"
                        aria-label="5 de 5 estrelas"
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-teal-600 capitalize m-0">
                        {testimonial.title}
                      </h3>
                      {testimonial.subtitle && (
                        <span className="block text-base font-normal text-[#3c3c3b] mt-1">
                          {testimonial.subtitle}
                        </span>
                      )}
                      <p className="mt-5 text-base text-black leading-relaxed whitespace-pre-line">
                        {testimonial.content}
                      </p>
                      <p className="mt-6 text-right m-0 text-[#666666]">
                        {praisedByLabel}{" "}
                        <strong className="font-semibold">{testimonial.author}</strong>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Testemunho anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-teal-600 transition-colors hover:bg-teal-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Testemunho seguinte"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-teal-600 transition-colors hover:bg-teal-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir para testemunho ${index + 1}`}
                aria-current={index === currentIndex}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                  index === currentIndex
                    ? "w-6 bg-teal-600"
                    : "w-2.5 bg-teal-600/30 hover:bg-teal-600/60"
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <PreservingLink
            href={ctaHref}
            className="inline-flex items-center gap-2 font-semibold text-teal-600 underline-offset-4 hover:underline"
          >
            {ctaLabel}
          </PreservingLink>
        </div>
      </div>
    </section>
  );
}
