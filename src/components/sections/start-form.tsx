"use client";

import { useState, type FormEvent } from "react";
import {
  planAmount,
  planCadence,
  plans,
  type Billing,
  type PlanId,
} from "@/content/pricing";

const teamSizes = ["Just me", "2–10", "11–50", "51–200", "200+"] as const;

type Intent = "start" | "sales";

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  team: string;
  plan: PlanId;
  billing: Billing;
  note: string;
};

const emptyErrors: Partial<Record<keyof Fields, string>> = {};

export function StartForm({
  intent,
  plan,
  billing,
}: {
  intent: Intent;
  plan: PlanId;
  billing: Billing;
}) {
  const sales = intent === "sales";
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    phone: "",
    team: "",
    plan,
    billing,
    note: "",
  });
  const [errors, setErrors] = useState(emptyErrors);
  const [mailto, setMailto] = useState("");

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "Use a work email we can reply to.";
    }
    if (fields.company.trim().length < 2) next.company = "Add the company name.";
    const digits = fields.phone.replace(/\D/g, "");
    const talking = sales || fields.plan === "enterprise";
    if (talking && digits.length < 7) next.phone = "Add a phone number.";
    if (!talking && fields.phone.trim() && digits.length < 7) {
      next.phone = "Check the phone number.";
    }
    if (!fields.team) next.team = "Choose a team size.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const chosen = plans.find((entry) => entry.id === fields.plan);
    const subject = talking ? "Talk to sales" : "Get started";
    const amount = chosen ? planAmount(chosen, fields.billing) : "";
    const body = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      fields.phone.trim() ? `Phone: ${fields.phone.trim()}` : "",
      `Company: ${fields.company.trim()}`,
      `Team: ${fields.team}`,
      `Plan: ${chosen?.name ?? fields.plan} (${amount}, ${chosen ? planCadence(chosen.id, fields.billing) : fields.billing})`,
      fields.note.trim() ? `Note: ${fields.note.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:hello@usenandi.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailto(href);
    window.location.href = href;
  };

  if (mailto) {
    return (
      <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          Ready to send
        </p>
        <h2 className="title mt-3 text-3xl text-ink">Send it from your mail app.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The note is addressed to hello@usenandi.co. We reply from that address.
        </p>
        <a
          href={mailto}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-base font-medium text-white shadow-lift"
        >
          Open the email again
        </a>
      </div>
    );
  }

  const chosen = plans.find((entry) => entry.id === fields.plan) ?? plans[0];
  const talking = sales || fields.plan === "enterprise";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={fields.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => set("name", value)}
        />
        <Field
          id="email"
          label="Work email"
          type="email"
          value={fields.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => set("email", value)}
        />
        <Field
          id="company"
          label="Company"
          value={fields.company}
          error={errors.company}
          autoComplete="organization"
          onChange={(value) => set("company", value)}
        />
        <Field
          id="phone"
          label={talking ? "Phone" : "Phone (optional)"}
          type="tel"
          value={fields.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(value) => set("phone", value)}
        />
        <div className="sm:col-span-2">
          <label htmlFor="team" className="text-sm font-medium text-ink">
            Team size
          </label>
          <select
            id="team"
            name="team"
            value={fields.team}
            aria-invalid={errors.team ? true : undefined}
            aria-describedby={errors.team ? "team-error" : undefined}
            onChange={(event) => set("team", event.target.value)}
            className="mt-1.5 h-12 w-full rounded-xl border border-line bg-canvas px-3 text-sm text-ink"
          >
            <option value="">Select</option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.team ? (
            <p id="team-error" className="mt-1.5 text-sm text-red">
              {errors.team}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-ink">Billing</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {(["monthly", "annual"] as const).map((cycle) => {
            const selected = fields.billing === cycle;
            return (
              <label
                key={cycle}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-sm ${
                  selected ? "border-brand bg-brand-soft/60 text-ink" : "border-line text-muted"
                }`}
              >
                <input
                  type="radio"
                  name="billing"
                  value={cycle}
                  checked={selected}
                  onChange={() => set("billing", cycle)}
                  className="sr-only"
                />
                <span className="block font-medium text-ink">
                  {cycle === "annual" ? "Annual" : "Monthly"}
                </span>
                <span className="mt-0.5 block text-xs">
                  {planAmount(chosen, cycle)}
                  {chosen.id === "enterprise" || chosen.id === "starter"
                    ? ""
                    : cycle === "annual"
                      ? " · a quarter under"
                      : " · month to month"}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-ink">Plan</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {plans.map((entry) => {
            const selected = fields.plan === entry.id;
            return (
              <label
                key={entry.id}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-sm ${
                  selected ? "border-brand bg-brand-soft/60 text-ink" : "border-line text-muted"
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={entry.id}
                  checked={selected}
                  onChange={() => set("plan", entry.id)}
                  className="sr-only"
                />
                <span className="block font-medium text-ink">{entry.name}</span>
                <span className="mt-0.5 block text-xs">{planAmount(entry, fields.billing)}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-4">
        <label htmlFor="note" className="text-sm font-medium text-ink">
          {talking ? "What do you want to cover?" : "Anything we should know?"}
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          value={fields.note}
          onChange={(event) => set("note", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-line bg-canvas px-3 py-3 text-sm text-ink"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent px-6 text-base font-medium text-white shadow-lift hover:bg-accent-dark sm:w-auto"
      >
        {talking ? "Talk to sales" : fields.plan === "starter" ? "Get started free" : "Get started"}
      </button>
      <p className="mt-3 text-sm text-faint">No card. We reply from hello@usenandi.co.</p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 h-12 w-full rounded-xl border border-line bg-canvas px-3 text-sm text-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}
