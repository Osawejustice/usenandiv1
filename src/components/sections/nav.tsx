"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { productMenu, solutionMenu, type MenuLink } from "@/content/products";
import { ButtonLink } from "@/components/ui/button";
import { MenuIcon, NandiMark, NandiWordmark, XIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/section";

type MenuId = "product" | "solutions";

const columnsFor: Record<MenuId, { heading: string; links: MenuLink[] }[]> = {
  product: productMenu,
  solutions: solutionMenu,
};

export function Nav() {
  const [menu, setMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const productTrigger = useRef<HTMLButtonElement>(null);
  const solutionsTrigger = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<number | null>(null);
  const productPanelId = useId();
  const solutionsPanelId = useId();

  const clearHover = () => {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  const openSoon = (id: MenuId) => {
    clearHover();
    hoverTimer.current = window.setTimeout(() => setMenu(id), 120);
  };

  const closeSoon = () => {
    clearHover();
    hoverTimer.current = window.setTimeout(() => setMenu(null), 160);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => clearHover(), []);

  const closeAll = () => {
    setMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const onPanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const links = Array.from(
      event.currentTarget.querySelectorAll<HTMLAnchorElement>("a[href]"),
    );
    if (links.length === 0) return;
    event.preventDefault();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next =
      event.key === "ArrowDown"
        ? links[(current + 1 + links.length) % links.length]
        : links[(current - 1 + links.length) % links.length];
    next?.focus();
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-xl"
      onMouseLeave={closeSoon}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setMenu(null);
        }
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Nandi home"
            onClick={closeAll}
          >
            <NandiMark className="h-8 w-8" />
            <NandiWordmark className="text-ink" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li
                onMouseEnter={() => openSoon("product")}
                onMouseLeave={closeSoon}
              >
                <button
                  ref={productTrigger}
                  type="button"
                  className="rounded-xl px-3.5 py-2 text-sm text-muted transition-colors hover:bg-soft hover:text-ink"
                  aria-expanded={menu === "product"}
                  aria-controls={productPanelId}
                  onClick={() => setMenu((current) => (current === "product" ? null : "product"))}
                >
                  Product
                </button>
              </li>
              <li
                onMouseEnter={() => openSoon("solutions")}
                onMouseLeave={closeSoon}
              >
                <button
                  ref={solutionsTrigger}
                  type="button"
                  className="rounded-xl px-3.5 py-2 text-sm text-muted transition-colors hover:bg-soft hover:text-ink"
                  aria-expanded={menu === "solutions"}
                  aria-controls={solutionsPanelId}
                  onClick={() =>
                    setMenu((current) => (current === "solutions" ? null : "solutions"))
                  }
                >
                  Solutions
                </button>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="block rounded-xl px-3.5 py-2 text-sm text-muted transition-colors hover:bg-soft hover:text-ink"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block rounded-xl px-3.5 py-2 text-sm text-muted transition-colors hover:bg-soft hover:text-ink"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href="/get-started?intent=sales" variant="ghost">
              Talk to sales
            </ButtonLink>
            <ButtonLink href="/get-started">Get started free</ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-soft lg:hidden"
          >
            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {menu ? (
        <div
          id={menu === "product" ? productPanelId : solutionsPanelId}
          className="hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-canvas lg:block"
          onMouseEnter={clearHover}
          onMouseLeave={closeSoon}
          onKeyDown={onPanelKeyDown}
        >
          <Container>
            <div className="grid gap-8 py-7 lg:grid-cols-[minmax(0,1fr)_16rem]">
              <div
                className={`grid gap-8 ${
                  columnsFor[menu].length > 3 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-3"
                }`}
              >
                {columnsFor[menu].map((column) => (
                  <div key={column.heading}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                      {column.heading}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {column.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            onClick={() => setMenu(null)}
                            className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-soft"
                          >
                            <span className="block text-sm font-medium text-ink">
                              {link.title}
                            </span>
                            <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">
                              {link.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {menu === "product" ? (
                <aside className="rounded-2xl bg-soft p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                    Early access
                  </p>
                  <p className="mt-3 text-base font-semibold tracking-[-0.02em] text-ink">
                    Calling and a shared inbox, then AI.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Voice and texting come first. AI Assist reads sentiment and the conversation. Labeled agents place and receive calls on the same queues.
                  </p>
                  <Link
                    href="/get-started"
                    onClick={() => setMenu(null)}
                    className="mt-4 inline-flex text-sm font-medium text-brand"
                  >
                    Get started free →
                  </Link>
                </aside>
              ) : (
                <aside className="rounded-2xl bg-soft p-5">
                  <p className="text-sm leading-relaxed text-muted">
                    The same customer. A different queue.
                  </p>
                  <p className="mt-3 text-base font-semibold tracking-[-0.02em] text-ink">
                    Sales, Support, and Inquiries share one timeline.
                  </p>
                </aside>
              )}
            </div>
          </Container>
        </div>
      ) : null}

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-canvas lg:hidden"
        >
          <Container>
            <nav aria-label="Mobile" className="py-4">
              {(["product", "solutions"] as const).map((id) => (
                <div key={id} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                    aria-expanded={mobileSection === id}
                    onClick={() =>
                      setMobileSection((current) => (current === id ? null : id))
                    }
                  >
                    {id === "product" ? "Product" : "Solutions"}
                    <span className="text-faint" aria-hidden="true">
                      {mobileSection === id ? "–" : "+"}
                    </span>
                  </button>
                  {mobileSection === id ? (
                    <div className="space-y-5 pb-4">
                      {columnsFor[id].map((column) => (
                        <div key={column.heading}>
                          <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                            {column.heading}
                          </p>
                          <ul className="mt-2">
                            {column.links.map((link) => (
                              <li key={link.title}>
                                <Link
                                  href={link.href}
                                  onClick={closeAll}
                                  className="block rounded-xl px-2 py-2.5"
                                >
                                  <span className="block text-sm font-medium text-ink">
                                    {link.title}
                                  </span>
                                  <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">
                                    {link.description}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <Link
                href="/developers"
                onClick={closeAll}
                className="block border-b border-line py-3 text-base font-medium text-ink"
              >
                Integrations
              </Link>
              <Link
                href="/pricing"
                onClick={closeAll}
                className="block border-b border-line py-3 text-base font-medium text-ink"
              >
                Pricing
              </Link>

              <div className="mt-4 flex flex-col gap-2">
                <ButtonLink href="/get-started" size="lg" onClick={closeAll}>
                  Get started free
                </ButtonLink>
                <ButtonLink href="/get-started?intent=sales" variant="ghost" size="lg" onClick={closeAll}>
                  Talk to sales
                </ButtonLink>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
