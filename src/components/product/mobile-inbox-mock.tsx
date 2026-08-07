"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StatusPill, channels } from "@/components/ui/channel";
import { BotIcon } from "@/components/ui/icons";

const rows = [
  {
    name: "Amara Okafor",
    initials: "AO",
    text: "Can I change the address?",
    channel: "whatsapp" as const,
    status: "Open" as const,
    time: "now",
  },
  {
    name: "Tunde Bakare",
    initials: "TB",
    text: "Bot: order is out for delivery",
    channel: "telegram" as const,
    status: "Pending" as const,
    time: "2m",
  },
  {
    name: "Chidinma Eze",
    initials: "CE",
    text: "Call · 3m 12s",
    channel: "voice" as const,
    status: "Open" as const,
    time: "31m",
  },
];

/**
 * Floating phone that overlaps the desktop mockup in the hero. Gentle vertical
 * drift gives the composition life without pulling attention off the headline.
 */
export function MobileInboxMock({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-[13.5rem] overflow-hidden rounded-[1.75rem] border-[6px] border-charcoal bg-white shadow-float">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-charcoal px-4 pb-2 pt-1.5 text-[0.5625rem] text-white/70">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Live
          </span>
        </div>

        <div className="px-3 pb-3 pt-3">
          <div className="flex items-baseline justify-between">
            <p className="text-[0.8125rem] font-semibold text-ink">Inbox</p>
            <span className="rounded-full bg-brand/10 px-1.5 py-0.5 text-[0.5625rem] font-medium text-brand">
              4 open
            </span>
          </div>

          <ul className="mt-2.5 space-y-2">
            {rows.map((r) => {
              const { Icon, dot } = channels[r.channel];
              return (
                <li
                  key={r.name}
                  className="rounded-xl border border-line bg-white p-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-soft text-[0.5625rem] font-semibold text-muted">
                      {r.initials}
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full ring-2 ring-white ${dot}`}
                      >
                        <Icon className="h-1.5 w-1.5 text-white" />
                      </span>
                    </span>
                    <p className="min-w-0 flex-1 truncate text-[0.6875rem] font-medium text-ink">
                      {r.name}
                    </p>
                    <span className="text-[0.5625rem] text-faint">{r.time}</span>
                  </div>
                  <p className="mt-1 truncate text-[0.625rem] text-faint">
                    {r.text}
                  </p>
                  <div className="mt-1.5">
                    <StatusPill status={r.status} />
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-accent-soft px-2 py-1.5 text-[0.5625rem] font-medium text-accent-dark">
            <BotIcon className="h-3 w-3" />
            Bot handed off 1 conversation
          </div>
        </div>
      </div>
    </motion.div>
  );
}
