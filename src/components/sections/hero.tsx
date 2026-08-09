"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/product/hero-visual";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import {
  DepartmentsIcon,
  HeadsetIcon,
  SparkleIcon,
  TimelineIcon,
} from "@/components/ui/icons";
import { Container } from "@/components/ui/section";

const supporting = [
  "No credit card required",
  "Transparent prepaid pricing",
  "Live in under 12 minutes",
];

/** The four capability anchors from the positioning doc, in priority order. */
const anchors = [
  { Icon: HeadsetIcon, label: "Softphone" },
  { Icon: DepartmentsIcon, label: "Multi-department routing" },
  { Icon: TimelineIcon, label: "Shared history" },
  { Icon: SparkleIcon, label: "AI that helps" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.75,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    // The hero is the one saturated surface on the page — everything below it
    // returns to the light canvas. `on-dark` switches focus rings to the
    // lighter teal so they stay visible against charcoal.
    <section
      id="top"
      className="on-dark relative overflow-hidden bg-charcoal pb-16 pt-24 sm:pb-20 lg:pb-20 lg:pt-28"
    >
      {/* ---------- Layered backdrop ----------
          Aurora mesh → fading grid → spotlight → grain. Each layer is a cheap
          CSS paint; together they give the depth a flat gradient can't. */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="aurora absolute inset-0 opacity-70" />
        <div className="grid-fade absolute inset-0" />
        <div className="spotlight absolute inset-0" />
        <div className="grain absolute inset-0 opacity-[0.15] mix-blend-overlay" />
        {/* Fade into the canvas colour so the next section doesn't hard-cut */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-14">
          {/* ---------- Copy ---------- */}
          <div className="text-center lg:text-left">
            <motion.div {...rise(0)}>
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-white/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
                </span>
                Cloud Contact Center · Voice, messaging &amp; AI
              </span>
            </motion.div>

            {/* Exactly two lines from `sm` up. Each line is its own
                non-wrapping block, so the type scale is sized to the narrower
                column rather than trusting the browser to break in the right
                place — that was what pushed the hero out of the viewport. */}
            <motion.h1
              className="mt-5 text-[2.125rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.75rem] lg:text-[3.125rem] xl:text-[3.5rem]"
              {...rise(0.08)}
            >
              <span className="block sm:whitespace-nowrap">
                Every conversation.
              </span>
              <span className="text-gradient block sm:whitespace-nowrap">
                One contact center.
              </span>
            </motion.h1>

            <motion.p
              className="text-pretty-body mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0"
              {...rise(0.16)}
            >
              Nandi gives your team a softphone, multi-department routing and
              shared customer history — so sales and support finally run in one
              place.
            </motion.p>

            <motion.ul
              className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              {...rise(0.22)}
            >
              {anchors.map(({ Icon, label }) => (
                <li key={label}>
                  <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.8125rem] font-medium text-white/75">
                    <Icon className="h-3.5 w-3.5 text-brand-light" />
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              {...rise(0.28)}
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
                href="#how-it-works"
                variant="onDarkGhost"
                size="lg"
                className="w-full sm:w-auto"
              >
                See how it works
              </ButtonLink>
            </motion.div>

            <motion.ul
              className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/40 lg:justify-start"
              {...rise(0.34)}
            >
              {supporting.map((item, i) => (
                <li key={item} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-white/20">
                      ·
                    </span>
                  ) : null}
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ---------- Illustration ---------- */}
          <motion.div
            className="relative"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.94, y: 28 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: {
                    duration: 1,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1] as const,
                  },
                })}
          >
            <HeroVisual className="mx-auto max-w-sm lg:max-w-[25rem] xl:max-w-[27rem]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
