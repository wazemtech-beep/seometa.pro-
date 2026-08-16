"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookCallButton } from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <div className="w-full max-w-[1180px] flex flex-col items-center">
        {/* Top Navbar Pill */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-between shadow-2xl transition-all duration-300 relative z-50"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(254, 249, 255, 0.08)",
            borderRadius: "100px",
            padding: "10px 20px",
            border: "1px solid rgba(254, 249, 255, 0.15)",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* Logo Wrapper */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-[32px] h-[32px] flex-shrink-0">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <defs>
                  <linearGradient id="fundoryGrad" x1="0.07" x2="0.93" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(69,85,253)" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 16 2.666 L 4 2.666 L 4 11.555 L 4 20.444 L 16 20.444 L 16 29.333 L 28 29.333 L 28 20.444 L 28 11.555 L 16 11.555 Z"
                  fill="url(#fundoryGrad)"
                />
              </svg>
            </div>
            <span
              className="text-[22px] sm:text-[24px] font-semibold text-white tracking-[-0.04em] leading-[29px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              SEOMeta.pro
            </span>
          </Link>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-[28px] relative">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[16px] font-normal leading-[130%] text-[#cfcbd0] hover:text-white transition-colors duration-200 py-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop "BOOK A CALL" Button */}
          <div className="hidden md:block">
            <BookCallButton href="/contact" />
          </div>

          {/* Mobile Animated Hamburger Button (3 Sticks - Framer framer-6SVxE) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0"
          >
            <div className="flex flex-col items-center justify-center gap-[5px] w-5 h-5 relative">
              {/* Stick 1 */}
              <motion.div
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-5 h-[2px] bg-[#fef9ff] rounded-full origin-center"
              />
              {/* Stick 2 */}
              <motion.div
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-[2px] bg-[#fef9ff] rounded-full"
              />
              {/* Stick 3 */}
              <motion.div
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-5 h-[2px] bg-[#fef9ff] rounded-full origin-center"
              />
            </div>
          </button>
        </motion.div>

        {/* Mobile Animated Menu Dropdown (Framer Glassmorphism Overlay) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden w-full max-w-[1180px] mt-3 bg-[#141418]/95 backdrop-blur-2xl border border-white/15 rounded-[28px] p-6 shadow-2xl z-40 overflow-hidden flex flex-col items-stretch gap-5"
            >
              {/* Navigation Links List */}
              <div className="flex flex-col gap-4 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#cfcbd0] hover:text-white py-2 border-b border-white/5 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile "BOOK A CALL" Action Button */}
              <div className="flex justify-center pt-2" onClick={() => setIsOpen(false)}>
                <BookCallButton href="/contact" className="w-full text-center justify-center" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
