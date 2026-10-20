export interface VideoProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  categories: string[];
  featuredCategory: "Video Editing" | "3D Modeling" | "3D Animation" | "Blender";
  duration: string;
  resolution: string;
  tools: string[];
  year: string;
  metrics?: string;
}

export interface SkillItem {
  name: string;
  category: string;
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
  role: "3D Artist & Video Editor",
  tagline: "Bringing Ideas to Life Through 3D Modeling, 3D Animation & Video Editing",
  education: "B.Tech in Computer Science & Engineering (Class of 2024, Lucknow)",
  location: "Lucknow, India",
  availability: "Available for Freelance & Full-Time Creative Roles",
  intro:
    "With a foundation in Computer Science & Engineering (Class of 2024, Lucknow) and a passion for visual craft, I specialize in Blender software, 3D modeling, 3D animation, and video editing.",
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
  "Video Editing",
  "3D Modeling",
  "3D Animation",
  "Blender",
] as const;

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "showreel-v11",
    title: "3D Animation & Video Editing Showreel",
    subtitle: "Blender 3D Animation & Video Cut Showcase",
    description:
      "Dynamic visual storytelling combining 3D animation created in Blender with crisp, fast-paced video editing and seamless scene transitions.",
    videoSrc: "/videos/v11.mp4",
    categories: ["3D Animation", "Video Editing", "Blender"],
    featuredCategory: "3D Animation",
    duration: "00:30",
    resolution: "1080p • 60fps",
    tools: ["Blender", "Video Editing", "3D Animation"],
    year: "2024",
    metrics: "Blender 3D Pipeline",
  },
  {
    id: "showreel-v12",
    title: "3D Modeling & Cinematic Animation Reel",
    subtitle: "3D Modeling, Lighting & Animation in Blender",
    description:
      "A stylized showcase featuring custom 3D modeling, environment building, 3D animation in Blender, and rhythmic video editing.",
    videoSrc: "/videos/v12.mp4",
    categories: ["3D Modeling", "3D Animation", "Blender", "Video Editing"],
    featuredCategory: "3D Modeling",
    duration: "00:35",
    resolution: "1080p • 60fps",
    tools: ["Blender", "3D Modeling", "3D Animation", "Video Editing"],
    year: "2024",
    metrics: "Custom 3D Assets",
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: "Blender Software",
    category: "3D & Video Software",
    level: "Expert",
    highlight: true,
  },
  {
    name: "Video Editing",
    category: "Core Craft",
    level: "Expert",
    highlight: true,
  },
  {
    name: "3D Modeling",
    category: "3D Craft",
    level: "Expert",
    highlight: true,
  },
  {
    name: "3D Animation",
    category: "3D Craft",
    level: "Expert",
    highlight: true,
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "video-designer-2024",
    period: "2024 — Present",
    title: "3D Artist & Video Editor",
    organization: "Independent Creative & Freelance",
    location: "Lucknow / Remote",
    type: "Experience",
    description:
      "Creating custom 3D models, 3D animations in Blender, and polished video edits for digital projects and visual showcases.",
    highlights: [
      "Designed detailed 3D models, textures, and environments using Blender software.",
      "Produced fluid 3D animations and rendered visual sequences in Blender.",
      "Delivered end-to-end video editing with clean pacing, transitions, and visual storytelling.",
    ],
    tags: ["Blender Software", "Video Editing", "3D Modeling", "3D Animation"],
  },
  {
    id: "btech-cse-2024",
    period: "2020 — 2024",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Graduated Class of 2024",
    location: "Lucknow, Uttar Pradesh",
    type: "Education",
    description:
      "Completed Bachelor of Technology in Computer Science & Engineering while developing expertise in Blender software, 3D modeling, 3D animation, and video editing.",
    highlights: [
      "Combined technical problem-solving from Computer Science with 3D modeling and 3D animation in Blender.",
      "Edited event videos, trailers, and 3D animated visual projects.",
    ],
    tags: ["B.Tech CSE", "Class of 2024", "Lucknow", "Blender", "Video Editing"],
  },
];
