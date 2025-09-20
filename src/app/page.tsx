import FAQ from "@/components/core/faq";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import LandingFooter from "../components/core/footer";
import LandingHeader from "../components/core/header";
import { NAME } from "./config";
import { jsonLd } from "./utils/seo";

const Section1 = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center lg:px-0 mb-16">
      <h1 className="title">
        Software sob medida para
        <br />
        <span className="text-primary">transformar</span> sua empresa
      </h1>
      <p className="desc">
        Na VSantos, criamos soluções digitais que se adaptam ao seu negócio, com
        foco em eficiência, clareza e entrega consistente.
      </p>
      <Link
        href="https://calendly.com/devjusan/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Agendar uma conversa</Button>
      </Link>
    </div>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="relative mb-0 mt-[6%] flex h-max w-full justify-center">
        <Image
          alt="sphere"
          src="/background/sphere.png"
          loading="lazy"
          decoding="async"
          width={255}
          height={255}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 w-[59.5rem] -translate-x-1/2 -translate-y-1/2">
          <Image
            alt="solar system"
            src="/background/solar-system.svg"
            loading="lazy"
            decoding="async"
            width={950}
            height={396}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-6 lg:gap-10 items-center justify-center py-36 pt-28 lg:px-0">
        <div className="flex flex-col gap-6">
          <h2 className="title-md">Acreditamos na tecnologia</h2>{" "}
          <p className="desc">
            Na VSantos, acreditamos que tecnologia deve servir às pessoas e aos
            negócios de forma simples e transparente. Nossa missão é apoiar
            empresas na criação de sistemas digitais que realmente resolvem seus
            desafios, sem complicação e sem jargões.
          </p>
          <p className="desc">
            Atuamos como parceiros de longo prazo, construindo soluções sob
            medida que acompanham o ritmo de crescimento de cada cliente.
          </p>
        </div>
        <Image
          src="/background/results.svg"
          alt="Resultados de software sob medida"
          width={450}
          height={300}
          loading="lazy"
          decoding="async"
          className="rounded-xl shadow-lg opacity-80"
        />
      </div>
    </>
  );
};

const Section3 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap gap-6 items-start justify-center lg:px-0 mb-16">
        <h2 className="title-md lg:hidden! inline-block!">
          Nossos <br /> Serviços
        </h2>
        <ul className="list-none">
          <li className="flex flex-col gap-2 items-center justify-start border-b border-zinc-800 py-4 pb-6 *:text-start!">
            <strong className="w-full flex flex-row items-center gap-2 text-lg xl:text-xl">
              <span>
                <FiCheckCircle size={24} className="text-primary" />
              </span>{" "}
              Consultoria em Tecnologia
            </strong>
            <p className="desc">
              Entendemos o cenário da sua empresa e indicamos o melhor caminho
              para digitalização e escalabilidade.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center justify-end border-b border-zinc-800 py-4 pb-6 *:text-start!">
            <strong className="w-full flex flex-row items-center gap-2 text-lg xl:text-xl">
              <span>
                <FiCheckCircle size={24} className="text-primary" />
              </span>{" "}
              Desenvolvimento Sob Medida
            </strong>
            <p className="desc">
              Criamos sistemas personalizados que se adaptam ao seu processo,
              sem excesso e sem desperdício.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center justify-start border-b border-zinc-800 py-4 pb-6 *:text-start!">
            <strong className="w-full flex flex-row items-center gap-2 text-lg xl:text-xl">
              <span>
                <FiCheckCircle size={24} className="text-primary" />
              </span>{" "}
              Projetos Digitais Confiáveis
            </strong>
            <p className="desc">
              Plataformas web, aplicativos e automações que priorizam
              estabilidade, segurança e experiência de uso.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center justify-start border-b border-zinc-800 py-4 pb-6 *:text-start!">
            <strong className="w-full flex flex-row items-center gap-2 text-lg xl:text-xl">
              <span>
                <FiCheckCircle size={24} className="text-primary" />
              </span>{" "}
              Validação Ágil
            </strong>
            <p className="desc">
              Desenvolvemos MVPs de forma estruturada, garantindo aprendizado
              rápido sem abrir mão da qualidade.
            </p>
          </li>
        </ul>
        <h2 className="title-md lg:inline-block! hidden!">
          Nossos <br /> Serviços
        </h2>{" "}
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="title-md">FAQ – Perguntas Frequentes</h2>
      <FAQ />
    </div>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  const imgUrl = "opengraph-image.png";

  return {
    title: `${NAME} - Transformando Ideias em Produtos Digitais`,
    description:
      "A VSantos ajuda startups e empresas a transformar ideias em produtos digitais funcionais, prontos para validar o mercado e conquistar investidores.",
    keywords: `${NAME}, consultoria, software, desenvolvimento, tecnologia, automação, desenvolvimento de MVP, criar MVP rápido, empresa de desenvolvimento de software sob medida, desenvolvimento de produto digital, empresa para criar MVP em 30 dias, desenvolvimento de software personalizado, como criar um MVP em 30 dias, quanto custa desenvolver um MVP, empresa de software para startups, desenvolvimento de SaaS sob medida, desenvolvimento de dashboards personalizados, integração de sistemas ESRI e GIS, empresa que faz integrações com APIs, consultoria de desenvolvimento de software sob medida, especialista em software fullstack para startups, empresa de tecnologia para criar produto digital rápido, integração de sistemas GIS, desenvolvimento com ESRI, empresa para integrar CRM e sistemas internos, consultoria em arquitetura de software escalável, desenvolvimento de portal imobiliário com integração CRM, software sob medida para logística com mapas, contratar empresa para desenvolvimento de MVP, contratar desenvolvedor de software sob medida, empresa de software para validação de ideias, empresa especializada em desenvolvimento rápido de software, empresa que cria software escalável`,
    openGraph: {
      images: [
        {
          url: imgUrl,
          width: 600,
          height: 400,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: imgUrl,
          width: 600,
          height: 400,
        },
      ],
    },
    alternates: {
      canonical: "https://www.vsantostecnologia.com/",
    },
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex h-full flex-col">
        <LandingHeader />
        <div className="py-20 md:py-24 px-6 sm:px-24 overflow-x-hidden">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 bg-gradient-to-r from-orange-800 to-orange-950 px-6 py-28">
          <h2 className="text-center font-sora text-3xl tracking-tight text-white sm:text-4xl">
            Como a tecnologia pode <br /> apoiar o seu negócio?
          </h2>
          <p className="desc">
            A VSantos está pronta para ouvir você e construir a solução ideal.
          </p>

          <Link
            href="https://calendly.com/devjusan/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Agendar uma conversa</Button>
          </Link>
        </div>
        <LandingFooter />
      </main>
    </>
  );
}
