import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

/* ---------- Brand ---------- */

/**
 * Nandi mark: an "N" formed from two conversation strokes meeting in the
 * middle, referencing the unified inbox.
 */
export function NandiMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--color-brand)" />
      <path
        d="M10 22V10.5l12 11V10"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="22" r="2" fill="var(--color-accent)" />
    </svg>
  );
}

export function NandiWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[1.35rem] font-semibold tracking-[-0.03em] text-ink ${className}`}
    >
      Nandi
    </span>
  );
}

/* ---------- Channels ---------- */

export function WhatsAppIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 3a9 9 0 0 0-7.7 13.65L3.2 21l4.5-1.15A9 9 0 1 0 12 3Z"
        {...stroke}
      />
      <path
        d="M9.2 8.6c-.5 0-.9.4-1 .9-.2 1.5.6 3 1.7 4.1 1.1 1.1 2.6 1.9 4.1 1.7.5-.1.9-.5.9-1v-.7l-1.8-.7-.8.8a6.4 6.4 0 0 1-2.3-2.3l.8-.8-.7-1.8h-.9Z"
        {...stroke}
      />
    </Svg>
  );
}

export function SmsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5Z" {...stroke} />
      <path d="M8.5 8.5h7M8.5 11.5h4" {...stroke} />
    </Svg>
  );
}

export function VoiceIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M6.2 3.8h2.3l1.4 3.4-1.7 1.4a10.4 10.4 0 0 0 5.2 5.2l1.4-1.7 3.4 1.4v2.3a2.2 2.2 0 0 1-2.4 2.2C9.9 17.4 6.6 14.1 4 8.6a2.2 2.2 0 0 1 2.2-4.8Z"
        {...stroke}
      />
    </Svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 4.5 2.8 11.3l5 1.8L20 5.2Z" {...stroke} />
      <path d="M7.8 13.1 9 19.5l3-3.6 4.9 2.8L21 4.5" {...stroke} />
    </Svg>
  );
}

export function BotIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="8" width="16" height="11" rx="3" {...stroke} />
      <path d="M12 4v4M9 13h.01M15 13h.01M9.5 16h5" {...stroke} />
    </Svg>
  );
}

/* ---------- Feature glyphs ---------- */

export function InboxIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 13 6.2 5.6A2 2 0 0 1 8.1 4h7.8a2 2 0 0 1 1.9 1.6L20 13v4.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5Z" {...stroke} />
      <path d="M4 13h4l1 2.5h6l1-2.5h4" {...stroke} />
    </Svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3.5 8 4.2-8 4.3-8-4.3Z" {...stroke} />
      <path d="m4 12.2 8 4.3 8-4.3M4 16.4l8 4.2 8-4.2" {...stroke} />
    </Svg>
  );
}

export function HandoffIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 8.5h9l-2.5-3M20.5 15.5h-9l2.5 3" {...stroke} />
      <circle cx="17.5" cy="8.5" r="2.5" {...stroke} />
      <circle cx="6.5" cy="15.5" r="2.5" {...stroke} />
    </Svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="6" width="17" height="13" rx="2.5" {...stroke} />
      <path d="M3.5 10.5h17M16 14.75h1.5" {...stroke} />
      <path d="M6 6V5a1.5 1.5 0 0 1 1.9-1.45l8.4 2.2" {...stroke} />
    </Svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5l-3 14" {...stroke} />
    </Svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5 19 6v5.5c0 4-2.9 7.4-7 9-4.1-1.6-7-5-7-9V6Z" {...stroke} />
      <path d="m9 12 2.2 2.2L15.5 10" {...stroke} />
    </Svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="6.5" {...stroke} />
      <path d="m16 16 4 4" {...stroke} />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" {...stroke} />
    </Svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" {...stroke} />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
    </Svg>
  );
}

export function NoteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 3.5h8.5L19 8v12.5H6Z" {...stroke} />
      <path d="M14 3.5V8h5M9 12h6M9 15.5h4" {...stroke} />
    </Svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13.5 3 6 13.5h4.5L10 21l7.5-10.5H13Z" {...stroke} />
    </Svg>
  );
}

/* Small double-tick used for DELIVERED / READ states in the mockup. */
export function DoubleTick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 12" className={className} aria-hidden="true">
      <path
        d="M1.5 6.6 4.3 9.4 10.4 3M8.6 9.4 14.7 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
