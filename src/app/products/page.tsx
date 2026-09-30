import type { Metadata } from "next";
import { ProductIndex } from "@/components/sections/product-index";
import { Container } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "The Nandi platform",
  description:
    "Voice, Shared inbox, Messaging, AI Assist, AI Agents, and API. One customer timeline.",
  alternates: { canonical: "https://nandi.to/products" },
};

export default function ProductsPage() {
  return (
    <main id="main" className="bg-ivory pb-20 pt-28 sm:pt-32">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Nandi</p>
        <h1 className="title mt-3 max-w-3xl text-5xl text-ink sm:text-6xl">
          The Nandi platform.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Voice and the shared inbox are how a business reaches its customers. AI reads the conversation, and a labeled agent can place a call or receive one.
        </p>
        <ProductIndex />
      </Container>
    </main>
  );
}
