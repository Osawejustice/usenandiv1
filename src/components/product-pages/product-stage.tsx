"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { NandiPhone } from "@/components/product-pages/nandi-phone";
import { NandiMark } from "@/components/ui/icons";

export function ProductStage({ slug }: { slug: string }) {
  if (slug === "voice") return <NandiPhone />;
  if (slug === "inbox") return <InboxStage />;
  if (slug === "channels") return <MessagingStage />;
  if (slug === "assist") return <AssistStage />;
  if (slug === "agents") return <AgentsStage />;
  return <ApiStage />;
}

function Field({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.span
          className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-gold"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute -right-2 top-0 h-16 w-16 rotate-12 rounded-2xl bg-brand"
          animate={reduceMotion ? undefined : { rotate: [12, 20, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-8 -left-2 h-12 w-12 rounded-lg bg-red"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-plum" />
        <span className="absolute right-16 top-24 h-5 w-14 -rotate-6 rounded-full bg-clay" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const threads = [
  {
    id: "amara",
    name: "Amara Okafor",
    meta: "WhatsApp · Open",
    wash: "bg-red",
    line: "Can I change the address? I'm not home today.",
    note: "Assigned to Ifeoma. The last call is on this same customer.",
  },
  {
    id: "tunde",
    name: "Tunde Bakare",
    meta: "Telegram · Pending",
    wash: "bg-brand",
    line: "The order left the warehouse this morning.",
    note: "A labeled bot handed this thread back. The note is already here.",
  },
  {
    id: "chidinma",
    name: "Chidinma Eze",
    meta: "Voice · Recorded",
    wash: "bg-gold",
    line: "Call, 3 minutes. Asked about bulk pricing.",
    note: "The recording sits on the customer, next to the messages.",
  },
] as const;

function InboxStage() {
  const [active, setActive] = useState<(typeof threads)[number]["id"]>("amara");
  const thread = threads.find((entry) => entry.id === active) ?? threads[0];
  return (
    <Field>
      <div className="rounded-[1.75rem] bg-white/80 p-3 shadow-float ring-1 ring-white">
        <div className="mb-3 flex items-center justify-between px-2">
          <p className="text-sm font-semibold text-ink">Shared inbox</p>
          <span className="rounded-full bg-blush px-2.5 py-1 text-[0.6875rem] font-semibold text-red-deep">
            3 open
          </span>
        </div>
        <div className="grid gap-2" role="listbox" aria-label="Conversations">
          {threads.map((entry) => {
            const selected = entry.id === active;
            return (
              <button
                key={entry.id}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => setActive(entry.id)}
                className={`overflow-hidden rounded-2xl text-left ring-1 ${
                  selected ? "bg-ivory ring-plum" : "bg-white ring-line"
                }`}
              >
                <span className={`block h-2 ${entry.wash}`} />
                <span className="block px-3 py-2.5">
                  <span className="block text-sm font-semibold text-ink">{entry.name}</span>
                  <span className="block text-[0.6875rem] text-faint">{entry.meta}</span>
                </span>
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 rounded-2xl bg-plum px-4 py-3 text-ivory"
          >
            <p className="text-sm leading-relaxed">{thread.line}</p>
            <p className="mt-2 text-[0.75rem] text-gold">{thread.note}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </Field>
  );
}

const doors = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    wash: "bg-brand",
    line: "Hi, I ordered two crates yesterday.",
    note: "WhatsApp is a free service you connect. Nandi does not charge for it.",
  },
  {
    id: "telegram",
    label: "Telegram",
    wash: "bg-clay",
    line: "Can you hold the delivery until 6?",
    note: "Telegram is a free service you connect while you are online. We do not charge.",
  },
  {
    id: "sms",
    label: "SMS",
    wash: "bg-gold",
    line: "Running late. Please call the desk.",
    note: "SMS lands on the same customer. It is billed per message.",
  },
] as const;

function MessagingStage() {
  const [door, setDoor] = useState<(typeof doors)[number]["id"]>("whatsapp");
  const current = doors.find((entry) => entry.id === door) ?? doors[0];
  return (
    <Field>
      <div className="rounded-[1.75rem] bg-white/85 p-4 shadow-float ring-1 ring-white">
        <p className="text-sm font-semibold text-ink">One customer. Pick the door.</p>
        <div className="mt-3 grid grid-cols-3 gap-2" role="tablist" aria-label="Messaging doors">
          {doors.map((entry) => {
            const selected = entry.id === door;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setDoor(entry.id)}
                className={`rounded-2xl px-2 py-3 text-xs font-semibold text-white ${entry.wash} ${
                  selected ? "ring-2 ring-ink ring-offset-2" : ""
                }`}
              >
                {entry.label}
              </button>
            );
          })}
        </div>
        <div className="mt-4 rounded-2xl bg-ivory p-4">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
            Amara Okafor
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={current.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              className="mt-3 max-w-[16rem] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-ink shadow-lift"
            >
              {current.line}
            </motion.p>
          </AnimatePresence>
          <p className="mt-3 text-[0.75rem] leading-relaxed text-muted">{current.note}</p>
        </div>
      </div>
    </Field>
  );
}

const draft = "The crates left this morning. I can change the address if the driver has not left the depot.";

function AssistStage() {
  const [placed, setPlaced] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <Field>
      <div className="grid gap-3 rounded-[1.75rem] bg-white/85 p-3 shadow-float ring-1 ring-white sm:grid-cols-[1fr_1.05fr]">
        <div className="rounded-2xl bg-blush p-3">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-red-deep">
            The thread
          </p>
          <p className="mt-3 rounded-2xl bg-white px-3 py-2 text-sm text-ink">
            Where is my delivery?
          </p>
          <p className="mt-2 text-[0.75rem] text-muted">Amara · WhatsApp · still open</p>
        </div>
        <div className="rounded-2xl bg-plum p-3 text-ivory">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold">
            Draft · AI Assist
          </p>
          <p className="mt-3 text-sm leading-relaxed">{draft}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-xl bg-gold px-3 py-2 text-xs font-semibold text-charcoal"
              onClick={() => {
                setPlaced(true);
                setSent(false);
              }}
            >
              Place in the reply
            </button>
            <button
              type="button"
              className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-ivory"
              onClick={() => {
                setPlaced(false);
                setSent(false);
              }}
            >
              I’ll write it
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-ivory p-3 sm:col-span-2">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
            You send
          </p>
          <p className="mt-2 min-h-10 text-sm text-ink">
            {sent ? "Sent by you. Assist never pressed send." : placed ? draft : "The reply box is empty until you place a draft or write your own."}
          </p>
          <button
            type="button"
            disabled={!placed || sent}
            className="mt-2 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white disabled:opacity-40"
            onClick={() => setSent(true)}
          >
            Send
          </button>
        </div>
      </div>
    </Field>
  );
}

const bots = [
  {
    id: "receptionist",
    name: "AI Receptionist",
    wash: "bg-plum",
    job: "Receives the call after hours. Hours, a first question, order status.",
    handoff: "Handed to the desk with the transcript. Marked as AI.",
  },
  {
    id: "sales",
    name: "AI Sales Agent",
    wash: "bg-gold",
    ink: "text-charcoal",
    job: "Places the outbound call on the sales queue, then passes a live deal to a person.",
    handoff: "Handed to Ifeoma. Intent: bulk pricing. Transcript attached.",
  },
  {
    id: "support",
    name: "AI Support Agent",
    wash: "bg-clay",
    job: "Receives routine support on the shared inbox. Exceptions come back to the team.",
    handoff: "Handed to Support. The customer asked to change an address.",
  },
] as const;

function AgentsStage() {
  const [bot, setBot] = useState<(typeof bots)[number]["id"]>("receptionist");
  const current = bots.find((entry) => entry.id === bot) ?? bots[0];
  return (
    <Field>
      <div className="rounded-[1.75rem] bg-white/85 p-3 shadow-float ring-1 ring-white">
        <div className="grid gap-2 sm:grid-cols-3" role="tablist" aria-label="AI workers">
          {bots.map((entry) => {
            const selected = entry.id === bot;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setBot(entry.id)}
                className={`rounded-2xl px-3 py-4 text-left text-sm font-semibold ${entry.wash} ${
                  "ink" in entry ? entry.ink : "text-ivory"
                } ${selected ? "ring-2 ring-ink ring-offset-2" : ""}`}
              >
                <span className="block text-[0.625rem] uppercase tracking-[0.14em] opacity-80">Labeled AI</span>
                {entry.name}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-2xl bg-ivory p-4"
          >
            <p className="text-sm leading-relaxed text-ink">{current.job}</p>
            <p className="mt-3 rounded-xl bg-brand-soft px-3 py-2 text-[0.8125rem] font-medium text-brand-dark">
              {current.handoff}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </Field>
  );
}

const objects = [
  {
    id: "number",
    label: "Number",
    wash: "bg-plum",
    code: `{
  "object": "number",
  "queue": "sales",
  "e164": "+234700000000"
}`,
    note: "The same number the floor already publishes.",
  },
  {
    id: "call",
    label: "Call",
    wash: "bg-brand",
    code: `{
  "object": "call",
  "to": "+2348035550142",
  "airtime": "per minute"
}`,
    note: "A call is airtime. The platform fee does not move with the minute.",
  },
  {
    id: "message",
    label: "Message",
    wash: "bg-clay",
    code: `{
  "channel": "whatsapp",
  "to": "+2348021149930",
  "template": "order_shipped"
}`,
    note: "WhatsApp is a connected service, not an airtime rate. SMS is billed per message.",
  },
  {
    id: "webhook",
    label: "Webhook",
    wash: "bg-gold",
    ink: "text-charcoal",
    code: `{
  "event": "message.created",
  "signed": true
}`,
    note: "A signed event. The inbox still makes sense the next morning.",
  },
] as const;

function ApiStage() {
  const [object, setObject] = useState<(typeof objects)[number]["id"]>("message");
  const current = objects.find((entry) => entry.id === object) ?? objects[1];
  return (
    <Field>
      <div className="rounded-[1.75rem] bg-white/85 p-3 shadow-float ring-1 ring-white">
        <div className="flex items-center gap-2 px-1">
          <NandiMark className="h-6 w-6" />
          <p className="text-sm font-semibold text-ink">Same objects, as code</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label="API objects">
          {objects.map((entry) => {
            const selected = entry.id === object;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setObject(entry.id)}
                className={`rounded-2xl px-2 py-3 text-xs font-semibold ${entry.wash} ${
                  "ink" in entry ? entry.ink : "text-ivory"
                } ${selected ? "ring-2 ring-ink ring-offset-2" : ""}`}
              >
                {entry.label}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.pre
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 overflow-x-auto rounded-2xl bg-charcoal px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-ivory"
          >
            {current.code}
          </motion.pre>
        </AnimatePresence>
        <p className="mt-3 px-1 text-[0.8125rem] leading-relaxed text-muted">{current.note}</p>
      </div>
    </Field>
  );
}
