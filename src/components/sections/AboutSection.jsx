"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-bg-surface border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Agency Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Our Agency
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2 leading-tight">
            Driven by creativity, defined by <span className="text-primary">results</span> that speak for themselves.
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI.
          </p>
          <div className="mt-6">
            <Link href="/about">
              <Button variant="secondary" size="md">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side: 4-Block Stat Matrix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {siteConfig.stats.map((stat, idx) => (
            <Card
              key={idx}
              className={`p-6 text-center ${
                idx === 0 ? "bg-heading text-white border-heading" : "bg-bg-main"
              }`}
            >
              <div
                className={`text-3xl md:text-4xl font-extrabold ${
                  idx === 0 ? "text-primary" : "text-heading"
                }`}
              >
                {stat.value}
              </div>
              <p
                className={`text-xs md:text-sm mt-2 font-medium ${
                  idx === 0 ? "text-gray-300" : "text-body"
                }`}
              >
                {stat.label}
              </p>
            </Card>
          ))}
        </motion.div>

      </div>
    </section>
  );
};