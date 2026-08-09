"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BotIcon,
  NoteIcon,
  RecordIcon,
  SparkleIcon,
  VoiceIcon,
} from "@/components/ui/icons";

/** Bar heights (in px) for the live audio meter — irregular on purpose. */
const bars = [10, 18, 26, 14, 22, 30, 16, 24, 12, 20, 28, 15];

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/**
 * Browser softphone on an active call.
 *
 * Purely decorative: `aria-hidden` on the card plus a screen-reader summary,
 * so assistive tech gets one sentence instead of a pile of orphan fragments.
 * The timer starts from a fixed value so the server and first client render
 * agree, then ticks once mounted.
 */
export function SoftphoneMock({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [seconds, setSeconds] = useState(134);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <p className="sr-only">
        A preview of the Nandi softphone during a live sales call, showing the
        caller, call duration, recording state, mute and transfer controls, and
        an AI summary of the conversation so far.
      </p>

      <div
        aria-hidden="true"
        className="w-full overflow-hidden rounded-2xl border border-line/80 bg-white shadow-float"
      >
        {/* Department context — the point of multi-department routing */}
        <div className="flex items-center gap-2 border-b border-line bg-soft/70 px-4 py-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand/10 text-brand">
            <VoiceIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[0.6875rem] font-semibold text-ink">
            Softphone
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[0.625rem] font-medium text-muted ring-1 ring-line">
            Sales · Queue 3
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-live-soft px-2 py-0.5 text-[0.625rem] font-medium text-green-800 ring-1 ring-inset ring-green-600/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            On call
          </span>
        </div>

        <div className="px-5 py-5">
          <div className="flex items-center gap-3.5">
            {/* Expanding rings read as "connected", without a spinner */}
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand-dark">
              <span className="absolute inset-0 rounded-full bg-brand/20 animate-ring-out" />
              <span
                className="absolute inset-0 rounded-full bg-brand/20 animate-ring-out"
                style={{ animationDelay: "1.5s" }}
              />
              <span className="relative">CE</span>
            </span>

            <div className="min-w-0">
              <p className="truncate text-[0.9375rem] font-semibold text-ink">
                Chidinma Eze
              </p>
              <p className="truncate font-mono text-[0.75rem] text-faint">
                +234 803 555 0142
              </p>
            </div>

            <div className="ml-auto text-right">
              <p className="font-mono text-lg font-semibold tabular-nums tracking-tight text-ink">
                {formatDuration(seconds)}
              </p>
              <p className="flex items-center justify-end gap-1 text-[0.625rem] font-medium text-red-500">
                <RecordIcon className="h-3 w-3" />
                Recording
              </p>
            </div>
          </div>

          {/* Live audio meter */}
          <div className="mt-5 flex h-9 items-center justify-center gap-[3px] rounded-xl bg-soft/70 px-3">
            {bars.map((h, i) => (
              <span
                key={i}
                className="wave-bar w-[3px] rounded-full bg-brand/70"
                style={{
                  height: `${h}px`,
                  animationDelay: `${(i % 6) * 0.11}s`,
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              { label: "Mute", glyph: "🎙" },
              { label: "Keypad", glyph: "⌨" },
              { label: "Transfer", glyph: "↗" },
            ].map((c) => (
              <span
                key={c.label}
                className="flex flex-col items-center gap-1 rounded-xl border border-line bg-white py-2 text-[0.625rem] text-muted"
              >
                <span className="text-[0.8125rem] leading-none">{c.glyph}</span>
                {c.label}
              </span>
            ))}
            <span className="flex flex-col items-center gap-1 rounded-xl bg-red-500 py-2 text-[0.625rem] font-medium text-white">
              <span className="text-[0.8125rem] leading-none rotate-[135deg]">
                <VoiceIcon className="h-3.5 w-3.5" />
              </span>
              End
            </span>
          </div>
        </div>

        {/* AI assist strip: the "practical AI" promise, in situ */}
        <motion.div
          className="border-t border-line bg-brand/[0.04] px-5 py-3.5"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true, margin: "-60px" },
                transition: { duration: 0.5, delay: 0.2 },
              })}
        >
          <p className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-brand">
            <SparkleIcon className="h-3.5 w-3.5" />
            Live AI summary
          </p>
          <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink/75">
            Repeat customer asking about bulk pricing for 20+ crates. Wants an
            invoice before Friday.
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[0.625rem] font-medium text-muted ring-1 ring-line">
              <NoteIcon className="h-3 w-3" />
              Auto-note saved
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[0.625rem] font-medium text-muted ring-1 ring-line">
              <BotIcon className="h-3 w-3" />
              Sentiment · Positive
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
