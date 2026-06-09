import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Web Developer Portfolio | Live Business Demos",
    template: `%s | ${SITE.developerName}`,
  },
  description:
    "Live demos: luxury e-commerce, barbershop with online booking & Telegram bot, fitness landing. Next.js, TypeScript, Vercel.",
  keywords: [
    "Next.js developer",
    "business website",
    "e-commerce",
    "barbershop website",
    "online booking",
    "Fiverr web developer",
    "portfolio",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Web Developer Portfolio | Live Business Demos",
    description:
      "Open live demos: LUMIÈRE perfume shop, premium barbershop, fitness landing.",
    url: SITE.url,
    siteName: `${SITE.developerName} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE.developerName} — Next.js portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Portfolio",
    description: "Live Next.js demos for barbershop, e-commerce, and fitness.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
