"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F5F5F0] dark:bg-[#171b18] text-[#2F3E46] dark:text-white transition-colors duration-300 relative overflow-hidden min-h-screen flex flex-col">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#84a98c]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#2F3E46]/5 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="flex-grow flex flex-col justify-center items-center w-full px-4 md:px-8 pt-36 md:pt-44 pb-12 relative">
        <div className="max-w-[1050px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              className="flex flex-col gap-6 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col gap-5">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <span className="h-[1px] w-8 bg-[#84a98c]"></span>
                  <span className="text-[#84a98c] font-bold tracking-[0.2em] uppercase text-xs">
                    Frontend Developer
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-[#2F3E46] dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight"
                >
                  Crafting digital <br />
                  <span className="relative inline-block text-[#2F3E46] dark:text-white">
                    experiences
                    <svg
                      className="absolute w-full h-3 -bottom-1 left-0 text-[#84a98c]"
                      viewBox="0 0 200 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.00025 6.99997C2.00025 6.99997 53.3528 2.37255 101.5 5.00003C158.5 8.11115 198 1.50003 198 1.50003"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  with code.
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-[#2F3E46]/70 dark:text-white/70 text-lg leading-relaxed max-w-lg font-light"
                >
                  I build accessible, pixel-perfect, and performant web
                  applications that blend{" "}
                  <span className="font-medium text-[#2F3E46] dark:text-white">
                    minimalist design
                  </span>{" "}
                  with clean architecture.
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button className="group bg-[#2F3E46] dark:bg-white text-white dark:text-[#2F3E46] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-sm md:text-base">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="cursor-pointer group bg-transparent border border-[#2F3E46]/20  hover:border-[#2F3E46]/50  text-[#2F3E46]  px-8 py-3.5 rounded-full font-bold transition-all hover:bg-[#2F3E46]/5  text-sm md:text-base">
                  About Me
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Laptop SVG */}
            <div className="order-1 lg:order-2 flex justify-center items-center relative">
              <motion.div
                className="relative w-full aspect-square max-w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <svg
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-2xl"
                  >
                    <circle
                      cx="250"
                      cy="250"
                      r="180"
                      fill="#84a98c"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M70 340 H430 C441.046 340 450 348.954 450 360 V365 C450 370.523 445.523 375 440 375 H60 C54.4772 375 50 370.523 50 365 V360 C50 348.954 58.9543 340 70 340 Z"
                      fill="#2F3E46"
                      className="dark:fill-[#3a4b55]"
                    />
                    <path
                      d="M50 360 H450"
                      stroke="#1a2328"
                      strokeWidth="2"
                      strokeOpacity="0.2"
                    />
                    <rect
                      x="90"
                      y="100"
                      width="320"
                      height="240"
                      rx="16"
                      fill="#2F3E46"
                      className="dark:fill-[#3a4b55]"
                    />
                    <rect
                      x="105"
                      y="115"
                      width="290"
                      height="210"
                      rx="4"
                      fill="#1A202C"
                    />
                    <circle cx="120" cy="130" r="4" fill="#FF5F56" />
                    <circle cx="135" cy="130" r="4" fill="#FFBD2E" />
                    <circle cx="150" cy="130" r="4" fill="#27C93F" />
                    <g transform="translate(250, 220)">
                      <circle
                        cx="0"
                        cy="0"
                        r="40"
                        fill="#84a98c"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M-25 -15 L-45 0 L-25 15"
                        stroke="#84a98c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 -15 L45 0 L25 15"
                        stroke="#84a98c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 -25 L-10 25"
                        stroke="#84a98c"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </g>
                    <path
                      d="M105 115 H395 V250 L105 150 V115 Z"
                      fill="white"
                      fillOpacity="0.03"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
