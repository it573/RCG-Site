"use client";

import { useEffect, useState, useMemo } from "react";
import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import CldVideoPlayer to reduce initial bundle size
const CldVideoPlayer = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldVideoPlayer),
  { ssr: false }
);

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundVideoMobile?: string;
}

export default function Hero({
  title = "Todos os serviços de Saúde",
  description = "Fisioterapia, Apoio Domiciliário 24h/7d, Terapia da Fala, Enfermagem, Podologia, Análises Clínicas. Somos o seu hub em Cuidados de Saúde",
  showForm = true,
  backgroundImage = "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/64.jpg",
  backgroundVideo,
  backgroundVideoMobile,
}: HeroProps) {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Detect orientation - optimized with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const checkOrientation = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const aspectRatio = window.innerWidth / window.innerHeight;
        setIsPortrait(aspectRatio < 1);
      }, 100); // Debounce orientation changes
    };
    
    // Check immediately
    checkOrientation();
    
    // Use passive listeners for better performance
    window.addEventListener('resize', checkOrientation, { passive: true });
    window.addEventListener('orientationchange', checkOrientation, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Memoize YouTube URL conversion
  const getYouTubeEmbedUrl = useMemo(() => {
    return (url: string) => {
      let videoId = '';
      if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1]?.split('&')[0] || '';
      } else if (url.includes('youtube.com/shorts/')) {
        videoId = url.split('shorts/')[1]?.split('?')[0] || '';
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1` : '';
    };
  }, []);

  // Determine active video based on orientation
  const activeVideo = isPortrait === null 
    ? null
    : isPortrait 
      ? backgroundVideoMobile
      : backgroundVideo;
  
  const isYouTube = activeVideo?.includes('youtube.com') || activeVideo?.includes('youtu.be');
  const isCloudinary = activeVideo && !isYouTube;

  // Optimized video loading effect
  useEffect(() => {
    if (!activeVideo) return;

    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 800); // Reduced from 1500ms

    if (isCloudinary) {
      const playTimer = setTimeout(() => {
        const videoElement = document.querySelector('#hero-background-video video') as HTMLVideoElement;
        if (videoElement) {
          videoElement.play().catch(() => {
            // Silently handle autoplay prevention
          });
        }
      }, 500); // Reduced from 1000ms

      return () => {
        clearTimeout(timer);
        clearTimeout(playTimer);
      };
    }

    return () => clearTimeout(timer);
  }, [activeVideo, isCloudinary]);

  return (
    <section className="relative overflow-hidden" style={{ height: '100vh', marginTop: 0, paddingTop: 0 }}>
      {/* Background Video or Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Fallback image - shown while video loads or if no video */}
        {!activeVideo && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        )}
        
        {/* Video for desktop or mobile - YouTube */}
        {activeVideo && isYouTube && (
          <>
            {/* White background behind video */}
            <div 
              className="absolute inset-0 w-full h-full bg-white"
              style={{ zIndex: 0 }}
            />
            <iframe
              src={getYouTubeEmbedUrl(activeVideo)}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              loading="lazy"
              title="Background video"
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
              className="absolute inset-0 w-full h-full bg-white transition-opacity duration-700"
              style={{ 
                zIndex: 2,
                opacity: videoLoaded ? 0 : 1,
                pointerEvents: 'none'
              }}
            />
          </>
        )}

        {/* Video for desktop or mobile - Cloudinary */}
        {activeVideo && isCloudinary && (
          <>
            {/* White background behind video */}
            <div 
              className="absolute inset-0 w-full h-full bg-white"
              style={{ zIndex: 0 }}
            />
            <div
              style={{ 
                zIndex: 1,
                width: '100vw',
                height: '177.78vw',
                minHeight: '100vh',
                minWidth: '56.25vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            >
              <CldVideoPlayer 
                id="hero-background-video"
                width={1080} 
                height={1920} 
                src={activeVideo}
                autoPlay
                loop
                muted
                transformation={{
                  quality: "auto:low",
                  fetch_format: "auto"
                }}                
                controls={false}
                playsinline
                className="w-full h-full object-cover"
              />
            </div>
            {/* White overlay on top of video that fades out */}
            <div 
              className="absolute inset-0 w-full h-full bg-white transition-opacity duration-700"
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
            <div className="space-y-6 max-w-2xl animate-fade-in-left-double">
              <Heading as="h1" className="text-white">{title}</Heading>
              <p className="text-lg text-white">{description}</p>
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
