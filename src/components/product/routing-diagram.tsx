import { VoiceIcon, WhatsAppIcon } from "@/components/ui/icons";

type Department = {
  name: string;
  number: string;
  agents: string[];
  queue: string;
  /** Lane + accent colours, kept in one place per department. */
  stroke: string;
  chip: string;
  dot: string;
};

const departments: Department[] = [
  {
    name: "Sales",
    number: "IVR · Press 1",
    agents: ["TB", "AO", "KN"],
    queue: "3 in queue",
    stroke: "var(--color-accent)",
    chip: "bg-accent-soft text-accent-dark ring-accent/20",
    dot: "bg-accent",
  },
  {
    name: "Support",
    number: "IVR · Press 2",
    agents: ["IA", "CE"],
    queue: "1 in queue",
    stroke: "var(--color-brand)",
    chip: "bg-brand-soft text-brand-dark ring-brand/20",
    dot: "bg-brand",
  },
  {
    name: "Inquiries",
    number: "IVR · Press 3",
    agents: ["AB", "ON"],
    queue: "0 in queue",
    stroke: "#7c3aed",
    chip: "bg-violet-50 text-violet-700 ring-violet-600/15",
    dot: "bg-violet-500",
  },
];

/**
 * One inbound number fanning out into three departments, each with its own
 * queue and agents — then collapsing back into a single shared customer
 * timeline underneath.
 *
 * The lanes are SVG paths with travelling dashes. `preserveAspectRatio="none"`
 * lets the diagram stretch to whatever width the column gives it, and
 * `vector-effect="non-scaling-stroke"` stops that stretch from smearing the
 * dashes. Decorative, so the whole figure is hidden from assistive tech and
 * described once in text.
 */
export function RoutingDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <p className="sr-only">
        A diagram showing one business number routing through an IVR into three
        departments — Sales, Support and Inquiries — each with its own agents
        and queue, all feeding a single shared customer timeline.
      </p>

      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-lift sm:p-7"
      >
        <div
          className="dot-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(28rem_18rem_at_50%_0%,black,transparent)]"
        />

        <div className="relative grid items-center gap-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,0.7fr)_minmax(0,1fr)]">
          {/* Inbound */}
          <div className="rounded-xl border border-line bg-soft/60 p-4">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-faint">
              One business number
            </p>
            <p className="mt-2 font-mono text-[0.9375rem] font-semibold text-ink">
              0700 NANDI
            </p>
            <div className="mt-3 space-y-1.5">
              <span className="flex items-center gap-1.5 text-[0.6875rem] text-muted">
                <VoiceIcon className="h-3.5 w-3.5 text-violet-500" />
                Inbound call · ringing
              </span>
              <span className="flex items-center gap-1.5 text-[0.6875rem] text-muted">
                <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-500" />
                WhatsApp · new message
              </span>
            </div>
          </div>

          {/* Lanes — replaced by a compact label on narrow screens */}
          <div className="hidden h-[13rem] md:block">
            <svg
              viewBox="0 0 200 220"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              {departments.map((d, i) => {
                const y = [30, 110, 190][i];
                const path =
                  i === 1
                    ? "M0,110 L200,110"
                    : `M0,110 C70,110 120,${y} 200,${y}`;
                return (
                  <g key={d.name}>
                    <path
                      d={path}
                      fill="none"
                      stroke="var(--color-line)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={path}
                      fill="none"
                      stroke={d.stroke}
                      strokeWidth="2"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      className="flow-dash"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  </g>
                );
              })}
            </svg>
            <p className="-mt-2 text-center text-[0.625rem] font-medium uppercase tracking-[0.14em] text-faint">
              Routing
            </p>
          </div>

          <p className="text-center text-[0.6875rem] font-medium text-faint md:hidden">
            routes to ↓
          </p>

          {/* Departments */}
          <div className="space-y-2.5">
            {departments.map((d) => (
              <div
                key={d.name}
                className="flex items-center gap-3 rounded-xl border border-line bg-white p-3 shadow-sm"
              >
                <span className={`h-8 w-1 shrink-0 rounded-full ${d.dot}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.8125rem] font-semibold text-ink">
                    {d.name}
                  </p>
                  <p className="text-[0.625rem] text-faint">{d.number}</p>
                </div>

                {/* Agent stack */}
                <div className="flex -space-x-1.5">
                  {d.agents.map((a) => (
                    <span
                      key={a}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-soft text-[0.5625rem] font-semibold text-muted ring-2 ring-white"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <span
                  className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[0.625rem] font-medium ring-1 ring-inset sm:inline ${d.chip}`}
                >
                  {d.queue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shared timeline: the payoff line of the whole diagram */}
        <div className="relative mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-dashed border-brand/30 bg-brand/[0.04] px-4 py-3">
          <span className="text-[0.6875rem] font-semibold text-brand">
            One shared customer timeline
          </span>
          <span className="text-[0.6875rem] text-muted">
            Every department sees the same history — calls, chats and notes.
          </span>
        </div>
      </div>
    </div>
  );
}
