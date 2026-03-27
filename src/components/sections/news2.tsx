import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
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
    image: {
      src: "/images/health-service.jpg",
      alt: "SAÚDE - Serviços Especializados",
    },
    href: "/cuidados-de-saude",
  },
  {
    title: "Análises Clínicas",
    image: {
      src: "/images/blood-test.jpg",
      alt: "Análises Clínicas",
    },
    href: "/analises-clinicas",
  },
  {
    title: "Apoio Domiciário",
    image: {
      src: "/images/caregiver.jpg",
      alt: "Separating stigma from health advice",
    },
    href: "/apoio-domiciliario",
  },
  {
    title: "Cuidados Continuados",
    image: {
      src: "/images/CuidadosContinuados-Maos.jpg",
      alt: "Cuidados Continuados",
    },
    href: "/cuidados-continuados-hospitalizacao",
  },
  {
    title: "Hospitalização Domiciliária",
    image: {
      src: "/images/hospital-at-home.jpg",
      alt: "Hospitalização Domiciliária",
    },
    href: "/cuidados-continuados-hospitalizacao",
  },
  {
    title: "Equipamentos Hospitalares",
    image: {
      src: "/images/wheel-chair.png",
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
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-12 space-y-4">
          {/* <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            {badge}
          </div> */}
          <Heading as="h2" className="text-3xl font-normal">{title}</Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={post.href} className="block">
                <div className="overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={768}
                    height={512}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}