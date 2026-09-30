import Link from "next/link";
import { products } from "@/content/products";
import { NandiMark } from "@/components/ui/icons";
import { Container } from "@/components/ui/section";

const columns = [
  {
    heading: "Product",
    links: products.map((product) => ({ label: product.name, href: product.href })),
  },
  {
    heading: "Platform",
    links: [
      { label: "Webhooks", href: "/developers" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Scenarios", href: "/scenarios" },
      { label: "Contact", href: "mailto:hello@usenandi.co" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/#get-started" },
      { label: "Terms", href: "/#get-started" },
      { label: "DPA", href: "/#get-started" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-ivory">
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
              The conversational intelligence platform for a sales-focused team. Voice and a shared inbox.
            </p>
            <p className="mt-3 text-sm text-faint">nandi.to</p>
            <p className="mt-3 text-sm text-faint">
              <a
                href="mailto:hello@usenandi.co"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                hello@usenandi.co
              </a>
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 sm:flex-row">
          <p className="text-sm text-faint">© {new Date().getFullYear()} Nandi.</p>
          <p className="text-sm text-faint">nandi.to</p>
        </div>
      </Container>
    </footer>
  );
}
