import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import GoogleAnalyticsTag from "../components/tags/google-analytics";
import GoogleTagManager from "../components/tags/google-tag-manager";
import VercelAnalyticsTag from "../components/tags/vercel-analytics";
import { NAME } from "./config";
import "./globals.css";

const josefinSans = Roboto({
  variable: "--font-josefinSans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.vsantostecnologia.com/"),
    applicationName: NAME,
    generator: NAME,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: "index, follow",
    },
    alternates: {
      types: {
        "application/rss+xml": "https://www.vsantostecnologia.com/api/feed",
      },
      canonical: "https://www.vsantostecnologia.com/",
      languages: {
        "pt-BR": "/",
      },
    },
    appleWebApp: {
      capable: true,
      title: NAME,
      statusBarStyle: "black-translucent",
    },
    creator: "@vsantostecnologia",
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      shortcut: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
      apple: [
        {
          url: "/apple-icon-57x57.png",
          sizes: "57x57",
          type: "image/png",
        },
        {
          url: "/apple-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${josefinSans.variable} antialiased`}>
        <>
          <GoogleAnalyticsTag />
          <GoogleTagManager />
          <VercelAnalyticsTag />
          {children}
        </>
      </body>
    </html>
  );
}
