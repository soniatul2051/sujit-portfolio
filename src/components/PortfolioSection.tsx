"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, X, Sparkles, SlidersHorizontal } from "lucide-react";
import {
  PORTFOLIO_CATEGORIES,
  VIDEO_PROJECTS,
  VideoProject,
} from "@/data/portfolioData";
import VideoCard from "./VideoCard";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(
    null
  );

  const filteredProjects =
    activeCategory === "All"
      ? VIDEO_PROJECTS
      : VIDEO_PROJECTS.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <section id="portfolio" className="relative py-24 sm:py-28">
      {/* Subtle Ambient Accent */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-3"
            >
              <Film className="h-3.5 w-3.5" />
              <span>Portfolio &amp; Showcases</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Selected{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Motion Reels
              </span>{" "}
              &amp; Edits
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-slate-400 max-w-md"
          >
            Hover over any reel to preview in real time, use custom playback
            controls, or launch Cinema View with full audio.
          </motion.p>
        </div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 shrink-0">
            <SlidersHorizontal className="h-3.5 w-3.5 text-purple-400" />
            Filter:
          </span>
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.45)]"
                    : "border border-white/10 bg-slate-900/70 text-slate-300 hover:border-purple-500/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <VideoCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinema View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#0f172a] shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {selectedProject.featuredCategory} • {selectedProject.resolution}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 transition hover:border-rose-500/50 hover:bg-rose-500/20 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Full Video Player */}
              <div className="aspect-video w-full bg-black">
                <video
                  src={selectedProject.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Modal Footer Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6">
                <p className="text-sm text-slate-300 max-w-2xl">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {selectedProject.categories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200"
                    >
                      <Sparkles className="h-3 w-3 text-cyan-400" />
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
