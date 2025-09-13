import type { MetadataRoute } from "next";
import { NAME } from "./config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${NAME} - Transformando Ideias em Produtos Digitais`,
    short_name: NAME,
    description:
      "A VSantos ajuda startups e empresas a transformar ideias em produtos digitais funcionais, prontos para validar o mercado e conquistar investidores.",
    start_url: "/",
    categories: [
      "business",
      "technology",
      "productivity",
      "utilities",
      "software",
      "development",
      "consulting",
      "digital",
      "it",
    ],
    lang: "pt-BR",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
