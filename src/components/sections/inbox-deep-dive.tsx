import { TeamInboxMock } from "@/components/product/team-inbox-mock";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Eyebrow, Section } from "@/components/ui/section";

const capabilities = [
  {
    title: "Every channel in one thread",
    body: "A customer who texts, then messages on WhatsApp, then calls is still one person with one history.",
  },
  {
    title: "The same workflow on every channel",
    body: "Assignment, statuses and notes work identically for a call and a WhatsApp message — so your team stops switching tabs.",
  },
  {
    title: "Profile, tags and notes beside the thread",
    body: "Customer details, internal notes and full history sit right next to the conversation, not three clicks away.",
  },
  {
    title: "Bot-to-human handoff, intact",
    body: "When a bot escalates, the agent sees everything the bot already said. No repeating, no re-asking.",
  },
];

export function InboxDeepDive() {
  return (
    <Section id="team-inbox" labelledBy="inbox-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <Reveal>
            <div>
              <Eyebrow>Team Inbox</Eyebrow>
              <h2
                id="inbox-title"
                className="text-balance-tight text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]"
              >
                One inbox. Every channel.
              </h2>
              <p className="text-pretty-body mt-5 text-lg leading-relaxed text-muted">
                WhatsApp, SMS, Voice and Telegram conversations land in a single
                real-time view. Customer profile, tags, internal notes and full
                history sit right beside the thread.
              </p>

              <ul className="mt-8 space-y-5">
                {capabilities.map((c) => (
                  <li key={c.title} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-medium text-ink">{c.title}</p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                        {c.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <ButtonLink href="#get-started" size="lg">
                  Explore the Team Inbox
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={24}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand/10 blur-3xl"
              />
              <TeamInboxMock compact />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
