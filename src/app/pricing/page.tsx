import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Container } from "@/components/ui/section";
import { usageRates } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free on the inbox. Growth and SME are a monthly platform fee. Calls are airtime, billed on their own. Enterprise is priced with you.",
  alternates: { canonical: "https://nandi.to/pricing" },
};

export default function PricingPage() {
  return (
    <main id="main">
      <div className="paper pt-28 pb-12 sm:pt-32">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Pricing</p>
          <h1 className="title mt-3 max-w-3xl text-5xl text-ink sm:text-6xl">
            Start free. Pay when you need a number.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Starter is the shared inbox. Connect WhatsApp and Telegram while you are online. Nandi does not charge for them. A business number is a platform fee. Calls and SMS are airtime. Leave, and the platform fee is refunded. Airtime already used stays spent. The figures are indicative.
          </p>
        </Container>
      </div>

      <section className="bg-sand py-16 sm:py-20" aria-labelledby="plans-title">
        <Container>
          <h2 id="plans-title" className="title text-3xl text-ink sm:text-4xl">
            Starter, Growth, SME, and Enterprise.
          </h2>
          <div className="mt-8">
            <PricingPlans compare />
          </div>
        </Container>
      </section>

      <section id="usage" className="bg-ivory py-16 sm:py-20" aria-labelledby="usage-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <h2 id="usage-title" className="title text-3xl text-ink sm:text-4xl">
                Airtime, on its own.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The platform fee does not include minutes. Voice and SMS leave the wallet. WhatsApp and Telegram are free services you connect. They are not a rate, and Nandi does not charge for them.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
              <div className="flex items-baseline justify-between gap-4 border-b border-line px-6 py-5">
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
                    Wallet balance
                  </p>
                  <p className="mt-1 text-3xl font-semibold tracking-[-0.02em] text-ink">$1,250.00</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-live-soft px-2.5 py-1 text-[0.6875rem] font-medium text-green-800 ring-1 ring-inset ring-green-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" />
                  Healthy
                </span>
              </div>
              <dl className="px-6 py-5">
                {usageRates.map((rate) => (
                  <div
                    key={rate.channel}
                    className="flex items-baseline justify-between gap-3 border-b border-line/70 py-2.5 last:border-0"
                  >
                    <dt className="text-[0.9375rem] text-muted">{rate.channel}</dt>
                    <dd className="text-right">
                      <span className="font-medium text-ink">{rate.price}</span>{" "}
                      <span className="text-[0.8125rem] text-faint">{rate.unit}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="border-t border-line bg-soft/50 px-6 py-3.5 text-[0.8125rem] text-faint">
                The wallet pays airtime. WhatsApp and Telegram stay off this card. Connect them. We do not charge. Indicative rates. $0 setup.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <FinalCta />
    </main>
  );
}
