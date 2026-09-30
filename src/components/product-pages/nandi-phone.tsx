"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { NandiMark } from "@/components/ui/icons";

type Tab = "call" | "pad" | "recents" | "floor";

const bars = [8, 16, 24, 12, 20, 28, 14, 22, 10, 18];

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"] as const;

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/**
 * The Nandi phone app. A plum handset you can tap through: a live call,
 * a keypad, recents, and who is free on the floor.
 */
export function NandiPhone() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<Tab>("call");
  const [seconds, setSeconds] = useState(134);
  const [muted, setMuted] = useState(false);
  const [held, setHeld] = useState(false);
  const [dial, setDial] = useState("");
  const [note, setNote] = useState("Live call on Sales. Recording stays on the customer.");

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  function choose(next: Tab) {
    setTab(next);
    if (next === "call") setNote("Live call on Sales. Recording stays on the customer.");
    if (next === "pad") setNote("Dial from the app. Airtime starts when the call connects.");
    if (next === "recents") setNote("Recent calls. A recorded one stays on the customer.");
    if (next === "floor") setNote("Who is free on the floor, and who is already on a call.");
  }

  function pressKey(key: string) {
    setDial((value) => (value + key).slice(0, 16));
    setNote("Dial from the app. Airtime starts when the call connects.");
  }

  function placeCall() {
    if (!dial) {
      setNote("Enter a number, then call. The minute is airtime.");
      return;
    }
    setTab("call");
    setNote(`Calling ${dial} from the Nandi app. The minute is airtime, not the platform fee.`);
  }

  return (
    <div className="relative mx-auto w-[17.5rem]">
      <Paint />
      <div className="relative z-10 rounded-[2.4rem] bg-plum p-[0.45rem] shadow-float ring-4 ring-gold/70">
        <div className="overflow-hidden rounded-[2rem] bg-ivory">
          <div className="flex items-center justify-between bg-plum px-4 py-2 text-[0.625rem] text-ivory">
            <span className="font-medium">10:24</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5">
              <NandiMark className="h-3.5 w-3.5" />
              Nandi
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              Live
            </span>
          </div>

          <div className="relative h-[29rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                className="absolute inset-0 flex flex-col px-3.5 pb-2 pt-3"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {tab === "call" ? (
                  <CallScreen
                    seconds={seconds}
                    muted={muted}
                    held={held}
                    onMute={() => {
                      setMuted((value) => !value);
                      setNote("Mute stays on your side of the call.");
                    }}
                    onHold={() => {
                      setHeld((value) => !value);
                      setNote("Hold keeps the customer on the line while you check the timeline.");
                    }}
                    onKeypad={() => setTab("pad")}
                    onEnd={() => {
                      setTab("recents");
                      setNote("Call ended. The recording stays on the customer, beside the messages.");
                    }}
                  />
                ) : null}
                {tab === "pad" ? (
                  <PadScreen
                    dial={dial}
                    onKey={pressKey}
                    onClear={() => setDial((value) => value.slice(0, -1))}
                    onCall={placeCall}
                  />
                ) : null}
                {tab === "recents" ? <RecentsScreen onOpen={() => setTab("call")} /> : null}
                {tab === "floor" ? <FloorScreen /> : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-4 border-t border-plum/10 bg-white px-1 py-1.5" role="tablist" aria-label="Nandi phone">
            {(
              [
                ["call", "Call"],
                ["pad", "Keypad"],
                ["recents", "Recents"],
                ["floor", "Floor"],
              ] as const
            ).map(([id, label]) => {
              const selected = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`rounded-xl py-1.5 text-[0.625rem] font-semibold ${
                    selected ? "bg-brand text-white" : "text-plum"
                  }`}
                  onClick={() => choose(id)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <p className="relative z-10 mt-4 text-center text-sm leading-relaxed text-muted" aria-live="polite">
        {note}
      </p>
    </div>
  );
}

function CallScreen({
  seconds,
  muted,
  held,
  onMute,
  onHold,
  onKeypad,
  onEnd,
}: {
  seconds: number;
  muted: boolean;
  held: boolean;
  onMute: () => void;
  onHold: () => void;
  onKeypad: () => void;
  onEnd: () => void;
}) {
  return (
    <>
      <p className="text-center text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-brand">
        Sales · Queue 3
      </p>
      <div className="mt-4 flex flex-col items-center">
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white">
          <span className="absolute inset-0 rounded-full bg-brand/30 animate-ring-out" />
          CE
        </span>
        <p className="mt-3 text-base font-semibold text-ink">Chidinma Eze</p>
        <p className="font-mono text-xs text-faint">+234 803 555 0142</p>
        <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-plum">
          {formatDuration(seconds)}
        </p>
      </div>
      <div className="mt-4 flex h-8 items-center justify-center gap-[3px] rounded-xl bg-white">
        {bars.map((height, index) => (
          <span
            key={index}
            className="wave-bar w-[3px] rounded-full bg-brand"
            style={{ height, animationDelay: `${(index % 5) * 0.12}s` }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        <Round label={muted ? "Muted" : "Mute"} on={muted} onClick={onMute} tone="gold" />
        <Round label="Keys" on={false} onClick={onKeypad} tone="clay" />
        <Round label={held ? "Held" : "Hold"} on={held} onClick={onHold} tone="plum" />
        <Round label="End" on={false} onClick={onEnd} tone="red" />
      </div>
      <p className="mt-auto rounded-xl bg-red/10 px-3 py-2 text-center text-[0.6875rem] font-medium text-red-deep">
        Recording on this customer
      </p>
    </>
  );
}

function Round({
  label,
  on,
  onClick,
  tone,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
  tone: "gold" | "clay" | "plum" | "red";
}) {
  const tones = {
    gold: "bg-gold text-charcoal",
    clay: "bg-clay text-ivory",
    plum: "bg-plum text-ivory",
    red: "bg-red text-white",
  };
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`flex h-12 items-center justify-center rounded-2xl text-[0.625rem] font-semibold ${tones[tone]} ${
        on ? "ring-2 ring-ink ring-offset-2 ring-offset-ivory" : ""
      }`}
    >
      {label}
    </button>
  );
}

function PadScreen({
  dial,
  onKey,
  onClear,
  onCall,
}: {
  dial: string;
  onKey: (key: string) => void;
  onClear: () => void;
  onCall: () => void;
}) {
  return (
    <>
      <p className="text-center font-mono text-lg font-semibold tracking-wide text-ink">
        {dial || "Add a number"}
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {keys.map((key) => (
          <button
            key={key}
            type="button"
            className="h-11 rounded-2xl bg-white text-base font-semibold text-plum shadow-lift"
            onClick={() => onKey(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" className="h-10 rounded-xl bg-white text-xs font-semibold text-muted" onClick={onClear}>
          Delete
        </button>
        <button type="button" className="h-10 rounded-xl bg-brand text-xs font-semibold text-white" onClick={onCall}>
          Call
        </button>
      </div>
    </>
  );
}

function RecentsScreen({ onOpen }: { onOpen: () => void }) {
  const rows = [
    ["Chidinma Eze", "Sales · 02:14 · recorded", "bg-brand"],
    ["Front desk", "Inbound · missed", "bg-red"],
    ["Tunde Bakare", "Support · 00:41", "bg-clay"],
  ];
  return (
    <ul className="space-y-2">
      {rows.map(([name, detail, wash]) => (
        <li key={name}>
          <button
            type="button"
            onClick={onOpen}
            className="flex w-full items-center gap-3 rounded-2xl bg-white px-3 py-2.5 text-left shadow-lift"
          >
            <span className={`h-9 w-2 rounded-full ${wash}`} />
            <span>
              <span className="block text-sm font-semibold text-ink">{name}</span>
              <span className="block text-[0.6875rem] text-muted">{detail}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function FloorScreen() {
  const people = [
    ["Ifeoma A.", "Free · Sales", "bg-live"],
    ["Chidinma E.", "On a call", "bg-red"],
    ["Seyi O.", "Free · Support", "bg-live"],
  ];
  return (
    <ul className="flex h-full flex-col gap-2">
      {people.map(([name, detail, dot]) => (
        <li key={name} className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-lift">
          <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
          <span>
            <span className="block text-sm font-semibold text-ink">{name}</span>
            <span className="block text-[0.6875rem] text-muted">{detail}</span>
          </span>
        </li>
      ))}
      <li className="mt-auto rounded-2xl bg-brand-soft px-3 py-2 text-[0.6875rem] font-medium text-brand-dark">
        Two people free. One already on a call.
      </li>
    </ul>
  );
}

function Paint() {
  const reduceMotion = useReducedMotion();
  const shapes = [
    "left-[-2rem] top-10 h-24 w-24 rounded-full bg-brand",
    "right-[-1.6rem] top-0 h-14 w-14 rotate-12 rounded-2xl bg-gold",
    "left-[-1.4rem] top-44 h-10 w-10 rounded-lg bg-red",
    "right-[-1.8rem] top-36 h-16 w-16 rounded-full bg-clay",
    "right-[-0.4rem] top-24 h-6 w-14 -rotate-6 rounded-full bg-plum",
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
      {shapes.map((className) => (
        <motion.span
          key={className}
          className={`absolute ${className}`}
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
