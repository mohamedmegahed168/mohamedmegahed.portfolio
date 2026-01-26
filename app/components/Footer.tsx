import Link from "next/link";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
const socialLinks = [
  { label: "Gmail", icon: SiGmail, href: "mailto:m.megahed168@gmail.com" },
  {
    label: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/mohamed-megahed-ab5096338/",
  },
  {
    label: "Facebook",
    icon: SiFacebook,
    href: "https://www.facebook.com/megomgahed550",
  },
  { label: "Twitter", icon: SiX, href: "https://x.com/Mohamed4382437" },
  {
    label: "GitHub",
    icon: SiGithub,
    href: "https://github.com/mohamedmegahed168",
  },
  {
    label: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/m.mgahed168/",
  },
];
export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-[#2F3E46]/10 dark:border-white/10 text-center w-full">
      <p className="text-[#2f3e46]/50 dark:text-white/50 text-sm mb-6">
        © {new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind.
      </p>
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="text-[#2f3e46]/40 dark:text-white/40 hover:text-[#84a98c] hover:scale-110 transition-all"
          >
            <link.icon />
          </Link>
        ))}
      </div>
    </footer>
  );
}
