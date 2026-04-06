"use client";

import { useEffect, useState } from "react";
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
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Only load if measurementId is provided and not a placeholder
    if (!measurementId || measurementId.startsWith("G-PLACEHOLDER")) {
      return;
    }

    // Initialize dataLayer BEFORE any scripts load
    window.dataLayer = window.dataLayer || [];

    const checkAndLoadAnalytics = () => {
      const consent = getCookie("cookie-consent");
      if (consent === "accepted" && !hasConsent) {
        setHasConsent(true);
        loadGAScript();
      }
    };

    const loadGAScript = () => {
      // Load gtag script FIRST
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Configure gtag after script loads
      script.onload = () => {
        // Initialize gtag function
        window.gtag = window.gtag || function () {
          (window.dataLayer = window.dataLayer || []).push(arguments);
        };

        // Set default consent to denied first (required by consent mode v2)
        window.gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'wait_for_update': 500
        });

        // Then update to granted
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });

        // Configure GA
        window.gtag("js", new Date());
        window.gtag("config", measurementId, {
          'anonymize_ip': true,
          'cookie_domain': 'auto'
        });
      };
    };

    // Check for existing consent on mount
    checkAndLoadAnalytics();

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      if (event.detail === 'accepted' && !hasConsent) {
        setHasConsent(true);
        loadGAScript();
      }
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate as EventListener);

    return () => {
      // Cleanup
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate as EventListener);
      const scripts = document.head.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes(`gtag/js?id=${measurementId}`)) {
          scripts[i].remove();
        }
      }
    };
  }, [measurementId, hasConsent]);

  return null;
}
