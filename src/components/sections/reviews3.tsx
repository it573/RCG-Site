import Image from "next/image";

interface LogoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface Reviews3Props {
  mainImage?: {
    src: string;
    alt: string;
  };
  title?: string;
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/5.png",
    width: 200,
    height: 80,
    alt: "Partner logo 1",
  },
  {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/4.png",
    width: 200,
    height: 80,
    alt: "Partner logo 2",
  },
  {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/3.png",
    width: 200,
    height: 80,
    alt: "Partner logo 3",
  },
  {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/2.png",
    width: 180,
    height: 80,
    alt: "Partner logo 4",
  },
  {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/1.png",
    width: 180,
    height: 80,
    alt: "Partner logo 5",
  },
];

export default function Reviews3({
  mainImage = {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/62.jpg",
    alt: "Featured image",
  },
  title = "Featured in",
  logos = defaultLogos,
}: Reviews3Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Image */}
          <div className="animate-fade-in-left">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column - Logos */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {title}
              </h3>
            </div>

            {/* First Row - 2 Logos */}
            <div className="grid grid-cols-2 gap-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <img
                  src={logos[0].src}
                  alt={logos[0].alt}
                  className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <img
                  src={logos[1].src}
                  alt={logos[1].alt}
                  className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Second Row - 2 Logos */}
            <div className="grid grid-cols-2 gap-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <img
                  src={logos[2].src}
                  alt={logos[2].alt}
                  className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <img
                  src={logos[3].src}
                  alt={logos[3].alt}
                  className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Third Row - 1 Logo (centered) */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <img
                src={logos[4].src}
                alt={logos[4].alt}
                className="w-1/2 h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
