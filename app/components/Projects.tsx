"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  const projects = [
    {
      description:
        "A productivity platform that helps users maintain control of their routines. Features include a streak counter, week navigator for marking past habits, and continuous tracking to reinforce consistency.",
      image: "/habitcon.png",
      link: "https://habitcon.vercel.app/",
    },
    {
      description:
        "A user-friendly medical platform for Aswan city. Enables filtering doctors by specialty and subarea, provides contact details, working hours, and Google Maps integration for quick navigation.",
      image: "/aswan-med.png",
      link: "https://aswan-doc.vercel.app/",
    },
    {
      description:
        "A distraction-free writing platform where users can share thoughts, publish posts, and engage with others seamlessly, without clutter, focusing entirely on meaningful content creation.",
      image: "/social-medium.png",
      link: "https://social-medium-xi.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-[#fcfaf7] text-[#171b18] transition-colors duration-300 min-h-screen flex flex-col"
    >
      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 lg:px-10 pt-16 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171b18]/10 pb-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#171b18] mb-4">
                Selected <span className="text-[#84a98c]">Projects</span>
              </h1>
              <p className="text-[#171b18]/60  text-lg leading-relaxed">
                A curated selection of my latest work, focusing on minimalist
                interfaces, robust full-stack architecture, and user-centric
                design principles.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1200px] px-6 lg:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col gap-5 rounded-2xl bg-white  border border-[#2F3E46]/10  p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-60 w-full rounded-xl bg-[#F5F5F0]  overflow-hidden p-6 flex items-center justify-center">
                  <Image
                    height={400}
                    width={800}
                    src={project.image}
                    alt={project.description}
                    className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 px-2 pb-2">
                  <p className="text-[#171b18]/70  text-sm  leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="  inline-flex items-center gap-2 text-md font-bold text-[#84a98c] mt-2 group/link"
                  >
                    View Project
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
