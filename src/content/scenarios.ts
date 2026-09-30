export type Scenario = {
  id: string;
  audience: string;
  title: string;
  lede: string;
  body: [string, string];
  points: [string, string, string];
  image: string;
  alt: string;
  pip: string;
};

export const scenarios: Scenario[] = [
  {
    id: "sales",
    audience: "Sales teams",
    title: "The sale stays on the call",
    lede: "A callback is not a fresh start. The note, the last message, and this call are one customer.",
    body: [
      "The growth sits in the conversation. A seller picks up the deal where it stopped, instead of rebuilding it from memory.",
      "Assist can draft the follow-up. The person still sends it. The timeline keeps the promise that was made on the call.",
    ],
    points: [
      "Callbacks on the same customer",
      "A draft the seller edits and sends",
      "Sales, Support, and Inquiries in their own queues",
    ],
    image: "/gallery/sales.jpg",
    alt: "Illustration of a sales lead on a call in a glass office corridor",
    pip: "bg-clay",
  },
  {
    id: "hotels",
    audience: "Hotels",
    title: "The desk and the booking share one guest",
    lede: "A reservation, a request, and a call from the lobby are one guest, not three records.",
    body: [
      "Front office, reservations, and sales keep their own queues and their own hours. The guest does not restart the story at every desk.",
      "The softphone is the phone already at the desk, or the one in a manager’s hand. The call is written onto the guest timeline.",
    ],
    points: [
      "One guest across the desks",
      "Queues for front office, reservations, and sales",
      "The night’s questions wait with a transcript",
    ],
    image: "/gallery/hotel.jpg",
    alt: "Illustration of a hotel lobby desk with staff and a guest",
    pip: "bg-gold",
  },
  {
    id: "startups",
    audience: "Startups and fintechs",
    title: "One number while the team is still small",
    lede: "Sales and support share an inbox. Start free. A number is a platform fee, and calls are airtime.",
    body: [
      "A young company, including a fintech, rarely wants a room of desk phones. Open the inbox free. Add a number when the first calls matter, and fund airtime in US dollars.",
      "The same setup fits a small team and a company hiring its tenth seller. Setup is $0. The aim is a first conversation in under 12 minutes.",
    ],
    points: [
      "Free inbox, then a platform fee",
      "Voice, messaging, and SMS on one timeline",
      "No per-agent seat trap",
    ],
    image: "/gallery/startup.jpg",
    alt: "Illustration of a startup team around a table in a bright office",
    pip: "bg-brand",
  },
  {
    id: "enterprise",
    audience: "Established teams",
    title: "Departments, offices, then the API",
    lede: "An established sales floor keeps its queues. A customer who called another office is still the same record.",
    body: [
      "Hours, IVR, and the three departments behave like departments. The shared thing is the customer timeline, not a second tool for each office.",
      "When a flow no longer belongs in the dashboard, the API is the same objects: numbers, calls, messages, and the wallet debit.",
    ],
    points: [
      "Own queues and hours per department",
      "One timeline across offices",
      "The API when the dashboard is not enough",
    ],
    image: "/gallery/enterprise.jpg",
    alt: "Illustration of an established sales team around a long table",
    pip: "bg-plum",
  },
  {
    id: "nights",
    audience: "After hours",
    title: "The floor can go home",
    lede: "Simple questions still get an answer. The agent is labeled. The morning opens a transcript.",
    body: [
      "A labeled agent can receive the night call, or place the outbound one that cannot wait until morning. Same number, same queues. The worker is never disguised.",
      "Assist stays beside the person who is on shift, and it never owns the send button. The handoff includes the transcript and the intent.",
    ],
    points: [
      "Labeled AI, never disguised",
      "Same queues after hours",
      "A person takes over with the transcript",
    ],
    image: "/gallery/after-hours.jpg",
    alt: "Illustration of a quiet reception desk at night with a glowing phone",
    pip: "bg-clay",
  },
];
