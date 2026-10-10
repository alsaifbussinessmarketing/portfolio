import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="bg-heading text-white pt-16 pb-8 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Info */}
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Health<span className="text-primary">Safe</span>
          </Link>
          <p className="text-gray-400 text-sm mt-4 max-w-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-4 text-base">Contact</h4>
          <p className="text-sm text-gray-400 mb-2">{siteConfig.contactEmail}</p>
          <p className="text-xs text-gray-500 mt-4">
            HMStudio Partnership Project
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};