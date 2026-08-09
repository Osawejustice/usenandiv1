import {
  CodeIcon,
  HeadsetIcon,
  LayersIcon,
  SparkleIcon,
} from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container, Eyebrow, Section } from "@/components/ui/section";

/**
 * The growth path from the positioning doc: start with voice, add messaging,
 * add AI, then grow into the full platform. Rendered as a progression so the
 * order of importance is visible, not just stated.
 */
const path = [
  {
    Icon: HeadsetIcon,
    title: "Start with voice",
    body: "Softphone, IVR and multi-department routing for telesales and support.",
  },
  {
    Icon: LayersIcon,
    title: "Add messaging",
    body: "WhatsApp, SMS and Telegram land in the same inbox, on the same contact.",
  },
  {
    Icon: SparkleIcon,
    title: "Add AI",
    body: "Summaries, agent assist and bots that hand off with full context.",
  },
  {
    Icon: CodeIcon,
    title: "Grow with APIs",
    body: "Clean, documented APIs for when you want to build on the platform.",
  },
];

export function Positioning() {
  return (
    <Section labelledBy="positioning-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>What Nandi is</Eyebrow>
            <h2
              id="positioning-title"
              className="text-balance-tight text-[1.75rem] font-semibold leading-[1.25] tracking-[-0.025em] text-ink sm:text-[2.125rem]"
            >
              A modern{" "}
              <span className="text-brand">Cloud Contact Center</span> that
              grows with your team.
            </h2>
            <p className="text-pretty-body mt-5 text-lg leading-relaxed text-muted">
              Start with powerful voice calling and multi-department routing for
              telesales and customer support. Add WhatsApp, SMS and Telegram in
              the same inbox. Use built-in AI to help your agents work faster.
              Clean APIs are ready when you want to grow into a full
              communications platform. Start where you are, add the rest when
              you need it.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          {/* Progression rail, desktop only. The travelling dashes make the
              left-to-right order of the story read as movement. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[1.6rem] hidden text-brand/30 md:block"
          >
            <div className="flow-track mx-auto h-px w-[85%]" />
          </div>

          <RevealGroup className="grid gap-8 md:grid-cols-4 md:gap-5">
            {path.map(({ Icon, title, body }, i) => (
              <RevealItem key={title}>
                <div className="relative flex h-full flex-col">
                  <span className="relative z-10 flex h-13 w-13 items-center justify-center rounded-2xl border border-line bg-white text-brand shadow-lift">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand font-mono text-[0.625rem] font-semibold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-[-0.015em] text-ink">
                    {title}
                  </h3>
                  <p className="text-pretty-body mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
