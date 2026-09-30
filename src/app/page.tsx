import { FinalCta } from "@/components/sections/final-cta";
import { GrowthPath } from "@/components/sections/growth-path";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { ProductModes } from "@/components/sections/product-modes";
import { ProductSuite } from "@/components/sections/product-suite";
import { Moments } from "@/components/sections/moments";
import { Scenarios } from "@/components/sections/scenarios";
import { SoftphoneBand } from "@/components/sections/softphone-band";
import { StatementBand } from "@/components/sections/statement-band";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <StatementBand />
      <Moments />
      <SoftphoneBand />
      <ProductModes />
      <ProductSuite />
      <Scenarios />
      <GrowthPath />
      <HowItWorks />
      <PricingTeaser />
      <FinalCta />
    </main>
  );
}
