import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section";

/**
 * Placeholder trust row. Swap `stats` for real customer logos once there are
 * names to show — the layout is built to take a logo strip without changes.
 */
const stats = [
  { value: "3", label: "Departments out of the box" },
  { value: "< 12 min", label: "Signup to first conversation" },
  { value: "$0", label: "Setup fees, ever" },
  { value: "99.9%", label: "Call & delivery pipeline target" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Why teams choose Nandi"
      className="border-y border-brand-light/20 bg-brand"
    >
      <Container>
        <div className="py-10 sm:py-12">
          <Reveal>
            <p className="text-center text-sm font-medium text-ivory/80">
              Built for sales and support teams. Early access.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="title block text-3xl text-ivory sm:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-ivory/75">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
