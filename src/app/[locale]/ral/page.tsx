export const metadata = {
  title: "RAL - Resolução de Litígios Online - RCG",
  description: "Resolução Alternativa de Litígios - RCG",
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/ral",
  },
};

export default function RALPage() {
  return (
    <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="prose prose-lg max-w-none px-8 py-10 bg-white rounded-2xl shadow-lg">
          <div className="entry-content">
            <p className="text-2xl font-bold mb-4">Resolução de Litígios Online</p>
            <p>&nbsp;</p>
            <p>
              A resolução alternativa de litígios é a possibilidade que todos os consumidores têm ao seu dispôr de recorrer a entidades oficiais que os ajudem na resolução, ou orientação de algum conflito, antes de abrirem processos litigiosos nos Tribunais.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">COMO FUNCIONA?</h2>
            <p>
              O cliente pede a um terceiro imparcial que intervenha como intermediário entre si e o comerciante que é o alvo da sua reclamação. O intermediário pode sugerir uma solução para a sua reclamação, impor uma solução a ambas as partes ou reunir as partes para encontrar uma solução.
            </p>
            <p>
              A RESOLUÇÃO DE LITÍGIOS funciona como mediação ou conciliação. Funciona como uma arbitragem ou comissão competente no âmbito dos litígios de consumo.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">VANTAGENS</h2>
            <p>A resolução alternativa de litígios é, por norma, menos dispendiosa, mais rápida do que a via judicial e menos formal.</p>
            <p>Em caso de litígio o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de consumo (ao abrigo da Lei n.º 144/2015, de 8 de setembro).</p>

            <h2 className="text-xl font-bold mt-8 mb-4">CENTROS DE ARBITRAGEM DE COMPETÊNCIA GENÉRICA</h2>
            <p><strong>Centro Nacional de Informação e Arbitragem de Conflitos de Consumo</strong></p>
            <p>Atuação em todo o território nacional, nas zonas não abrangidas por outro centro de arbitragem de competência regional</p>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-2">Contactos CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo</p>
              <p>Faculdade de Direito da Universidade Nova de Lisboa</p>
              <p>Campus de Campolide</p>
              <p>1099-032 Lisboa</p>
              <p><strong>Tel.:</strong> 213 847 484</p>
              <p><strong>E-mail:</strong> <a href="mailto:cniacc@fd.unl.pt" className="text-blue-600 hover:underline">cniacc@fd.unl.pt</a></p>
              <p><strong>Web:</strong> <a href="https://www.arbitragemdeconsumo.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.arbitragemdeconsumo.org</a></p>
            </div>

            <p className="mt-8">
              <strong>Data da última atualização:</strong> 30 de março de 2026
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
