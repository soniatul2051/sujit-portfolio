"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  ArrowRight,
  Code2,
  Film,
  Volume2,
  VolumeX,
  Layers,
  Clapperboard,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Animated Glowing Background Orbs & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.45, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-purple-600/25 blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 h-[460px] w-[460px] rounded-full bg-cyan-500/20 blur-[130px]"
        />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />

        {/* Subtle cyber grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-purple-200 tracking-wide">
                {PROFILE_DATA.name} • {PROFILE_DATA.role}
              </span>
            </motion.div>

            {/* Main Catchy Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Bringing Ideas to Life Through{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Motion & Visual Design
              </span>
            </motion.h1>

            {/* Intro Paragraph: CS + Video Design */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed"
            >
              Hi, I&apos;m <strong className="text-white font-semibold">Sujit</strong> — a{" "}
              <span className="text-cyan-300 font-medium">
                B.Tech in Computer Science &amp; Engineering (Class of 2024, Lucknow)
              </span>{" "}
              graduate turning algorithmic thinking into cinematic motion graphics,
              high-retention commercial edits, and visual storytelling.
            </motion.p>

            {/* Dual Identity Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3.5 py-2 text-xs sm:text-sm text-slate-300">
                <Clapperboard className="h-4 w-4 text-purple-400" />
                <span>Motion Graphics &amp; VFX</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3.5 py-2 text-xs sm:text-sm text-slate-300">
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>Premiere Pro • After Effects • DaVinci</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3.5 py-2 text-xs sm:text-sm text-slate-300">
                <Code2 className="h-4 w-4 text-emerald-400" />
                <span>B.Tech CSE &apos;24 (Lucknow)</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#portfolio"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.65)] hover:scale-[1.02]"
              >
                <Play className="h-4 w-4 fill-white text-white transition-transform group-hover:scale-110" />
                <span>View Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-slate-900/80 px-7 py-4 text-sm sm:text-base font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:text-white"
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Showreel Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Neon Glow */}
              <div className=" -inset-1 absolute rounded-3xl bg-gradient-to-r from-purple-600/50 via-fuchsia-500/30 to-cyan-500/50 blur-xl opacity-75" />

              <div className="relative rounded-3xl border border-white/15 bg-[#0f172a]/90 p-3 shadow-2xl backdrop-blur-xl">
                {/* Top Window Bar */}
                <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      featured_reel_v11.mp4
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300 border border-cyan-500/30">
                    <Film className="h-3 w-3" />
                    60 FPS
                  </span>
                </div>

                {/* Video Player Container */}
                <div className="relative overflow-hidden rounded-2xl bg-black aspect-video group">
                  <video
                    ref={videoRef}
                    src="/videos/v11.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />

                  {/* Subtle Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-transparent to-transparent flex items-end justify-between p-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        Featured Showreel
                      </p>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        Motion Graphics &amp; Visual Cut
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute showreel" : "Mute showreel"}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-white backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500/20"
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4 text-slate-300" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-cyan-300" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Mini Timeline UI Decoration */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-semibold">TC</span>
                    <span>00:00:14:22</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-8 rounded-full bg-purple-500/60" />
                    <span className="h-1.5 w-12 rounded-full bg-cyan-400/70" />
                    <span className="h-1.5 w-6 rounded-full bg-fuchsia-500/60" />
                  </div>
                  <span className="text-cyan-300">REC • 4K</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
