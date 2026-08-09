"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckIcon, SparkleIcon, TimelineIcon } from "@/components/ui/icons";

const summaryPoints = [
  "Ordered 2 crates on 14 Mar · order NG-4471",
  "Delivery address updated, confirmed with the driver",
  "Asking about bulk pricing for a repeat order",
];

const suggestions = [
  "Share bulk pricing tiers",
  "Send invoice for 20 crates",
  "Offer Friday delivery slot",
];

/**
 * Agent-assist panel: conversation summary, suggested replies and sentiment.
 *
 * Deliberately framed as assistance rather than automation — every suggestion
 * is shown as something an agent picks, never something the system sends.
 */
export function AiAssistMock({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const item = (i: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: {
            duration: 0.5,
            delay: 0.15 + i * 0.1,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    <div className={`relative ${className}`}>
      <p className="sr-only">
        A preview of Nandi&apos;s agent assist panel, showing an AI summary of a
        customer&apos;s history, suggested replies an agent can choose from, and
        a sentiment reading for the conversation.
      </p>

      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-line/80 bg-white shadow-float"
      >
        <div className="flex items-center gap-2 border-b border-line bg-charcoal px-4 py-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-light/15 text-brand-light">
            <SparkleIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[0.75rem] font-semibold text-white">
            Agent assist
          </span>
          <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[0.625rem] font-medium text-white/70">
            Amara Okafor
          </span>
        </div>

        {/* Summary */}
        <div className="px-5 py-4">
          <p className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-faint">
            <TimelineIcon className="h-3.5 w-3.5 text-brand" />
            Summary of 14 past conversations
          </p>
          <ul className="mt-3 space-y-2">
            {summaryPoints.map((p, i) => (
              <motion.li
                key={p}
                className="flex items-start gap-2 text-[0.8125rem] leading-snug text-ink/80"
                {...item(i)}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50" />
                {p}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Suggested replies */}
        <div className="border-t border-line bg-soft/40 px-5 py-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-faint">
            Suggested replies · agent picks one
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <motion.span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[0.75rem] font-medium text-ink/80 shadow-sm"
                {...item(i + 3)}
              >
                <SparkleIcon className="h-3 w-3 text-accent" />
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Sentiment */}
        <div className="flex items-center gap-3 border-t border-line px-5 py-3.5">
          <span className="flex items-center gap-1.5 text-[0.6875rem] font-medium text-muted">
            <CheckIcon className="h-3.5 w-3.5 text-live" />
            Sentiment · Positive
          </span>
          <div className="ml-auto flex h-1.5 w-24 overflow-hidden rounded-full bg-soft">
            <motion.span
              className="h-full rounded-full bg-live"
              initial={reduceMotion ? undefined : { width: 0 }}
              whileInView={reduceMotion ? undefined : { width: "78%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={reduceMotion ? { width: "78%" } : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
