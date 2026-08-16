"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItemProps {
  targetValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounterNumber({ targetValue, prefix = "", suffix = "", decimals = 0 }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetValue, {
        duration: 2.2,
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

export default function Counter() {
  const stats = [
    {
      id: "counter-1",
      targetValue: 10,
      prefix: "",
      suffix: "M+",
      decimals: 0,
      label: "Metadata Tags Generated",
    },
    {
      id: "counter-2",
      targetValue: 99.8,
      prefix: "",
      suffix: "%",
      decimals: 1,
      label: "Platform Acceptance Rate",
    },
    {
      id: "counter-3",
      targetValue: 500,
      prefix: "",
      suffix: "K+",
      decimals: 0,
      label: "CSV Files Exported",
    },
  ];

  return (
    <section id="counter-section" className="relative py-16 md:py-24 px-4 max-w-[1180px] mx-auto z-10 select-none">
      <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0 relative z-10">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.id}>
            {/* Stat Item */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Stat Number with Framer Linear Gradient Text */}
              <div
                className="text-6xl sm:text-7xl lg:text-[92px] font-medium tracking-[-5.5px] leading-none mb-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundImage:
                    "linear-gradient(0deg, var(--token-52db9d94-be3c-41e7-bfd4-9ebb668c13a3, rgb(154, 163, 254)) 21%, var(--token-157fd76f-d05b-43d2-a5ee-64e3fceb8070, rgb(254, 249, 255)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedCounterNumber
                  targetValue={stat.targetValue}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>

              {/* Stat Label */}
              <p
                className="text-sm md:text-base font-normal text-[#cfcbd0] tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>

            {/* Vertical Divider Line (Only between items on Desktop) */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-[84px] bg-white/10 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
