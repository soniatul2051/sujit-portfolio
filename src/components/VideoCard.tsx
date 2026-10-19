"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Clock,
} from "lucide-react";
import { VideoProject } from "@/data/portfolioData";

interface VideoCardProps {
  project: VideoProject;
  index: number;
  onOpenModal: (project: VideoProject) => void;
}

export default function VideoCard({
  project,
  index,
  onOpenModal,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;
    videoRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current || manualOverride) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      setManualOverride(true);
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      setManualOverride(false);
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const pct =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(Number.isFinite(pct) ? pct : 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !videoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = pct * videoRef.current.duration;
    setProgress(pct * 100);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.3)]"
    >
      {/* Video Container */}
      <div
        onClick={() => onOpenModal(project)}
        className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
      >
        <video
          ref={videoRef}
          src={project.videoSrc}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/15 bg-[#090d16]/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan-300 backdrop-blur-md"
              >
                {cat}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#090d16]/80 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-slate-300 backdrop-blur-md">
            <Clock className="h-3 w-3 text-purple-400" />
            {project.duration}
          </span>
        </div>

        {/* Center Play Indicator when paused */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-purple-600/80 text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 fill-white ml-0.5" />
          </div>
        </div>

        {/* Custom Video Controls Bar */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/75 to-transparent p-3.5 pt-8">
          {/* Interactive Progress Scrubber */}
          <div
            onClick={handleSeek}
            className="group/bar mb-2.5 h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/20"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                {isPlaying ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5 fill-white ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                {isMuted ? (
                  <VolumeX className="h-3.5 w-3.5 text-slate-300" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5 text-cyan-300" />
                )}
              </button>

              <span className="ml-1 text-[11px] font-mono text-slate-300">
                {isPlaying ? "Playing • Hover/Click" : "Hover to Preview"}
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
              }}
              aria-label="Open theater mode"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md transition hover:border-purple-400 hover:bg-purple-500/20"
            >
              <Maximize2 className="h-3 w-3 text-cyan-300" />
              <span>Cinema View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs text-purple-300/90 font-medium mb-1.5">
            <span>{project.subtitle}</span>
            {project.metrics && (
              <span className="inline-flex items-center gap-1 text-cyan-400">
                <Sparkles className="h-3 w-3" />
                {project.metrics}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-slate-300/85 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tools & Asset Path Footer */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-slate-800/90 px-2.5 py-1 text-xs font-medium text-slate-300 border border-white/5"
              >
                {tool}
              </span>
            ))}
          </div>
          <span className="text-xs font-mono text-slate-400">
            {project.videoSrc}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
