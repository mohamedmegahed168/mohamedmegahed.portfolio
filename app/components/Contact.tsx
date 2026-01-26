"use client";
import { useState } from "react";
import { Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FormData {
  userName: string;
  email: string;
  message: string;
}

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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<FormData>();

  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(data: FormData) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      setError("root", {
        type: "server",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#fdfcf0] dark:bg-[#171b18] text-[#2f3e46] dark:text-white transition-colors duration-300 min-h-screen flex flex-col justify-center"
    >
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Let&apos;s start a conversation.
            </h1>
            <p className="text-[#2f3e46]/60 dark:text-white/60 text-lg max-w-xl mx-auto md:mx-0">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col justify-start space-y-12"
            >
              <div>
                <h3 className="text-[#84a98c] font-bold uppercase tracking-[0.2em] text-sm mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 flex items-center justify-center size-10 rounded-lg bg-[#84a98c]/10 text-[#84a98c] group-hover:bg-[#84a98c] group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <Link href="mailto:m.megahed168@gmail.com">
                      <p className="text-[#2f3e46]/40 dark:text-white/40 text-xs font-bold uppercase tracking-wider mb-1">
                        Email Me
                      </p>
                      <p className="text-lg font-medium hover:text-[#84a98c] transition-colors">
                        m.megahed168@gmail.com
                      </p>
                    </Link>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 flex items-center justify-center size-10 rounded-lg bg-[#84a98c]/10 text-[#84a98c] group-hover:bg-[#84a98c] group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <Link href="tel:01153039862">
                      <p className="text-[#2f3e46]/40 dark:text-white/40 text-xs font-bold uppercase tracking-wider mb-1">
                        Call Me
                      </p>
                      <p className="text-lg font-medium hover:text-[#84a98c] transition-colors">
                        01153039862
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#84a98c] font-bold uppercase tracking-[0.2em] text-sm mb-6">
                  Social Media
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Link
                        key={link.label}
                        aria-label={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2F3E46]/10 dark:border-white/10 text-[#2f3e46]/60 dark:text-white/60 hover:bg-[#84a98c] hover:border-[#84a98c] hover:text-white transition-all duration-300 hover:-translate-y-1"
                      >
                        <IconComponent size={16} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full bg-white dark:bg-[#1e231f] p-8 md:p-10 rounded-3xl border border-[#2f3e46]/5 dark:border-white/5 shadow-2xl shadow-[#2f3e46]/5 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    {errors.root && (
                      <div className="p-3 rounded-lg bg-red-100 text-red-600 text-sm font-medium">
                        {errors.root.message}
                      </div>
                    )}

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#2f3e46]/80 dark:text-white/80">
                        Full Name
                      </label>
                      <input
                        type="text"
                        {...register("userName", {
                          required: "Name is required",
                        })}
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.userName}
                        className={`w-full rounded-xl border bg-[#fdfcf0]/50 dark:bg-[#171b18]/50 p-4 outline-none transition-all focus:border-[#84a98c] focus:ring-1 focus:ring-[#84a98c] ${errors.userName ? "border-red-400" : "border-[#2f3e46]/10 dark:border-white/10"}`}
                      />
                      {errors.userName && (
                        <span className="text-red-500 text-xs">
                          {errors.userName.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#2f3e46]/80 dark:text-white/80">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                          },
                        })}
                        placeholder="hello@example.com"
                        className={`w-full rounded-xl border bg-[#fdfcf0]/50 dark:bg-[#171b18]/50 p-4 outline-none transition-all focus:border-[#84a98c] focus:ring-1 focus:ring-[#84a98c] ${errors.email ? "border-red-400" : "border-[#2f3e46]/10 dark:border-white/10"}`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#2f3e46]/80 dark:text-white/80">
                        Your Message
                      </label>
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                        })}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className={`w-full rounded-xl border bg-[#fdfcf0]/50 dark:bg-[#171b18]/50 p-4 outline-none transition-all focus:border-[#84a98c] focus:ring-1 focus:ring-[#84a98c] resize-none ${errors.message ? "border-red-400" : "border-[#2f3e46]/10 dark:border-white/10"}`}
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer mt-2 w-full bg-[#84a98c] hover:bg-[#84a98c]/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#84a98c]/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          Sending...{" "}
                          <Loader2 className="animate-spin" size={18} />
                        </>
                      ) : (
                        <>
                          Send Message{" "}
                          <Send
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4"
                  >
                    <div className="w-20 h-20 bg-[#84a98c]/10 rounded-full flex items-center justify-center text-[#84a98c] mb-2">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2f3e46] dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-[#2f3e46]/60 dark:text-white/60 max-w-xs">
                      Thanks for reaching out, {useState.name}. I&apos;ll get
                      back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="cursor-pointer mt-6 text-sm font-bold text-[#84a98c] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
