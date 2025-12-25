import Counter from "@/components/ui/counter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Statistic {
  value: number;
  title: string;
}

interface StatisticsProps {
  statistics?: Statistic[];
  showButtons?: boolean;
}

const defaultStatistics: Statistic[] = [
  { value: 25, title: "Departments" },
  { value: 75, title: "Medical Staffs" },
];

export default function Statistics({
  statistics = defaultStatistics,
  showButtons = true,
}: StatisticsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {showButtons && (
            <Button variant="outline">Our Services</Button>
          )}
          {statistics.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-8 w-full md:w-auto">
              <Counter value={stat.value} title={stat.title} />
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

