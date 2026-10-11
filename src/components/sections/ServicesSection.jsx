// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { servicesData } from "@/config/service";
// import { Card } from "@/components/ui/Card";

// export const ServicesSection = () => {
//   return (
//     <section className="py-20 bg-bg-surface border-y border-border-subtle">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <span className="text-primary font-semibold text-sm tracking-wider uppercase">
//             What We Do
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-heading mt-2">
//             We Provide The Best <span className="text-primary">Services</span>
//           </h2>
//           <p className="text-body mt-4">
//             Let us unlock the full potential of your business with our data-driven growth strategies.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <Card className="h-full flex flex-col justify-between">
//                 <div>
//                   <div className="w-12 h-12 rounded-md bg-primary-light text-primary flex items-center justify-center font-bold text-lg mb-4">
//                     0{index + 1}
//                   </div>
//                   <h3 className="text-xl font-bold text-heading mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-body text-sm leading-relaxed font-semibold">
//                     {service.description}
//                   </p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/config/service";
import { 
  TbCode, 
  TbPalette, 
  TbTargetArrow, 
  TbShare, 
  TbArrowRight 
} from "react-icons/tb";

// Map service icons dynamically
const iconMap = {
  Code2: TbCode,
  Palette: TbPalette,
  Megaphone: TbTargetArrow,
  Share2: TbShare,
};

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-bg-main relative overflow-hidden">
      {/* Decorative Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-light/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary-light/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-bold tracking-widest uppercase border border-primary/10 mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight">
            We Provide The Best <span className="text-primary">Services</span>
          </h2>
          <p className="text-body mt-4 text-base leading-relaxed">
            Unlocking scalable growth for your business with high-converting marketing, design, and engineering solutions.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || TbCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="h-full bg-bg-surface rounded-2xl p-8 border border-border-subtle shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group-hover:-translate-y-2">
                  
                  {/* Top Gradient Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary via-primary-hover to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header Row: Icon & Step Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary-light text-secondary group-hover:bg-primary group-hover:text-white flex items-center justify-center text-2xl transition-all duration-300 shadow-xs">
                        <IconComponent />
                      </div>
                      <span className="text-2xl font-black text-border-subtle group-hover:text-primary/20 transition-colors duration-300">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Interactive CTA Link */}
                  <div className="pt-6 mt-6 border-t border-border-subtle/60 flex items-center gap-2 text-xs font-bold text-secondary group-hover:text-primary transition-colors duration-200">
                    <span>Learn More</span>
                    <TbArrowRight className="text-base transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};