import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/** Consistent horizontal gutter + max width for every band on the page. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-20 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "onDark";
}) {
  const tones = {
    brand: "text-brand",
    onDark: "text-brand-light",
  };
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.16em] ${tones[tone]}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = "center",
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const isCentered = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCentered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "dark" ? "onDark" : "brand"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        id={id}
        className={`text-balance-tight text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`text-pretty-body mt-5 text-lg leading-relaxed ${
            tone === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
