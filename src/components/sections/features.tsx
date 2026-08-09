import {
  BoltIcon,
  CodeIcon,
  DepartmentsIcon,
  HeadsetIcon,
  SparkleIcon,
  TimelineIcon,
  WalletIcon,
} from "@/components/ui/icons";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

const pillars = [
  {
    Icon: DepartmentsIcon,
    title: "Multi-department routing",
    body: "Sales, Support and Inquiries each get their own numbers, IVR, queues and agents — without splitting your customer data.",
  },
  {
    Icon: HeadsetIcon,
    title: "Softphone + call recording",
    body: "Calling built into the browser and mobile app, with recording, playback and live agent availability included.",
  },
  {
    Icon: TimelineIcon,
    title: "Shared customer history",
    body: "Voice, WhatsApp, SMS and Telegram all write to one timeline, so every agent sees the same customer.",
  },
  {
    Icon: SparkleIcon,
    title: "AI summaries and agent assist",
    body: "Practical AI that summarises, suggests and analyses — while your agents keep the final word on every reply.",
  },
  {
    Icon: WalletIcon,
    title: "Transparent Naira pricing",
    body: "A prepaid wallet with real-time balance and clear per-minute and per-message costs. No dollar billing, no surprises.",
  },
  {
    Icon: CodeIcon,
    title: "Clean APIs when you're ready",
    body: "Documented REST APIs, signed webhooks and idempotency keys for when you want to build on the platform.",
  },
];

export function Features() {
  return (
    <Section id="features" labelledBy="features-title" className="bg-soft/40">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow="Core pillars"
          title="Everything a contact center team needs, in one place."
          lede="Six things we refuse to compromise on — because they're the difference between a platform your agents tolerate and one they open every morning."
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
              Real-time queues and inbox
            </span>
          </RevealItem>
          <RevealItem>
            <span>Open · Pending · Resolved · Closed</span>
          </RevealItem>
          <RevealItem>
            <span>Call recording and playback</span>
          </RevealItem>
          <RevealItem>
            <span>CSV contact import</span>
          </RevealItem>
        </RevealGroup>
      </Container>
    </Section>
  );
}
