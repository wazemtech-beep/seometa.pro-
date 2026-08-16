"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function CounterItem({ targetValue, prefix = "", suffix = "", decimals = 0 }: { targetValue: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(latest.toFixed(decimals));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about-us" className="relative py-20 md:py-28 px-4 max-w-[1180px] mx-auto z-10 select-none">
      {/* Framer About Us Outer Card Container (Width 1180px) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[32px] md:rounded-[40px] bg-[#191919] border border-white/10 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl"
      >
        {/* Royal Blue Ambient Glow Effects */}
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-60"
          style={{
            backgroundColor: "rgb(69, 85, 253)",
            filter: "blur(110px)",
            WebkitFilter: "blur(110px)",
          }}
        />
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none opacity-40"
          style={{
            backgroundColor: "rgb(69, 85, 253)",
            filter: "blur(100px)",
            WebkitFilter: "blur(100px)",
          }}
        />

        {/* 2-Column Grid matching Framer layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image (Aspect 0.96 / 1) */}
          <div className="lg:col-span-5 relative w-full aspect-[0.96/1] rounded-[24px] overflow-hidden border border-white/10 shadow-xl group">
            <img
              decoding="auto"
              width={1824}
              height={1900}
              srcSet="https://framerusercontent.com/images/0G9RlqmlnxGq1s3RypOmGodk.png?scale-down-to=1024&width=1824&height=1900 983w, https://framerusercontent.com/images/0G9RlqmlnxGq1s3RypOmGodk.png?width=1824&height=1900 1824w"
              src="https://framerusercontent.com/images/0G9RlqmlnxGq1s3RypOmGodk.png?width=1824&height=1900"
              alt="About Us Image"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column: Heading, Founders Message, Counter Row */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6 lg:space-y-8">
            {/* Heading: Exact 40px Font Size */}
            <h3
              className="text-3xl sm:text-4xl lg:text-[40px] font-medium tracking-[-0.4px] leading-[1.15] text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We help brands grow through clarity, creativity, and conversion.
            </h3>

            {/* Founders Message Card Box */}
            <div className="rounded-[24px] bg-[#0d0d0f]/90 border border-white/10 p-6 sm:p-7 shadow-inner space-y-4">
              <div className="flex items-center gap-3">
                {/* Avatars Stack */}
                <div className="flex items-center -space-x-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#0d0d0f]">
                    <img
                      src="https://framerusercontent.com/images/qPRlXDmgM1ME0q68iMbzPMW08CM.png?width=108&height=108"
                      alt="Founder 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#0d0d0f]">
                    <img
                      src="https://framerusercontent.com/images/z056htvmHmx2K7nICiMxDx7s38.png?width=108&height=108"
                      alt="Founder 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#0d0d0f]">
                    <img
                      src="https://framerusercontent.com/images/HBkuEGWBfwrdNoEqLg1meIfRZAk.png?width=108&height=108"
                      alt="Founder 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <span
                  className="text-sm font-normal text-[#cfcbd0]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Founders Message
                </span>
              </div>

              {/* Quote Text */}
              <p
                className="text-base sm:text-lg text-[#cfcbd0] leading-[1.6] font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                “We believe great marketing starts with understanding — your story, your audience, and your goals. That’s why every campaign we create is crafted to speak, sell, and stand out”
              </p>
            </div>

            {/* Horizontal Stats Row: Exact 40px Font Size & -0.4px Letter-Spacing */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <span
                  className="text-3xl sm:text-[40px] font-medium text-white tracking-[-0.4px] leading-[1.1]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <CounterItem targetValue={15} />
                </span>
                <span
                  className="text-xs sm:text-sm text-[#cfcbd0] leading-tight font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Years of<br />experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <span
                  className="text-3xl sm:text-[40px] font-medium text-white tracking-[-0.4px] leading-[1.1]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <CounterItem targetValue={92} suffix="K" />
                </span>
                <span
                  className="text-xs sm:text-sm text-[#cfcbd0] leading-tight font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Social<br />Profile
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <span
                  className="text-3xl sm:text-[40px] font-medium text-white tracking-[-0.4px] leading-[1.1]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <CounterItem targetValue={98} suffix="%" />
                </span>
                <span
                  className="text-xs sm:text-sm text-[#cfcbd0] leading-tight font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Success<br />Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
