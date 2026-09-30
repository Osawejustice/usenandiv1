import type { Metadata } from "next";
import { EB_Garamond, Figtree, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import "./globals.css";

const sans = Figtree({
  variable: "--font-sans-family",
  subsets: ["latin"],
  display: "swap",
});

const serif = EB_Garamond({
  variable: "--font-serif-family",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://nandi.to";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nandi — Cloud contact center for African teams",
    template: "%s · Nandi",
  },
  description:
    "The conversational intelligence platform for voice and a shared inbox. AI reads the conversation and can place or receive the call.",
  keywords: [
    "cloud contact center",
    "Nandi",
    "softphone",
    "business messaging",
    "team inbox",
    "USD",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nandi",
    title: "Nandi — Cloud contact center for African teams",
    description:
      "The conversational intelligence platform for voice and a shared inbox. AI reads the conversation and can place or receive the call.",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandi — Cloud contact center for African teams",
    description:
      "The conversational intelligence platform for voice and a shared inbox. AI reads the conversation and can place or receive the call.",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
