import Link from "next/link";
import { scenarios } from "@/content/scenarios";
import { Container } from "@/components/ui/section";

const featured = ["sales", "hotels", "startups", "enterprise"];

export function Scenarios() {
  const cards = featured
    .map((id) => scenarios.find((scenario) => scenario.id === id))
    .filter((scenario) => scenario !== undefined);

  return (
    <section id="scenarios" aria-labelledby="scenarios-title" className="bg-lilac py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Scenarios
          </p>
          <h2 id="scenarios-title" className="title mt-3 text-3xl text-ink sm:text-4xl">
            The growth engine for a sales-focused company.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            In the age of intelligence, the conversation is the pipeline. The same contact center fits a hotel desk, a startup, a fintech, and a team that already has offices.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((scenario) => (
            <li key={scenario.id}>
              <Link
                href={`/scenarios#${scenario.id}`}
                className="group block overflow-hidden rounded-3xl border border-line bg-white"
              >
                <img
                  src={scenario.image}
                  alt={scenario.alt}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                    <i className={`h-1.5 w-1.5 rounded-full ${scenario.pip}`} aria-hidden="true" />
                    {scenario.audience}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-brand-dark">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{scenario.lede}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/scenarios"
          className="mt-8 inline-flex text-sm font-medium text-brand"
        >
          See the scenarios →
        </Link>
      </Container>
    </section>
  );
}
