"use client";
import { motion, Variants } from "framer-motion";
import { Palette, Terminal, Zap, Code2 } from "lucide-react";
import Image from "next/image";
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function About() {
  const skills = [
    { label: "React", id: 1 },
    { label: "Tailwind CSS", id: 2 },
    { label: "TypeScript", id: 3 },
    { label: "Next.js", id: 4 },
    { label: "Figma", id: 5 },
    { label: "Git", id: 6 },
  ];

  return (
    <div className="bg-[#F5F5F0] dark:bg-[#171b18] text-[#2f3e46] dark:text-gray-200 transition-colors duration-300 min-h-screen">
      <main className="flex flex-col items-center pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="flex flex-col max-w-[1050px] w-full px-6">
          {/* --- HERO SECTION OF ABOUT --- */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-12 items-center py-12 mb-16"
          >
            {/* Image Side */}
            <motion.div
              variants={fadeInUp}
              className="flex-shrink-0 relative group"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-[#2F3E46] shadow-2xl overflow-hidden z-10">
                {/* Replace this src with your actual image path */}
                <img
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDSbG2k4VfMFPEoH4nFzb2wfAQpS1N_1DgjyNPQ24IPpro81AsE2RPBa7eUhK7s0BXwZKzOsspFFgYHC4SGIgiGiIRXkGUgvjOOzfntXKLvjLVq3w0PzAga9GU6SsPqpm3fMtLQfgEu2Bdyka-18tkQ8hH4kUyJU7TwmD6VeClmw07uV-ie2qAfqsrdDEMT7Ys9dB5SBbqyid8ALzMAFqHz1NCFr2yHBrhS5XwIBLTN_y11ywpYaqa5_aWtELRqfGWtRO2AnrYYbmQ`}
                  alt="Profile"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Decorative Circle Behind */}

              {/* Floating Badge */}
              <div className="absolute -bottom-2 right-4 bg-[#84a98c] text-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow">
                <Code2 size={24} />
              </div>
            </motion.div>

            {/* Text Side */}
            <div className="flex flex-col justify-center text-center md:text-left space-y-6">
              <motion.div variants={fadeInUp}>
                <h1 className="text-[#2f3e46] dark:text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                  About Me
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Bridging the gap between <br />
                  <span className="text-[#84a98c]">functionality</span> and art.
                </h2>
              </motion.div>

              <div className="space-y-4 text-[#2F3E46]/80 dark:text-white/80 leading-relaxed font-light text-lg">
                <p>
                  I am a Frontend Web Developer with a strong focus on building
                  responsive web applications. I believe that a website should
                  be more than just lines of code—it should be a unique
                  experience.
                </p>
                <p>
                  My development philosophy centers on three core pillars:{" "}
                  <strong className="text-[#84a98c]">Simplicity</strong>,{" "}
                  <strong className="text-[#84a98c]">Elegance</strong>, and{" "}
                  <strong className="text-[#84a98c]">Utility</strong>.
                </p>
                <p>
                  I don&apos;t just build for screens; I build for people. By
                  prioritizing intuitive UX and clean architecture, I ensure
                  that every digital product I create not only looks beautiful
                  but serves a genuine purpose.
                </p>
              </div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-2 justify-center md:justify-start pt-2"
              >
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-1.5 border border-[#84a98c]/30 bg-[#84a98c]/5 text-[#84a98c] dark:text-[#84a98c] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#84a98c] hover:text-white transition-all cursor-default"
                  >
                    {skill.label}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
