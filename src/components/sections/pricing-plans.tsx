"use client";

import { useState } from "react";
import Link from "next/link";
import {
  billingFromQuery,
  compareRows,
  planAmount,
  planCadence,
  planHref,
  plans,
  type Billing,
} from "@/content/pricing";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";

export function PricingPlans({
  compare = false,
  initialBilling = "annual",
}: {
  compare?: boolean;
  initialBilling?: Billing;
}) {
  const [billing, setBilling] = useState<Billing>(billingFromQuery(initialBilling));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div
          role="group"
          aria-label="Billing"
          className="inline-flex rounded-full border border-line bg-white p-1"
        >
          <BillingButton
            pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </BillingButton>
          <BillingButton
            pressed={billing === "annual"}
            onClick={() => setBilling("annual")}
          >
            Annual
          </BillingButton>
        </div>
        <p className="text-sm text-muted">Annual is a quarter under month to month.</p>
      </div>

      <ul className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const amount = planAmount(plan, billing);
          const showWas = billing === "annual" && plan.monthly !== plan.annual;
          return (
            <li
              key={plan.id}
              className={`flex flex-col rounded-3xl border bg-white p-6 shadow-lift sm:p-7 ${
                plan.featured ? "border-brand ring-1 ring-brand" : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {plan.name}
                </p>
                {plan.featured ? (
                  <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[0.6875rem] font-medium text-brand-dark">
                    Add a number
                  </span>
                ) : null}
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <p className="text-4xl font-semibold tracking-[-0.03em] text-ink">{amount}</p>
                {showWas ? (
                  <p className="text-lg text-faint line-through">
                    <span className="sr-only">Month to month </span>
                    {plan.monthly}
                  </p>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-faint">{planCadence(plan.id, billing)}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{plan.lede}</p>
              <ul className="mt-6 space-y-2.5">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col items-stretch gap-3">
                <ButtonLink
                  href={planHref(plan.id, billing, plan.id === "enterprise")}
                  variant={plan.id === "enterprise" ? "ghost" : "primary"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                  <ArrowRight />
                </ButtonLink>
                {plan.id === "enterprise" ? null : (
                  <Link
                    href={planHref(plan.id, billing, true)}
                    className="text-center text-sm font-medium text-brand hover:text-brand-dark"
                  >
                    Talk to sales
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {compare ? (
        <div id="compare" className="mt-14">
          <h3 className="title text-3xl text-ink sm:text-4xl">Compare the four plans.</h3>
          <p className="mt-3 text-sm text-faint sm:hidden">Swipe sideways for Growth, SME, and Enterprise.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white shadow-lift">
            <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Starter, Growth, SME, and Enterprise. The platform fee follows the billing choice above. Airtime is separate.
              </caption>
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="sticky left-0 bg-white px-4 py-4 font-medium text-faint sm:px-6">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className="px-4 py-4 font-medium text-ink sm:px-6"
                    >
                      <span className="block">{plan.name}</span>
                      <span className="mt-1 block text-base font-semibold">
                        {planAmount(plan, billing)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line/70">
                  <th scope="row" className="sticky left-0 bg-white px-4 py-3.5 font-normal text-ink sm:px-6">
                    Workspace fee
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-4 py-3.5 text-ink sm:px-6">
                      {planAmount(plan, billing)}
                      <span className="mt-0.5 block text-xs text-faint">
                        {planCadence(plan.id, billing)}
                      </span>
                    </td>
                  ))}
                </tr>
                {compareRows.map((row) => (
                  <tr key={row.feature} className="border-b border-line/70 last:border-0">
                    <th scope="row" className="sticky left-0 bg-white px-4 py-3.5 font-normal text-ink sm:px-6">
                      {row.feature}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td key={`${row.feature}-${index}`} className="px-4 py-3.5 sm:px-6">
                        <CompareCell value={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function BillingButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`h-9 rounded-full px-4 text-sm font-medium ${
        pressed ? "bg-brand text-white" : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function CompareCell({ value }: { value: string }) {
  if (value === "Included") {
    return (
      <span className="inline-flex items-center text-brand">
        <CheckIcon className="h-4 w-4" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === "—") {
    return (
      <span className="text-faint">
        —<span className="sr-only"> Not included</span>
      </span>
    );
  }
  return <span className="text-ink">{value}</span>;
}
