"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import AppointmentForm from "@/components/forms/appointment-form";
import Services3 from "@/components/sections/service3";
import ServiceContent from "@/components/sections/service-content";
import SynlabDeals from "@/components/sections/synlabdeals";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import LocationSeoContent from "@/components/sections/location-seo-content";

export default function AnalisesClinicasClient() {
  useEffect(() => {
    const smoothScrollToElement = (element: Element, offset = 80) => {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = progress;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            smoothScrollToElement(element);
          }, 100);
        }
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            smoothScrollToElement(element);
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Breadcrumbs items={[{ label: "Serviços" }, { label: "Análises Clínicas" }]} />
      <Hero
        title="Análises Clínicas"
        description="No nosso Posto de Colheitas ou no Domicílio, realizamos análises clínicas com rapidez e confidencialidade."
        showForm={false}
        backgroundImage="/images/hero/blood-test.jpg"
      />
      <ServiceContent
        title="Por que escolher os nossos serviços de análises clínicas?"
        description="Com uma equipa de profissionais especializados e tecnologia de ponta, garantimos resultados fiáveis e rápidos para uma melhor gestão da sua saúde."
        image={{
        src: "/images/synlab-logo.png",
          alt: "Equipamento de análises clínicas",
          width: 600,
          height: 900
        }}
        sections={[

          {
            title: "",
            content: `A Reabilitar em Casa continua em expansão e, em 2026, coloca ao serviço dos seus clientes, em Carcavelos, um posto de colheitas de Análises Clínicas, em parceria com a Synlab, laboratório líder europeu em serviços de laboratório médico e diagnósticos clínicos.<br><br>
Independentemente do seu <a href="#acordos" class="text-primary hover:underline font-semibold">subsistema de saúde</a>, pode fazer as suas análises clínicas no nosso posto de colheitas (Carcavelos) ou no conforto do seu lar.<br><br>
Para marcar as suas Análises Clínicas ou o seu check-up pode obter mais informações sobre os nossos perfis de análises clínicas, contacte-nos.`
          },
        ]}
      />
      <Services3 />
      <div id="acordos">
        <SynlabDeals />
      </div>
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
