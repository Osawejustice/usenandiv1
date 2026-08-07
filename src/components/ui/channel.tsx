import type { ComponentType, SVGProps } from "react";
import {
  SmsIcon,
  TelegramIcon,
  VoiceIcon,
  WhatsAppIcon,
} from "./icons";

export type ChannelKey = "whatsapp" | "sms" | "voice" | "telegram";

type ChannelMeta = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Tinted chip styles, kept low-saturation so the UI stays calm. */
  chip: string;
  /** Same chip on charcoal: the light tints turn into glaring white pills. */
  chipDark: string;
  dot: string;
};

/**
 * Single source of truth for channel presentation. Every surface that shows a
 * channel (inbox rows, message bubbles, showcase cards) reads from here so the
 * colour language never drifts.
 */
export const channels: Record<ChannelKey, ChannelMeta> = {
  whatsapp: {
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
    chipDark: "bg-emerald-400/12 text-emerald-300 ring-emerald-400/25",
    dot: "bg-emerald-500",
  },
  sms: {
    label: "SMS",
    Icon: SmsIcon,
    chip: "bg-sky-50 text-sky-700 ring-sky-600/15",
    chipDark: "bg-sky-400/12 text-sky-300 ring-sky-400/25",
    dot: "bg-sky-500",
  },
  voice: {
    label: "Voice",
    Icon: VoiceIcon,
    chip: "bg-violet-50 text-violet-700 ring-violet-600/15",
    chipDark: "bg-violet-400/12 text-violet-300 ring-violet-400/25",
    dot: "bg-violet-500",
  },
  telegram: {
    label: "Telegram",
    Icon: TelegramIcon,
    chip: "bg-cyan-50 text-cyan-700 ring-cyan-600/15",
    chipDark: "bg-cyan-400/12 text-cyan-300 ring-cyan-400/25",
    dot: "bg-cyan-500",
  },
};

export function ChannelChip({
  channel,
  tone = "light",
  className = "",
}: {
  channel: ChannelKey;
  tone?: "light" | "onDark";
  className?: string;
}) {
  const { label, Icon, chip, chipDark } = channels[channel];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ring-1 ring-inset ${
        tone === "onDark" ? chipDark : chip
      } ${className}`}
    >
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

/* ---------- Conversation status, using the product's real vocabulary ---------- */

export type StatusKey = "Open" | "Pending" | "Resolved" | "Closed";

const statusStyles: Record<StatusKey, string> = {
  Open: "bg-live-soft text-green-800 ring-green-600/20",
  Pending: "bg-accent-soft text-accent-dark ring-accent/25",
  Resolved: "bg-brand-soft text-brand-dark ring-brand/20",
  Closed: "bg-soft text-faint ring-line",
};

export function StatusPill({
  status,
  className = "",
}: {
  status: StatusKey;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ring-1 ring-inset ${statusStyles[status]} ${className}`}
    >
      {status === "Open" ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
        </span>
      ) : null}
      {status}
    </span>
  );
}
