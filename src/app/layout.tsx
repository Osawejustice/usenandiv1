import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://usenandi.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Nandi — Run sales and support from one intelligent contact center",
    template: "%s · Nandi",
  },
  description:
    "Nandi is a modern Cloud Contact Center. Give your team a softphone, multi-department routing, shared customer history across WhatsApp, SMS, Voice and Telegram, and AI that actually helps.",
  keywords: [
    "Cloud Contact Center",
    "CCaaS",
    "softphone",
    "IVR and call routing",
    "telesales software",
    "Team Inbox",
    "WhatsApp Business API",
    "omnichannel support",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nandi",
    title:
      "Run sales and support from one intelligent contact center.",
    description:
      "Softphone, multi-department routing, shared customer history and AI that helps — in one Cloud Contact Center.",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandi — The modern Cloud Contact Center",
    description:
      "Softphone, multi-department routing, one Team Inbox for WhatsApp, SMS, Voice and Telegram. Transparent pricing.",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/*
        Browser extensions (Grammarly, password managers) inject attributes
        into <body> before React hydrates, which trips a hydration mismatch
        that has nothing to do with our markup. This suppresses the warning
        for this element's own attributes only — it does not extend to
        children, so genuine mismatches inside the page still surface.
      */}
      <body
        className={`${inter.variable} ${mono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
