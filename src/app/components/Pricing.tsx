"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      id: "plan-starter",
      name: "Free Starter",
      monthlyPrice: "0.00",
      yearlyPrice: "0.00",
      isPopular: false,
      href: "#starter",
      features: [
        "100 Asset Exports / month",
        "AI Title & Description Generator",
        "50 SEO Keywords per Asset",
        "Adobe Stock & Shutterstock CSV",
        "Standard Processing Speed",
      ],
    },
    {
      id: "plan-basic",
      name: "Contributor Pro",
      monthlyPrice: "19.00",
      yearlyPrice: "15.00",
      isPopular: true, // MOST POPULAR plan with Royal Blue Frame
      href: "#basic",
      features: [
        "2,500 Asset Exports / month",
        "Batch Processing (1,000+ Files)",
        "AI Buyer Search Trend SEO",
        "All 12+ Stock Platform Specs",
        "Vector (EPS) & Video Support",
        "Priority Lightning AI Speed",
      ],
    },
    {
      id: "plan-premium",
      name: "Agency Unlimited",
      monthlyPrice: "49.00",
      yearlyPrice: "39.00",
      isPopular: false,
      href: "#premium",
      features: [
        "Unlimited Asset CSV Exports",
        "Multi-User Team Workspace",
        "Custom Metadata Export API",
        "Batch AI Vector Tagging",
        "24/7 Dedicated Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none">
      {/* 1. Header Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Choose a{" "}
          <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff]">
            plan
          </span>{" "}
          that{" "}
          <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff]">
            works
          </span>{" "}
          for you
        </motion.h2>

        {/* 2. Billing Toggle (Monthly / Yearly Pill) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative inline-flex items-center p-1.5 rounded-[15px] border border-[#4555fd] shadow-xl"
          style={{ backgroundColor: "#191919" }}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-1.5 bottom-1.5 rounded-[12px] bg-[#4555fd]"
            style={{
              left: billingCycle === "monthly" ? "6px" : "50%",
              width: "calc(50% - 6px)",
            }}
          />

          <button
            onClick={() => setBillingCycle("monthly")}
            className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 ${
              billingCycle === "monthly" ? "text-white" : "text-[#cfcbd0] hover:text-white"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Monthly
          </button>

          <button
            onClick={() => setBillingCycle("yearly")}
            className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 ${
              billingCycle === "yearly" ? "text-white" : "text-[#cfcbd0] hover:text-white"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Yearly
          </button>
        </motion.div>
      </div>

      {/* 3. Pricing Cards Grid (3 Cards - Center Card is Prominently Larger & Taller) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center pt-6 pb-6">
        {plans.map((plan, index) => {
          const currentPrice = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          // Standard Side Cards (Free Starter & Agency Unlimited)
          if (!plan.isPopular) {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative rounded-[22px] p-6 lg:p-7 flex flex-col justify-between group transition-[border-color] duration-300 border border-white/10 bg-[#191919] hover:border-white/20 z-0"
              >
                {/* Header (Name & Price) */}
                <div className="pb-6 border-b border-white/10 mb-6 relative z-10">
                  <span
                    className="text-sm font-semibold text-[#cfcbd0] opacity-80 uppercase tracking-wider block mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-serif-italic text-4xl md:text-5xl text-[#fef9ff] leading-none">
                      $
                    </span>
                    <span className="text-4xl md:text-[46px] font-bold text-white tracking-tight">
                      {currentPrice}
                    </span>
                  </div>

                  <span className="text-xs text-[#cfcbd0] opacity-70 font-normal">
                    Per {billingCycle === "monthly" ? "Month" : "Year"}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 flex-1 relative z-10">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#4555fd] flex items-center justify-center text-white shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span
                        className="text-sm text-[#fef9ff] font-normal"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="relative z-10 w-full">
                  <motion.a
                    href={plan.href}
                    initial="initial"
                    whileHover="hover"
                    className="relative w-full inline-flex items-center justify-between px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer select-none overflow-hidden shadow-xl border border-white/10 bg-[#fef9ff] text-[#141414]"
                    style={{ borderRadius: "50px" }}
                  >
                    <motion.div
                      className="framer-en6tir absolute inset-0 rounded-[50px] pointer-events-none z-0 bg-[#4555fd]"
                      style={{ transformOrigin: "0% 50%" }}
                      variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <div className="framer-x6s7lu relative z-10 h-[20px] overflow-hidden">
                      <motion.div
                        className="flex flex-col"
                        variants={{
                          initial: { y: 0 },
                          hover: { y: -20 },
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="h-[20px] flex items-center font-bold tracking-wide text-[#141414]">
                          Get started
                        </span>
                        <span className="h-[20px] flex items-center font-bold tracking-wide text-white">
                          Get started
                        </span>
                      </motion.div>
                    </div>

                    <div className="framer-1qmizm2 relative z-10 w-6 h-6 flex items-center justify-center shrink-0 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                          initial: { x: 0, y: 0, opacity: 1 },
                          hover: { x: 16, y: -16, opacity: 0 },
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#141414]" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                          initial: { x: -16, y: 16, opacity: 0 },
                          hover: { x: 0, y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-white" />
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            );
          }

          // MOST POPULAR Center Card (Noticeably BIGGER, TALLER & ELEVATED)
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-[32px] p-2 bg-[#4555fd] flex flex-col justify-between group z-20 md:-translate-y-6 md:scale-[1.08] lg:scale-[1.10] shadow-2xl transition-shadow duration-300"
              style={{
                boxShadow: "0 0 60px rgba(69, 85, 253, 0.85)",
              }}
            >
              {/* Top Banner inside Royal Blue Frame */}
              <div className="py-3.5 text-center text-xs font-black text-white tracking-[0.25em] uppercase">
                MOST POPULAR
              </div>

              {/* Inner Dark Panel Wrapper (Extra Padding to make Card Taller) */}
              <div className="relative z-10 rounded-[24px] bg-[#141414] p-7 lg:p-9 flex-1 flex flex-col justify-between min-h-[520px]">
                {/* Header (Name & Price) */}
                <div className="pb-6 border-b border-white/10 mb-6">
                  <span
                    className="text-base font-bold text-[#cfcbd0] uppercase tracking-wider block mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-serif-italic text-6xl lg:text-[68px] text-[#fef9ff] leading-none">
                      $
                    </span>
                    <span className="text-5xl lg:text-[60px] font-extrabold text-white tracking-tight">
                      {currentPrice}
                    </span>
                  </div>

                  <span className="text-xs text-[#cfcbd0] opacity-70 font-normal">
                    Per {billingCycle === "monthly" ? "Month" : "Year"}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#4555fd] flex items-center justify-center text-white shrink-0 shadow-md">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span
                        className="text-sm lg:text-[15px] text-[#fef9ff] font-semibold"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button for Basic (Popular) Card */}
                <div className="w-full">
                  <motion.a
                    href={plan.href}
                    initial="initial"
                    whileHover="hover"
                    className="relative w-full inline-flex items-center justify-between px-8 py-4 rounded-full text-sm font-bold cursor-pointer select-none overflow-hidden shadow-2xl bg-[#4555fd] text-white"
                    style={{ borderRadius: "50px" }}
                  >
                    <motion.div
                      className="framer-en6tir absolute inset-0 rounded-[50px] pointer-events-none z-0 bg-[#fef9ff]"
                      style={{ transformOrigin: "0% 50%" }}
                      variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <div className="framer-x6s7lu relative z-10 h-[20px] overflow-hidden">
                      <motion.div
                        className="flex flex-col"
                        variants={{
                          initial: { y: 0 },
                          hover: { y: -20 },
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="h-[20px] flex items-center font-bold tracking-wider uppercase text-xs text-white">
                          GET STARTED
                        </span>
                        <span className="h-[20px] flex items-center font-bold tracking-wider uppercase text-xs text-[#141414]">
                          GET STARTED
                        </span>
                      </motion.div>
                    </div>

                    <div className="framer-1qmizm2 relative z-10 w-6 h-6 flex items-center justify-center shrink-0 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                          initial: { x: 0, y: 0, opacity: 1 },
                          hover: { x: 16, y: -16, opacity: 0 },
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                          initial: { x: -16, y: 16, opacity: 0 },
                          hover: { x: 0, y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#141414]" />
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
