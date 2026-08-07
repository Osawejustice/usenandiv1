import Link from "next/link";
import { NandiMark } from "@/components/ui/icons";
import { Container } from "@/components/ui/section";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Team Inbox", href: "#team-inbox" },
      { label: "Channels", href: "#channels" },
      { label: "Campaigns", href: "#features" },
      { label: "Bots", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#developers" },
      { label: "API reference", href: "#developers" },
      { label: "Webhooks", href: "#developers" },
      { label: "Status", href: "#developers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Contact", href: "#get-started" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#top" },
      { label: "Terms", href: "#top" },
      { label: "DPA", href: "#top" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container>
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.3fr)_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-2">
              <NandiMark className="h-8 w-8" />
              <span className="text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">
                Nandi
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              The Cloud Communications Platform built for African businesses.
            </p>
            <p className="mt-4 text-sm text-faint">
              Support:{" "}
              <a
                href="mailto:hello@usenandi.co"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                hello@usenandi.co
              </a>
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[0.9375rem] text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 sm:flex-row">
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} Nandi. All rights reserved.
          </p>
          <p className="text-sm text-faint">
            Made with care in Lagos 🇳🇬
          </p>
        </div>
      </Container>
    </footer>
  );
}
