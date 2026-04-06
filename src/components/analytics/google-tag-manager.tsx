"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

interface GoogleTagManagerProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Check if user has accepted cookies
    const consent = getCookie("cookie-consent");
    if (consent !== "accepted") {
      return;
    }

    // Only load if gtmId is provided and not a placeholder
    if (!gtmId || gtmId.startsWith("GTM-PLACEHOLDER")) {
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Inject GTM script
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

    return () => {
      // Cleanup: remove scripts on unmount
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
  }, [gtmId]);

  return null;
}
