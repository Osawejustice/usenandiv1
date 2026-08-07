import { Channels } from "@/components/sections/channels";
import { Developers } from "@/components/sections/developers";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { InboxDeepDive } from "@/components/sections/inbox-deep-dive";
import { Nav } from "@/components/sections/nav";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <>
      {/* Keyboard users can jump the sticky nav and the long hero. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Features />
        <InboxDeepDive />
        <Channels />
        <Developers />
        <HowItWorks />
        <PricingTeaser />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
