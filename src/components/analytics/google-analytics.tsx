"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Check if user has accepted cookies
    const consent = getCookie("cookie-consent");
    if (consent !== "accepted") {
      return;
    }

    // Only load if measurementId is provided and not a placeholder
    if (!measurementId || measurementId.startsWith("G-PLACEHOLDER")) {
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Load gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Configure gtag
    script.onload = () => {
      window.gtag = window.gtag || function () {
        (window.dataLayer = window.dataLayer || []).push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", measurementId);
    };

    return () => {
      // Cleanup: remove script on unmount
      const scripts = document.head.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes(`gtag/js?id=${measurementId}`)) {
          scripts[i].remove();
        }
      }
    };
  }, [measurementId]);

  return null;
}
