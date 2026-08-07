"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MobileInboxMock } from "@/components/product/mobile-inbox-mock";
import { TeamInboxMock } from "@/components/product/team-inbox-mock";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { ChannelChip } from "@/components/ui/channel";
import { Container } from "@/components/ui/section";

const supporting = [
  "No credit card required",
  "Top up in Naira",
  "Live in under 12 minutes",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    // `overflow-x-clip` instead of `overflow-hidden`: it still contains the
    // ambient washes horizontally, but lets the floating phone hang past the
    // bottom edge instead of being sheared off.
    <section
      id="top"
      className="relative overflow-x-clip pb-16 pt-28 sm:pt-36 lg:pb-24"
    >
      {/* Ambient wash + very faint weave, both purely decorative */}
      <div aria-hidden="true" className="ambient-warm absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="weave absolute inset-0 -z-10 opacity-[0.5] [mask-image:radial-gradient(60rem_40rem_at_50%_0%,black,transparent)]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...rise(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
              </span>
              Now in early access · Built in Lagos
            </span>
          </motion.div>

          <motion.h1
            className="text-balance-tight mt-6 text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.75rem] lg:text-[4.25rem]"
            {...rise(0.08)}
          >
            Talk to your customers across every channel — from one beautiful
            inbox.
          </motion.h1>

          <motion.p
            className="text-pretty-body mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            {...rise(0.16)}
          >
            Nandi is the modern Cloud Communications Platform built for African
            businesses. SMS, WhatsApp, Voice, Telegram and intelligent bots —
            with transparent Naira pricing and a Team Inbox your whole team will
            actually love.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            {...rise(0.24)}
          >
            <ButtonLink
              href="#get-started"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get started free
              <ArrowRight />
            </ButtonLink>
            <ButtonLink
              href="#team-inbox"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              See the Team Inbox
            </ButtonLink>
          </motion.div>

          <motion.ul
            className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-faint"
            {...rise(0.32)}
          >
            {supporting.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-line">
                    ·
                  </span>
                ) : null}
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>

      {/* Product visual */}
      <Container className="mt-16 sm:mt-20">
        <motion.div
          className="relative"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.9,
                  delay: 0.34,
                  ease: [0.16, 1, 0.3, 1] as const,
                },
              })}
        >
          {/* Soft ambient glow behind the mockup */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-6 bottom-8 -z-10 rounded-[3rem] bg-brand/12 blur-3xl"
          />

          <div className="flex flex-wrap items-center justify-center gap-2 pb-5">
            <span className="text-xs font-medium text-faint">
              Every channel, one thread
            </span>
            <ChannelChip channel="whatsapp" />
            <ChannelChip channel="sms" />
            <ChannelChip channel="voice" />
            <ChannelChip channel="telegram" />
          </div>

          <TeamInboxMock />

          <MobileInboxMock className="pointer-events-none absolute -bottom-10 -right-2 hidden lg:block xl:-right-10" />
        </motion.div>
      </Container>
    </section>
  );
}
