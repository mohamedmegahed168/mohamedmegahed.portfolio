"use client";
import { Smartphone, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "./About";
export default function WhatIDo() {
  const services = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "Building pixel-perfect, adaptive layouts that provide a seamless experience across mobile, tablet, and desktop.",
      icon: Smartphone,
    },
    {
      id: 2,
      title: "Modern Architecture",
      description:
        "Developing scalable, modular web apps using Next.js and React component patterns for long-term maintainability.",
      icon: Layers,
    },
    {
      id: 3,
      title: "Performance & SEO",
      description:
        "Optimizing applications for blazing fast load times, Core Web Vitals, and accessibility (a11y) compliance.",
      icon: Rocket,
    },
  ];
  return (
    <section className="py-12 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="h-[1px] flex-grow bg-[#2F3E46]/10 dark:bg-white/10"></div>
        <h2 className="text-[#2f3e46] dark:text-white text-2xl font-bold tracking-tight">
          What I Do
        </h2>
        <div className="h-[1px] flex-grow bg-[#2F3E46]/10 dark:bg-white/10"></div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group flex flex-col gap-5 rounded-2xl border border-[#2F3E46]/5 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#84a98c]/30"
            >
              <div className="bg-[#84a98c]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#84a98c] group-hover:bg-[#84a98c] group-hover:text-white transition-colors duration-300">
                <IconComponent size={28} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#2f3e46] dark:text-white text-xl font-bold">
                  {service.title}
                </h3>
                <p className="text-[#2f3e46]/60 dark:text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
