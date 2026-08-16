"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookCallButton, GrowthPlanButton } from "./Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CornerGlow({
  className,
  path,
}: {
  className?: string;
  path: string;
}) {
  return (
    <div
      className={`absolute text-[#4555fd] drop-shadow-[0_0_18px_#4555fd] ${className ?? ""}`}
    >
      <svg width="86" height="86" viewBox="0 0 86 86" fill="none" aria-hidden>
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const cornerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const corner = cornerRef.current;
    const card = cardRef.current;
    if (!section || !corner || !card) return;

    const ctx = gsap.context(() => {
      // Initial state — Phase 1
      gsap.set(corner, {
        rotate: 90,
        scale: 0.8,
        top: "34%",
        bottom: "34%",
        left: "43%",
        right: "43%",
      });
      gsap.set(card, {
        scale: 0,
        opacity: 0,
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%",
          pin: true,
          pinSpacing: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 2: brackets open + split while card zooms in
      tl.to(
        corner,
        {
          rotate: 0,
          scale: 1,
          top: "0%",
          bottom: "0%",
          left: "0%",
          right: "0%",
          ease: "none",
          duration: 1,
        },
        0
      ).to(
        card,
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          duration: 1,
        },
        0.12
      );
    }, section);

    // Recalc after images/fonts settle
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 200);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative z-10 w-full select-none"
      data-framer-name="CTA Section"
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-10 md:py-16">
        <div
          className="relative w-full max-w-[1180px] mx-auto"
          data-framer-name="Container"
        >
          {/* Corner brackets — GSAP pin-scrubbed */}
          <div
            ref={cornerRef}
            className="absolute z-20 pointer-events-none will-change-transform"
            data-framer-name="Corner"
            style={{
              top: "34%",
              bottom: "34%",
              left: "43%",
              right: "43%",
              transform: "rotate(90deg) scale(0.8)",
            }}
          >
            <CornerGlow
              className="-top-3 -left-3"
              path="M86 3.5H24C12.1259 3.5 3.5 12.1259 3.5 24V86"
            />
            <CornerGlow
              className="-top-3 -right-3"
              path="M0 3.5H62C73.8741 3.5 83.5 12.1259 83.5 24V86"
            />
            <CornerGlow
              className="-bottom-3 -left-3"
              path="M86 82.5H24C12.1259 82.5 3.5 72.8741 3.5 61V0"
            />
            <CornerGlow
              className="-bottom-3 -right-3"
              path="M0 82.5H62C73.8741 82.5 83.5 72.8741 83.5 61V0"
            />
          </div>

          {/* Main CTA card */}
          <div
            ref={cardRef}
            className="relative z-10 w-full rounded-[32px] bg-[#141414] border border-white/10 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_0_90px_rgba(69,85,253,0.3)] overflow-hidden will-change-transform"
            data-framer-name="CTA"
            style={{ opacity: 0, transform: "scale(0)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-[#4555fd]/35 blur-[140px] rounded-full pointer-events-none" />

            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-[40px] bg-[#191919] border border-[#4555fd] shadow-[0_0_20px_rgba(69,85,253,0.5)] mb-8"
              data-framer-name="Subtitle "
            >
              <div className="flex items-center -space-x-2.5">
                <div className="w-7 h-7 rounded-full overflow-hidden border-[1.25px] border-[#191919]">
                  <img
                    src="https://framerusercontent.com/images/hUuAKK2w1VWPhbsJ3ZlA0oQ2Ks.png?width=200&height=200"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full overflow-hidden border-[1.25px] border-[#191919]">
                  <img
                    src="https://framerusercontent.com/images/tRBqYs2UMEC5SP7MT9DaoBR8jF0.png?width=250&height=250"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full overflow-hidden border-[1.25px] border-[#191919]">
                  <img
                    src="https://framerusercontent.com/images/ViNlb2cIOWTKreb0bSvAB5hA.png?width=250&height=250"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#4555fd] border-[1.25px] border-[#191919] flex items-center justify-center text-[10px] font-bold text-[#fef9ff] shadow-md z-10">
                  10k+
                </div>
              </div>
              <span
                className="text-xs md:text-sm font-medium text-[#fef9ff]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Stock Contributors
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-[60px] font-semibold text-white leading-[1.25] tracking-[-0.6px] max-w-4xl mb-6 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to{" "}
              <span className="font-serif-italic font-normal text-4xl sm:text-6xl lg:text-[68px] text-[#fef9ff]">
                automate?
              </span>{" "}
              Generate your first{" "}
              <span className="font-serif-italic font-normal text-4xl sm:text-6xl lg:text-[68px] text-[#fef9ff]">
                Stock CSV Metadata
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-[#fef9ff] opacity-60 max-w-xl mb-10 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Transform hours of manual keyword tagging into a 1-click automated CSV export.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GrowthPlanButton text="GENERATE CSV NOW" href="#pricing" />
              <BookCallButton text="START FOR FREE" href="#pricing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
