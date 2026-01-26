"use client";
import { motion } from "framer-motion";
export default function TimeLine() {
  const timeline = [
    {
      year: "2018 - 2022",
      title: "Student at the Faculty of Science",
      location: "Aswan University",
      description:
        "Leading the design system initiative and overseeing the UX strategy for a global sustainability platform.",
    },
    {
      year: "2023 - 2024",
      title: "Military Service",
      location: "Cairo Intensive Security Forces",
      description:
        "Developed custom web experiences for Fortune 500 clients using React, Node.js, and cloud architectures.",
    },
    {
      year: "2024 - 2025",
      title: "International account advisor",
      location: "Vodafone UK limited",
      description:
        "Focused on building interactive marketing components and maintaining high-quality pixel-perfect CSS.",
    },
    {
      year: "Present",
      title: "Frontend web developer",
      location: "",
      description:
        "Started professional journey by helping local businesses establish their first digital presence.",
    },
  ];
  return (
    <section id="journey" className="py-12">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-[#2f3e46] dark:text-white text-3xl font-bold tracking-tight mb-2">
          My Journey
        </h2>
        <p className="text-[#84a98c] font-medium">
          My evolution as a professional
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#2F3E46]/10 dark:bg-white/10"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#84a98c] rounded-full border-4 border-[#F5F5F0] dark:border-[#171b18] z-10"></div>
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                >
                  <div className="bg-white dark:bg-white/5 border border-[#2F3E46]/5 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#84a98c] text-xs font-bold uppercase tracking-widest mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-[#2f3e46] dark:text-white text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#2f3e46]/50 dark:text-white/50 mb-4">
                      {item.location}
                    </p>
                    <p className="text-sm text-[#2f3e46]/70 dark:text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
