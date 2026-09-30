import { Container } from "@/components/ui/section";

function MobileSoftphone() {
  const keys = ["Mute", "Keypad", "Transfer"];
  return (
    <div className="w-[210px] rounded-[1.7rem] bg-ink p-1.5 shadow-float">
      <div className="rounded-[1.35rem] bg-[#14332f] px-4 pb-5 pt-7 text-center text-white">
        <p className="font-mono text-[0.65rem] tracking-[0.14em] text-white/55">
          0700 NANDI
        </p>
        <p className="mt-6 text-[0.7rem] uppercase tracking-[0.16em] text-white/50">
          Sales
        </p>
        <p className="mt-1 text-lg font-medium">On a call</p>
        <p className="mt-2 font-mono text-sm text-brand-light">02:14</p>
        <div className="mx-auto mt-4 flex h-8 items-end justify-center gap-0.5" aria-hidden="true">
          {[10, 16, 22, 12, 18, 26, 14, 20].map((height, index) => (
            <span
              key={index}
              className="w-1 rounded-full bg-brand-light/80"
              style={{ height }}
            />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 text-[0.65rem] text-white/75">
          {keys.map((key) => (
            <span
              key={key}
              className="rounded-full border border-white/15 py-2"
            >
              {key}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SoftphoneBand() {
  return (
    <section aria-label="Mobile softphone" className="bg-brand-soft py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-1.5" aria-hidden="true">
              <i className="h-2 w-2 rounded-full bg-clay" />
              <i className="h-2 w-2 rounded-full bg-gold" />
              <i className="h-2 w-2 rounded-full bg-plum" />
              <i className="h-2 w-2 rounded-full bg-brand" />
            </span>
            <h2 className="title mt-4 text-3xl text-ink sm:text-4xl">
              The softphone, on the phone they already carry.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Voice over IP for the contact center. Answer in the browser or on mobile, and the call is written onto the same customer timeline as the messages.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              <li>Mute, keypad, and transfer</li>
              <li>Recording stored on the customer</li>
              <li>Sales, Support, and Inquiries, each with a queue</li>
            </ul>
            <div className="mt-8">
              <p className="sr-only">
                A preview of the Nandi mobile softphone on a sales call to 0700 NANDI, with mute, keypad, and transfer.
              </p>
              <div aria-hidden="true">
                <MobileSoftphone />
              </div>
            </div>
          </div>
          <img
            src="/gallery/softphone.jpg"
            alt="Illustration of a mobile softphone in a glass office"
            className="w-full rounded-3xl object-cover shadow-float"
          />
        </div>
      </Container>
    </section>
  );
}
