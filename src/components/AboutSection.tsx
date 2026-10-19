"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Cpu,
  Wand2,
  Sliders,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SKILLS_LIST } from "@/data/portfolioData";

const PILLARS = [
  {
    icon: Wand2,
    title: "Motion & Visual Rhythm",
    description:
      "Designing kinetic typography, seamless transitions, and sound-synced cuts that command viewer attention from the very first frame.",
    accent: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Sliders,
    title: "Color & Post Pipeline",
    description:
      "Crafting cinematic moods in DaVinci Resolve, complex VFX composites in After Effects, and narrative pacing in Premiere Pro.",
    accent: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Cpu,
    title: "CS-Driven Precision",
    description:
      "Leveraging a B.Tech CSE foundation for expression scripting, workflow automation, and interactive web video experiences.",
    accent: "from-fuchsia-500/20 to-purple-500/10 border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Story & Journey */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
              <User className="h-3.5 w-3.5" />
              <span>About Sujit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Where{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Computer Science
              </span>{" "}
              Meets Cinematic Motion
            </h2>

            <div className="space-y-4 text-slate-300/90 text-base leading-relaxed">
              <p>
                My creative journey began in{" "}
                <strong className="text-white">Lucknow</strong> while pursuing my{" "}
                <span className="text-cyan-300 font-medium">
                  B.Tech in Computer Science &amp; Engineering (Class of 2024)
                </span>
                . While mastering algorithms, data structures, and modern web
                architecture, I discovered a magnetic pull toward visual
                storytelling, frame-accurate editing, and motion design.
              </p>
              <p>
                What started as directing and editing campus event trailers
                evolved into a full-fledged craft. My engineering background gives
                me a distinct edge in post-production—whether writing JavaScript
                expressions in <strong className="text-white">After Effects</strong>,
                structuring node graphs in{" "}
                <strong className="text-white">DaVinci Resolve</strong>, or
                deploying interactive video showcases with{" "}
                <strong className="text-white">Next.js &amp; Tailwind CSS</strong>.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`rounded-2xl border bg-gradient-to-br ${pillar.accent} p-4 backdrop-blur-md`}
                  >
                    <Icon className={`h-6 w-6 ${pillar.iconColor} mb-2.5`} />
                    <h3 className="text-sm font-bold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300/85 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Skills & Toolkit Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-white/10 bg-[#0f172a]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Creative &amp; Technical Arsenal
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Skills &amp; Software Suite
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/30">
                  <Sparkles className="h-5 w-5 text-purple-300" />
                </div>
              </div>

              {/* Skills Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SKILLS_LIST.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`group flex items-center justify-between rounded-2xl border p-3.5 transition-all duration-300 ${
                      skill.highlight
                        ? "border-purple-500/30 bg-gradient-to-r from-purple-950/40 to-slate-900/80 hover:border-cyan-400/50"
                        : "border-white/10 bg-slate-900/60 hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 transition-transform group-hover:scale-110" />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-purple-200">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Engineering + Motion Callout */}
              <div className="mt-6 rounded-2xl border border-cyan-500/25 bg-cyan-500/5 p-4 flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Code2 className="h-5 w-5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">Hybrid Workflow:</strong> Equally
                  at home keyframing bezier curves in After Effects and shipping
                  modern web components in Next.js &amp; Tailwind CSS.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
