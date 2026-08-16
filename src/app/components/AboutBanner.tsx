"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <section id="about-banner" className="relative py-12 md:py-16 px-4 max-w-[1180px] mx-auto z-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 bg-[#141414] shadow-[0_0_80px_rgba(69,85,253,0.25)] group p-2 md:p-3"
      >
        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4555fd] to-transparent pointer-events-none z-10" />

        <img
          decoding="auto"
          loading="lazy"
          width={4720}
          height={2098}
          src="https://framerusercontent.com/images/s9Vd94z63kdPkp43Drex1K3Haw.png?width=4720&height=2098"
          alt="About Banner"
          className="w-full h-auto rounded-[22px] md:rounded-[30px] object-contain transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
        />
      </motion.div>
    </section>
  );
}
