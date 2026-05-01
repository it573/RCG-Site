import type { Metadata } from "next";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.ral?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "RAL - Resolução de Litígios Online - RCG",
    description: metadataMessages?.description || "Resolução Alternativa de Litígios - RCG",
    keywords: metadataMessages?.keywords || ["resolução litígios", "alternativa litígios", "mediação", "conciliação", "consumo", "tribunais", "RCG"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'ral' : 'dispute-resolution'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "RAL - Resolução de Litígios Online - RCG",
      description: metadataMessages?.description || "Resolução Alternativa de Litígios - RCG",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'ral' : 'dispute-resolution'}`,
    },
  };
}

export default async function RALPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const ralMessages = messages.ral as {
    hero?: { title?: string; subtitle?: string };
    content?: {
      intro?: { title?: string; description?: string };
      howItWorks?: { title?: string; description?: string };
      advantages?: { title?: string; description?: string };
      centers?: { title?: string; centerName?: string; description?: string };
      contacts?: {
        title?: string;
        address?: string;
        campus?: string;
        location?: string;
        phone?: string;
        email?: string;
        website?: string;
        emailLink?: string;
        websiteLink?: string;
      };
      lastUpdate?: string;
    };
  };

  return (
    <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="prose prose-lg max-w-none px-8 py-10 bg-white rounded-2xl shadow-lg">
          <div className="entry-content">
            <p className="text-2xl font-bold mb-4">
              {ralMessages?.hero?.title || "Resolução de Litígios Online"}
            </p>
            <p className="text-lg mb-8 text-gray-600">
              {ralMessages?.hero?.subtitle || "Soluções rápidas e eficazes para conflitos de consumo"}
            </p>

            {ralMessages?.content?.intro && (
              <>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {ralMessages.content.intro.title || "Resolução de Litígios Online"}
                </h2>
                <p className="mb-8">
                  {ralMessages.content.intro.description}
                </p>
              </>
            )}

            {ralMessages?.content?.howItWorks && (
              <>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {ralMessages.content.howItWorks.title || "COMO FUNCIONA?"}
                </h2>
                <p className="mb-6">
                  {ralMessages.content.howItWorks.description}
                </p>
              </>
            )}

            {ralMessages?.content?.advantages && (
              <>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {ralMessages.content.advantages.title || "VANTAGENS"}
                </h2>
                <p className="mb-6">
                  {ralMessages.content.advantages.description}
                </p>
              </>
            )}

            {ralMessages?.content?.centers && (
              <>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {ralMessages.content.centers.title || "CENTROS DE ARBITRAGEM DE COMPETÊNCIA GENÉRICA"}
                </h2>
                <p className="font-semibold mb-2">
                  {ralMessages.content.centers.centerName || "Centro Nacional de Informação e Arbitragem de Conflitos de Consumo"}
                </p>
                <p className="mb-8">
                  {ralMessages.content.centers.description}
                </p>
              </>
            )}

            {ralMessages?.content?.contacts && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">
                  {ralMessages.content.contacts.title || "Contactos CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo"}
                </p>
                <p>{ralMessages.content.contacts.address || "Faculdade de Direito da Universidade Nova de Lisboa"}</p>
                <p>{ralMessages.content.contacts.campus || "Campus de Campolide"}</p>
                <p>{ralMessages.content.contacts.location || "1099-032 Lisboa"}</p>
                <p><strong>Tel.:</strong> {ralMessages.content.contacts.phone || "213 847 484"}</p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href={ralMessages.content.contacts.emailLink || "mailto:cniacc@fd.unl.pt"}
                    className="text-blue-600 hover:underline"
                  >
                    {ralMessages.content.contacts.email || "cniacc@fd.unl.pt"}
                  </a>
                </p>
                <p>
                  <strong>Web:</strong>{" "}
                  <a
                    href={ralMessages.content.contacts.websiteLink || "https://www.arbitragemdeconsumo.org"}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ralMessages.content.contacts.website || "www.arbitragemdeconsumo.org"}
                  </a>
                </p>
              </div>
            )}

            {ralMessages?.content?.lastUpdate && (
              <p className="mt-8">
                <strong>{ralMessages.content.lastUpdate}</strong>
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}