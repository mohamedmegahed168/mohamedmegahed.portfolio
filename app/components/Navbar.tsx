"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <header className="flex items-center justify-between whitespace-nowrap border border-[#2F3E46]/10  bg-white/70 backdrop-blur-xl px-6 py-3 rounded-full w-full max-w-[1050px] shadow-sm transition-all duration-300">
          <Link
            href="#home"
            onClick={() => setActiveTab("Home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-[#84a98c] text-white px-2 py-2 rounded-full shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
              <Code2 size={20} />
            </div>
            <h2 className="text-[#2f3e46]  text-lg font-bold tracking-tight">
              Mohamed Megahed
            </h2>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                onMouseEnter={() => setHoveredTab(link.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                {hoveredTab === link.name && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-[#2F3E46]/5  rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {activeTab === link.name && (
                  <motion.span
                    layoutId="active-line"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#84a98c] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 ${
                    activeTab === link.name
                      ? "text-[#2f3e46] font-semibold"
                      : "text-[#2f3e46]/70 hover:text-[#2f3e46]"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hidden md:flex bg-[#2F3E46] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-[#84a98c]/20"
            >
              My resume
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#2f3e46] hover:bg-[#2F3E46]/5 rounded-full transition-colors z-50 relative"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 left-4 right-4 z-50 bg-white border border-[#2F3E46]/10 rounded-2xl shadow-2xl p-6 md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === link.name
                      ? "text-[#84a98c] font-bold"
                      : "text-[#2f3e46] dark:text-white hover:text-[#84a98c]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-[1px] bg-[#2F3E46]/10 w-full my-1"></div>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#84a98c] text-white py-3 rounded-xl font-bold text-center active:scale-95 transition-transform"
              >
                My resume
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
