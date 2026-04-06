"use client";

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface GoogleTagManagerProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only load if gtmId is provided and not a placeholder
    if (!gtmId || gtmId.startsWith("GTM-PLACEHOLDER")) {
      return;
    }

    // Initialize dataLayer BEFORE GTM loads
    window.dataLayer = window.dataLayer || [];

    const checkAndLoadGTM = () => {
      const consent = getCookie("cookie-consent");
      if (consent === "accepted" && !hasConsent && !isLoaded) {
        setHasConsent(true);
        loadGTMScript();
      }
    };

    const loadGTMScript = () => {
      if (isLoaded) return;

      setIsLoaded(true);

      // Initialize gtag if not already available
      window.gtag = window.gtag || function () {
        (window.dataLayer = window.dataLayer || []).push(arguments);
      };

      // Set default consent BEFORE loading GTM (required by consent mode v2)
      window.gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'wait_for_update': 500
      });

      // Inject GTM script BEFORE updating consent
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);

      // Wait for GTM to load, then update consent and trigger tags
      setTimeout(() => {
        // Now update consent to granted
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
          });
        } else if (window.dataLayer) {
          window.dataLayer.push({
            'event': 'consent_update',
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
          });
        }

        // Trigger GTM tags that wait for consent
        setTimeout(() => {
          if (window.dataLayer) {
            // Simulate initial page load for tags that missed it
            window.dataLayer.push({
              'event': 'gtm.dom',
              'gtm.start': new Date().getTime()
            });

            window.dataLayer.push({
              'event': 'gtm.load',
              'gtm.start': new Date().getTime()
            });

            // Trigger page view
            window.dataLayer.push({
              'event': 'page_view',
              'page_title': document.title,
              'page_location': window.location.href,
              'page_path': window.location.pathname,
              'referrer': document.referrer
            });
          }
        }, 500);
      }, 1500);

      // Add noscript fallback for body
      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);
    };

    // Check for existing consent on mount
    checkAndLoadGTM();

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      if (event.detail === 'accepted' && !hasConsent && !isLoaded) {
        setHasConsent(true);
        loadGTMScript();
      }
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate as EventListener);

    return () => {
      // Cleanup
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate as EventListener);
      const scripts = document.head.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].innerHTML.includes(gtmId)) {
          scripts[i].remove();
        }
      }
      // Remove noscript iframe
      const noscripts = document.body.getElementsByTagName("noscript");
      for (let i = 0; i < noscripts.length; i++) {
        if (noscripts[i].innerHTML?.includes(gtmId)) {
          noscripts[i].remove();
        }
      }
    };
  }, [gtmId, hasConsent, isLoaded]);

  return null;
}
