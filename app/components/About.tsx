"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Image from "next/image";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function About() {
  const skills = ["React", "Tailwind CSS", "TypeScript", "Next.js", "Git"];

  return (
    <div
      id="about"
      className="bg-[#F5F5F0] dark:bg-[#171b18] text-[#2f3e46] dark:text-gray-200 transition-colors duration-300 min-h-screen"
    >
      <main className="flex flex-col items-center pt-32 pb-20 overflow-hidden">
        <div className="flex flex-col max-w-[1050px] w-full px-6">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-12 items-center py-12 mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="flex-shrink-0 relative group"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-[#2F3E46] shadow-2xl overflow-hidden z-10">
                <Image
                  src="/my-photo.jpg"
                  width={600}
                  height={400}
                  alt="Profile"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute -bottom-2 right-4 bg-[#84a98c] text-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow">
                <Code2 size={24} />
              </div>
            </motion.div>

            <div className="flex flex-col justify-center text-center md:text-left space-y-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="h-[1px] w-12 bg-[#84a98c]"></span>
                  <span className="text-[#84a98c] font-bold tracking-[0.2em] uppercase text-sm">
                    About Me
                  </span>
                </div>

                <h2 className="text-[#2f3e46] dark:text-white text-3xl font-black leading-[1.1]">
                  Bridging the gap between <br />
                  <span className="text-[#84a98c] relative inline-block">
                    functionality
                    <svg
                      className="absolute w-full h-3 -bottom-1 left-0 opacity-40"
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
                  and art.
                </h2>
              </motion.div>

              <div className="space-y-6 text-[#2F3E46]/80 dark:text-white/80 text-lg text-left leading-relaxed font-light">
                <p className="border-l-4 border-[#84a98c]/30 pl-4 md:pl-0 md:border-0 ">
                  I am a Frontend Web Developer crafting responsive, thoughtful
                  web experiences. I believe a website is more than code — it is
                  a feeling, a flow, a conversation. Guided by simplicity,
                  elegance, and utility, I shape interfaces with intention. I
                  build not just for screens, but for people, creating digital
                  spaces that truly matter.
                </p>
              </div>

              <motion.div variants={fadeInUp} className="pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2F3E46]/40 dark:text-white/40 mb-4">
                  Technological Toolbox
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-white/5 border border-[#2F3E46]/10 dark:border-white/10 text-[#2f3e46] dark:text-white rounded-lg text-sm font-medium hover:border-[#84a98c] hover:text-[#84a98c] transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
