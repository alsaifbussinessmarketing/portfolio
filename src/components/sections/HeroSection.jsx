"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Copywriting & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 z-10"
        >
          <span className="px-3.5 py-1.5 sm:px-4 rounded-full bg-primary-light text-primary text-xs sm:text-sm font-semibold tracking-wide border border-primary/10">
            Digital Marketing & Media Advertiser
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-heading leading-tight sm:leading-tight lg:leading-tight">
            We create <span className="text-primary">solutions</span> for your business
          </h1>

          <p className="text-base sm:text-lg text-body max-w-xl">
            Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge and high-converting.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center">
                Get Started
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Character Rendering */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center w-full min-h-70 sm:min-h-87.5 lg:min-h-112.5"
        >
          {/* Decorative Background Halo */}
          <div className="absolute w-[80%] h-[80%] max-w-87.5 max-h-87.5 rounded-full bg-linear-to-tr from-primary-light to-secondary-light/40 blur-2xl opacity-70 -z-10" />

          {/* Character Visualization */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-4/3 flex justify-center items-center">
            <Image
              src="/assets/hero3.png"
              alt="Professional UX Designer Sitting on Chair"
              width={500}
              height={380}
              priority
              className="w-full h-auto object-contain rounded transform hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};