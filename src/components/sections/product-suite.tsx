import Link from "next/link";
import { products } from "@/content/products";
import { Container } from "@/components/ui/section";

const washes: Record<string, string> = {
  voice: "bg-brand",
  inbox: "bg-red",
  channels: "bg-clay",
  assist: "bg-plum",
  agents: "bg-gold",
  api: "bg-red-deep",
};

export function ProductSuite() {
  return (
    <section id="suite" aria-labelledby="suite-title" className="bg-canvas py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            The platform
          </p>
          <h2
            id="suite-title"
            className="title mt-3 text-[2rem] text-ink sm:text-[2.65rem]"
          >
            Voice, inbox, messaging, and AI.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Calling and a shared inbox for the team. Messaging on the services you connect. AI Assist reads sentiment and the conversation. AI Agents place and receive calls on the same floor.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={product.href}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-lift transition-colors hover:border-brand/40"
              >
                <span aria-hidden="true" className={`block h-24 ${washes[product.slug] ?? "bg-brand"}`} />
                <span className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  {product.mode}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{product.oneLiner}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-medium text-brand">See {product.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
