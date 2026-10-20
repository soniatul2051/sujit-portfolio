"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Linkedin,
  Youtube,
  Twitter,
  Video,
  CheckCircle2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    handle: "in/sujit-motion",
    href: PROFILE_DATA.socials.linkedin,
    icon: Linkedin,
    accent: "hover:border-blue-500/50 hover:bg-blue-500/10",
  },
  {
    name: "YouTube / Vimeo",
    handle: "@sujitreels",
    href: PROFILE_DATA.socials.youtube,
    icon: Youtube,
    accent: "hover:border-rose-500/50 hover:bg-rose-500/10",
  },
  {
    name: "Twitter / X",
    handle: "@sujit_visuals",
    href: PROFILE_DATA.socials.twitter,
    icon: Twitter,
    accent: "hover:border-cyan-400/50 hover:bg-cyan-400/10",
  },
  {
    name: "Direct Email",
    handle: PROFILE_DATA.email,
    href: PROFILE_DATA.socials.email,
    icon: Mail,
    accent: "hover:border-purple-500/50 hover:bg-purple-500/10",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Video Editing",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        projectType: "Video Editing",
        message: "",
      });
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-10 left-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
              <Video className="h-3.5 w-3.5" />
              <span>Let&apos;s Collaborate</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Elevate Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Next Visual Story?
              </span>
            </h2>

            <p className="text-slate-300/90 text-base leading-relaxed">
              Whether you need video editing, 3D modeling, or 3D animation in
              Blender software, drop a message below.
            </p>

            <div className="flex items-center gap-3 text-sm text-slate-300 pt-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-cyan-400">
                <MapPin className="h-4 w-4" />
              </span>
              <span>
                Based in <strong className="text-white">Lucknow, India</strong> •
                Available Worldwide
              </span>
            </div>

            {/* Social Cards */}
            <div className="pt-3 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect Across Platforms
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f172a]/80 p-3.5 transition-all duration-300 ${item.accent}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-white/10 text-cyan-300 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-400 truncate">
                            {item.handle}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-[#0f172a]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Received!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base">
                    Thank you for reaching out to Sujit. I&apos;ll review your
                    project brief and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-cyan-300 hover:bg-white/10 transition"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Rivera"
                        className="w-full rounded-xl border border-white/10 bg-[#090d16]/90 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@studio.com"
                        className="w-full rounded-xl border border-white/10 bg-[#090d16]/90 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Project Category
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#090d16]/90 px-4 py-3.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition"
                    >
                      <option value="Video Editing">Video Editing</option>
                      <option value="3D Modeling">3D Modeling</option>
                      <option value="3D Animation">3D Animation</option>
                      <option value="Blender Software Project">
                        Blender Software Project
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Project Brief &amp; Timeline
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your vision, target platform, and desired turnaround..."
                      className="w-full rounded-xl border border-white/10 bg-[#090d16]/90 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-6 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-[1.01]"
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    <span>Send Inquiry to Sujit</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
