"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutWhyChooseUs() {
  const cards = [
    {
      id: "why-choose-us-1",
      title: "We use real data, not guesswork",
      description: "Every campaign is optimized",
      image: "https://framerusercontent.com/images/Cf01jZ7Xb0JuCnXW2WJ7pb0sGDg.png?width=2545&height=1008",
      colSpan: "lg:col-span-7",
      aspectRatio: "aspect-[2.52/1]",
    },
    {
      id: "why-choose-us-2",
      title: "Transparent reporting",
      description: "Every campaign is optimized",
      image: "https://framerusercontent.com/images/kM4SMireb7rtUVlb31zmNHAbc.png?width=1735&height=993",
      colSpan: "lg:col-span-5",
      aspectRatio: "aspect-[1.75/1]",
    },
    {
      id: "why-choose-us-3",
      title: "Experience across top industries",
      description: "Every campaign is optimized",
      image: "https://framerusercontent.com/images/Gqq5jGSuz1OlK3cgJmJLcjPYDM.png?width=1733&height=974",
      colSpan: "lg:col-span-5",
      aspectRatio: "aspect-[1.78/1]",
    },
    {
      id: "why-choose-us-4",
      title: "Client-first approach",
      description: "your goals become our KPIs",
      image: "https://framerusercontent.com/images/3a0WrARAzLxykNN4H7XBPEsZE.png?width=2543&height=969",
      colSpan: "lg:col-span-7",
      aspectRatio: "aspect-[2.62/1]",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none">
      {/* 1. Header Section (Exact Framer Specs from screenshot) */}
      <div id="why-choose-us-header" className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
        {/* Left Side: Founders Avatars + Message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* Overlapping Founders Avatars with Glowing Blue Border Rings */}
          <div className="flex items-center -space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#4555fd] p-0.5 bg-[#07090e] shadow-lg">
              <img
                src="https://framerusercontent.com/images/ailnuTqZMJuu8HKyJ7fi5SEus.png?width=224&height=224"
                alt="Founder 1"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#4555fd] p-0.5 bg-[#07090e] shadow-lg">
              <img
                src="https://framerusercontent.com/images/WcvR7URbvzQT1xIisGMno.png?width=224&height=224"
                alt="Founder 2"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#4555fd] p-0.5 bg-[#07090e] shadow-lg">
              <img
                src="https://framerusercontent.com/images/rIDRPpDc8s8hvMbg0istDCt5M.png?width=224&height=224"
                alt="Founder 3"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Founders Message Label */}
          <div className="flex flex-col text-sm font-medium text-[#cfcbd0] leading-tight ml-1">
            <span>Founders</span>
            <span>Message</span>
          </div>
        </motion.div>

        {/* Right Side: Large Right-Aligned Header Text */}
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-left md:text-right text-white max-w-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We work with incredible people from helping them business
        </motion.h2>
      </div>

      {/* 2. Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${card.colSpan} relative rounded-[20px] overflow-hidden p-6 md:p-8 flex flex-col justify-between group cursor-pointer border border-white/10`}
            style={{ backgroundColor: "rgb(25, 25, 25)" }}
          >
            {/* Ambient Royal Blue Glow Shadow inside Card */}
            <div
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(90px)",
                WebkitFilter: "blur(90px)",
              }}
            />
            <div
              className="absolute -top-10 -left-10 w-64 h-64 rounded-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(90px)",
                WebkitFilter: "blur(90px)",
              }}
            />

            {/* Illustration / Card Image */}
            <div className={`w-full ${card.aspectRatio} rounded-[16px] overflow-hidden mb-6 relative z-10 bg-black/20`}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Title & Description */}
            <div className="relative z-10 mt-auto">
              <h3
                className="text-xl md:text-2xl font-medium text-white tracking-tight mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm md:text-base text-[#cfcbd0] font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
