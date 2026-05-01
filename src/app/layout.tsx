import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import GoogleTagManager from "@/components/analytics/google-tag-manager";
import CookieConsentBanner from "@/components/layout/cookie-consent-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "RCG - Cuidados de Saúde e Apoio Domiciliário em Portugal",
    template: "%s | RCG"
  },
  description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal. Equipa disponível 24/7.",
  keywords: ["cuidados de saúde", "apoio domiciliário", "análises clínicas", "equipamento hospitalar", "cuidados continuados", "saúde em Portugal"],
  authors: [{ name: "RCG" }],
  creator: "RCG",
  publisher: "RCG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.reabilitar-em-casa.com"),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.reabilitar-em-casa.com",
    title: "RCG - Cuidados de Saúde e Apoio Domiciliário",
    description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal.",
    siteName: "RCG",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCG - Cuidados de Saúde e Apoio Domiciliário",
    description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification code when available
    // google: "verification_code_here",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '27646133138319774');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=27646133138319774&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
