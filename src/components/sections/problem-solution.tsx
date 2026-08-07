import { CodeIcon, LayersIcon, XIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

const pains = [
  {
    Icon: CodeIcon,
    kicker: "Pure API platforms",
    title: "Powerful, but built for terminals — not teams",
    points: [
      "Steep learning curve for non-technical staff",
      "No real Team Inbox out of the box",
      "Support agents end up back in WhatsApp Web",
    ],
  },
  {
    Icon: LayersIcon,
    kicker: "Global enterprise tools",
    title: "Feature-rich, but priced and shaped for elsewhere",
    points: [
      "Expensive, with dollar billing and long contracts",
      "Complex setup before the first message goes out",
      "No local payment rails or support mindset",
    ],
  },
];

export function ProblemSolution() {
  return (
    <Section labelledBy="problem-title">
      <Container>
        <SectionHeading
          id="problem-title"
          eyebrow="The gap"
          title="The current options fall short."
          lede="African teams are stuck choosing between raw APIs their support staff can't use, and global platforms that were never priced for this market."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.kicker} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-faint">
                    <p.Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                    {p.kicker}
                  </p>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-muted"
                    >
                      <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Center statement: the positioning line from the brief */}
        <Reveal delay={0.16}>
          <div className="relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-2xl border border-brand/20 bg-brand p-8 text-center sm:p-10">
            <div
              aria-hidden="true"
              className="ambient-dark absolute inset-0 opacity-40"
            />
            <p className="relative text-lg leading-relaxed text-white sm:text-xl">
              Nandi sits in the gap — a{" "}
              <span className="font-semibold">UI-first platform</span> that
              developers respect and business teams actually enjoy using every
              day.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
