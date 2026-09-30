import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium " +
  "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "active:translate-y-px whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Amber is reserved for the main conversion action per the brand doc.
  primary:
    "bg-accent text-white shadow-lift hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-float",
  secondary:
    "border border-gold/50 bg-transparent text-ink hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5",
  ghost:
    "border border-line bg-white text-ink hover:border-brand hover:bg-brand-soft/50 hover:-translate-y-0.5",
  onDark:
    "bg-gold text-charcoal hover:bg-ivory hover:-translate-y-0.5 shadow-lift",
  onDarkGhost:
    "border border-ivory/35 text-ivory hover:border-gold hover:text-gold hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
