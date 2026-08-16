"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const cards = [
    {
      id: "why-choose-us-1",
      title: "Batch CSV Metadata Generation",
      description: "Process 1,000+ stock assets at once with smart keyword ranking.",
      image: "https://framerusercontent.com/images/Cf01jZ7Xb0JuCnXW2WJ7pb0sGDg.png?width=2545&height=1008",
      colSpan: "lg:col-span-7",
      aspectRatio: "aspect-[2.52/1]",
    },
    {
      id: "why-choose-us-2",
      title: "Platform Specs Guarantee",
      description: "Formatted for Adobe Stock, Shutterstock, Freepik & Vecteezy.",
      image: "https://framerusercontent.com/images/kM4SMireb7rtUVlb31zmNHAbc.png?width=1735&height=993",
      colSpan: "lg:col-span-5",
      aspectRatio: "aspect-[1.75/1]",
    },
    {
      id: "why-choose-us-3",
      title: "AI Search Trend Analysis",
      description: "Trained on buyer searches to boost your catalog visibility.",
      image: "https://framerusercontent.com/images/Gqq5jGSuz1OlK3cgJmJLcjPYDM.png?width=1733&height=974",
      colSpan: "lg:col-span-5",
      aspectRatio: "aspect-[1.78/1]",
    },
    {
      id: "why-choose-us-4",
      title: "Zero Manual Data Entry",
      description: "Save 15+ hours weekly with instant titles, descriptions & 50 tags.",
      image: "https://framerusercontent.com/images/3a0WrARAzLxykNN4H7XBPEsZE.png?width=2543&height=969",
      colSpan: "lg:col-span-7",
      aspectRatio: "aspect-[2.62/1]",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 max-w-[1180px] mx-auto z-10">
      {/* 1. Header Section */}
      <div id="why-choose-us-header" className="flex flex-col items-center text-center mb-16">
        {/* Founders Message Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 shadow-xl mb-6"
          style={{ backgroundColor: "#191919" }}
        >
          {/* Founders Avatars */}
          <div className="flex items-center -space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#191919]">
              <img
                src="https://framerusercontent.com/images/ailnuTqZMJuu8HKyJ7fi5SEus.png?width=224&height=224"
                alt="Founder 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#191919]">
              <img
                src="https://framerusercontent.com/images/WcvR7URbvzQT1xIisGMno.png?width=224&height=224"
                alt="Founder 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#191919]">
              <img
                src="https://framerusercontent.com/images/rIDRPpDc8s8hvMbg0istDCt5M.png?width=224&height=224"
                alt="Founder 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <span
            className="text-xs font-normal text-[#cfcbd0] tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built For Stock Contributors
          </span>
        </motion.div>

        {/* Section Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-[1.15] text-white max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We empower stock creators &amp; artists from{" "}
          <span className="font-serif-italic font-normal text-4xl sm:text-5xl md:text-[48px] text-[#fef9ff]">
            all over the world
          </span>{" "}
          automating their{" "}
          <span className="font-serif-italic font-normal text-4xl sm:text-5xl md:text-[48px] text-[#fef9ff]">
            Metadata &amp; CSV
          </span>{" "}
          workflows.
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
