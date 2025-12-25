import ServiceHero from "@/components/sections/service-hero";
import ServiceContent from "@/components/sections/service-content";
import ProgramsServices from "@/components/sections/programs-services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// This would typically come from a CMS or API
const serviceData: Record<string, any> = {
  "general-care": {
    title: "General Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: {
      src: "/services/general-care.jpg",
      alt: "General Care",
      width: 600,
      height: 900,
    },
    sections: [
      {
        title: "Emergency",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi aliquip.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi aliquip.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi aliquip.`,
      },
    ],
    imageBox: {
      title: "Laboratory",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
      image: {
        src: "/services/laboratory.jpg",
        alt: "Laboratory",
        width: 800,
        height: 532,
      },
    },
  },
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceData[slug] || serviceData["general-care"];

  return (
    <>
      <ServiceHero title={service.title} description={service.description} />
      <ServiceContent
        title={service.sections[0].title}
        description={service.sections[0].content}
        image={service.image}
        sections={service.sections}
        imageBox={service.imageBox}
      />
      <ProgramsServices />
    </>
  );
}

