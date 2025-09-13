import { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingFooter from "@/components/core/footer";
import LandingHeader from "@/components/core/header";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { TopContentSlice } from "../../../../prismicio-types";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("post", uid).catch(() => notFound());
  const slice = page.data.slices[0] as TopContentSlice;

  return (
    <>
      <LandingHeader />
      <div className="container mx-auto mt-16 md:mt-20 max-w-3xl p-5 mb-12 mb:mb-16">
        <span className="mb-2 text-base text-zinc-600">
          {new Date(page.first_publication_date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <h1 className="title text-3xl! sm:text-4xl! lg:text-6xl!">
          {slice.primary.title}
        </h1>
        <p className="description">{slice.primary.description}</p>
        <div className="mb-24 size-full text-center flex items-center justify-center">
          <Image
            src={slice.primary.image.url || ""}
            alt={slice.primary.image.alt || ""}
            width={400}
            height={300}
            className="mt-12 rounded-lg"
          />
        </div>

        <PrismicRichText
          field={slice.primary.content}
          components={{
            paragraph: ({ children }) => {
              return (
                <p className="mt-6 text-sm text-primary md:text-base">
                  {children}
                </p>
              );
            },
            heading1: ({ children }) => {
              return (
                <h2 className="mb-6 text-xl font-semibold text-secondary lg:text-3xl">
                  {children}
                </h2>
              );
            },
            heading2: ({ children }) => {
              return (
                <h5 className="my-6 text-xl font-normal text-primary">
                  {children}
                </h5>
              );
            },
            heading3: ({ children }) => {
              return (
                <h5 className="my-6 text-xl font-normal text-primary">
                  {children}
                </h5>
              );
            },
            heading5: ({ children }) => {
              return (
                <h5 className="my-6 text-base font-normal text-primary md:text-xl">
                  {children}
                </h5>
              );
            },
            list: ({ children }) => {
              return <ul className="ml-6 list-disc">{children}</ul>;
            },
            listItem: ({ children }) => {
              return (
                <li className="mt-2 text-xs text-primary md:text-sm">
                  {children}
                </li>
              );
            },
            strong: ({ children }) => {
              return <strong className="font-semibold">{children}</strong>;
            },
            em: ({ children }) => {
              return <em className="italic">{children}</em>;
            },
            hyperlink: ({ children, node }) => {
              return (
                <Link
                  href={node.data.url || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  {children}
                </Link>
              );
            },
            image: ({ node }) => {
              return (
                <Image
                  src={node.url || ""}
                  alt={node.alt || ""}
                  width={600}
                  height={400}
                  className="my-6 rounded-lg"
                />
              );
            },
          }}
        />
      </div>
      <LandingFooter />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("post", uid).catch(() => notFound());

  return {
    title: page.data.meta_title + " | VSantos Tecnologia",
    authors: [
      {
        name: "VSantos Tecnologia",
        url: "https://www.vsantostecnologia.com",
      },
    ],
    keywords: [
      page.data.meta_title || "VSantos Tecnologia - Blog",
      page.data.meta_description || "VSantos Tecnologia - Blog",
      "consultoria",
      "software",
      "desenvolvimento",
      "tecnologia",
      "automação",
      "desenvolvimento de MVP",
      "criar MVP rápido",
      "empresa de desenvolvimento de software sob medida",
      "desenvolvimento de produto digital",
      "empresa para criar MVP em 30 dias",
      "desenvolvimento de software personalizado",
      "como criar um MVP em 30 dias",
      "quanto custa desenvolver um MVP",
      "empresa de software para startups",
      "desenvolvimento de SaaS sob medida",
      "desenvolvimento de dashboards personalizados",
      "integração de sistemas ESRI e GIS",
      "empresa que faz integrações com APIs",
      "consultoria de desenvolvimento de software sob medida",
      "especialista em software fullstack para startups",
      "empresa de tecnologia para criar produto digital rápido",
      "integração de sistemas GIS",
      "desenvolvimento com ESRI",
      "empresa para integrar CRM e sistemas internos",
      "consultoria em arquitetura de software escalável",
      "desenvolvimento de portal imobiliário com integração CRM",
      "software sob medida para logística com mapas",
      "contratar empresa para desenvolvimento de MVP",
      "contratar desenvolvedor de software sob medida",
      "empresa de software para validação de ideias",
      "empresa especializada em desenvolvimento rápido de software",
      "empresa que cria software escalável",
      "diferença entre protótipo e MVP",
      "melhores práticas para validar um MVP",
      "quanto tempo leva para criar um software do zero",
      "erros comuns ao desenvolver um MVP",
      "como levantar investimento com um MVP",
    ],
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title + " | VSantos Tecnologia",
      description: page.data.meta_description || "VSantos Tecnologia - Blog",
      type: "article",
      url: `https://www.vsantostecnologia.com/blog/${uid}`,
      publishedTime: page.first_publication_date,
      modifiedTime: page.last_publication_date,
      authors: ["https://www.vsantostecnologia.com"],
      tags: page.tags,
      images: [
        {
          url: page.data.meta_image.url?.toString() || "opengraph-image.png",
          width: 600,
          alt: page.data.meta_image.alt || "VSantos Tecnologia - Blog",
          height: 400,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.meta_title + " | VSantos Tecnologia",
      description: page.data.meta_description || "VSantos Tecnologia - Blog",
      images: [
        {
          url: page.data.meta_image.url?.toString() || "opengraph-image.png",
          width: 600,
          height: 400,
          alt: page.data.meta_image.alt || "VSantos Tecnologia - Blog",
        },
      ],
      creator: "@vsantostecnologia",
      site: "@vsantostecnologia",
    },
    alternates: {
      canonical: `https://www.vsantostecnologia.com/blog/${uid}`,
      languages: {
        "pt-BR": `/blog/${uid}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
