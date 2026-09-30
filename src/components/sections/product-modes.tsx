"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { ProductArt } from "@/components/product/product-art";
import { Container } from "@/components/ui/section";
import { productModes } from "@/content/product-modes";

export function ProductModes() {
  const [modeIndex, setModeIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const mode = productModes[modeIndex];
  const item = mode.items[itemIndex];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      const next = productModes.findIndex((entry) => entry.id === hash);
      if (next >= 0) {
        setModeIndex(next);
        setItemIndex(0);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const chooseMode = (index: number) => {
    setModeIndex(index);
    setItemIndex(0);
    const id = productModes[index].id;
    window.history.replaceState(null, "", `#${id}`);
  };

  const onAccordionKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % mode.items.length
        : (index - 1 + mode.items.length) % mode.items.length;
    setItemIndex(next);
    document.getElementById(`${mode.id}-item-${next}`)?.focus();
  };

  return (
    <section id="product" aria-labelledby="modes-title" className="scroll-mt-24 bg-sand py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Coverage
          </p>
          <h2
            id="modes-title"
            className="title mt-3 text-[2rem] text-ink sm:text-[2.65rem]"
          >
            Team-led, AI Assist, and AI Agents.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Calling and a shared inbox first. Messaging on the services you connect. AI Assist reads the conversation. AI Agents place and receive the calls the floor cannot cover.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
          <div className="flex gap-2 overflow-x-auto lg:sticky lg:top-28 lg:block lg:self-start lg:overflow-visible">
            {productModes.map((entry, index) => {
              const selected = index === modeIndex;
              return (
                <button
                  key={entry.id}
                  id={entry.id}
                  type="button"
                  className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm transition-colors lg:mb-2 lg:w-full ${
                    selected ? "bg-brand text-white" : "bg-white text-muted hover:text-ink"
                  }`}
                  aria-pressed={selected}
                  onClick={() => chooseMode(index)}
                >
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] opacity-70">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block font-medium">{entry.eyebrow}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl border border-line bg-canvas p-5 shadow-lift sm:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[2rem]">
              {mode.headline}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{mode.lede}</p>

            <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="space-y-2">
                {mode.items.map((entry, index) => {
                  const open = index === itemIndex;
                  return (
                    <button
                      key={entry.title}
                      id={`${mode.id}-item-${index}`}
                      type="button"
                      aria-expanded={open}
                      className={`w-full rounded-xl px-4 py-3 text-left transition-colors ${
                        open ? "bg-brand-soft/70" : "hover:bg-soft"
                      }`}
                      onClick={() => setItemIndex(index)}
                      onKeyDown={(event) => onAccordionKey(event, index)}
                    >
                      <span className="block text-sm font-semibold text-ink">{entry.title}</span>
                      {open ? (
                        <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                          {entry.body}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              <div className="overflow-hidden rounded-2xl bg-brand-soft/30 p-2">
                <div className="max-h-[520px] overflow-hidden rounded-xl">
                  <ProductArt visual={item.visual} />
                </div>
                {mode.id === "agents" ? (
                  <p className="px-3 py-2 text-xs text-muted">
                    Labeled AI. The bot connects to the shared inbox, and the handoff includes the transcript.
                  </p>
                ) : (
                  <p className="px-3 py-2 text-xs text-muted">Your agents stay in control.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
