import { Ai } from "@/components/sections/ai";
import { Channels } from "@/components/sections/channels";
import { Departments } from "@/components/sections/departments";
import { Developers } from "@/components/sections/developers";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { InboxDeepDive } from "@/components/sections/inbox-deep-dive";
import { Nav } from "@/components/sections/nav";
import { Positioning } from "@/components/sections/positioning";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { TrustBar } from "@/components/sections/trust-bar";
import { Voice } from "@/components/sections/voice";

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

      {/*
        Section order follows the messaging hierarchy in the positioning doc:
        contact center identity first, then multi-department voice, then the
        omnichannel inbox, then AI as the force multiplier, with APIs last as
        the future path.
      */}
      <main id="main">
        <Hero />
        <TrustBar />
        <Positioning />
        <ProblemSolution />
        <Features />
        <Departments />
        <Voice />
        <InboxDeepDive />
        <Channels />
        <Ai />
        <Developers />
        <HowItWorks />
        <PricingTeaser />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
