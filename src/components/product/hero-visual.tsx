"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SmsIcon,
  SparkleIcon,
  TelegramIcon,
  VoiceIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

/** Channels orbiting the customer node, placed by hand around the ring. */
const orbit = [
  { Icon: VoiceIcon, tint: "text-violet-300", pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { Icon: WhatsAppIcon, tint: "text-emerald-300", pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
  { Icon: SmsIcon, tint: "text-sky-300", pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" },
  { Icon: TelegramIcon, tint: "text-cyan-300", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

const lanes = [
  { name: "Sales", meta: "3 in queue", color: "#fbbf24", agents: ["TB", "AO"] },
  { name: "Support", meta: "1 in queue", color: "#2dd4bf", agents: ["IA", "CE"] },
  { name: "Inquiries", meta: "0 in queue", color: "#c4b5fd", agents: ["AB"] },
];

/**
 * Hero illustration: one customer, every channel, routed into departments.
 *
 * It is a drawing rather than a screenshot — the orbit and the lanes say
 * "one contact center" faster than a literal UI capture would. Decorative
 * throughout, so the whole thing is hidden from assistive tech and described
 * once in text.
 */
export function HeroVisual({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const float = (delay: number, distance = 10) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: {
            duration: 7,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div className={`relative ${className}`}>
      <p className="sr-only">
        An illustration of one customer reaching a business over voice,
        WhatsApp, SMS and Telegram, with every conversation routed into the
        Sales, Support and Inquiries departments of a single contact center.
      </p>

      <div aria-hidden="true" className="relative">
        {/* Glow behind the whole composition. Painted first (no negative
            z-index) so it sits above the section's backdrop layers but below
            the cards that follow it. */}
        <div className="pointer-events-none absolute -inset-10">
          <div className="halo absolute inset-0 rounded-[50%] opacity-50 blur-3xl" />
        </div>

        {/* ---------- Orbit: the customer and their channels ---------- */}
        <div className="relative mx-auto h-36 w-36 sm:h-40 sm:w-40">
          {/* Rings */}
          <span className="absolute inset-0 rounded-full border border-white/15" />
          <span className="absolute inset-5 rounded-full border border-dashed border-white/10" />
          <span className="animate-ring-out absolute inset-0 rounded-full border border-brand-light/40" />

          {/* Customer node */}
          <div className="absolute inset-0 m-auto flex h-[4.25rem] w-[4.25rem] flex-col items-center justify-center rounded-full bg-white/95 shadow-float sm:h-20 sm:w-20">
            <span className="text-base font-semibold tracking-[-0.02em] text-ink sm:text-lg">
              AO
            </span>
            <span className="text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-faint">
              1 customer
            </span>
          </div>

          {/* Channel satellites */}
          {orbit.map(({ Icon, tint, pos }, i) => (
            <motion.span
              key={pos}
              className={`glass absolute flex h-10 w-10 items-center justify-center rounded-xl ${tint} ${pos}`}
              {...float(i * 0.5, 6)}
            >
              <Icon className="h-4.5 w-4.5" />
            </motion.span>
          ))}
        </div>

        {/* ---------- Connector: orbit down into the routing panel ---------- */}
        <svg
          viewBox="0 0 300 60"
          preserveAspectRatio="none"
          className="mx-auto h-7 w-full max-w-[17rem] text-brand-light"
        >
          {[60, 150, 240].map((x, i) => (
            <g key={x}>
              <path
                d={`M150,0 C150,28 ${x},22 ${x},58`}
                fill="none"
                stroke="rgb(255 255 255 / 0.14)"
                strokeWidth="1.5"
              />
              <path
                d={`M150,0 C150,28 ${x},22 ${x},58`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="flow-dash"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}
        </svg>

        {/* ---------- Routing panel ---------- */}
        <motion.div
          className="glass relative rounded-2xl p-2.5 shadow-float sm:p-3"
          {...float(0.2, 8)}
        >
          <div className="flex items-center gap-2 px-1.5 pb-2.5 pt-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            <span className="text-[0.6875rem] font-medium text-white/70">
              One number · routed live
            </span>
            <span className="ml-auto font-mono text-[0.6875rem] text-white/45">
              0700 NANDI
            </span>
          </div>

          <div className="space-y-1.5">
            {lanes.map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-2.5 rounded-xl bg-white/95 px-2.5 py-2"
              >
                <span
                  className="h-7 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.8125rem] font-semibold text-ink">
                    {l.name}
                  </p>
                  <p className="text-[0.625rem] text-faint">{l.meta}</p>
                </div>
                <div className="flex -space-x-1.5">
                  {l.agents.map((a) => (
                    <span
                      key={a}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-soft text-[0.5625rem] font-semibold text-muted ring-2 ring-white"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="px-1.5 pb-0.5 pt-2.5 text-[0.6875rem] text-white/55">
            Every department writes to{" "}
            <span className="font-medium text-white">
              one customer timeline
            </span>
            .
          </p>
        </motion.div>

        {/* ---------- Floating detail cards ---------- */}

        {/* Live call, with a small waveform */}
        <motion.div
          className="glass absolute -left-4 top-[6.5rem] hidden rounded-2xl px-3 py-2 shadow-float sm:block lg:-left-8"
          {...float(1.1, 10)}
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-live/20 text-live">
              <VoiceIcon className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[0.6875rem] font-semibold leading-none text-white">
                Live call
              </p>
              <p className="mt-1 font-mono text-[0.625rem] leading-none text-white/55">
                02:14
              </p>
            </div>
            <span className="flex h-5 items-end gap-[2px]">
              {[0.4, 0.9, 0.6, 1, 0.5].map((h, i) => (
                <span
                  key={i}
                  className="wave-bar w-[2px] rounded-full bg-brand-light"
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              ))}
            </span>
          </div>
        </motion.div>

        {/* AI assist */}
        <motion.div
          className="glass absolute -right-3 top-[9.75rem] hidden max-w-[12rem] rounded-2xl px-3 py-2 shadow-float sm:block lg:-right-7"
          {...float(0.6, 10)}
        >
          <p className="flex items-center gap-1.5 text-[0.6875rem] font-semibold text-white">
            <SparkleIcon className="h-3.5 w-3.5 text-amber-300" />
            AI summary ready
          </p>
          <p className="mt-1 text-[0.625rem] leading-snug text-white/60">
            14 past conversations, condensed to 3 lines.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
