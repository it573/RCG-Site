"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VideoButtonProps {
  videoUrl: string;
  className?: string;
}

export default function VideoButton({
  videoUrl,
  className,
}: VideoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "group flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-110 hover:bg-primary/90",
            className
          )}
          aria-label="Play video"
        >
          <Play className="ml-1 h-8 w-8 fill-current" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

