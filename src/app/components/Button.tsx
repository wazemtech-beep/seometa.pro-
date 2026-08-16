"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * 1. BookCallButton - Signature Framer White Pill Button with Expanding Dot Background Effect
 */
export function BookCallButton({
  text = "BOOK A CALL",
  href = "#contact",
  className = "",
  onClick,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      whileHover="hover"
      className={`relative inline-flex items-center gap-[16px] md:gap-[24px] overflow-hidden cursor-pointer select-none border border-[#fef9ff] shadow-xl ${className}`}
      style={{
        backgroundColor: "rgb(254, 249, 255)",
        borderRadius: "50px",
        padding: "12px 28px",
      }}
    >
      {/* Button Text */}
      <span
        className="relative z-10 text-[15px] md:text-[16px] font-semibold tracking-wide transition-colors duration-300 uppercase"
        style={{
          color: isHovered ? "rgb(255, 255, 255)" : "rgb(20, 20, 20)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {text}
      </span>

      {/* Expanding Dot Animation Wrapper */}
      <div
        className="relative z-1 w-[10px] h-[10px] flex items-center justify-center shrink-0"
        style={{ zIndex: 1 }}
      >
        {/* Expanding Black Dot */}
        <motion.div
          className="absolute w-[10px] h-[10px] rounded-full pointer-events-none"
          style={{ backgroundColor: "rgb(20, 20, 20)" }}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 85 },
          }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* White Inner Dot */}
        <motion.div
          className="absolute w-[8px] h-[8px] rounded-full z-20 pointer-events-none"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
          variants={{
            initial: { opacity: 0, scale: 0.5 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
      </div>
    </motion.a>
  );
}

/**
 * 2. GrowthPlanButton - Dual-Arrow Slide Pill Button ("GET MY GROWTH PLAN")
 */
export function GrowthPlanButton({
  text = "GET MY GROWTH PLAN",
  href = "#pricing",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      className={`relative inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold cursor-pointer select-none overflow-hidden border border-white/15 shadow-xl ${className}`}
      variants={{
        initial: {
          backgroundColor: "rgb(20, 20, 20)",
          color: "rgb(254, 249, 255)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        },
        hover: {
          backgroundColor: "rgb(254, 249, 255)",
          color: "rgb(20, 20, 20)",
          borderColor: "rgb(254, 249, 255)",
        },
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderRadius: "50px" }}
    >
      {/* Left Arrow Circle (Slides In on Hover) */}
      <motion.div
        className="rounded-full flex items-center justify-center shrink-0 overflow-hidden"
        variants={{
          initial: {
            x: -16,
            opacity: 0,
            width: 0,
            height: 28,
            marginRight: 0,
            backgroundColor: "rgb(20, 20, 20)",
            color: "rgb(254, 249, 255)",
          },
          hover: {
            x: 0,
            opacity: 1,
            width: 28,
            height: 28,
            marginRight: 10,
            backgroundColor: "rgb(20, 20, 20)",
            color: "rgb(254, 249, 255)",
          },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowUpRight className="w-4 h-4 shrink-0" />
      </motion.div>

      {/* Button Text */}
      <motion.span
        variants={{
          initial: { color: "rgb(254, 249, 255)" },
          hover: { color: "rgb(20, 20, 20)" },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 font-semibold tracking-wide uppercase text-[15px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {text}
      </motion.span>

      {/* Right Arrow Circle (Slides Out on Hover) */}
      <motion.div
        className="rounded-full flex items-center justify-center shrink-0 overflow-hidden"
        variants={{
          initial: {
            x: 0,
            y: 0,
            opacity: 1,
            width: 28,
            height: 28,
            marginLeft: 10,
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(20, 20, 20)",
          },
          hover: {
            x: 16,
            y: -16,
            opacity: 0,
            width: 0,
            height: 28,
            marginLeft: 0,
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(20, 20, 20)",
          },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowUpRight className="w-4 h-4 shrink-0" />
      </motion.div>
    </motion.a>
  );
}
