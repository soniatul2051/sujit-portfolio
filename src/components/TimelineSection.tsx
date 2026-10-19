"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { TIMELINE_DATA } from "@/data/portfolioData";

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-3"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Experience &amp; Education</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Academic Foundation &amp;{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Creative Timeline
            </span>
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {TIMELINE_DATA.map((item, idx) => {
            const isEducation = item.type === "Education";
            const Icon = isEducation ? GraduationCap : Briefcase;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative group"
              >
                {/* Glowing Timeline Node */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/50 bg-[#090d16] text-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-white/10 bg-[#0f172a]/85 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_15px_40px_-15px_rgba(34,211,238,0.2)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        isEducation
                          ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                          : "bg-purple-500/15 text-purple-300 border border-purple-500/30"
                      }`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {item.type}
                    </span>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-purple-400" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-purple-300 mt-0.5">
                    {item.organization}
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-300/85"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-slate-900/90 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
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
