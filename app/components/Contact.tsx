"use client";
import { useState } from "react";
import { Mail, Phone, Send, Moon, Sun } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
import { useForm } from "react-hook-form";
interface FormData {
  userName: string;
  email: string;
  message: string;
}
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      userName: "",
      email: "",
      message: "",
    },
  });
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    console.log("hello");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setSubmitStatus(true);
        reset();
      }
    } catch (error) {
      console.error(error);
      setError("root", {
        type: "server",
        message: "An unexpected error occured. Please try again later",
      });
    } finally {
      setSubmitStatus(false);
    }
  }

  const socialLinks = [
    { label: "Gmail", icon: SiGmail, href: "#" },
    { label: "LinkedIn", icon: SiLinkedin, href: "#" },
    { label: "Facebook", icon: SiFacebook, href: "#" },
    { label: "Twitter", icon: SiX, href: "#" },
    { label: "GitHub", icon: SiGithub, href: "#" },
    { label: "Instagram", icon: SiInstagram, href: "#" },
  ];

  return (
    <div>
      <div
        id="contact"
        className="bg-[#fdfcf0]  text-[#2f3e46]  transition-colors duration-300 min-h-screen"
      >
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-[1000px] mx-auto">
            {/* Page Heading */}
            <div className="mb-12 text-center md:text-left">
              <h1 className="text-[#2f3e46] dark:text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                Let&apos;s start a conversation.
              </h1>
              <p className="text-[#2f3e46]/60 dark:text-gray-400 text-lg max-w-xl">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {/* Left Column - Contact Info */}
              <div className="flex flex-col justify-start space-y-12">
                {/* Get in Touch */}
                <div>
                  <h3 className="text-[#84a98c] font-bold uppercase tracking-[0.2em] text-sm mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex items-center justify-center size-10 rounded-lg bg-[#84a98c]/10 text-[#84a98c]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-[#2f3e46]/40 dark:text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                          Email Me
                        </p>
                        <a
                          href="mailto:hello@developer.com"
                          className="text-[#2f3e46] dark:text-white text-lg font-medium hover:text-[#84a98c] transition-colors"
                        >
                          m.megahed168@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex items-center justify-center size-10 rounded-lg bg-[#84a98c]/10 text-[#84a98c]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-[#2f3e46]/40 dark:text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                          Call Me
                        </p>
                        <a
                          href="tel:+1234567890"
                          className="text-[#2f3e46] dark:text-white text-lg font-medium hover:text-[#84a98c] transition-colors"
                        >
                          01153039862
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#84a98c] font-bold uppercase tracking-[0.2em] text-sm mb-6">
                    Social Media
                  </h3>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <a
                          key={link.label}
                          aria-label={link.label}
                          href={link.href}
                          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#84a98c]/20 text-[#84a98c] hover:bg-[#84a98c] hover:text-white transition-all duration-300"
                        >
                          <IconComponent size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-full bg-white dark:bg-[#1e231f] p-8 md:p-10 rounded-2xl border border-[#2f3e46]/5 dark:border-white/5 shadow-xl shadow-[#2f3e46]/5">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  {errors.root && (
                    <p className="text-red-500 text-sm ">
                      {" "}
                      {errors.root.message}{" "}
                    </p>
                  )}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#2f3e46] dark:text-gray-200 text-xs font-bold uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("userName", {
                        required: "Your name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-[#2f3e46]/10 dark:border-white/10 bg-[#fdfcf0]/30 dark:bg-[#171b18]/50 p-4 text-[#2f3e46] dark:text-white placeholder:text-[#2f3e46]/30 focus:outline-none focus:border-[#84a98c] focus:ring-2 focus:ring-[#84a98c]/20 transition-all"
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-sm">
                        {errors.userName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#2f3e46] dark:text-gray-200 text-xs font-bold uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="hello@example.com"
                      className="w-full rounded-xl border border-[#2f3e46]/10 dark:border-white/10 bg-[#fdfcf0]/30 dark:bg-[#171b18]/50 p-4 text-[#2f3e46] dark:text-white placeholder:text-[#2f3e46]/30 focus:outline-none focus:border-[#84a98c] focus:ring-2 focus:ring-[#84a98c]/20 transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#2f3e46] dark:text-gray-200 text-xs font-bold uppercase tracking-widest">
                      Your Message
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Your message is required",
                        minLength: {
                          value: 2,
                          message: "Your message must be at least 2 characters",
                        },
                      })}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full rounded-xl border border-[#2f3e46]/10 dark:border-white/10 bg-[#fdfcf0]/30 dark:bg-[#171b18]/50 p-4 text-[#2f3e46] dark:text-white placeholder:text-[#2f3e46]/30 focus:outline-none focus:border-[#84a98c] focus:ring-2 focus:ring-[#84a98c]/20 transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full bg-[#84a98c] hover:bg-[#84a98c]/90 disabled:opacity-70 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#84a98c]/20 flex items-center justify-center gap-2 group"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  {submitStatus && (
                    <div className="mt-4 p-4 bg-[#84a98c]/10 border border-[#84a98c] rounded-xl text-[#84a98c] text-sm font-medium text-center">
                      ✓ Message sent successfully! I&apos;ll get back to you
                      soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="mt-16 md:hidden flex flex-col items-center gap-6">
              <p className="text-[#2f3e46]/30 dark:text-gray-600 text-xs font-medium uppercase tracking-[0.2em]">
                © 2026 Mohamed Megahed Portfolio
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
