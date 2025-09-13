import { Metadata } from "next";
import { NAME } from "../config";

export async function generateMetadata(): Promise<Metadata> {
  const imgUrl = "opengraph-image.png";

  return {
    applicationName: NAME,
    generator: NAME,
    title: `${NAME} - Blog`,
    description:
      "Acompanhe nosso blog para insights sobre tecnologia, desenvolvimento de software e inovação digital.",
    keywords: `${NAME}, blog, desenvolvimento de MVP, criar MVP rápido, empresa de desenvolvimento de software sob medida, desenvolvimento de produto digital, empresa para criar MVP em 30 dias, desenvolvimento de software personalizado, como criar um MVP em 30 dias, quanto custa desenvolver um MVP, empresa de software para startups, desenvolvimento de SaaS sob medida, desenvolvimento de dashboards personalizados, integração de sistemas ESRI e GIS, empresa que faz integrações com APIs, consultoria de desenvolvimento de software sob medida, especialista em software fullstack para startups, empresa de tecnologia para criar produto digital rápido, integração de sistemas GIS, desenvolvimento com ESRI, empresa para integrar CRM e sistemas internos, consultoria em arquitetura de software escalável, desenvolvimento de portal imobiliário com integração CRM, software sob medida para logística com mapas, contratar empresa para desenvolvimento de MVP, contratar desenvolvedor de software sob medida, empresa de software para validação de ideias, empresa especializada em desenvolvimento rápido de software, empresa que cria software escalável, diferença entre protótipo e MVP, melhores práticas para validar um MVP, quanto tempo leva para criar um software do zero, erros comuns ao desenvolver um MVP, como levantar investimento com um MVP`,
    creator: "@devjusan",
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
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default Layout;
