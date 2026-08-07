# Nandi — Landing Page

Marketing site for **Nandi**, the Cloud Communications Platform (CPaaS) built for
African businesses. Built from the Landing Page Documentation v1.0 (August 2026).

Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx eslint src   # lint
```

## Structure

```
src/
  app/
    layout.tsx          fonts (Inter + JetBrains Mono), SEO metadata
    globals.css         design tokens, ambient washes, reduced-motion rules
    page.tsx            section composition order
  components/
    ui/                 primitives: Button, Reveal, Section, icons, channel chips
    product/            Team Inbox mockups + the data that drives them
    sections/           one file per band on the page
```

### Design tokens

Defined once in `globals.css` under `@theme`, consumed as Tailwind utilities
(`bg-canvas`, `text-ink`, `bg-brand`, `text-accent`, …):

| Token             | Value     | Use                              |
| ----------------- | --------- | -------------------------------- |
| `canvas` / `soft` | `#FAFAF9` / `#F5F5F4` | Page and alternating band backgrounds |
| `ink`             | `#0C0A09` | Primary text                     |
| `charcoal`        | `#1C1917` | Dark sections (Developers, final CTA) |
| `brand`           | `#0F766E` | Deep teal, primary brand accent   |
| `accent`          | `#D97706` | Warm amber, reserved for conversion CTAs |
| `live`            | `#16A34A` | Live / success states            |

Amber is deliberately reserved for the primary conversion action so "Get started
free" never competes with anything else on the page.

### Section order

Nav → Hero → Trust bar → Problem/Solution → Core pillars → Team Inbox deep dive →
Channels → Developers → How it works → Pricing teaser → Final CTA → Footer

## Product mockups

The Team Inbox visuals are real DOM, not images — they stay crisp at any density
and cost no image bytes. Content lives in
`src/components/product/inbox-data.ts`, so copy and the demo thread can be
edited without touching layout. The thread walks through the bot-to-human
handoff moment on purpose, since that's the core differentiator.

Mockups are `aria-hidden` with a `sr-only` text summary alongside, so screen
readers get one useful description instead of dozens of meaningless fragments.

## Accessibility

- Semantic landmarks, one `h1`, sections labelled via `aria-labelledby`
- Skip-to-content link
- Visible focus rings on every interactive element
- Mobile menu wired for `aria-expanded`, Escape to close, scroll lock
- All entrance and looping animations respect `prefers-reduced-motion`, in CSS
  and through Framer Motion's `useReducedMotion`

## Before launch

Placeholders to replace with real data:

- **Trust bar** (`sections/trust-bar.tsx`) — swap the stat row for customer logos
- **Pricing rates** (`sections/pricing-teaser.tsx`) — marked indicative; confirm
  against the billing engine
- **CTA destinations** — every button currently points at an in-page anchor.
  Wire `#get-started` to signup, "Read the docs" to the docs site, "Book a demo"
  to your scheduling link
- **OG image** — metadata declares `summary_large_image`; add
  `public/og.png` and reference it in `app/layout.tsx`
- **Footer legal links** — Privacy, Terms and DPA are stubs

Source of truth: Nandi Product Documentation v0.2, System Design v0.2,
Development Milestones v0.2.
