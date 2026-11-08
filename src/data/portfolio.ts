export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "Frontend" | "Next.js App" | "Web App";
  description: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  tags: string[];
  metrics: string[];
  highlights: string[];
  date: string;
  screenshot?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "market-price",
    title: "Market Price Web App",
    tagline: "Live Commodity & Product Price Intelligence Platform",
    category: "Next.js App",
    description:
      "A data-driven price monitoring and market analytics web application featuring dynamic routing for real-time item tracking, market trends, and detailed product views.",
    liveUrl: "https://market-price-web-app.vercel.app/product/30",
    githubUrl: "https://github.com/taseen311/market-price-webapp",
    featured: true,
    tags: ["Next.js", "React", "Server Components", "Tailwind CSS", "Dynamic Routing"],
    metrics: ["Dynamic Route /product/[id]", "Fast Edge Delivery", "Vercel Optimized"],
    highlights: [
      "Implemented dynamic slug/id routing with server-rendered product views",
      "Clean price analysis cards with responsive data presentation",
      "Optimized performance with Next.js edge streaming"
    ],
    date: "2026"
  },
  {
    id: "devstack-builder",
    title: "DevStack Builder",
    tagline: "Modern Full-Stack Next.js Assignment Application",
    category: "Next.js App",
    description:
      "Full-stack Next.js web application built with clean modular architecture, App Router navigation, responsive UI components, and fast deployment pipelines.",
    liveUrl: "https://nextjs-assignment-gamma-three.vercel.app/",
    githubUrl: "https://github.com/taseen311/DevStack-Builder",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    metrics: ["100% Mobile Ready", "App Router V15+", "Vercel Deployed"],
    highlights: [
      "Built with strict TypeScript type-checking and modern Next.js conventions",
      "Fast page transitions and intuitive UX design",
      "Modular component structure for high maintainability"
    ],
    date: "2026"
  },
  {
    id: "fitlog",
    title: "FitLog / Interactive Health Tracker",
    tagline: "Responsive Web Application with Dynamic State Architecture",
    category: "Frontend",
    description:
      "A feature-rich interactive fitness & activity tracking application built with modular components, dynamic reactive state, user feedback, and fluid UI micro-interactions.",
    liveUrl: "https://assignment5-ph-react.netlify.app/",
    githubUrl: "https://github.com/taseen311/FitLog",
    featured: true,
    tags: ["React.js", "Tailwind CSS", "Hooks", "Component Lifecycle", "SPA"],
    metrics: ["Netlify Deployed", "Fluid UI", "Zero-Latency State"],
    highlights: [
      "Comprehensive state management with React Hooks",
      "Interactive data cards with instant user feedback",
      "Polished responsive navigation and cross-device testing"
    ],
    date: "2026"
  },
  {
    id: "juriscore",
    title: "JurisCore",
    tagline: "Legal Practice & Case Management Platform",
    category: "Full Stack",
    description:
      "A modern, robust platform engineered for legal practitioners to streamline matter tracking, client intake, document workflows, and case schedule compliance.",
    liveUrl: "https://dynamic-salamander-c2d6db.netlify.app/",
    githubUrl: "https://github.com/taseen311",
    featured: true,
    tags: ["React", "Tailwind CSS", "REST API", "Modern UI", "State Management"],
    metrics: ["Enterprise-Grade UX", "Modular Architecture", "Production Deployed"],
    highlights: [
      "Custom responsive design system with sleek dark/light aesthetics",
      "Dynamic filtering and management of complex case records",
      "Optimized client-side rendering with smooth interactions"
    ],
    date: "2026"
  }
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, pixel-perfect, accessible user interfaces",
    skills: [
      { name: "React 19 / 18", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML5 & CSS3 / Flex & Grid", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Developing scalable APIs, data models, and server logic",
    skills: [
      { name: "Node.js & Express", level: "Proficient" },
      { name: "Next.js Server Actions & API Routes", level: "Advanced" },
      { name: "RESTful APIs & JSON", level: "Advanced" },
      { name: "MongoDB / SQL Basics", level: "Intermediate" },
      { name: "Authentication & Security", level: "Proficient" }
    ]
  },
  {
    title: "Tools, DevOps & Workflow",
    description: "Engineering velocity, deployment pipelines, and modern toolchains",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel & Netlify Deployment", level: "Advanced" },
      { name: "VS Code / Antigravity IDE", level: "Advanced" },
      { name: "npm / pnpm / Turbopack", level: "Proficient" },
      { name: "Responsive UI Debugging", level: "Expert" },
      { name: "Performance Optimization", level: "Proficient" }
    ]
  }
];
