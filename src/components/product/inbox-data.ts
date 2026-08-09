import type { ChannelKey, StatusKey } from "@/components/ui/channel";

export type Conversation = {
  id: string;
  name: string;
  initials: string;
  /** Tailwind classes for the avatar tint. */
  tint: string;
  snippet: string;
  channel: ChannelKey;
  status: StatusKey;
  time: string;
  unread?: number;
  assignee?: string;
};

/**
 * Representative inbox contents. Names, numbers and message copy are written to
 * feel like a real support queue rather than lorem ipsum.
 */
export const conversations: Conversation[] = [
  {
    id: "c1",
    name: "Amara Okafor",
    initials: "AO",
    tint: "bg-brand/10 text-brand-dark",
    snippet: "Thanks! So the delivery lands tomorrow before noon?",
    channel: "whatsapp",
    status: "Open",
    time: "now",
    unread: 2,
    assignee: "You",
  },
  {
    id: "c2",
    name: "Tunde Bakare",
    initials: "TB",
    tint: "bg-accent/10 text-accent-dark",
    snippet: "Bot: I've shared your order status. Anything else?",
    channel: "telegram",
    status: "Pending",
    time: "2m",
    assignee: "Bot · Orders",
  },
  {
    id: "c3",
    name: "+234 803 555 0142",
    initials: "24",
    tint: "bg-sky-500/10 text-sky-700",
    snippet: "STOP",
    channel: "sms",
    status: "Resolved",
    time: "14m",
  },
  {
    id: "c4",
    name: "Chidinma Eze",
    initials: "CE",
    tint: "bg-violet-500/10 text-violet-700",
    snippet: "Outbound call · 3m 12s · Recording available",
    channel: "voice",
    status: "Open",
    time: "31m",
    assignee: "Ifeoma A.",
  },
  {
    id: "c5",
    name: "Kelechi Nwosu",
    initials: "KN",
    tint: "bg-emerald-500/10 text-emerald-700",
    snippet: "Can I pay on delivery instead?",
    channel: "whatsapp",
    status: "Open",
    time: "1h",
    unread: 1,
  },
  {
    id: "c6",
    name: "Aisha Bello",
    initials: "AB",
    tint: "bg-stone-500/10 text-stone-700",
    snippet: "Perfect, thank you 🙏",
    channel: "sms",
    status: "Resolved",
    time: "2h",
  },
];

export type ThreadItem =
  | {
      kind: "inbound" | "outbound" | "bot";
      text: string;
      time: string;
      channel: ChannelKey;
      /** Delivery lifecycle, only shown on outbound. */
      receipt?: "SENT" | "DELIVERED" | "READ";
    }
  | { kind: "event"; text: string; time: string }
  | { kind: "note"; text: string; time: string; author: string };

/**
 * The thread deliberately walks through the moment the docs care most about:
 * bot answers, bot escalates, human picks up with full context.
 */
export const thread: ThreadItem[] = [
  {
    kind: "inbound",
    channel: "whatsapp",
    text: "Hi, I ordered two crates yesterday. Where is my delivery?",
    time: "09:14",
  },
  {
    kind: "bot",
    channel: "whatsapp",
    text: "Hi Amara! Order #NG-4471 left our warehouse this morning and is out for delivery.",
    time: "09:14",
  },
  {
    kind: "inbound",
    channel: "whatsapp",
    text: "Can I change the address? I'm not home today.",
    time: "09:15",
  },
  {
    kind: "event",
    text: "Bot handed off to a human · status set to Open",
    time: "09:15",
  },
  {
    kind: "note",
    author: "Ifeoma A.",
    text: "Internal note: address change is fine, the driver hasn't left the depot yet.",
    time: "09:16",
  },
  {
    kind: "outbound",
    channel: "whatsapp",
    text: "Hi Amara, Ifeoma here 👋 I can move it to a new address — send it and I'll update the driver now.",
    time: "09:16",
    receipt: "READ",
  },
];

export const customerPanel = {
  name: "Amara Okafor",
  phone: "+234 802 114 9930",
  location: "Customer since 2023",
  tags: ["VIP", "Repeat buyer", "Priority"],
  fields: [
    { label: "Lifetime orders", value: "14" },
    { label: "Last channel", value: "WhatsApp" },
    { label: "First seen", value: "Mar 2026" },
  ],
};

export const filters = [
  { label: "My Open", count: 4, active: true },
  { label: "Unassigned", count: 7 },
  { label: "Mentions", count: 2 },
  { label: "Pending", count: 5 },
  { label: "Resolved", count: 128 },
];
