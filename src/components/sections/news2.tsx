import Heading from "@/components/ui/heading";
import Image from "next/image";
import PreservingLink from "@/components/ui/preserving-link";
import AnimatedPost from "@/components/ui/animated-post";

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

const defaultPosts: BlogPost[] = [
  {
    title: "SAÚDE - Serviços Especializados",
    description: "Cuidados especializados de saúde que aliam o rigor profissional à proximidade e segurança do ambiente familiar",
    image: {
      src: "/images/health-service.jpg",
      alt: "SAÚDE - Serviços Especializados",
    },
    href: "/cuidados-de-saude",
  },
  {
    title: "Análises Clínicas",
    description: "Realizamos a sua colheita de análises clínicas no conforto do domicílio, um serviço de diagnóstico rápido e seguro que leva a excelência laboratorial até si, priorizando o seu bem-estar e a agilidade nos resultados",
    image: {
      src: "/images/blood-test.jpg",
      alt: "Análises Clínicas",
    },
    href: "/analises-clinicas",
  },
  {
    title: "Apoio Domiciliário",
    description: "Garantimos uma assistência completa nas atividades da vida diária, a todos aqueles que não possam assegurar temporária ou permanentemente, a satisfação das suas necessidades básicas numa companhia atenta que promove a qualidade de vida no conforto do lar",
    image: {
      src: "/images/caregiver.jpg",
      alt: "Apoio Domiciliário",
    },
    href: "/apoio-domicilio",
  },
  {
    title: "Cuidados Continuados",
    description: "Uma alternativa segura à hospitalização convencional, com cuidados de saúde permanentes e especializados que garantem a continuidade do tratamento com a máxima dignidade",
    image: {
      src: "/images/CuidadosContinuados-Maos.jpg",
      alt: "Cuidados Continuados",
    },
    href: "/cuidados-continuados-hospitalizacao",
  },
  {
    title: "Hospitalização Domiciliária",
    description: "Uma alternativa inovadora ao internamento convencional que promove uma recuperação mais rápida e humanizada, através de cuidados clínicos intensivos prestados no conforto e proximidade da família",
    image: {
      src: "/images/hospital-at-home.jpg",
      alt: "Hospitalização Domiciliária",
    },
    href: "/cuidados-continuados-hospitalizacao",
  },
  {
    title: "Equipamentos Hospitalares",
    description: "Disponibilizamos soluções completas em equipamentos hospitalares de última geração, garantindo a adaptação segura e funcional do domicílio às necessidades específicas de cada pessoa. Aluguer e Venda (entrega e instalação incluídas)",
    image: {
      src: "/images/wheel-chair.jpg",
      alt: "Equipamentos Hospitalares",
    },
    href: "/equipamento-hospitalar",
  },
];

export default function News2({
  badge = "",
  title = "Especialidades Médicas e Serviços",
  description = "",
  posts = defaultPosts,
}: News2Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="text-center mb-12 space-y-4">
          {/* <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            {badge}
          </div> */}
          <Heading as="h2" className="text-3xl font-normal animate-drop-from-top">{title}</Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {posts.map((post, index) => (
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