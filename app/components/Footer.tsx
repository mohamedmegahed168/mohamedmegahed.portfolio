import {
  Download,
  Palette,
  Terminal,
  Zap,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-[#2F3E46]/10 dark:border-white/10 text-center w-full">
      <p className="text-[#2f3e46]/50 dark:text-white/50 text-sm mb-6">
        © {new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#"
          className="text-[#2f3e46]/40 dark:text-white/40 hover:text-[#84a98c] hover:scale-110 transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="#"
          className="text-[#2f3e46]/40 dark:text-white/40 hover:text-[#84a98c] hover:scale-110 transition-all"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="text-[#2f3e46]/40 dark:text-white/40 hover:text-[#84a98c] hover:scale-110 transition-all"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          className="text-[#2f3e46]/40 dark:text-white/40 hover:text-[#84a98c] hover:scale-110 transition-all"
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
}
