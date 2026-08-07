import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Eyebrow, Section } from "@/components/ui/section";

const points = [
  "Prepaid wallet — you can never be surprised by a bill",
  "Real-time balance and a full usage ledger",
  "Cost estimation before every campaign send",
  "Low-balance alerts before it becomes a problem",
];

/** Indicative rates. Keep in sync with the pricing page when it lands. */
const rates = [
  { channel: "SMS", price: "₦3.20", unit: "per page" },
  { channel: "WhatsApp", price: "₦18.50", unit: "per conversation" },
  { channel: "Telegram", price: "₦0.00", unit: "free to send" },
  { channel: "Voice", price: "₦14.00", unit: "per minute" },
];

export function PricingTeaser() {
  return (
    <Section id="pricing" labelledBy="pricing-title" className="bg-soft/40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <h2
                id="pricing-title"
                className="text-balance-tight text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]"
              >
                Simple, transparent, Naira-first.
              </h2>
              <p className="text-pretty-body mt-5 text-lg leading-relaxed text-muted">
                Top up your wallet in Naira and spend it as you go. Every
                message and call writes a transaction you can see, so you always
                know exactly where your credit went.
              </p>

              <ul className="mt-8 space-y-3">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-[0.9375rem] leading-snug text-muted"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#get-started" size="lg">
                  Start with free credits
                  <ArrowRight />
                </ButtonLink>
                <ButtonLink href="#pricing" variant="secondary" size="lg">
                  View pricing
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={24}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
              <div className="flex items-baseline justify-between gap-4 border-b border-line px-6 py-5">
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
                    Wallet balance
                  </p>
                  <p className="mt-1 text-3xl font-semibold tracking-[-0.02em] text-ink">
                    ₦48,250.00
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-live-soft px-2.5 py-1 text-[0.6875rem] font-medium text-green-800 ring-1 ring-inset ring-green-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" />
                  Healthy
                </span>
              </div>

              <div className="px-6 py-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
                  See costs before you send
                </p>
                <dl className="mt-3.5 space-y-2.5">
                  {rates.map((r) => (
                    <div
                      key={r.channel}
                      className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2.5 last:border-0 last:pb-0"
                    >
                      <dt className="text-[0.9375rem] text-muted">
                        {r.channel}
                      </dt>
                      <dd className="text-right">
                        <span className="font-medium text-ink">{r.price}</span>{" "}
                        <span className="text-[0.8125rem] text-faint">
                          {r.unit}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="border-t border-line bg-soft/50 px-6 py-3.5 text-[0.8125rem] text-faint">
                Indicative rates. Exact costs are shown in the dashboard before
                every send.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
