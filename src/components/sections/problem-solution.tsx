import { HeadsetIcon, InboxIcon, XIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

const pains = [
  {
    Icon: HeadsetIcon,
    kicker: "Sales dialers",
    title: "Great at outbound calls, blind to everything else",
    points: [
      "Support conversations live in a separate tool",
      "No shared history when the customer messages instead",
      "WhatsApp and SMS bolted on, if they exist at all",
    ],
  },
  {
    Icon: InboxIcon,
    kicker: "Support inboxes",
    title: "Good at chat, but voice is an afterthought",
    points: [
      "No real softphone, so agents fall back to mobile phones",
      "No departments, queues or IVR for a telesales floor",
      "Calls never make it onto the customer record",
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
          title="You shouldn't have to pick a side."
          lede="Most teams end up running a dialer for sales and an inbox for support — two tools, two histories, and a customer who has to explain themselves twice."
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
              Nandi runs both — one{" "}
              <span className="font-semibold">Cloud Contact Center</span> where
              sales and support share the same customer, the same history and
              the same tools.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
