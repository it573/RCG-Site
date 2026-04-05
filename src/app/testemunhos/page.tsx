import type { Metadata } from "next";
import TestimonialsClient from "./testimonials-client";
import { ReviewsJsonLd } from "@/components/ai-reviews-json-ld";

export const metadata: Metadata = {
  title: "Testemunhos - O Que Dizem os Nossos Clientes | RCG",
  description: "Leia os testemunhos de clientes satisfeitos com os nossos cuidados de saúde ao domicílio. Mais de 40 avaliações positivas de clientes em Portugal.",
  keywords: ["testemunhos", "avaliações", "opiniões clientes", "feedback", "recomendações", "satisfação clientes", "RCG avaliações"],
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/testemunhos",
  },
  openGraph: {
    title: "Testemunhos - O Que Dizem os Nossos Clientes | RCG",
    description: "Leia os testemunhos de clientes satisfeitos com os nossos cuidados de saúde ao domicílio.",
    url: "https://www.reabilitar-em-casa.com/testemunhos",
  },
};

interface Testimonial {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Fisioterapeuta Rita Moreira",
    content: "Agradeço à Rita a dedicação, a simpatia, a disponibilidade e o profissionalismo com que tratou o meu pai. À Isabel deixo também o meu obrigada, pela simpatia no atendimento.",
    author: "Margarida Basso",
  },
  {
    id: 2,
    title: "A empresa",
    content: "Sempre disponível quando preciso resolver alguma questão. E sempre consigo junto a empresa resolver as coisas da melhor maneira possível. Obrigada!",
    author: "Kilzeanne Nicolau",
  },
  {
    id: 3,
    title: "Fisioterapeuta Tiago",
    content: "Fiz uma cirurgia à anca. Estou a fazer fisioterapia com o fisioterapeuta Tiago. Já fiz 10 sessões. Estou a meio do tratamento. Recupero a olhos vistos. O saber do fisioterapeuta Tiago aliado ao carinho com que me orienta, a toda a sua empatia, leva-me a querer realçar a excelência do seu trabalho e o seu profissionalismo. Muito obrigada ao fisioterapeuta Tiago.",
    author: "Maria Elisabeth dos Santos Rocha",
  },
  {
    id: 4,
    title: "Gerência",
    content: "Contactei a Reabilitar Em Casa com vista a ter apoio domiciliário após uma cirurgia à anca. Fui sempre atendida pela Sra. D. Ana Filipa Santos com muita simpatia e disponibilidade de molde a podermos programar o que melhor se enquadrava no que necessitava. Após a cirurgia enviaram-me uma sua colaboradora excelente, a Rosa Ângela, que me tem deixado muito muito satisfeita. Dificilmente poderia ter acontecido melhor. Com competência e carinho, muito tem ajudado na minha reabilitação. Estou verdadeiramente agradada por ter escolhido a Reabilitar Em Casa para me apoiar.",
    author: "Maria Elisabeth",
  },
  {
    id: 5,
    title: "Reabilitar em Casa",
    content: "Boa tarde a todas(os). Tendo terminado a Fisioterapia por imposição do I.A.S.F.A. tenho de cumprir o meu dever e expressar a minha opinião seja positiva o negativa porque nada deve ficar por dizer. -Começo por referir o tratamento e apoio das Gestoras de Utentes, como foram várias eu não decorei os nomes mas têm todas em comum, a educação, a disponibilidade, a formação e o gosto pelo que fazem, tudo com simpatia e sem a subserviência que é horrível. PARA TODAS O MEU BEM HAJAN. -Outro elemento da equipa que quero referir é a lutadora Dra.Rita Cosme que quero saudar pela missão que chamou a si e para a qual não tenho palavras para agradecer por mim e por todos os meus irmãos DFA e não só. Um grande abraço com enorme gratidão e BEM HAJA Dra.Rita Cosme pela sua dedicação. -Por último a Fisioterapeuta Andreia que não consigo classificar pois associa um elevado Profissionalismo a uma simpatia que me deixa sem palavras para lhe agradecer tudo o que fez por mim pois estou muito bem. É alegre, bem disposta e adora ajudar. A minha elevada gratidão e um grande BEM HAJA. Muito obrigado a toda a equipa pelo trabalho espetacular que fazem. Cumprimentos e felicidades para todos e força na luta que travam diariamente ao serviço dos outros. António Roquette",
    author: "António Roquette",
  },
];

const TOTAL_COUNT = 43;

export default function TestemunhosPage() {
  return (
    <>
      <ReviewsJsonLd totalCount={TOTAL_COUNT} />
      <TestimonialsClient testimonials={testimonials} totalCount={TOTAL_COUNT} />
    </>
  );
}
