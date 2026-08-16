import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | SEOMeta.pro",
  description:
    "Get in touch with the SEOMeta.pro team for questions, support, or custom microstock AI metadata integrations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-slate-100 relative">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  );
}
