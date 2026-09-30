import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/section";
import { scenarios } from "@/content/scenarios";

export const metadata: Metadata = {
  title: "Scenarios",
  description:
    "How a sales team, a hotel, a startup, a fintech, and an established company run voice, messaging, and SMS on one customer timeline.",
  alternates: { canonical: "https://nandi.to/scenarios" },
};

export default function ScenariosPage() {
  return (
    <main id="main">
      <section className="bg-ivory pt-28 pb-12 sm:pt-32">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Scenarios
          </p>
          <h1 className="title mt-3 max-w-3xl text-5xl text-ink sm:text-6xl">
            The growth engine for a sales-focused company.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            In the age of intelligence, the conversation is the pipeline. These are the situations Nandi is built for.
          </p>
          <img
            src="/gallery/threads.jpg"
            alt=""
            className="mt-10 w-full rounded-3xl object-cover"
          />
        </Container>
      </section>

      {scenarios.map((scenario, index) => (
        <section
          key={scenario.id}
          id={scenario.id}
          aria-labelledby={`${scenario.id}-title`}
          className={`${
            ["bg-sand", "bg-blush", "bg-lilac", "bg-brand-soft", "bg-ivory"][index % 5]
          } py-16 sm:py-20`}
        >
          <Container>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>img]:order-first" : ""
              }`}
            >
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  <i className={`h-1.5 w-1.5 rounded-full ${scenario.pip}`} aria-hidden="true" />
                  {scenario.audience}
                </p>
                <h2 id={`${scenario.id}-title`} className="title mt-3 text-3xl text-ink sm:text-4xl">
                  {scenario.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{scenario.lede}</p>
                {scenario.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-6 space-y-2 text-sm text-ink">
                  {scenario.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <img
                src={scenario.image}
                alt={scenario.alt}
                className="aspect-[3/2] w-full rounded-3xl object-cover shadow-float"
              />
            </div>
          </Container>
        </section>
      ))}
      <FinalCta />
    </main>
  );
}
