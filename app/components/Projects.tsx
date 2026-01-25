"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Work" },
    { id: "medical", label: "Medical Services" },
    { id: "social", label: "Social Media" },
    { id: "productivity", label: "Productivity" },
  ];

  const projects = [
    {
      title: "Productivity",
      description:
        "A high-performance dashboard for tracking retail sales data in real-time using Next.js and D3.js.",
      image: "/habitcon.png",
      category: "productivity",
    },
    {
      title: "Medical services",
      description:
        "Redesigning the digital asset management experience with a focus on security and simplicity.",
      image: "/aswan-med.png",
      category: "medical",
    },
    {
      title: "Social Media",
      description:
        "A searchable, high-speed documentation engine built for modern developer teams.",
      image: "/social-medium.png",
      category: "social",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div className="bg-[#fcfaf7] dark:bg-[#171b18] text-[#171b18] dark:text-[#fcfaf7] transition-colors duration-300 min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center">
          {/* Page Heading */}
          <section className="w-full max-w-[1200px] px-6 lg:px-10 pt-16 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171b18]/10 dark:border-[#fcfaf7]/10 pb-12">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#171b18] dark:text-[#fcfaf7] mb-4">
                  Selected <span className="text-[#84a98c]">Projects</span>
                </h1>
                <p className="text-[#171b18]/60 dark:text-[#fcfaf7]/60 text-lg leading-relaxed">
                  A curated selection of my latest work, focusing on minimalist
                  interfaces, robust full-stack architecture, and user-centric
                  design principles.
                </p>
              </div>
            </div>
          </section>

          {/* Filters Section */}
          <section className="w-full max-w-[1200px] px-6 lg:px-10 py-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`cursor-pointer px-5 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeFilter === filter.id
                      ? "bg-[#84a98c] text-white"
                      : "bg-[#171b18]/5 dark:bg-[#fcfaf7]/5 hover:bg-[#171b18]/10 dark:hover:bg-[#fcfaf7]/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </section>

          {/* Project Grid */}
          <section className="w-full max-w-[1200px] px-6 lg:px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-xl h-60 rounded-2xl ">
                    <Image
                      height={400}
                      width={800}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-[#171b18] dark:text-[#fcfaf7] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#171b18]/70 dark:text-[#fcfaf7]/70 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-[#84a98c] font-bold text-sm mt-1 hover:gap-2 transition-all"
                    >
                      View Project <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full max-w-[1200px] px-6 lg:px-10 py-24">
            <div className="bg-[#171b18] dark:bg-[#fcfaf7] text-[#fcfaf7] dark:text-[#171b18] rounded-3xl p-10 md:p-20 text-center flex flex-col items-center gap-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl leading-tight">
                Got a project idea? Let&apos;s bring it to life.
              </h2>
              <p className="text-[#fcfaf7]/70 dark:text-[#171b18]/70 text-lg max-w-xl">
                I am currently accepting freelance projects and full-time
                inquiries for 2024.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#84a98c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                  Start a Conversation
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
