import type { Metadata } from "next";
import { StartForm } from "@/components/sections/start-form";
import { Container } from "@/components/ui/section";
import { billingFromQuery, planFromQuery } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Tell us about the floor, or open the shared inbox. We reply from hello@usenandi.co.",
  alternates: { canonical: "https://nandi.to/get-started" },
};

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string; plan?: string; billing?: string }>;
}) {
  const params = await searchParams;
  const intent = params.intent === "sales" ? "sales" : "start";
  const plan = planFromQuery(params.plan, intent === "sales" ? "enterprise" : "starter");
  const billing = billingFromQuery(params.billing);
  const sales = intent === "sales";

  return (
    <main id="main" className="paper pb-20 pt-28 sm:pt-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {sales ? "Talk to sales" : "Get started"}
            </p>
            <h1 className="title mt-3 text-5xl text-ink sm:text-6xl">
              {sales ? "Tell us about the floor." : "Open the contact center."}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              {sales
                ? "Tell us the queues, the hours, and how customers reach you. We reply from hello@usenandi.co."
                : "Open the shared inbox. Add a number when the team is ready for voice. We reply from hello@usenandi.co."}
            </p>
          </div>
          <StartForm intent={intent} plan={plan} billing={billing} />
        </div>
      </Container>
    </main>
  );
}
