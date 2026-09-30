import type { Metadata } from "next";
import { Developers } from "@/components/sections/developers";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect voice, the inbox, and the agents that place and receive calls. Signed webhooks and idempotency keys.",
  alternates: { canonical: "https://nandi.to/developers" },
};

export default function DevelopersPage() {
  return (
    <main id="main" className="bg-charcoal pt-16 sm:pt-[4.5rem]">
      <Developers />
      <FinalCta />
    </main>
  );
}
