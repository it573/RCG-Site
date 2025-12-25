import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface IconListItem {
  text: string;
  icon?: React.ReactNode;
}

interface IconListProps {
  items: IconListItem[];
  className?: string;
  iconClassName?: string;
}

export default function IconList({
  items,
  className,
  iconClassName,
}: IconListProps) {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className={cn("text-primary", iconClassName)}>
            {item.icon || <Plus className="w-4 h-4" />}
          </span>
          <span className="text-sm">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

