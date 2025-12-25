"use client";

import Heading from "@/components/ui/heading";
import Badge from "@/components/ui/badge";
import TestimonialCard from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating?: number;
}

interface TestimonialsProps {
  badge?: string;
  title?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Mike Camp",
    company: "Google",
    text: "Lorem ipsum dolor sit amesed do eiusmod tempor ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "John Camp",
    company: "Apple",
    text: "Lorem ipsum dolor sit amesed do eiusmod tempor ut labore et dolore magna aliqua.",
    rating: 5,
  },
];

export default function Testimonials({
  badge = "Reviews",
  title = "Testimonials",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Badge>{badge}</Badge>
            <Heading as="h2">{title}</Heading>
          </div>
          <div className="lg:col-span-2">
            <div className="relative">
              <TestimonialCard {...testimonials[currentIndex]} />
              <div className="mt-4 flex justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-2 hover:bg-gray-100 rounded"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 hover:bg-gray-100 rounded"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right">
          <Button variant="ghost" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            View Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
}

