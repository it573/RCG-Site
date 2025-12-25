import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ProgramsServices from "@/components/sections/programs-services";
import Statistics from "@/components/sections/statistics";
import LatestTechnology from "@/components/sections/latest-technology";
import Doctors from "@/components/sections/doctors";
import HealthcareServices from "@/components/sections/healthcare-services";
import Testimonials from "@/components/sections/testimonials";
import HealthNews from "@/components/sections/health-news";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero backgroundVideo="https://www.youtube.com/watch?v=Jd0rw3Qh4Yc" />
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
