import Counter from "@/components/ui/counter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Statistic {
  value: number;
  title: string;
  prefix?: string;
  suffix?: string;
}

interface StatisticsProps {
  statistics?: Statistic[];
  showButtons?: boolean;
  /** Renders stats as an evenly divided grid instead of a centered flex row. */
  variant?: "inline" | "grid";
}

const defaultStatistics: Statistic[] = [
  { value: 25, title: "Departments" },
  { value: 75, title: "Medical Staffs" },
];

export default function Statistics({
  statistics = defaultStatistics,
  showButtons = true,
  variant = "inline",
}: StatisticsProps) {
  if (variant === "grid") {
    return (
      <section className="py-16" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg py-8 px-4 shadow-sm"
              >
                <Counter
                  value={stat.value}
                  title={stat.title}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  valueClassName="text-4xl md:text-5xl text-teal-500 leading-none"
                  titleClassName="mt-4 text-sm md:text-base font-normal text-foreground leading-snug whitespace-pre-line"
                  pulseOnComplete={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {showButtons && (
            <Button variant="outline">Our Services</Button>
          )}
          {statistics.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-8 w-full md:w-auto">
              <Counter
                value={stat.value}
                title={stat.title}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              {index < statistics.length - 1 && (
                <Separator orientation="vertical" className="h-16 hidden md:block" />
              )}
            </div>
          ))}
          {showButtons && (
            <Button variant="outline">About Us</Button>
          )}
        </div>
      </div>
    </section>
  );
}

