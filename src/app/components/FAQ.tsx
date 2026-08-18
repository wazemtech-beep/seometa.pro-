"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQ() {
  // First item open by default matching Framer HTML snippet
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      id: "faq-1",
      question: "Which microstock platforms are supported for CSV export?",
      answer:
        "Our AI CSV Generator creates 100% compliant CSV files for Adobe Stock, Shutterstock, Freepik, Vecteezy, Getty Images, iStock, Alamy, Dreamstime, Envato Elements, and Depositphotos.",
    },
    {
      id: "faq-2",
      question: "How many images or vectors can I process in a single CSV batch?",
      answer:
        "Depending on your plan, you can batch process anywhere from 100 assets up to 10,000+ files simultaneously in a single click with zero speed slowdown.",
    },
    {
      id: "faq-3",
      question: "Does the AI generate relevant keywords, titles, and descriptions?",
      answer:
        "Yes! Our AI model analyzes image content, color palettes, subjects, and concepts to automatically produce 1 descriptive title, 1 clear summary, and 45–50 high-volume SEO keywords.",
    },
    {
      id: "faq-4",
      question: "Is vector (EPS/SVG) and video metadata supported?",
      answer:
        "Yes, we support JPEG, PNG, TIFF, EPS vector files, and MOV/MP4 video files. The AI extracts metadata tailored to vector design categories and stock video stock specs.",
    },
    {
      id: "faq-5",
      question: "Are the generated CSVs guaranteed to pass platform validation?",
      answer:
        "Yes! Every CSV output is pre-formatted with exact column headers, character length constraints, and delimiter formatting required by each stock site.",
    },
    {
      id: "faq-6",
      question: "Can I edit keywords and titles before exporting the CSV?",
      answer:
        "Absolutely. You can review, add custom tags, delete unwanted keywords, or regenerate titles right inside your interactive workspace before downloading.",
    },
    {
      id: "faq-7",
      question: "How does the AI optimize keywords for higher microstock sales?",
      answer:
        "Our AI algorithm is continuously trained on buyer search volume, trending search terms, and top-selling portfolio metadata across all major microstock search engines.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="framer-j7fpgk relative py-24 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none"
      data-framer-name="FAQ"
    >
      {/* 1. Header Section */}
      <div
        className="framer-1epd7eq flex flex-col items-center text-center mb-16"
        data-framer-name="Header"
        id="faqs-header"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Frequently{" "}
          <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff]">
            asked
          </span>{" "}
          questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#cfcbd0] opacity-60 text-sm md:text-base font-normal max-w-md text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          You can adapt them to your brand, tone, and target audience.
        </motion.p>
      </div>

      {/* 2. FAQs Content Container */}
      <div
        className="framer-y4vd12 max-w-[860px] mx-auto flex flex-col gap-4"
        data-framer-name="FAQs Content"
        id="faqs-content"
      >
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => toggleAccordion(index)}
              className={`relative cursor-pointer transition-[border-color,box-shadow,border-radius] duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#1a1a1a] border border-[#4555fd] rounded-[20px] p-6 md:p-8 shadow-[0_0_25px_rgba(69,85,253,0.35)]"
                  : "bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-[12px] p-5 md:p-6"
              }`}
            >
              {/* Question Header Row */}
              <div className="flex items-center justify-between gap-4">
                <h5
                  className="text-base sm:text-lg md:text-xl font-medium text-white tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.question}
                </h5>

                {/* Rotating Plus Icon matching Framer rotate(-45deg) on active */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#4555fd] text-white rotate-45"
                      : "bg-white/10 text-white hover:bg-white/20 rotate-0"
                  }`}
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Animated Collapsible Answer Body */}
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <p
                        className="text-sm md:text-base text-[#cfcbd0] opacity-85 leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
