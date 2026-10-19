# Sujit — Video Designer & Motion Creator Portfolio

A modern, dark-mode personal portfolio website built for **Sujit** (Video Designer & Motion Creator, B.Tech CSE Class of 2024, Lucknow) using **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Project Structure

```text
├── public/
│   └── videos/
│       ├── v11.mp4                  # Portfolio Reel 1
│       └── v12.mp4                  # Portfolio Reel 2
├── src/
│   ├── app/
│   │   ├── globals.css              # Dark theme (#090d16), smooth scroll & custom scrollbars
│   │   ├── layout.tsx               # App Router root layout & typography
│   │   └── page.tsx                 # Main portfolio page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky glassmorphism navbar + mobile drawer
│   │   ├── Hero.tsx                 # Hero section with motion orbs, CTAs & live reel preview
│   │   ├── PortfolioSection.tsx     # Filterable video showcase + Cinema View modal
│   │   ├── VideoCard.tsx            # Hover-to-play HTML5 video card + custom controls
│   │   ├── AboutSection.tsx         # B.Tech CSE -> Video Design story + Skills grid
│   │   ├── TimelineSection.tsx      # Education & Experience vertical timeline
│   │   ├── ContactSection.tsx       # Interactive contact form + social links
│   │   └── Footer.tsx               # Copyright & quick navigation links
│   └── data/
│       └── portfolioData.ts         # Centralized data for reels, skills, and timeline
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).
