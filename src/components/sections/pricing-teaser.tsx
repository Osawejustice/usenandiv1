import Link from "next/link";
import { usageRates } from "@/content/pricing";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Container, Eyebrow, Section } from "@/components/ui/section";

export function PricingTeaser() {
  return (
    <Section id="pricing" labelledBy="pricing-title" className="bg-sand">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 id="pricing-title" className="title text-[2rem] text-ink sm:text-[2.65rem]">
            Start free. Add a number when you are ready.
          </h2>
          <p className="text-pretty-body mt-5 text-lg leading-relaxed text-muted">
            Connect WhatsApp and Telegram. They are free services, and we do not charge. Voice is a platform fee, then airtime. Annual is a quarter under month to month.
          </p>
        </div>

        <div className="mt-10">
          <PricingPlans />
        </div>

        <p className="mt-8 text-sm text-muted">
          Airtime is separate and indicative. Voice {usageRates[0].price} a minute, SMS {usageRates[1].price} a message. WhatsApp and Telegram are free services you connect, and we do not charge for them.{" "}
          <Link href="/pricing#compare" className="font-medium text-brand">
            Compare the four plans
          </Link>
          {" · "}
          <Link href="/pricing#usage" className="font-medium text-brand">
            See the rate card
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
