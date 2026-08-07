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
    default: "Nandi — One beautiful inbox for SMS, WhatsApp, Voice & Telegram",
    template: "%s · Nandi",
  },
  description:
    "Nandi is the modern Cloud Communications Platform built for African businesses. SMS, WhatsApp, Voice, Telegram and intelligent bots, with transparent Naira pricing and a Team Inbox your whole team will actually love.",
  keywords: [
    "CPaaS",
    "Team Inbox",
    "WhatsApp Business API",
    "Bulk SMS Nigeria",
    "Telegram bot",
    "Voice API Africa",
    "Naira pricing",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nandi",
    title: "Talk to your customers across every channel — from one beautiful inbox.",
    description:
      "The modern Cloud Communications Platform built for African businesses. SMS, WhatsApp, Voice, Telegram and bots with transparent Naira pricing.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandi — Cloud Communications for African businesses",
    description:
      "SMS, WhatsApp, Voice, Telegram and bots in one Team Inbox. Transparent Naira pricing.",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
