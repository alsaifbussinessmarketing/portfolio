"use client";
import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/config/process";

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Headline & Explanation */}
        <div>
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 leading-tight">
            Simple <span className="text-primary">Solutions!</span>
          </h2>
          <p className="text-body mt-4 max-w-md">
            We understand that no two businesses are alike. That's why we take the time to understand your goals and deliver custom strategies.
          </p>
        </div>

        {/* Right Side: Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-bg-surface p-6 rounded-lg border border-border-subtle shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                {step.stepNumber}
              </div>
              <div>
                <h3 className="font-bold text-heading text-base">{step.title}</h3>
                <p className="text-xs text-body mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};