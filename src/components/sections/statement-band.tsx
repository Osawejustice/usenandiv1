import { Container } from "@/components/ui/section";

export function StatementBand() {
  return (
    <section aria-label="What Nandi is" className="overflow-hidden bg-plum py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="title text-[1.7rem] text-ivory sm:text-4xl lg:text-[2.7rem] lg:leading-[1.12]">
              <span>Nandi</span>{" "}
              <span className="text-brand-light">
                is the conversational intelligence platform where voice, messaging, SMS, and AI share one inbox and one customer timeline.
              </span>
            </p>
            <p className="title mt-8 max-w-xl text-2xl text-gold sm:text-3xl">
              You shouldn’t have to pick a side.
            </p>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-red/70" />
            <img
              src="/gallery/call.jpg"
              alt="A woman taking a call at a sunlit desk"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-float sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
