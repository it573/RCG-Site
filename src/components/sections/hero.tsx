"use client";

import { useEffect, useState, useRef } from "react";
import Heading from "@/components/ui/heading";
import AppointmentForm from "@/components/forms/appointment-form";
import Image from "next/image";
import { getCldVideoUrl } from "next-cloudinary";

interface HeroProps {
  title?: string;
  description?: string;
  showForm?: boolean;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundVideoMobile?: string;
}

export default function Hero({
  title = "Professionali Medicali Cari",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  showForm = true,
  backgroundImage = "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/64.jpg",
  backgroundVideo,
  backgroundVideoMobile,
}: HeroProps) {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null); // null = not determined yet
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set mounted state to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect orientation based on aspect ratio (horizontal vs vertical)
  useEffect(() => {
    if (!isMounted) return;
    
    const checkOrientation = () => {
      // Portrait/vertical: height > width (aspect ratio < 1)
      // Landscape/horizontal: width >= height (aspect ratio >= 1)
      const aspectRatio = window.innerWidth / window.innerHeight;
      setIsPortrait(aspectRatio < 1);
    };
    
    // Check immediately
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [isMounted]);

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('shorts/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${videoId}` : '';
  };

  // Determine which video to use based on orientation
  // Wait for orientation detection before deciding
  // Horizontal (landscape): use backgroundVideo
  // Vertical (portrait): use backgroundVideoMobile
  const activeVideo = isPortrait === null 
    ? null // Don't show video until we know the orientation
    : isPortrait 
      ? backgroundVideoMobile // Vertical/portrait: use mobile video
      : backgroundVideo; // Horizontal/landscape: use desktop video
  
  const isYouTube = activeVideo?.includes('youtube.com') || activeVideo?.includes('youtu.be');
  const isCloudinary = activeVideo && !isYouTube; // If it's not YouTube, assume it's a Cloudinary public ID

  // Get Cloudinary video URL
  const cloudinaryVideoUrl = isCloudinary && activeVideo
    ? getCldVideoUrl({
        src: activeVideo,
        format: 'auto',
        quality: 'auto',
      })
    : null;

  // Fade out white overlay after video starts loading and ensure video plays
  useEffect(() => {
    if (activeVideo && isCloudinary && isMounted && videoRef.current) {
      const videoElement = videoRef.current;

      // Handle video loaded and playing
      const handleCanPlay = () => {
        videoElement.play().catch((error) => {
          console.log('Autoplay prevented, trying again:', error);
          // Retry after user interaction might be needed
        });
      };

      const handlePlaying = () => {
        setVideoLoaded(true);
      };

      const handleLoadedData = () => {
        // Video data loaded, try to play
        setTimeout(() => {
          videoElement.play().catch((error) => {
            console.log('Autoplay error:', error);
          });
        }, 100);
      };

      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('playing', handlePlaying);
      videoElement.addEventListener('loadeddata', handleLoadedData);

      // Try to play immediately
      videoElement.play().catch((error) => {
        console.log('Initial autoplay prevented:', error);
      });

      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('playing', handlePlaying);
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    } else if (activeVideo && isYouTube) {
      // Wait a bit for video to start loading, then fade out white overlay
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [activeVideo, isCloudinary, isMounted, cloudinaryVideoUrl]);

  return (
    <section className="relative overflow-hidden" style={{ height: '100vh', marginTop: 0, paddingTop: 0 }}>
      {/* Background Video or Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Fallback image - only shown if no video */}
        {!activeVideo && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
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

        {/* Video for desktop or mobile - Cloudinary */}
        {activeVideo && isCloudinary && isMounted && cloudinaryVideoUrl && (
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
                height: '177.78vw', // 9:16 portrait aspect ratio (height = width * 16/9)
                minHeight: '100vh',
                minWidth: '56.25vh', // For landscape viewports, maintain aspect ratio
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            >
              <video
                ref={videoRef}
                src={cloudinaryVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            {/* White overlay on top of video that fades out */}
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
            <div className="space-y-6 max-w-2xl animate-fade-in-left-double">
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

