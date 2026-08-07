"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ChannelChip,
  StatusPill,
  channels,
} from "@/components/ui/channel";
import {
  BotIcon,
  DoubleTick,
  InboxIcon,
  NandiMark,
  NoteIcon,
  SearchIcon,
  WalletIcon,
} from "@/components/ui/icons";
import {
  conversations,
  customerPanel,
  filters,
  thread,
} from "./inbox-data";

/**
 * High-fidelity, non-interactive rendering of the Nandi Team Inbox.
 *
 * It is presentational only: `aria-hidden` plus an adjacent screen-reader
 * summary means assistive tech gets a useful description instead of dozens of
 * meaningless fragments, and nothing here is a focusable trap.
 */
export function TeamInboxMock({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    // `@container` is the important bit: this mock is rendered both full-bleed
    // in the hero and inside a ~590px half-column in the deep dive. Its panels
    // must react to the space they actually have, not to the viewport, or the
    // fixed-width columns overflow and crush the thread to one word per line.
    <div className="@container relative">
      <p className="sr-only">
        A preview of the Nandi Team Inbox showing conversations from WhatsApp,
        SMS, Telegram and Voice in one list, with statuses Open, Pending and
        Resolved, agent assignment, internal notes, and a bot handing a
        conversation over to a human agent.
      </p>

      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-line/80 bg-white shadow-float"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-line bg-soft/70 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[0.6875rem] text-faint ring-1 ring-line">
            <span className="text-live">●</span> app.usenandi.co/inbox
          </div>
        </div>

        <div className="flex">
          {/* ---------- Rail ----------
              Panels reveal on a width budget so the thread always keeps room:
              rail 56px @3xl · list 248px @xl · sidebar 216px @5xl. */}
          <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-line bg-soft/40 py-4 @3xl:flex">
            <NandiMark className="mb-3 h-8 w-8" />
            <RailIcon active>
              <InboxIcon className="h-5 w-5" />
            </RailIcon>
            <RailIcon>
              <BotIcon className="h-5 w-5" />
            </RailIcon>
            <RailIcon>
              <WalletIcon className="h-5 w-5" />
            </RailIcon>
          </aside>

          {/* ---------- Conversation list ---------- */}
          <div className="hidden w-[15.5rem] shrink-0 flex-col border-r border-line @xl:flex">
            <div className="border-b border-line px-3 py-3">
              <div className="flex items-center gap-2 rounded-lg bg-soft px-2.5 py-1.5 text-[0.75rem] text-faint">
                <SearchIcon className="h-3.5 w-3.5" />
                Search conversations
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1">
                {filters.slice(0, 3).map((f) => (
                  <span
                    key={f.label}
                    className={`rounded-md px-1.5 py-0.5 text-[0.6875rem] font-medium ${
                      f.active
                        ? "bg-brand text-white"
                        : "bg-soft text-muted"
                    }`}
                  >
                    {f.label} {f.count}
                  </span>
                ))}
              </div>
            </div>

            <ul className="divide-y divide-line/70">
              {conversations.slice(0, compact ? 4 : 6).map((c, i) => {
                const { Icon, dot } = channels[c.channel];
                const selected = i === 0;
                return (
                  <li
                    key={c.id}
                    className={`relative px-3 py-2.5 ${
                      selected ? "bg-brand/[0.045]" : ""
                    }`}
                  >
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-brand" />
                    ) : null}
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-semibold ${c.tint}`}
                      >
                        {c.initials}
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full ring-2 ring-white ${dot}`}
                        >
                          <Icon className="h-2 w-2 text-white" />
                        </span>
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="truncate text-[0.75rem] font-medium text-ink">
                            {c.name}
                          </p>
                          <span className="shrink-0 text-[0.625rem] text-faint">
                            {c.time}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-[0.6875rem] leading-snug text-faint">
                          {c.snippet}
                        </p>
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <StatusPill status={c.status} />
                          {c.unread ? (
                            <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.625rem] font-semibold text-white">
                              {c.unread}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- Thread ---------- */}
          <div className="flex min-w-0 flex-1 flex-col">
            <header className="flex items-center gap-2.5 border-b border-line px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-[0.6875rem] font-semibold text-brand-dark">
                AO
              </span>
              <div className="min-w-0">
                <p className="truncate text-[0.8125rem] font-semibold text-ink">
                  {customerPanel.name}
                </p>
                <p className="truncate text-[0.6875rem] text-faint">
                  {customerPanel.phone}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <ChannelChip
                  channel="whatsapp"
                  className="hidden @md:inline-flex"
                />
                <StatusPill status="Open" />
                <span className="hidden items-center gap-1 rounded-full bg-soft px-2 py-0.5 text-[0.6875rem] text-muted @3xl:inline-flex">
                  Assigned · Ifeoma A.
                </span>
              </div>
            </header>

            <div className="flex-1 space-y-2.5 bg-canvas/60 px-4 py-4">
              {thread.map((item, i) => (
                <ThreadRow
                  key={i}
                  item={item}
                  index={i}
                  reduceMotion={Boolean(reduceMotion)}
                />
              ))}

              {/* Live typing indicator, the "real-time feeling" cue */}
              <div className="flex items-center gap-2 pt-1">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-[0.5625rem] font-semibold text-brand-dark">
                  AO
                </span>
                <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1.5 ring-1 ring-line">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-faint/60"
                      animate={
                        reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }
                      }
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: d * 0.18,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </span>
                <span className="text-[0.625rem] text-faint">typing…</span>
              </div>
            </div>

            {/* Composer */}
            <div className="border-t border-line bg-white px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl border border-line px-3 py-2">
                <span className="text-[0.75rem] text-faint">
                  Reply on WhatsApp…
                </span>
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="rounded-md bg-soft px-1.5 py-0.5 text-[0.625rem] text-muted">
                    Quick replies
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-white">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                      <path
                        d="M2 8h11M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* ---------- Customer sidebar ---------- */}
          <aside className="hidden w-[13.5rem] shrink-0 border-l border-line bg-soft/30 px-3.5 py-4 @5xl:block">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-faint">
              Customer
            </p>
            <p className="mt-2 text-[0.8125rem] font-semibold text-ink">
              {customerPanel.name}
            </p>
            <p className="text-[0.6875rem] text-faint">
              {customerPanel.location}
            </p>

            <div className="mt-3 flex flex-wrap gap-1">
              {customerPanel.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white px-1.5 py-0.5 text-[0.625rem] font-medium text-muted ring-1 ring-line"
                >
                  {t}
                </span>
              ))}
            </div>

            <dl className="mt-4 space-y-2 border-t border-line pt-3">
              {customerPanel.fields.map((f) => (
                <div key={f.label} className="flex justify-between gap-2">
                  <dt className="text-[0.6875rem] text-faint">{f.label}</dt>
                  <dd className="text-[0.6875rem] font-medium text-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-lg border border-line bg-white p-2.5">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-faint">
                Wallet
              </p>
              <p className="mt-1 text-[0.9375rem] font-semibold text-ink">
                ₦48,250.00
              </p>
              <p className="text-[0.625rem] text-live">Balance healthy</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function RailIcon({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
        active ? "bg-brand/10 text-brand" : "text-faint"
      }`}
    >
      {children}
    </span>
  );
}

function ThreadRow({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof thread)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const animation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: {
          duration: 0.45,
          delay: 0.12 + index * 0.09,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      };

  if (item.kind === "event") {
    return (
      <motion.div className="flex justify-center py-0.5" {...animation}>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[0.625rem] font-medium text-accent-dark ring-1 ring-inset ring-accent/20">
          <BotIcon className="h-3 w-3" />
          {item.text}
        </span>
      </motion.div>
    );
  }

  if (item.kind === "note") {
    return (
      <motion.div className="flex justify-end" {...animation}>
        <div className="max-w-[80%] rounded-xl rounded-br-sm border border-dashed border-accent/40 bg-accent-soft/50 px-3 py-2">
          <p className="flex items-center gap-1 text-[0.5625rem] font-semibold uppercase tracking-[0.1em] text-accent-dark">
            <NoteIcon className="h-3 w-3" />
            Note · {item.author}
          </p>
          <p className="mt-1 text-[0.75rem] leading-snug text-ink/80">
            {item.text}
          </p>
        </div>
      </motion.div>
    );
  }

  const isOutbound = item.kind === "outbound";
  const isBot = item.kind === "bot";

  return (
    <motion.div
      className={`flex ${isOutbound || isBot ? "justify-end" : "justify-start"}`}
      {...animation}
    >
      <div className="max-w-[82%]">
        <div
          className={`rounded-2xl px-3 py-2 text-[0.75rem] leading-snug shadow-sm ${
            isOutbound
              ? "rounded-br-sm bg-brand text-white"
              : isBot
                ? "rounded-br-sm border border-line bg-white text-ink/85"
                : "rounded-bl-sm border border-line bg-white text-ink"
          }`}
        >
          {isBot ? (
            <span className="mb-1 flex items-center gap-1 text-[0.5625rem] font-semibold uppercase tracking-[0.1em] text-brand">
              <BotIcon className="h-3 w-3" />
              Orders bot
            </span>
          ) : null}
          {item.text}
        </div>
        <div
          className={`mt-1 flex items-center gap-1 text-[0.5625rem] text-faint ${
            isOutbound || isBot ? "justify-end" : ""
          }`}
        >
          <span>{item.time}</span>
          {"receipt" in item && item.receipt ? (
            <>
              <DoubleTick className="h-2.5 w-4 text-brand" />
              <span className="font-medium text-brand">{item.receipt}</span>
            </>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
