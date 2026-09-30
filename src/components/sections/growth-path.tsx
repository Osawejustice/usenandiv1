import { Container } from "@/components/ui/section";

const stages = [
  {
    n: "01",
    title: "Start free",
    body: "The inbox, plus WhatsApp and Telegram you connect. No charge from us.",
    wash: "bg-brand-soft",
  },
  {
    n: "02",
    title: "Add a number",
    body: "Voice on a platform fee. Calls are airtime.",
    wash: "bg-sand",
  },
  {
    n: "03",
    title: "Add AI",
    body: "Assist reads sentiment and the conversation. Agents place and receive the calls you cannot staff.",
    wash: "bg-lilac",
  },
  {
    n: "04",
    title: "Open the API",
    body: "When a flow outgrows the dashboard, the same objects are available as code.",
    wash: "bg-blush",
  },
];

export function GrowthPath() {
  return (
    <section id="path" aria-labelledby="path-title" className="bg-ivory py-16 sm:py-24">
      <Container>
        <h2
          id="path-title"
          className="title text-3xl text-ink sm:text-4xl"
        >
          Start where you are.
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <li key={stage.n} className={`rounded-2xl p-5 ${stage.wash}`}>
              <p className="font-mono text-xs font-semibold text-brand">{stage.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stage.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
