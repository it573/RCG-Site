import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
