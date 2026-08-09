"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { MenuIcon, NandiMark, NandiWordmark, XIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/section";

const links = [
  { label: "Contact center", href: "#departments" },
  { label: "Softphone", href: "#voice" },
  { label: "Team Inbox", href: "#team-inbox" },
  { label: "AI", href: "#ai" },
  { label: "Pricing", href: "#pricing" },
  { label: "Developers", href: "#developers" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Nav starts transparent over the dark hero — where it renders in white —
  // then gains a frosted light surface once content scrolls beneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-canvas/85 backdrop-blur-xl"
          : "on-dark border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-18">
          <Link
            href="#top"
            className="flex items-center gap-2"
            aria-label="Nandi home"
          >
            <NandiMark className="h-8 w-8" />
            <NandiWordmark className={scrolled ? "text-ink" : "text-white"} />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                      scrolled
                        ? "text-muted hover:bg-soft hover:text-ink"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#top"
              className={`hidden rounded-full px-3.5 py-2 text-sm transition-colors sm:block ${
                scrolled
                  ? "text-muted hover:text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Log in
            </Link>
            <ButtonLink href="#get-started" className="hidden sm:inline-flex">
              Get started free
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled
                  ? "text-ink hover:bg-soft"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {open ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile sheet */}
      {open ? (
        // Body scroll is locked while this is open, so the sheet itself has to
        // scroll or the CTAs become unreachable on short viewports.
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-canvas lg:hidden"
        >
          <Container>
            <nav aria-label="Mobile" className="py-4">
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4">
                <ButtonLink
                  href="#get-started"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Get started free
                </ButtonLink>
                <ButtonLink
                  href="#top"
                  variant="secondary"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </ButtonLink>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
