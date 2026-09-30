import Link from "next/link";
import { ProductStage } from "@/components/product-pages/product-stage";
import { FinalCta } from "@/components/sections/final-cta";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { getProduct, type Product } from "@/content/products";

const stageWash: Record<string, string> = {
  voice: "bg-[linear-gradient(165deg,#ccfbf1_0%,#f6eadc_46%,#fef3c7_100%)]",
  inbox: "bg-[linear-gradient(165deg,#fbe8e3_0%,#efe8f4_52%,#f4f0e6_100%)]",
  channels: "bg-[linear-gradient(165deg,#f6eadc_0%,#ccfbf1_48%,#fef3c7_100%)]",
  assist: "bg-[linear-gradient(165deg,#efe8f4_0%,#f4f0e6_42%,#ccfbf1_100%)]",
  agents: "bg-[linear-gradient(165deg,#fef3c7_0%,#efe8f4_50%,#f6eadc_100%)]",
  api: "bg-[linear-gradient(165deg,#f4f0e6_0%,#fbe8e3_40%,#efe8f4_100%)]",
};

const featureCaps = ["bg-brand", "bg-gold", "bg-plum"];

export function ProductTemplate({ product }: { product: Product }) {
  const related = product.related
    .map((slug) => getProduct(slug))
    .filter((entry): entry is Product => Boolean(entry));

  return (
    <main id="main">
      <section className={`overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 ${stageWash[product.slug] ?? "bg-ivory"}`}>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-14">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {product.mode}
              </p>
              <h1 className="title mt-3 text-5xl text-ink sm:text-6xl">{product.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{product.lede}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/get-started" size="lg">
                  Get started free
                  <ArrowRight />
                </ButtonLink>
                <ButtonLink href="/get-started?intent=sales" variant="ghost" size="lg">
                  Talk to sales
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ProductStage slug={product.slug} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20" aria-labelledby={`${product.slug}-features`}>
        <Container>
          <h2
            id={`${product.slug}-features`}
            className="title text-3xl text-ink sm:text-4xl"
          >
            What you get
          </h2>
          <ol className="mt-8 grid gap-4 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <li
                key={feature.title}
                id={feature.id ?? (product.slug === "voice" && index === 2 ? "routing" : undefined)}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <span aria-hidden="true" className={`block h-3 ${featureCaps[index] ?? "bg-clay"}`} />
                <div className="p-6">
                <p className="font-mono text-xs text-brand">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-lilac py-16" aria-labelledby={`${product.slug}-with`}>
        <Container>
          <h2 id={`${product.slug}-with`} className="text-2xl font-semibold text-ink">
            Works with the rest of Nandi
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {related.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={entry.href}
                  className="block rounded-2xl border border-line bg-white p-5 hover:border-brand/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                    {entry.mode}
                  </p>
                  <p className="mt-2 font-semibold text-ink">{entry.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{entry.oneLiner}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-blush py-16" aria-labelledby={`${product.slug}-steps`}>
        <Container>
          <h2 id={`${product.slug}-steps`} className="text-2xl font-semibold text-ink">
            Three steps
          </h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {product.steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-mono text-xs text-brand">0{index + 1}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            Starter is free. A paid plan is a platform fee, then airtime.{" "}
            <Link href="/pricing" className="font-medium text-brand">
              See indicative rates
            </Link>
            .
          </p>
        </Container>
      </section>

      <FinalCta />
    </main>
  );
}
