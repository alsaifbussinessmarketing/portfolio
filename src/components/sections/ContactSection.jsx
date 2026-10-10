"use client";
import React from "react";
import { ContactForm } from "@/components/forms/ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-bg-main">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2">
            Ready to scale your <span className="text-primary">business?</span>
          </h2>
          <p className="text-body mt-4 max-w-xl mx-auto">
            Book a strategy consultation with our performance team to review your campaigns.
          </p>
        </div>

        <div className="bg-bg-surface p-8 md:p-10 rounded-lg border border-border-subtle shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};