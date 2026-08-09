import { channels, type ChannelKey } from "@/components/ui/channel";
import { CheckIcon, InboxIcon } from "@/components/ui/icons";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

type ChannelCard = {
  key: ChannelKey;
  tagline: string;
  capabilities: string[];
  whyItMatters: string;
};

const cards: ChannelCard[] = [
  {
    key: "sms",
    tagline: "Transactional and promotional, at scale",
    capabilities: [
      "Single and bulk sends",
      "Full delivery lifecycle: QUEUED → SENT → DELIVERED",
      "Automatic opt-out handling",
    ],
    whyItMatters:
      "Still the only channel that reaches every phone, on any network, without an app.",
  },
  {
    key: "whatsapp",
    tagline: "Official WhatsApp Business API",
    capabilities: [
      "Approved templates and session messages",
      "Read receipts and rich media",
      "One number for your whole team",
    ],
    whyItMatters:
      "Where your customers already talk. Being properly on it beats five staff phones on WhatsApp Web.",
  },
  {
    key: "voice",
    tagline: "Softphone, IVR and department routing",
    capabilities: [
      "Inbound and outbound calls from the browser or mobile app",
      "Call recording, playback and status tracking",
      "IVR menus that route to Sales, Support or Inquiries",
    ],
    whyItMatters:
      "This is where most contact center work still happens. Every call is logged on the same customer as the messages.",
  },
  {
    key: "telegram",
    tagline: "Messaging and bots via the Bot API",
    capabilities: [
      "Two-way messaging",
      "Keyword and menu-driven bots",
      "Linked to the same contact record",
    ],
    whyItMatters:
      "Fast, free for your customer, and a natural home for self-service bots.",
  },
];

export function Channels() {
  return (
    <Section id="channels" labelledBy="channels-title" className="bg-soft/40">
      <Container>
        <SectionHeading
          id="channels-title"
          eyebrow="Channels"
          title="Voice first. Messaging in the same place."
          lede="Add a channel and it shows up in the same Team Inbox, on the same contact, with the same statuses and departments your team already uses."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => {
            const { label, Icon, chip, dot } = channels[card.key];
            return (
              <RevealItem key={card.key}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ${chip}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                        {label}
                      </h3>
                      <p className="text-[0.8125rem] text-faint">
                        {card.tagline}
                      </p>
                    </div>
                    <span
                      className={`ml-auto h-2 w-2 shrink-0 rounded-full ${dot}`}
                      aria-hidden="true"
                    />
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {card.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-muted"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-line pt-5 text-[0.9375rem] leading-relaxed text-ink/70">
                    <span className="font-medium text-ink">Why it matters. </span>
                    {card.whyItMatters}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 text-center text-sm text-muted">
            <InboxIcon className="h-4 w-4 shrink-0 text-brand" />
            Whatever the channel, it lands on the same customer timeline.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
