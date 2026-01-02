import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";

// Lazy load below-fold sections for better initial page load
const ProgramsServices = dynamic(() => import("@/components/sections/programs-services"), {
  loading: () => <div className="py-20 bg-gray-50" />,
});

const Statistics = dynamic(() => import("@/components/sections/statistics"), {
  loading: () => <div className="py-20" />,
});

const LatestTechnology = dynamic(() => import("@/components/sections/latest-technology"), {
  loading: () => <div className="py-20" />,
});

const Doctors = dynamic(() => import("@/components/sections/doctors"), {
  loading: () => <div className="py-20 bg-gray-50" />,
});

const HealthcareServices = dynamic(() => import("@/components/sections/healthcare-services"), {
  loading: () => <div className="py-20" />,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
  loading: () => <div className="py-20 bg-gray-50" />,
});

const HealthNews = dynamic(() => import("@/components/sections/health-news"), {
  loading: () => <div className="py-20" />,
});

const CTA = dynamic(() => import("@/components/sections/cta"), {
  loading: () => <div className="py-20" />,
});

export default function Home() {
  return (
    <>
      <Hero 
        backgroundVideo="https://www.youtube.com/watch?v=bs_7jWqSeIM" 
        backgroundVideoMobile="CareGiverVertical1" />
      <WhyChooseUs />
      <ProgramsServices />
      <Statistics />
      <LatestTechnology />
      <Doctors />
      <HealthcareServices />
      <Testimonials />
      <HealthNews />
      <CTA />
    </>
  );
}
