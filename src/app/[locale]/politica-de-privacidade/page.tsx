import type { Metadata } from "next";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.privacy?.metadata as { title?: string; description?: string };

  return {
    title: metadataMessages?.title || "Política de Privacidade - RCG",
    description: metadataMessages?.description || "Política de Privacidade e proteção de dados pessoais.",
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'politica-de-privacidade' : 'privacy-policy'}`,
    },
  };
}

export default async function PoliticaPrivacidadePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const privacyMessages = messages.privacy as {
    title?: string;
    introduction?: string;
    sections?: Array<{
      title?: string;
      content?: string;
      content2?: string;
      principles?: string[];
      minors?: string;
      optional?: string;
      categoriesTitle?: string;
      categories?: string[];
      tablePurpose?: string;
      tableLegal?: string;
      purposes?: Array<{ purpose?: string; legal?: string }>;
      tableCategory?: string;
      tableTime?: string;
      conservation?: Array<{ category?: string; time?: string }>;
      sharing?: string[];
      transfers?: string[];
      rights?: string[];
      contact?: string[];
      security?: string;
      complaint?: string;
      authority?: string;
      updateDate?: string;
    }>;
  };

  return (
    <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="prose prose-lg max-w-none px-8 py-10 bg-white rounded-2xl shadow-lg">
          <div className="entry-content">
            <p className="text-2xl font-bold mb-4">{privacyMessages?.title || "POLÍTICA DE PRIVACIDADE"}</p>
            <p>&nbsp;</p>
            <p>{privacyMessages?.introduction || ""}</p>

            {privacyMessages?.sections?.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold mt-8 mb-4">{section.title}</h2>
                {section.content && <p>{section.content}</p>}
                {section.content2 && <p>{section.content2}</p>}

                {section.principles && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.principles.map((principle, i) => (
                      <li key={i}><strong>{principle.split(':')[0]}:</strong>{principle.split(':')[1] || principle}</li>
                    ))}
                  </ul>
                )}

                {section.minors && <p><strong>Proteção de Menores:</strong> {section.minors}</p>}
                {section.optional && <p>{section.optional}</p>}
                {section.categoriesTitle && <p className="font-semibold mt-4">{section.categoriesTitle}</p>}
                {section.categories && (
                  <ul className="list-disc pl-6 space-y-1">
                    {section.categories.map((category, i) => (
                      <li key={i}>{category}</li>
                    ))}
                  </ul>
                )}

                {section.purposes && (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">{section.tablePurpose}</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">{section.tableLegal}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.purposes.map((item, i) => (
                          <tr key={i}>
                            <td className="border border-gray-300 px-4 py-2">{item.purpose}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.legal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.conservation && (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">{section.tableCategory}</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">{section.tableTime}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.conservation.map((item, i) => (
                          <tr key={i}>
                            <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.sharing && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.sharing.map((item, i) => (
                      <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':')[1] || item}</li>
                    ))}
                  </ul>
                )}

                {section.transfers && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.transfers.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.rights && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.rights.map((right, i) => (
                      <li key={i}><strong>{right.split(':')[0]}:</strong>{right.split(':')[1] || right}</li>
                    ))}
                  </ul>
                )}

                {section.contact && (
                  <>
                    <ul className="list-disc pl-6 space-y-1">
                      {section.contact.map((item, i) => (
                        <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':')[1] || item}</li>
                      ))}
                    </ul>
                    {section.security && <p>{section.security}</p>}
                    {section.complaint && <p>{section.complaint}</p>}
                    {section.authority && (
                      <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> – <a href="https://www.cnpd.pt" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a></li>
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}

            {privacyMessages?.sections?.find(s => s.updateDate)?.updateDate && (
              <p className="mt-8">
                <strong>Data da última atualização:</strong> {privacyMessages.sections.find(s => s.updateDate)?.updateDate}
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
