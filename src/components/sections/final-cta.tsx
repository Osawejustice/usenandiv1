import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section";

export function FinalCta() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-title"
      className="relative overflow-hidden bg-[#14332f]"
    >
      <img
        src="/gallery/wash.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#102824]/78" />
      <Container className="relative">
        <div className="py-20 text-center sm:py-28">
          <Reveal>
            <h2
              id="get-started-title"
              className="title mx-auto max-w-3xl text-[2rem] text-white sm:text-5xl"
            >
              Ready to run sales and support from one contact center?
            </h2>
            <p className="mt-4 text-lg text-white/75">Early access is open.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/get-started" size="lg" className="w-full sm:w-auto">
                Get started free
                <ArrowRight />
              </ButtonLink>
              <ButtonLink
                href="/get-started?intent=sales"
                variant="onDarkGhost"
                size="lg"
                className="w-full sm:w-auto"
              >
                Talk to sales
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-white/60">
              No credit card · Free inbox · Live in under 12 minutes
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
