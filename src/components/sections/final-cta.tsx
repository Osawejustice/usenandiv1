import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { ChannelChip } from "@/components/ui/channel";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section";

export function FinalCta() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-title"
      className="on-dark relative overflow-hidden bg-charcoal"
    >
      <div aria-hidden="true" className="ambient-dark absolute inset-0" />

      <Container className="relative">
        <div className="py-24 text-center sm:py-32">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-medium text-white/50">
                All channels. One inbox.
              </span>
              <ChannelChip channel="whatsapp" tone="onDark" />
              <ChannelChip channel="sms" tone="onDark" />
              <ChannelChip channel="voice" tone="onDark" />
              <ChannelChip channel="telegram" tone="onDark" />
            </div>

            <h2
              id="get-started-title"
              className="text-balance-tight mx-auto max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              Ready to give your customers a better conversation experience?
            </h2>
            <p className="text-pretty-body mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Join the modern communication platform built for African
              businesses.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="#get-started" size="lg" className="w-full sm:w-auto">
                Get started free
                <ArrowRight />
              </ButtonLink>
              <ButtonLink
                href="#get-started"
                variant="onDarkGhost"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a quick demo with the team
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm text-white/45">
              No credit card required · Top up in Naira · Live in under 12
              minutes
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
