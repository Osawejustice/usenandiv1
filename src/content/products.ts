export type ProductMode = "Team-led" | "AI-assisted" | "AI-led" | "Platform";

export type ProductFeature = {
  title: string;
  body: string;
  id?: string;
};

export type Product = {
  slug: string;
  name: string;
  mode: ProductMode;
  /** Group used by the suite filter. AI-assisted and AI-led share "AI". */
  filter: "Team-led" | "AI" | "Platform";
  href: string;
  seoTitle: string;
  oneLiner: string;
  lede: string;
  bullets: [string, string, string];
  features: [ProductFeature, ProductFeature, ProductFeature];
  steps: [ProductFeature, ProductFeature, ProductFeature];
  related: string[];
};

export const products: Product[] = [
  {
    slug: "voice",
    name: "Voice",
    mode: "Team-led",
    filter: "Team-led",
    href: "/products/voice",
    seoTitle: "Voice — Place a call or take one",
    oneLiner:
      "A business number for the calls you place and the calls you answer. The minute is airtime.",
    lede: "Voice is how a business reaches a customer and how a customer reaches the business. The number arrives on Growth, SME, or Enterprise. Your team calls from the browser or the Nandi phone, and a labeled AI agent can place or receive on the same number. Every minute is airtime, shown before the call and kept off the platform fee.",
    bullets: [
      "Place a call or take one",
      "Recording stored on the customer",
      "Each department keeps its own queue and hours",
    ],
    features: [
      {
        title: "A softphone the floor will leave open",
        body: "No desk phone and no hardware. Mute, keypad, transfer, and a live view of who is free.",
      },
      {
        title: "Recording on the customer",
        body: "Replay a call for coaching or a dispute. It sits on the same timeline as the messages.",
      },
      {
        title: "Departments that behave like departments",
        body: "Sales, Support, and Inquiries. Own numbers, own IVR, own hours. One shared timeline underneath.",
      },
    ],
    steps: [
      {
        title: "Choose a paid workspace",
        body: "Growth or above. The platform fee is monthly, and it is refunded if you leave it.",
      },
      {
        title: "Take the number",
        body: "A business number lands on Sales, Support, or Inquiries. Point the IVR at the queues.",
      },
      {
        title: "Call, and pay the minute",
        body: "Airtime leaves the wallet. The platform fee does not move with the call.",
      },
    ],
    related: ["inbox", "channels", "agents"],
  },
  {
    slug: "inbox",
    name: "Shared inbox",
    mode: "Team-led",
    filter: "Team-led",
    href: "/products/inbox",
    seoTitle: "Shared inbox — One thread per customer",
    oneLiner:
      "One shared inbox. One customer timeline. Statuses a floor can actually run.",
    lede: "The inbox is the room. A call, a message, and an SMS are doors into the same customer, with assignment, notes, and a handoff a teammate can pick up.",
    bullets: [
      "Open, Pending, Resolved, Closed",
      "Profile, tags, and notes beside the thread",
      "Bot-to-human handoff kept intact",
    ],
    features: [
      {
        title: "One timeline, whichever door they used",
        body: "Voice, messaging, and SMS land on one customer. The story does not reset.",
      },
      {
        title: "Statuses a shift can run",
        body: "Open, Pending, Resolved, Closed. Mine, the department’s, or unassigned. Notes survive the handover.",
      },
      {
        title: "The pass is a first-class event",
        body: "When a bot hands the thread to a person, the messages and the internal note are already there.",
      },
    ],
    steps: [
      {
        title: "Open the queue",
        body: "See what is mine, what is unassigned, and what is waiting on a customer.",
      },
      {
        title: "Read the timeline",
        body: "The last call and the last message are on the same customer.",
      },
      {
        title: "Answer once",
        body: "Reply on the channel they used. The status and the note stay with the thread.",
      },
    ],
    related: ["voice", "channels", "assist"],
  },
  {
    slug: "channels",
    name: "Messaging",
    mode: "Team-led",
    filter: "Team-led",
    href: "/products/channels",
    seoTitle: "Messaging — WhatsApp, Telegram, and SMS beside the call",
    oneLiner:
      "WhatsApp and Telegram are free services you connect. SMS sits on the same timeline, billed per message.",
    lede: "WhatsApp and Telegram are free services you connect while you are online. Nandi does not charge for them. SMS is billed per message, on the same customer as the call.",
    bullets: [
      "Messaging apps on the same contact",
      "SMS with delivery states and opt-out",
      "Each app you turn on stays with the call",
    ],
    features: [
      {
        title: "Messaging, beside the call",
        body: "Turn on the apps your customers already use. The thread sits next to the call, on one customer.",
      },
      {
        title: "SMS with an honest lifecycle",
        body: "Single and bulk sends. Queued, sent, delivered. Opt-out is handled. The cost is shown before the send.",
      },
      {
        title: "One contact, whichever app",
        body: "Two-way threads stay on the customer the phone already knows. The app is a door, not a second record.",
      },
    ],
    steps: [
      {
        title: "Keep the number",
        body: "The customer still reaches one line. The platform keeps that promise.",
      },
      {
        title: "Add the channel they already use",
        body: "Connect the messaging apps you turn on. Add SMS when that is how they write.",
      },
      {
        title: "Watch it hit the same timeline",
        body: "Yesterday’s call and today’s message are one customer.",
      },
    ],
    related: ["inbox", "voice", "api"],
  },
  {
    slug: "assist",
    name: "AI Assist",
    mode: "AI-assisted",
    filter: "AI",
    href: "/products/assist",
    seoTitle: "AI Assist — Sentiment and a read of the conversation",
    oneLiner:
      "Sentiment, a read of the conversation, and a draft. The person still sends.",
    lede: "Assist is how the floor understands a conversation while it is still open. It reads sentiment, what was asked, and the next line. It does not talk to the customer, and it does not press send. The person does.",
    bullets: [
      "Sentiment, read on the open thread",
      "Conversational analysis when the call ends",
      "Drafts the person edits and sends",
    ],
    features: [
      {
        title: "Sentiment while the customer is still talking",
        body: "How the conversation feels, and what the customer asked, beside the thread. It is a reading, not a score to game.",
      },
      {
        title: "Conversational analysis when it ends",
        body: "What happened, the outcome, and the next action. Three lines, short enough to trust.",
      },
      {
        title: "The note is already in the thread",
        body: "After-call notes land on the customer. Nobody goes home owing the timeline a paragraph.",
      },
    ],
    steps: [
      {
        title: "Open any thread",
        body: "Read three lines before you ask the customer to repeat themselves.",
      },
      {
        title: "Edit the draft",
        body: "Suggested replies wait. The agent changes what is wrong and sends.",
      },
      {
        title: "Leave the note behind",
        body: "The next person on the shift starts from the thread, not from a guess.",
      },
    ],
    related: ["inbox", "agents", "voice"],
  },
  {
    slug: "agents",
    name: "AI Agents",
    mode: "AI-led",
    filter: "AI",
    href: "/products/agents",
    seoTitle: "AI Agents — Place a call or receive one",
    oneLiner:
      "Labeled agents that place outbound calls and receive inbound ones, on the number you already publish.",
    lede: "AI Agents carry a call the floor cannot. A labeled agent can place the outbound call or receive the one that comes in, on the same number, and write it to the shared inbox. When a person should take over, the transcript, the sentiment, and the intent come with the handoff.",
    bullets: [
      "Place an outbound call or receive an inbound one",
      "AI Receptionist, AI Sales Agent, AI Support Agent",
      "Labeled as AI, with the transcript on the handoff",
    ],
    features: [
      {
        id: "receptionist",
        title: "AI Receptionist",
        body: "Receives the call after hours and on overflow. Hours, a first question, order status. The customer reaches the same number, and the agent is marked as AI in the inbox.",
      },
      {
        id: "sales-agent",
        title: "AI Sales Agent",
        body: "Places the outbound call when the floor is in another conversation. It qualifies the simple ask, then hands the deal to a person with the transcript attached.",
      },
      {
        id: "support-agent",
        title: "AI Support Agent",
        body: "Receives the routine support call and the message on the same inbox. A person still owns the exceptions. The handoff includes what was asked and which department owns it.",
      },
    ],
    steps: [
      {
        title: "Choose the gap",
        body: "After hours, overflow, or the questions that do not need a person.",
      },
      {
        title: "Point it at a queue",
        body: "Same number. Same department. Marked as AI in the timeline.",
      },
      {
        title: "Read the handoff",
        body: "A person takes the thread with the transcript attached, not a missed call.",
      },
    ],
    related: ["assist", "inbox", "voice"],
  },
  {
    slug: "api",
    name: "API",
    mode: "Platform",
    filter: "Platform",
    href: "/products/api",
    seoTitle: "API — The same objects, as code",
    oneLiner:
      "Numbers, calls, messages, and routing. The objects the dashboard uses, available as code.",
    lede: "The team runs Nandi from the dashboard. When a flow no longer belongs there, the API is the same product: a message, a signed webhook, and a wallet debit in one write.",
    bullets: [
      "REST and an OpenAPI spec",
      "Signed webhooks and idempotency keys",
      "The wallet debits in the same write as the message",
    ],
    features: [
      {
        title: "The same objects",
        body: "Numbers, calls, messages, contacts, routing. Not a second product with a different vocabulary.",
      },
      {
        title: "Writes you can retry",
        body: "Scoped keys, per-key limits, idempotency on every write, and errors you can branch on.",
      },
      {
        title: "Events you can trust",
        body: "Signed webhooks for calls, messages, and conversations. The ledger moves with the message.",
      },
    ],
    steps: [
      {
        title: "Run the center first",
        body: "The dashboard is enough. Open the API when a workflow outgrows the screen.",
      },
      {
        title: "Send with a key",
        body: "A scoped key, an idempotency key, and the rate shown the same way the wallet shows it.",
      },
      {
        title: "React to the event",
        body: "A signed webhook fires. The inbox still makes sense the next morning.",
      },
    ],
    related: ["channels", "voice", "inbox"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export type MenuLink = {
  href: string;
  title: string;
  description: string;
};

export const productMenu: { heading: string; links: MenuLink[] }[] = [
  {
    heading: "Channels",
    links: [
      {
        href: "/products/voice",
        title: "Voice",
        description: "Place a call or take one. Airtime is separate from the fee.",
      },
      {
        href: "/products/inbox",
        title: "Shared inbox",
        description: "One thread per customer, across the team.",
      },
      {
        href: "/products/channels",
        title: "SMS",
        description: "Texting on the same timeline, billed per message.",
      },
      {
        href: "/products/channels",
        title: "WhatsApp & Telegram",
        description: "Free services you connect while online. We do not charge for them.",
      },
    ],
  },
  {
    heading: "AI Assist",
    links: [
      {
        href: "/products/assist",
        title: "Live guidance",
        description: "Sentiment and the next step, while the customer is still talking.",
      },
      {
        href: "/products/assist",
        title: "Transcription & insights",
        description: "Conversational analysis: what happened, the outcome, and the next action.",
      },
      {
        href: "/products/assist",
        title: "Suggested replies",
        description: "Drafts the person edits. The person still sends.",
      },
    ],
  },
  {
    heading: "AI Agents",
    links: [
      {
        href: "/products/agents#receptionist",
        title: "AI Receptionist",
        description: "Receives the call after hours and on overflow.",
      },
      {
        href: "/products/agents#sales-agent",
        title: "AI Sales Agent",
        description: "Places the outbound call, then hands over the transcript.",
      },
      {
        href: "/products/agents#support-agent",
        title: "AI Support Agent",
        description: "Receives routine support. A person takes the exception.",
      },
      {
        href: "/products/agents",
        title: "Explore AI Agents",
        description: "Labeled agents that place and receive calls on your number.",
      },
    ],
  },
  {
    heading: "Integrations",
    links: [
      {
        href: "/products/api",
        title: "API",
        description: "Numbers, calls, and messages, as code.",
      },
      {
        href: "/developers",
        title: "Webhooks",
        description: "Signed events for calls, messages, and conversations.",
      },
      {
        href: "/pricing",
        title: "Pricing",
        description: "Starter is free. Growth and SME are a platform fee. Enterprise is priced with you.",
      },
    ],
  },
];

export const solutionMenu: { heading: string; links: MenuLink[] }[] = [
  {
    heading: "By team",
    links: [
      {
        href: "/scenarios#sales",
        title: "Sales",
        description: "Outbound calling and the deal, kept on one customer.",
      },
      {
        href: "/products/inbox",
        title: "Support",
        description: "Inbound queues, statuses, and notes that survive a shift change.",
      },
      {
        href: "/products/inbox",
        title: "Inbound",
        description: "Calls and messages that come in, on the shared inbox.",
      },
      {
        href: "/products/voice",
        title: "Outbound",
        description: "Calling from the browser or the phone, on the sales queue.",
      },
    ],
  },
  {
    heading: "By size",
    links: [
      {
        href: "/scenarios#startups",
        title: "1–50",
        description: "Start free. Add a number when the first calls matter.",
      },
      {
        href: "/scenarios#enterprise",
        title: "50–500",
        description: "Departments and offices on one timeline.",
      },
      {
        href: "/get-started?intent=sales&plan=enterprise",
        title: "Enterprise",
        description: "The full floor and the API, priced with you.",
      },
    ],
  },
  {
    heading: "By industry",
    links: [
      {
        href: "/scenarios#hotels",
        title: "Travel & Hospitality",
        description: "The desk, the booking, and the guest on one timeline.",
      },
      {
        href: "/scenarios#startups",
        title: "Software & Technology",
        description: "Startups. One number for sales and support.",
      },
      {
        href: "/scenarios#startups",
        title: "Finance",
        description: "Fintechs. The platform fee is separate from airtime.",
      },
    ],
  },
];
