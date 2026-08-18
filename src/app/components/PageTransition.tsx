"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);

  // Global Link Click Interceptor: Intercepts internal <a> links to slide curtain up BEFORE route changes
  useEffect(() => {
    const handleGlobalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      if (
        href &&
        href.startsWith("/") &&
        href !== pathname &&
        !href.startsWith("#") &&
        targetAttr !== "_blank"
      ) {
        e.preventDefault();
        startTransition(href);
      }
    };

    document.addEventListener("click", handleGlobalLinkClick, true);
    return () => document.removeEventListener("click", handleGlobalLinkClick, true);
  }, [pathname]);

  const startTransition = (href: string) => {
    setTargetHref(href);
    setIsTransitioning(true);
  };

  // Called when the blue curtain finishes sliding up from bottom (y: "0%")
  const handleSlideUpComplete = () => {
    if (targetHref) {
      router.push(targetHref);
      setTargetHref(null);
    }
  };

  // Reset curtain on pathname change once new page is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition: startTransition }}>
      {/* Bottom to Top Royal Blue Slide Curtain */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="bottom-to-top-royal-blue-curtain"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => {
              if (targetHref) {
                handleSlideUpComplete();
              }
            }}
            className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center bg-[#4555fd] overflow-hidden"
          >
            {/* Rich Royal Blue & Electric Blue Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#4555fd] to-[#2563eb] opacity-95" />

            {/* Glowing Brand Logo & Title in Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <span
                className="text-6xl sm:text-8xl font-serif-italic italic text-white tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                SEOMeta.pro
              </span>
              <span
                className="mt-3 text-xs sm:text-sm font-semibold text-white/90 tracking-[0.35em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Loading Page
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </TransitionContext.Provider>
  );
}
