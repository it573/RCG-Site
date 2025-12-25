import Heading from "@/components/ui/heading";
import Badge from "@/components/ui/badge";
import NewsCard from "@/components/ui/news-card";

interface NewsItem {
  title: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  href: string;
}

interface HealthNewsProps {
  badge?: string;
  title?: string;
  description?: string;
  news?: NewsItem[];
}

const defaultNews: NewsItem[] = [
  {
    title: "Mental health tips during summer",
    image: {
      src: "/news/mental-health-summer.jpg",
      alt: "Mental health tips during summer",
      width: 768,
      height: 512,
    },
    href: "/news/mental-health-summer",
  },
  {
    title: "Mental health issues can strike anyone",
    image: {
      src: "/news/mental-health-issues.jpg",
      alt: "Mental health issues can strike anyone",
      width: 768,
      height: 512,
    },
    href: "/news/mental-health-issues",
  },
  {
    title: "Separating stigma from health advice",
    image: {
      src: "/news/stigma-health.jpg",
      alt: "Separating stigma from health advice",
      width: 768,
      height: 512,
    },
    href: "/news/stigma-health",
  },
];

export default function HealthNews({
  badge = "News",
  title = "Health News",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.",
  news = defaultNews,
}: HealthNewsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <Badge>{badge}</Badge>
          <Heading as="h1">{title}</Heading>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

