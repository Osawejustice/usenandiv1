export type ModeVisual = "voice" | "inbox" | "routing" | "assist";

export type ProductMode = {
  id: "team" | "assist" | "agents";
  eyebrow: string;
  headline: string;
  lede: string;
  items: { title: string; body: string; visual: ModeVisual }[];
};

export const productModes: ProductMode[] = [
  {
    id: "team",
    eyebrow: "Team-led",
    headline: "Team-led conversations on a shared inbox.",
    lede: "Voice for the calls. A shared inbox for the team. SMS and WhatsApp on the same customer.",
    items: [
      {
        title: "Voice",
        body: "Place a call or take one, from the browser or the phone. IVR, routing, and a recording on the customer. Airtime stays off the platform fee.",
        visual: "voice",
      },
      {
        title: "Shared inbox",
        body: "Voice, messaging, and SMS land in one thread. Any teammate picks up without losing the customer.",
        visual: "inbox",
      },
      {
        title: "SMS & WhatsApp",
        body: "WhatsApp and Telegram are free services you connect while you are online. Nandi does not charge for them. SMS is billed per message.",
        visual: "routing",
      },
    ],
  },
  {
    id: "assist",
    eyebrow: "AI Assist",
    headline: "AI Assist, beside the person on the thread.",
    lede: "Sentiment and a read of the conversation, beside the person. The person still sends.",
    items: [
      {
        title: "Live guidance",
        body: "Sentiment and a suggested next step sit beside the thread while the conversation is still open.",
        visual: "assist",
      },
      {
        title: "Transcription & insights",
        body: "Conversational analysis when it ends: what happened, the outcome, and the next action.",
        visual: "assist",
      },
      {
        title: "Suggested replies",
        body: "Drafts wait for an edit. The reading is a hint. The send button stays with the person.",
        visual: "assist",
      },
    ],
  },
  {
    id: "agents",
    eyebrow: "AI Agents",
    headline: "AI Agents that connect to the floor you already run.",
    lede: "Labeled agents that place a call or receive one. The transcript, the sentiment, and the intent come back with the handoff.",
    items: [
      {
        title: "AI Receptionist",
        body: "Receives the call after hours and on overflow. Hours, a first question, order status. The thread is marked as AI.",
        visual: "inbox",
      },
      {
        title: "AI Sales Agent",
        body: "Places the outbound call on the sales queue, then hands the deal to a person with the transcript attached.",
        visual: "inbox",
      },
      {
        title: "AI Support Agent",
        body: "Receives routine support on the shared inbox. Exceptions come back to the team with the intent included.",
        visual: "inbox",
      },
    ],
  },
];
