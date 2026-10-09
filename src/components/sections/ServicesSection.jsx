"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/config/service";
import { Card } from "@/components/ui/Card";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-bg-surface border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2">
            We Provide The Best <span className="text-primary">Services</span>
          </h2>
          <p className="text-body mt-4">
            Let us unlock the full potential of your business with our data-driven growth strategies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-md bg-primary-light text-primary flex items-center justify-center font-bold text-lg mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};