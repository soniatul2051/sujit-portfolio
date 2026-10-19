export interface VideoProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  categories: string[];
  featuredCategory: "Motion Graphics" | "Commercial Edit" | "VFX" | "Reel";
  duration: string;
  resolution: string;
  tools: string[];
  year: string;
  metrics?: string;
}

export interface SkillItem {
  name: string;
  category: "Creative Craft" | "Pro Software" | "Web & Engineering";
  level: string;
  highlight?: boolean;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: "Education" | "Experience";
  description: string;
  highlights: string[];
  tags: string[];
}

export const PROFILE_DATA = {
  name: "Sujit",
  role: "Video Designer & Motion Creator",
  tagline: "Bringing Ideas to Life Through Motion & Visual Design",
  education: "B.Tech in Computer Science & Engineering (Class of 2024, Lucknow)",
  location: "Lucknow, India",
  availability: "Available for Freelance & Full-Time Creative Roles",
  intro:
    "Bridging algorithmic precision with cinematic storytelling. With a foundation in Computer Science & Engineering (Class of 2024, Lucknow) and a deep passion for visual rhythm, I craft high-retention motion graphics, commercial edits, and immersive visual experiences.",
  email: "sujit.motion@example.com",
  socials: {
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    vimeo: "https://vimeo.com",
    twitter: "https://x.com",
    email: "mailto:sujit.motion@example.com",
  },
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Motion Graphics",
  "Commercial Edit",
  "VFX",
  "Reel",
] as const;

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "showreel-v11",
    title: "Kinetic Typography & Brand Motion Reel",
    subtitle: "High-Energy Commercial & Motion Showcase",
    description:
      "Fast-paced visual storytelling combining kinetic typography, seamless speed-ramped transitions, custom sound design, and dynamic 3D camera moves tailored for modern digital brands.",
    videoSrc: "/videos/v11.mp4",
    categories: ["Motion Graphics", "Reel", "Commercial Edit"],
    featuredCategory: "Motion Graphics",
    duration: "00:30",
    resolution: "1080p • 60fps",
    tools: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    year: "2024",
    metrics: "Frame-Accurate Sync",
  },
  {
    id: "showreel-v12",
    title: "Cinematic VFX & Visual Rhythm Edit",
    subtitle: "Visual Effects, Color Grading & Narrative Flow",
    description:
      "A stylized showcase featuring seamless VFX compositing, moody teal-and-cyan color grading, atmospheric soundscapes, and rhythmic cuts engineered for maximum viewer retention.",
    videoSrc: "/videos/v12.mp4",
    categories: ["VFX", "Commercial Edit", "Reel"],
    featuredCategory: "VFX",
    duration: "00:35",
    resolution: "1080p • 60fps",
    tools: ["DaVinci Resolve", "After Effects", "Premiere Pro"],
    year: "2024",
    metrics: "HDR Color Pipeline",
  },
  {
    id: "commercial-pulse",
    title: "Pulse Tech Product Launch Edit",
    subtitle: "Commercial Cut & Sound-Driven Pacing",
    description:
      "Commercial launch edit demonstrating dynamic product reveals, clean motion callouts, and sub-frame audio synchronization built for social and web campaigns.",
    videoSrc: "/videos/v11.mp4",
    categories: ["Commercial Edit", "Motion Graphics"],
    featuredCategory: "Commercial Edit",
    duration: "00:30",
    resolution: "1080p • 60fps",
    tools: ["Premiere Pro", "After Effects"],
    year: "2024",
    metrics: "High-Retention Hook",
  },
  {
    id: "signature-reel-2024",
    title: "2024 Signature Director's Reel",
    subtitle: "Selected Works in Motion, VFX & Color",
    description:
      "Curated anthology of commercial edits, compositing breakdowns, and expressive motion design systems fusing technical precision with artistic flair.",
    videoSrc: "/videos/v12.mp4",
    categories: ["Reel", "VFX", "Motion Graphics"],
    featuredCategory: "Reel",
    duration: "00:35",
    resolution: "1080p • 60fps",
    tools: ["After Effects", "DaVinci Resolve", "Premiere Pro"],
    year: "2024",
    metrics: "Multi-Genre Showcase",
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: "Video Editing",
    category: "Creative Craft",
    level: "Expert",
    highlight: true,
  },
  {
    name: "Motion Graphics",
    category: "Creative Craft",
    level: "Expert",
    highlight: true,
  },
  {
    name: "Color Grading",
    category: "Creative Craft",
    level: "Advanced",
    highlight: true,
  },
  {
    name: "Sound Design",
    category: "Creative Craft",
    level: "Advanced",
  },
  {
    name: "Adobe Premiere Pro",
    category: "Pro Software",
    level: "Expert",
    highlight: true,
  },
  {
    name: "After Effects",
    category: "Pro Software",
    level: "Expert",
    highlight: true,
  },
  {
    name: "DaVinci Resolve",
    category: "Pro Software",
    level: "Advanced",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Web & Engineering",
    level: "Proficient",
  },
  {
    name: "Tailwind CSS",
    category: "Web & Engineering",
    level: "Proficient",
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "video-designer-2024",
    period: "2024 — Present",
    title: "Video Designer & Motion Creator",
    organization: "Independent Creative Studio & Freelance",
    location: "Lucknow / Remote",
    type: "Experience",
    description:
      "Designing high-impact commercial edits, motion graphics packages, and brand showreels for digital creators, startups, and agencies.",
    highlights: [
      "Engineered modular After Effects motion templates and expression-driven animations that sped up turnaround time by 40%.",
      "Delivered end-to-end post-production: narrative assembly in Premiere Pro, VFX compositing in After Effects, and cinematic grading in DaVinci Resolve.",
      "Combined frontend web engineering (Next.js, Tailwind CSS) with interactive video delivery for modern web campaigns.",
    ],
    tags: ["Motion Graphics", "Commercial Edit", "After Effects", "DaVinci Resolve"],
  },
  {
    id: "btech-cse-2024",
    period: "2020 — 2024",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Graduated Class of 2024",
    location: "Lucknow, Uttar Pradesh",
    type: "Education",
    description:
      "Completed Bachelor of Technology in Computer Science & Engineering while spearheading multimedia production, college fest motion branding, and creative coding initiatives.",
    highlights: [
      "Fused algorithmic problem-solving, scripting, and UI/UX sensibility with motion design and visual storytelling.",
      "Directed and edited official campus event aftermovies, launch trailers, and motion graphics packages.",
      "Built web interfaces and interactive media experiences using React, Next.js, and Tailwind CSS.",
    ],
    tags: ["B.Tech CSE", "Class of 2024", "Lucknow", "Creative Technology"],
  },
];
