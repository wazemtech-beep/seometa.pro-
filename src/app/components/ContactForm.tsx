"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { FramerPillButton } from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", subject: "", notes: "" });
    }, 4000);
  };

  return (
    <section id="contact-form" className="relative py-12 md:py-20 px-4 overflow-hidden select-none z-10">
      {/* Background Ambient Blue Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4555fd]/15 blur-[150px] rounded-full z-0" />

      <div className="max-w-[1180px] mx-auto w-full relative z-10 flex flex-col items-center">
        {/* 1. Main Form Card Wrapper (framer-1qqpngd) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="framer-1qqpngd w-full max-w-[780px] bg-[#181818] border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-6"
        >
          {/* Ambient Blue Radial Glow in Form Card Header & Bottom Right */}
          <div className="framer-1gikooz absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#4555fd]/25 via-[#4555fd]/5 to-transparent pointer-events-none rounded-t-[32px] z-0" />
          <div className="framer-allos5 absolute -bottom-20 -right-20 w-80 h-80 bg-[#4555fd]/20 blur-[100px] rounded-full pointer-events-none z-0" />

          {submitted ? (
            <div className="py-16 text-center text-emerald-400 font-medium text-lg bg-emerald-500/10 border border-emerald-500/20 rounded-2xl relative z-10">
              ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="framer-k3zvg6 space-y-6 relative z-10">
              <div className="framer-1suuhhu grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name Input */}
                <div className="framer-9wpz6e flex flex-col">
                  <label className="text-sm font-medium text-[#fef9ff] mb-2 text-left">
                    Full name*
                  </label>
                  <div className="framer-form-text-input">
                    <input
                      type="text"
                      required
                      name="Full Name"
                      placeholder="Jorder Peter"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#121214] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-[#cfcbd0]/30 focus:outline-none focus:border-[#4555fd] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Email Address Input */}
                <div className="framer-h1robb flex flex-col">
                  <label className="text-sm font-medium text-[#fef9ff] mb-2 text-left">
                    Email address*
                  </label>
                  <div className="framer-form-text-input">
                    <input
                      type="email"
                      required
                      name="Email"
                      placeholder="support@yahoo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121214] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-[#cfcbd0]/30 focus:outline-none focus:border-[#4555fd] transition-colors text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Input */}
              <div className="framer-3xfp6u flex flex-col">
                <label className="text-sm font-medium text-[#fef9ff] mb-2 text-left">
                  Subject
                </label>
                <div className="framer-form-text-input">
                  <input
                    type="text"
                    required
                    name="Subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#121214] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-[#cfcbd0]/30 focus:outline-none focus:border-[#4555fd] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Notes Textarea */}
              <div className="framer-q0jxos flex flex-col">
                <label className="text-sm font-medium text-[#fef9ff] mb-2 text-left">
                  Notes*
                </label>
                <div className="framer-form-text-input">
                  <textarea
                    rows={4}
                    required
                    name="Note"
                    placeholder="Enter here"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#121214] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-[#cfcbd0]/30 focus:outline-none focus:border-[#4555fd] transition-colors text-sm resize-none"
                  />
                </div>
              </div>

              {/* Framer Full-Width Submit Button: GET STARTED ↗ */}
              <div className="framer-1kz2oht-container pt-3">
                <FramerPillButton type="submit" text="GET STARTED" className="w-full" />
              </div>
            </form>
          )}
        </motion.div>

        {/* 2. Standalone 2-Box Cards Container BELOW the Form Card (framer-mj3i6y) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="framer-mj3i6y w-full max-w-[780px] grid grid-cols-1 sm:grid-cols-2 gap-5 text-left"
        >
          {/* Box 1: Location Card (framer-jqx3jb) */}
          <div className="framer-jqx3jb bg-[#181818] border border-white/5 rounded-[24px] p-7 sm:p-8 flex flex-col justify-start shadow-xl hover:border-white/15 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#4555fd] stroke-[2]" />
              <span
                className="text-base font-normal text-[#cfcbd0]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Location:
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Canal+Road,+Faisalabad,+Punjab,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base sm:text-lg font-medium leading-snug hover:underline block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Canal Road, Faisalabad,
              <br />
              Punjab, Pakistan
            </a>
          </div>

          {/* Box 2: Email Card (framer-1u5oww2) */}
          <div className="framer-1u5oww2 bg-[#181818] border border-white/5 rounded-[24px] p-7 sm:p-8 flex flex-col justify-start shadow-xl hover:border-white/15 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-[#4555fd] stroke-[2]" />
              <span
                className="text-base font-normal text-[#cfcbd0]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Email:
              </span>
            </div>
            <a
              href="mailto:fahad@seometa.pro"
              className="text-white text-base sm:text-lg font-medium leading-snug hover:underline block break-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              fahad@seometa.pro
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
