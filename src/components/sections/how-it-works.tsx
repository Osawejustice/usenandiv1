import { ChannelChip, StatusPill } from "@/components/ui/channel";
import { BoltIcon } from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    n: "01",
    title: "Create your organization & top up in Naira",
    body: "Sign up, name your organization, and fund the prepaid wallet through Paystack. No sales call, no contract.",
  },
  {
    n: "02",
    title: "Set up departments & invite your agents",
    body: "Create Sales, Support and Inquiries, point your IVR at them, and invite the agents who'll answer each queue.",
  },
  {
    n: "03",
    title: "Take your first call or message",
    body: "Open the softphone, add WhatsApp or SMS, and watch every conversation land in the Team Inbox on one customer timeline.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title">
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="Three steps to your first conversation."
          lede="No onboarding project, no integration sprint, no hardware. Set it up between meetings."
        />

        <div className="relative mt-14">
          {/* Connector line behind the steps on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block"
          />

          <RevealGroup className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <div className="relative flex h-full flex-col">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white font-mono text-sm font-semibold text-brand shadow-lift">
                    {s.n}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
                    {s.title}
                  </h3>
                  <p className="text-pretty-body mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Success-metric callout */}
        <Reveal delay={0.14}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
            <div className="grid items-center gap-6 p-7 sm:p-9 md:grid-cols-[minmax(0,1fr)_auto]">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
                  <BoltIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-[-0.015em] text-ink sm:text-xl">
                    Most teams go from signup to first successful interaction in
                    under 12 minutes.
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    That is the bar we hold ourselves to — measured from account
                    creation to a message actually delivered.
                  </p>
                </div>
              </div>

              {/* Tiny visual echo of the end state */}
              <div className="rounded-xl border border-line bg-soft/60 p-4">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-faint">
                  First conversation
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  <ChannelChip channel="voice" />
                  <StatusPill status="Open" />
                </div>
                <p className="mt-2.5 font-mono text-[0.6875rem] text-muted">
                  SALES · 02:14 · recorded
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
