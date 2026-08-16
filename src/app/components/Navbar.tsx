"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookCallButton } from "./Button";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBookCallHovered, setIsBookCallHovered] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1180px] flex items-center justify-between shadow-2xl transition-all duration-300"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(254, 249, 255, 0.1)",
          borderRadius: "100px",
          padding: "10px 20px",
          border: "1px solid rgba(254, 249, 255, 0.15)",
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* Logo Wrapper */}
        <a href="#" className="flex items-center gap-2.5 group">
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
            className="text-[24px] font-semibold text-white tracking-[-0.04em] leading-[29px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            SEOMeta.pro
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-[24px] relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                setHoveredLink(item.name);
                if (item.hasDropdown) setIsPagesOpen(true);
              }}
              onMouseLeave={() => {
                setHoveredLink(null);
                if (item.hasDropdown) setIsPagesOpen(false);
              }}
            >
              <a
                href={item.href}
                className="relative text-[16px] font-normal leading-[130%] transition-colors duration-200 flex items-center gap-1.5 py-1 px-2"
                style={{
                  color: hoveredLink === item.name ? "#ffffff" : "rgb(207, 203, 208)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {hoveredLink === item.name && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                {item.hasDropdown && (
                  <svg
                    className="w-[12px] h-[6px] relative z-10 transition-transform duration-200"
                    style={{
                      transform: isPagesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      stroke: "rgb(207, 203, 208)",
                    }}
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 0 0 L 6 6 L 12 0"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>

              {/* Pages Dropdown Menu */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {isPagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-48 p-2 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-2xl"
                      style={{ backgroundColor: "rgba(15, 15, 22, 0.95)" }}
                    >
                      {["Services", "Pricing", "Case Studies", "FAQ"].map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-[#cfcbd0] hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Framer "BOOK A CALL" Reusable Button */}
        <BookCallButton href="#contact" />
      </motion.div>
    </header>
  );
}
