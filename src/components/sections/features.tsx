import {
  BoltIcon,
  CodeIcon,
  HandoffIcon,
  InboxIcon,
  LayersIcon,
  ShieldIcon,
  WalletIcon,
} from "@/components/ui/icons";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

const pillars = [
  {
    Icon: InboxIcon,
    title: "Team Inbox first",
    body: "One unified view for SMS, WhatsApp, Voice and Telegram. Assignment, internal notes, statuses and full history — no tab-switching.",
  },
  {
    Icon: LayersIcon,
    title: "Multi-channel by design",
    body: "SMS, the official WhatsApp Business API, Voice and Telegram are all first-class citizens, not bolt-ons added later.",
  },
  {
    Icon: HandoffIcon,
    title: "Bots with clean handoff",
    body: "Rule-based and conversational bots that answer the easy questions and escalate to a human without losing any context.",
  },
  {
    Icon: WalletIcon,
    title: "Transparent Naira pricing",
    body: "A prepaid wallet with real-time balance and clear per-message costs. You see what a send will cost before you send it.",
  },
  {
    Icon: CodeIcon,
    title: "Developer experience",
    body: "Clean REST APIs, signed webhooks, OpenAPI docs and idempotency keys. The integration your engineers won't complain about.",
  },
  {
    Icon: ShieldIcon,
    title: "Built for African reliability",
    body: "Local payments through Paystack, a local support mindset, and delivery routes chosen because they actually work here.",
  },
];

export function Features() {
  return (
    <Section id="features" labelledBy="features-title" className="bg-soft/40">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow="Core pillars"
          title="Everything a growing team needs to run conversations."
          lede="Six things we refuse to compromise on — because they're the difference between a platform your team tolerates and one they open every morning."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lift">
                {/* Warm wash that surfaces on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/8 text-brand ring-1 ring-inset ring-brand/12 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <p.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em] text-ink">
                    {p.title}
                  </h3>
                  <p className="text-pretty-body mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Small reassurance strip under the grid */}
        <RevealGroup className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-faint">
          <RevealItem>
            <span className="inline-flex items-center gap-2">
              <BoltIcon className="h-4 w-4 text-accent" />
              Real-time inbox updates
            </span>
          </RevealItem>
          <RevealItem>
            <span>Open · Pending · Resolved · Closed</span>
          </RevealItem>
          <RevealItem>
            <span>CSV contact import</span>
          </RevealItem>
          <RevealItem>
            <span>Opt-out handling built in</span>
          </RevealItem>
        </RevealGroup>
      </Container>
    </Section>
  );
}
