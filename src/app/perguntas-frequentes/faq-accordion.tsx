"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-5 py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-base font-medium text-gray-900 pr-4">
              {faq.question}
            </h3>
            <span className="flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 text-gray-700">
              {typeof faq.answer === "string" ? (
                <p className="whitespace-pre-line text-sm leading-relaxed m-0">{faq.answer}</p>
              ) : (
                <div className="text-sm leading-relaxed">{faq.answer}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
