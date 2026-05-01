import Heading from "@/components/ui/heading";
import Image from "next/image";
import PreservingLink from "@/components/ui/preserving-link";
import AnimatedPost from "@/components/ui/animated-post";
import { getMessages } from 'next-intl/server';

interface BlogPost {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
}

interface News2Props {
  badge?: string;
  title?: string;
  description?: string;
  posts?: BlogPost[];
}

const postImages: Record<string, string> = {
  healthcare: "/images/health-service.jpg",
  clinicalAnalysis: "/images/blood-test.jpg",
  homeSupport: "/images/caregiver.jpg",
  continuedCare: "/images/CuidadosContinuados-Maos.jpg",
  homeHospitalization: "/images/hospital-at-home.jpg",
  hospitalEquipment: "/images/wheel-chair.jpg",
};

const postHrefs: Record<string, string> = {
  healthcare: "/cuidados-de-saude",
  clinicalAnalysis: "/analises-clinicas",
  homeSupport: "/apoio-domicilio",
  continuedCare: "/cuidados-continuados-hospitalizacao",
  homeHospitalization: "/cuidados-continuados-hospitalizacao",
  hospitalEquipment: "/equipamento-hospitalar",
};

export default async function News2({
  badge,
  title,
  description,
  posts,
  locale,
}: News2Props & { locale?: string }) {
  // Get locale from props or default to 'pt'
  const resolvedLocale = locale || 'pt';

  const messages = await getMessages({ locale: resolvedLocale });
  const servicesMessages = messages.home?.services as {
    title?: string;
    posts?: Record<string, { title?: string; description?: string; alt?: string }>;
  };

  const postsData = servicesMessages?.posts || {};

  const defaultPosts: BlogPost[] = [
    {
      title: postsData.healthcare?.title || "SAÚDE - Serviços Especializados",
      description: postsData.healthcare?.description || "Cuidados especializados de saúde que aliam o rigor profissional à proximidade e segurança do ambiente familiar",
      image: {
        src: postImages.healthcare,
        alt: postsData.healthcare?.alt || "SAÚDE - Serviços Especializados",
      },
      href: postHrefs.healthcare,
    },
    {
      title: postsData.clinicalAnalysis?.title || "Análises Clínicas",
      description: postsData.clinicalAnalysis?.description || "Realizamos a sua colheita de análises clínicas no conforto do domicílio",
      image: {
        src: postImages.clinicalAnalysis,
        alt: postsData.clinicalAnalysis?.alt || "Análises Clínicas",
      },
      href: postHrefs.clinicalAnalysis,
    },
    {
      title: postsData.homeSupport?.title || "Apoio Domiciliário",
      description: postsData.homeSupport?.description || "Garantimos uma assistência completa nas atividades da vida diária",
      image: {
        src: postImages.homeSupport,
        alt: postsData.homeSupport?.alt || "Apoio Domiciliário",
      },
      href: postHrefs.homeSupport,
    },
    {
      title: postsData.continuedCare?.title || "Cuidados Continuados",
      description: postsData.continuedCare?.description || "Uma alternativa segura à hospitalização convencional",
      image: {
        src: postImages.continuedCare,
        alt: postsData.continuedCare?.alt || "Cuidados Continuados",
      },
      href: postHrefs.continuedCare,
    },
    {
      title: postsData.homeHospitalization?.title || "Hospitalização Domiciliária",
      description: postsData.homeHospitalization?.description || "Uma alternativa inovadora ao internamento convencional",
      image: {
        src: postImages.homeHospitalization,
        alt: postsData.homeHospitalization?.alt || "Hospitalização Domiciliária",
      },
      href: postHrefs.homeHospitalization,
    },
    {
      title: postsData.hospitalEquipment?.title || "Equipamentos Hospitalares",
      description: postsData.hospitalEquipment?.description || "Disponibilizamos soluções completas em equipamentos hospitalares",
      image: {
        src: postImages.hospitalEquipment,
        alt: postsData.hospitalEquipment?.alt || "Equipamentos Hospitalares",
      },
      href: postHrefs.hospitalEquipment,
    },
  ];

  const displayTitle = title || servicesMessages?.title || "Especialidades Médicas e Serviços";
  const displayDescription = description || "";
  const displayPosts = posts || defaultPosts;
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="text-center mb-12 space-y-4">
          {/* <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            {badge}
          </div> */}
          <Heading as="h2" className="text-3xl font-normal animate-drop-from-top">{displayTitle}</Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">{displayDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayPosts.map((post, index) => (
            <AnimatedPost key={index} delay={index * 300}>
              <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <PreservingLink href={post.href} className="block flex flex-col h-full">
                  <div className="overflow-hidden">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      width={768}
                      height={512}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2 h-14 flex-shrink-0 leading-tight overflow-hidden">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed min-h-[6rem] flex-shrink-0">
                      {post.description || "\u00A0"}
                    </p>
                  </div>
                </PreservingLink>
              </div>
            </AnimatedPost>
          ))}
        </div>
      </div>
    </section>
  );
}