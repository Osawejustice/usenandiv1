import { RoutingDiagram } from "@/components/product/routing-diagram";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

const departments = [
  {
    name: "Sales / Telesales",
    body: "Outbound dialling, callback queues and a shared view of every deal conversation.",
    accent: "text-accent",
    bar: "bg-accent",
  },
  {
    name: "Customer Support",
    body: "Inbound queues, statuses and internal notes so nothing is dropped between shifts.",
    accent: "text-brand",
    bar: "bg-brand",
  },
  {
    name: "Inquiries / Business Relations",
    body: "General questions and partner conversations, routed away from your sales floor.",
    accent: "text-violet-600",
    bar: "bg-violet-500",
  },
];

const perDepartment = [
  "Its own numbers and IVR",
  "Its own queues and agents",
  "Its own working hours",
  "One shared customer timeline",
];

export function Departments() {
  return (
    <Section id="departments" labelledBy="departments-title">
      <Container>
        <SectionHeading
          id="departments-title"
          eyebrow="Multi-department"
          title="Built for how real teams work."
          lede="Most tools force you to choose between a sales dialer or a support inbox. Nandi lets you run both — cleanly."
        />

        <Reveal delay={0.08}>
          <div className="mt-14">
            <RoutingDiagram />
          </div>
        </Reveal>

        <RevealGroup className="mt-6 grid gap-4 md:grid-cols-3">
          {departments.map((d) => (
            <RevealItem key={d.name}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                {/* Department colour reads as a spine down the left edge */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1 ${d.bar}`}
                />
                <h3
                  className={`text-base font-semibold tracking-[-0.015em] ${d.accent}`}
                >
                  {d.name}
                </h3>
                <p className="text-pretty-body mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                  {d.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.12}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {perDepartment.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 text-[0.9375rem] text-muted"
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-brand" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
