import { AiAssistMock } from "@/components/product/ai-assist-mock";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import {
  BotIcon,
  HandoffIcon,
  SparkleIcon,
  TimelineIcon,
} from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container, Eyebrow, Section } from "@/components/ui/section";

const abilities = [
  {
    Icon: TimelineIcon,
    title: "Instant conversation summaries",
    body: "Agents never start from zero. Pick up any thread and see what happened, in three lines.",
  },
  {
    Icon: SparkleIcon,
    title: "Suggested replies and agent assist",
    body: "Draft answers appear beside the thread. The agent edits, approves and sends — always.",
  },
  {
    Icon: BotIcon,
    title: "Conversational analysis and sentiment",
    body: "Spot the frustrated customer and the ready-to-buy lead without reading every transcript.",
  },
  {
    Icon: HandoffIcon,
    title: "Bots that hand off with full context",
    body: "Bots answer the simple questions, then pass the customer to a human with everything intact.",
  },
];

export function Ai() {
  return (
    <Section id="ai" labelledBy="ai-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>Built-in AI</Eyebrow>
              <h2
                id="ai-title"
                className="text-balance-tight text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]"
              >
                AI that helps your team, not replaces them.
              </h2>
              <p className="text-pretty-body mt-5 text-lg leading-relaxed text-muted">
                Nandi includes practical AI designed for contact center work —
                the unglamorous parts that slow agents down every single day.
              </p>

              <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
                {abilities.map(({ Icon, title, body }) => (
                  <RevealItem key={title}>
                    <div className="h-full rounded-2xl border border-line bg-white p-5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/8 text-brand ring-1 ring-inset ring-brand/12">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <p className="mt-4 font-medium leading-snug text-ink">
                        {title}
                      </p>
                      <p className="text-pretty-body mt-1.5 text-[0.875rem] leading-relaxed text-muted">
                        {body}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <p className="mt-7 rounded-xl border border-dashed border-brand/30 bg-brand/[0.04] px-5 py-4 text-[0.9375rem] leading-relaxed text-ink/75">
                <span className="font-medium text-ink">
                  Your agents stay in control.
                </span>{" "}
                AI just makes them faster and more consistent.
              </p>

              <div className="mt-8">
                <ButtonLink href="#get-started" size="lg">
                  See AI in action
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={24}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-[3rem] bg-accent/10 blur-3xl"
              />
              <AiAssistMock />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
