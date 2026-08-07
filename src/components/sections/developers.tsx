import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Eyebrow, Section } from "@/components/ui/section";

const wins = [
  "REST API with a full OpenAPI spec",
  "API keys with scopes, per-key rate limits",
  "Signed webhooks for message, call and conversation events",
  "Idempotency keys on every write",
  "Predictable errors and delivery state machines",
];

/**
 * Syntax highlighting is hand-rolled with spans rather than pulling in a
 * highlighter bundle. One sample, styled once, no extra client JS.
 */
function CodeSample() {
  const c = {
    key: "text-brand-light",
    str: "text-amber-300",
    punc: "text-white/40",
    method: "text-white",
    comment: "text-white/35",
  };

  return (
    <pre className="overflow-x-auto p-5 font-mono text-[0.8125rem] leading-relaxed text-white/80">
      <code>
        <span className={c.comment}># Send a WhatsApp message</span>
        {"\n"}
        <span className={c.method}>curl</span> -X POST
        https://api.usenandi.co/v1/messages \{"\n"}
        {"  "}-H <span className={c.str}>
          &quot;Authorization: Bearer $NANDI_API_KEY&quot;
        </span>{" "}
        \{"\n"}
        {"  "}-H{" "}
        <span className={c.str}>
          &quot;Idempotency-Key: ord_4471_notify&quot;
        </span>{" "}
        \{"\n"}
        {"  "}-d <span className={c.punc}>{"'{"}</span>
        {"\n"}
        {"    "}
        <span className={c.key}>&quot;channel&quot;</span>
        <span className={c.punc}>:</span>{" "}
        <span className={c.str}>&quot;whatsapp&quot;</span>
        <span className={c.punc}>,</span>
        {"\n"}
        {"    "}
        <span className={c.key}>&quot;to&quot;</span>
        <span className={c.punc}>:</span>{" "}
        <span className={c.str}>&quot;+2348021149930&quot;</span>
        <span className={c.punc}>,</span>
        {"\n"}
        {"    "}
        <span className={c.key}>&quot;template&quot;</span>
        <span className={c.punc}>:</span>{" "}
        <span className={c.str}>&quot;order_shipped&quot;</span>
        <span className={c.punc}>,</span>
        {"\n"}
        {"    "}
        <span className={c.key}>&quot;variables&quot;</span>
        <span className={c.punc}>: {"{"}</span>{" "}
        <span className={c.key}>&quot;order&quot;</span>
        <span className={c.punc}>:</span>{" "}
        <span className={c.str}>&quot;NG-4471&quot;</span>{" "}
        <span className={c.punc}>{"}"}</span>
        {"\n"}
        {"  "}
        <span className={c.punc}>{"}'"}</span>
      </code>
    </pre>
  );
}

const responseLines = [
  { label: "id", value: "\"msg_01J9F...\"" },
  { label: "status", value: "\"QUEUED\"" },
  { label: "cost_ngn", value: "18.50" },
  { label: "conversation_id", value: "\"cnv_7Kd2...\"" },
];

export function Developers() {
  return (
    <Section
      id="developers"
      labelledBy="developers-title"
      className="on-dark relative overflow-hidden bg-charcoal"
    >
      <div aria-hidden="true" className="ambient-dark absolute inset-0 opacity-70" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <Eyebrow tone="onDark">For developers</Eyebrow>
              <h2
                id="developers-title"
                className="text-balance-tight text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.5rem]"
              >
                Powerful under the hood. Clean on the surface.
              </h2>
              <p className="text-pretty-body mt-5 text-lg leading-relaxed text-white/70">
                The dashboard is what your ops team sees. This is what your
                engineers get: a small, predictable API surface with the
                primitives you&apos;d build yourself if you had the time.
              </p>

              <ul className="mt-8 space-y-3">
                {wins.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-3 text-[0.9375rem] leading-snug text-white/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light/15 text-brand-light">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#developers" variant="onDark" size="lg">
                  Read the docs
                  <ArrowRight />
                </ButtonLink>
                <ButtonLink href="#get-started" variant="onDarkGhost" size="lg">
                  Get API keys
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={24}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-float backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 font-mono text-[0.6875rem] text-white/40">
                  POST /v1/messages
                </span>
                <span className="ml-auto rounded-full bg-brand-light/15 px-2 py-0.5 font-mono text-[0.625rem] text-brand-light">
                  201 Created
                </span>
              </div>

              <CodeSample />

              <div className="border-t border-white/10 bg-white/[0.02] px-5 py-4">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/35">
                  Response
                </p>
                <dl className="mt-2.5 space-y-1.5 font-mono text-[0.75rem]">
                  {responseLines.map((r) => (
                    <div key={r.label} className="flex gap-2">
                      <dt className="text-brand-light">{r.label}:</dt>
                      <dd className="text-amber-300">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 border-t border-white/10 pt-3 text-[0.75rem] text-white/45">
                  The wallet is debited in the same transaction that creates the
                  message, so your balance never drifts from reality.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
