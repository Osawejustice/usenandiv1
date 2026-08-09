import { SoftphoneMock } from "@/components/product/softphone-mock";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import {
  ClockIcon,
  FlowIcon,
  HeadsetIcon,
  RecordIcon,
  TimelineIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Eyebrow, Section } from "@/components/ui/section";

const capabilities = [
  {
    Icon: HeadsetIcon,
    title: "Softphone built into the platform",
    body: "Agents make and receive calls from the browser or the mobile app. No extra hardware, no desk phones.",
  },
  {
    Icon: RecordIcon,
    title: "Call recording and playback",
    body: "Every call can be recorded, stored against the customer and replayed for coaching or disputes.",
  },
  {
    Icon: FlowIcon,
    title: "Simple IVR and call flows",
    body: "Build the menu your callers hear, and send each option to the right department without a consultant.",
  },
  {
    Icon: UsersIcon,
    title: "Real-time agent availability",
    body: "See who is on a call, who is free and how deep each queue is, live.",
  },
  {
    Icon: TimelineIcon,
    title: "Call history on the customer profile",
    body: "Calls sit in the same timeline as messages, so context never depends on who picked up.",
  },
];

export function Voice() {
  return (
    <Section id="voice" labelledBy="voice-title" className="bg-soft/40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>Softphone &amp; voice</Eyebrow>
              <h2
                id="voice-title"
                className="text-balance-tight text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]"
              >
                A softphone your agents will actually use.
              </h2>
              <p className="text-pretty-body mt-5 text-lg leading-relaxed text-muted">
                Agents make and receive calls directly from the browser or
                mobile app. No extra hardware. No complicated setup.
              </p>

              <ul className="mt-8 space-y-5">
                {capabilities.map(({ Icon, title, body }) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-brand ring-1 ring-inset ring-line">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="font-medium text-ink">{title}</p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#get-started" size="lg">
                  Start calling today
                  <ArrowRight />
                </ButtonLink>
                <ButtonLink href="#departments" variant="secondary" size="lg">
                  See routing
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
              <SoftphoneMock />

              {/* Second card: the same call, from the queue's point of view */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-faint">
                    <ClockIcon className="h-3.5 w-3.5 text-brand" />
                    Avg. wait
                  </p>
                  <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-ink">
                    18s
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-faint">
                    <UsersIcon className="h-3.5 w-3.5 text-brand" />
                    Agents online
                  </p>
                  <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-ink">
                    7 of 9
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
