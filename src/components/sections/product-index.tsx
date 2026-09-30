"use client";

import { useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/content/products";

const filters = ["All", "Team-led", "AI", "Platform"] as const;

const caps: Record<string, string> = {
  voice: "bg-brand",
  inbox: "bg-red",
  channels: "bg-clay",
  assist: "bg-plum",
  agents: "bg-gold",
  api: "bg-red-deep",
};

export function ProductIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = products.filter((product) => filter === "All" || product.filter === filter);

  return (
    <div>
      <div role="tablist" aria-label="Filter products" className="mt-8 flex flex-wrap gap-2">
        {filters.map((entry) => {
          const selected = entry === filter;
          return (
            <button
              key={entry}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`rounded-full px-3.5 py-1.5 text-sm ${
                selected ? "bg-brand text-white" : "bg-white text-muted"
              }`}
              onClick={() => setFilter(entry)}
            >
              {entry}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <li>
      <Link
        href={product.href}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-lift hover:border-brand/30"
      >
        <span aria-hidden="true" className={`block h-3 ${caps[product.slug] ?? "bg-brand"}`} />
        <div className="flex h-full flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
          {product.mode}
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink">{product.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{product.oneLiner}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
          {product.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        </div>
      </Link>
    </li>
  );
}
