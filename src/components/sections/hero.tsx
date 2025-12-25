"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";
import Image from "next/image";

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export default function Hero({
  title = "Professional Medical Care",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  showForm = true,
  backgroundImage = "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/64.jpg",
  backgroundVideo,
}: HeroProps) {
  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${videoId}` : '';
  };

  const isYouTube = backgroundVideo?.includes('youtube.com') || backgroundVideo?.includes('youtu.be');
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Fade out white overlay after video starts loading
  useEffect(() => {
    if (backgroundVideo && isYouTube) {
      // Wait a bit for video to start loading, then fade out white overlay
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 1500); // Adjust timing as needed

      return () => clearTimeout(timer);
    }
  }, [backgroundVideo, isYouTube]);

  return (
    <section className="relative overflow-hidden" style={{ height: '100vh', marginTop: 0, paddingTop: 0 }}>
      {/* Background Video or Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Fallback image - only shown if no video */}
        {!backgroundVideo && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        {backgroundVideo && isYouTube && (
          <>
            {/* White background behind video */}
            <div 
              className="absolute inset-0 w-full h-full bg-white"
              style={{ zIndex: 0 }}
            />
            <iframe
              src={getYouTubeEmbedUrl(backgroundVideo)}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ 
                pointerEvents: 'none',
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.77vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
            />
            {/* White overlay on top of iframe that fades out */}
            <div 
              className="absolute inset-0 w-full h-full bg-white transition-opacity duration-1000"
              style={{ 
                zIndex: 2,
                opacity: videoLoaded ? 0 : 1,
                pointerEvents: 'none'
              }}
            />
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 max-w-[1140px] relative z-10 h-full flex items-center pb-32 md:pb-20 pt-[180px] md:pt-20">
        <div className="w-full">
          <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 md:mx-auto">
            <div className="space-y-6 max-w-2xl animate-fade-in-left">
              <Heading as="h1">{title}</Heading>
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
          </div>
          {showForm && (
            <div className="ml-[25px] mr-[25px] md:ml-0 md:mr-0 md:mx-auto">
              <div className="p-4 md:p-8 max-w-xl mt-8 animate-fade-in-up">
                <AppointmentForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

