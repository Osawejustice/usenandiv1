export type PlanId = "starter" | "growth" | "sme" | "enterprise";
export type Billing = "monthly" | "annual";

export const plans: {
  id: PlanId;
  name: string;
  /** Month-to-month platform fee. Annual is a quarter under this, rounded. */
  monthly: string;
  /** Published platform fee. Billed annually. Starter is free either way. */
  annual: string;
  lede: string;
  cta: string;
  featured: boolean;
  includes: string[];
}[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: "Free",
    annual: "Free",
    lede: "The inbox, on free services you connect. We do not charge for them.",
    cta: "Get started free",
    featured: false,
    includes: [
      "Team inbox and one customer timeline",
      "WhatsApp, a free service you connect",
      "Telegram, a free service you connect",
      "Sales, Support, and Inquiries",
      "$0 to set up",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: "$39",
    annual: "$29",
    lede: "A business number and a softphone. Calls are airtime, not part of the fee.",
    cta: "Get started",
    featured: true,
    includes: [
      "Everything in Starter",
      "Business number and softphone",
      "Recording stored on the customer",
      "Voice, billed as airtime",
      "Platform fee refunded if you leave it",
    ],
  },
  {
    id: "sme",
    name: "SME",
    monthly: "$65",
    annual: "$49",
    lede: "Assist joins the same customer, once the number is already live.",
    cta: "Get started",
    featured: false,
    includes: [
      "Everything in Growth",
      "SMS, billed per message",
      "Assist drafts. A person still sends.",
      "Cost shown before every send",
      "Wallet in US dollars for airtime",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    lede: "The full floor and the API, priced with you.",
    cta: "Talk to sales",
    featured: false,
    includes: [
      "Everything in SME",
      "AI workers, labeled as AI",
      "API, webhooks, and idempotency keys",
      "Wallet debit in the same write as the message",
      "A person to plan the rollout",
    ],
  },
];

/** What each plan adds. "Included" and "—" only. The platform fee follows the billing toggle. */
export const compareRows: { feature: string; cells: [string, string, string, string] }[] = [
  {
    feature: "Team inbox and one customer timeline",
    cells: ["Included", "Included", "Included", "Included"],
  },
  {
    feature: "WhatsApp and Telegram you connect",
    cells: ["Included", "Included", "Included", "Included"],
  },
  {
    feature: "Business number and softphone",
    cells: ["—", "Included", "Included", "Included"],
  },
  {
    feature: "Recording stored on the customer",
    cells: ["—", "Included", "Included", "Included"],
  },
  {
    feature: "Voice, billed as airtime",
    cells: ["—", "Included", "Included", "Included"],
  },
  {
    feature: "SMS, billed per message",
    cells: ["—", "—", "Included", "Included"],
  },
  {
    feature: "Assist drafts. A person still sends.",
    cells: ["—", "—", "Included", "Included"],
  },
  {
    feature: "AI workers, labeled as AI",
    cells: ["—", "—", "—", "Included"],
  },
  {
    feature: "API, webhooks, and idempotency keys",
    cells: ["—", "—", "—", "Included"],
  },
  { feature: "Setup", cells: ["$0", "$0", "$0", "$0"] },
];

/** Indicative airtime. The platform fee is separate. WhatsApp and Telegram are not rates. */
export const usageRates = [
  { channel: "Voice", price: "$0.02", unit: "per minute" },
  { channel: "SMS", price: "$0.01", unit: "per message" },
];

export function isPlanId(value: string | undefined): value is PlanId {
  return value === "starter" || value === "growth" || value === "sme" || value === "enterprise";
}

export function planFromQuery(value: string | undefined, fallback: PlanId): PlanId {
  if (value === "platform") return "enterprise";
  return isPlanId(value) ? value : fallback;
}

export function billingFromQuery(value: string | undefined): Billing {
  return value === "monthly" ? "monthly" : "annual";
}

export function planAmount(plan: { monthly: string; annual: string }, billing: Billing) {
  return billing === "annual" ? plan.annual : plan.monthly;
}

export function planCadence(id: PlanId, billing: Billing) {
  if (id === "starter") return "no platform fee";
  if (id === "enterprise") return "priced with you";
  return billing === "annual"
    ? "platform fee / month, billed annually"
    : "platform fee / month, billed monthly";
}

export function planHref(id: PlanId, billing: Billing, sales = false) {
  const params = new URLSearchParams();
  if (sales || id === "enterprise") params.set("intent", "sales");
  params.set("plan", id);
  params.set("billing", billing);
  return `/get-started?${params.toString()}`;
}
