"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ProductArt } from "@/components/product/product-art";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import type { ModeVisual } from "@/content/product-modes";

const chips: { id: string; label: string; visual: ModeVisual }[] = [
  { id: "hero-voice", label: "Voice", visual: "voice" },
  { id: "hero-inbox", label: "Inbox", visual: "inbox" },
  { id: "hero-assist", label: "Assist", visual: "assist" },
  { id: "hero-agents", label: "Agents", visual: "inbox" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const chip = chips[active];

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % chips.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <section id="top" className="paper pb-14 pt-24 sm:pb-20 sm:pt-28">
      <Container>
        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            role="tablist"
            aria-label="Product preview"
            className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {chips.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  id={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="hero-panel"
                  className={`border-b pb-1 text-sm transition-colors ${
                    selected
                      ? "border-brand font-medium text-brand-dark"
                      : "border-transparent text-muted hover:text-ink"
                  }`}
                  onClick={() => setActive(index)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="hero-scene">
            <div
              role="tabpanel"
              id="hero-panel"
              aria-labelledby={chip.id}
              className="max-h-[16rem] overflow-hidden sm:max-h-[22rem]"
            >
              <ProductArt visual={chip.visual} />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-2 max-w-3xl px-1 text-center">
          <h1 className="title text-[clamp(2.15rem,4.6vw,4.15rem)] text-ink">
            Every conversation.
            <span className="block">One contact center.</span>
          </h1>
          <p className="text-pretty-body mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Place the call or take it, on one number. AI reads the conversation beside your team, and can carry the call when the floor is empty.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/get-started" size="lg" className="w-full sm:w-auto">
              Get started free
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/get-started?intent=sales" variant="ghost" size="lg" className="w-full sm:w-auto">
              Talk to sales
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-faint">
            No credit card · Free inbox · Live in under 12 minutes
          </p>
          {chip.id === "hero-voice" ? (
            <p className="mt-3 text-sm text-muted">
              Outbound and inbound, from the browser or the Nandi phone. The minute is airtime.
            </p>
          ) : null}
          {chip.id === "hero-assist" ? (
            <p className="mt-3 text-sm text-muted">
              Sentiment and a read of the conversation. The person still sends.
            </p>
          ) : null}
          {chip.id === "hero-agents" ? (
            <p className="mt-3 text-sm text-muted">
              Labeled AI. It can place a call or receive one. The handoff includes the transcript.
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
