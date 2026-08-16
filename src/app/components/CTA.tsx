"use client";

import React, { useEffect, useRef } from "react";
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
      <svg
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        viewBox="0 0 86 86"
        fill="none"
        aria-hidden
      >
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

    // Check if desktop vs mobile for GSAP pin scrub intensity
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(corner, {
        rotate: 90,
        scale: isMobile ? 0.7 : 0.8,
        top: isMobile ? "25%" : "34%",
        bottom: isMobile ? "25%" : "34%",
        left: isMobile ? "20%" : "43%",
        right: isMobile ? "20%" : "43%",
      });
      gsap.set(card, {
        scale: isMobile ? 0.8 : 0,
        opacity: isMobile ? 0.4 : 0,
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 80%" : "top top",
          end: isMobile ? "bottom 20%" : "+=200%",
          pin: !isMobile, // Pin on Desktop, smooth scrub on Mobile
          pinSpacing: !isMobile,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Brackets open & Card zooms in
      tl.to(
        corner,
        {
          rotate: 0,
          scale: 1,
          top: "0%",
          bottom: "0%",
          left: "0%",
          right: "0%",
          ease: "power2.out",
          duration: 1,
        },
        0
      ).to(
        card,
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        },
        0.1
      );
    }, section);

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
      className="relative z-10 w-full select-none overflow-hidden"
      data-framer-name="CTA Section"
    >
      <div className="min-h-screen py-16 md:py-24 px-4 sm:px-6 flex items-center justify-center">
        <div
          className="relative w-full max-w-[1180px] mx-auto"
          data-framer-name="Container"
        >
          {/* Corner brackets — GSAP scrubbed */}
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
              className="-top-2 -left-2 sm:-top-3 sm:-left-3"
              path="M86 3.5H24C12.1259 3.5 3.5 12.1259 3.5 24V86"
            />
            <CornerGlow
              className="-top-2 -right-2 sm:-top-3 sm:-right-3"
              path="M0 3.5H62C73.8741 3.5 83.5 12.1259 83.5 24V86"
            />
            <CornerGlow
              className="-bottom-2 -left-2 sm:-bottom-3 sm:-left-3"
              path="M86 82.5H24C12.1259 82.5 3.5 72.8741 3.5 61V0"
            />
            <CornerGlow
              className="-bottom-2 -right-2 sm:-bottom-3 sm:-right-3"
              path="M0 82.5H62C73.8741 82.5 83.5 72.8741 83.5 61V0"
            />
          </div>

          {/* Main CTA Card */}
          <div
            ref={cardRef}
            className="relative z-10 w-full rounded-[28px] sm:rounded-[32px] bg-[#141414] border border-white/10 p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_0_90px_rgba(69,85,253,0.3)] overflow-hidden will-change-transform"
            data-framer-name="CTA"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[380px] bg-[#4555fd]/35 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none z-0" />

            {/* Subtitle Badge */}
            <div
              className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[40px] bg-[#191919] border border-[#4555fd] shadow-[0_0_20px_rgba(69,85,253,0.5)] mb-6 sm:mb-8 relative z-10"
              data-framer-name="Subtitle"
            >
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-[1.25px] border-[#191919]">
                  <img
                    src="https://framerusercontent.com/images/hUuAKK2w1VWPhbsJ3ZlA0oQ2Ks.png?width=200&height=200"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-[1.25px] border-[#191919]">
                  <img
                    src="https://framerusercontent.com/images/tRBqYs2UMEC5SP7MT9DaoBR8jF0.png?width=250&height=250"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-[1.25px] border-[#191919]">
                  <img
                    src="https://framerusercontent.com/images/ViNlb2cIOWTKreb0bSvAB5hA.png?width=250&height=250"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4555fd] border-[1.25px] border-[#191919] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#fef9ff] shadow-md z-10">
                  10k+
                </div>
              </div>
              <span
                className="text-xs sm:text-sm font-medium text-[#fef9ff]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Stock Contributors
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold text-white leading-[1.25] tracking-[-0.6px] max-w-4xl mb-4 sm:mb-6 text-center relative z-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to{" "}
              <span className="font-serif-italic font-normal text-3xl sm:text-5xl lg:text-[68px] text-[#fef9ff] italic">
                automate?
              </span>{" "}
              Generate your first{" "}
              <span className="font-serif-italic font-normal text-3xl sm:text-5xl lg:text-[68px] text-[#fef9ff] italic">
                Stock CSV Metadata
              </span>
            </h2>

            {/* Subtitle Description */}
            <p
              className="text-sm sm:text-base md:text-lg text-[#fef9ff] opacity-70 max-w-xl mb-8 sm:mb-10 text-center relative z-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Transform hours of manual keyword tagging into a 1-click automated CSV export.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 w-full sm:w-auto">
              <GrowthPlanButton text="GENERATE CSV NOW" href="#pricing" />
              <BookCallButton text="START FOR FREE" href="#pricing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
