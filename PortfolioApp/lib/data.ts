import { Braces, Code2, Database, Github, Globe2, Layers3, Palette, Smartphone, Terminal } from "lucide-react";

export const EMAIL = "abdullahmaliksher@gmail.com"; // TODO: replace with your real email
export const GITHUB = "https://github.com/4-Abdullah";
export const LINKEDIN = "https://www.linkedin.com/in/abdullah-malik-sher-125174267/";

export const accents = { violet: "#8b7bff", lime: "#c6ff4d", orange: "#ff8a4c", blue: "#5cc8ff" } as const;

export const projects = [
  { number: "01", title: "Chat App with AI Bot", type: "REAL-TIME · AI · MOBILE", description: "A full-stack chat experience with text and image messages, real-time deletion sync, friend search, secure authentication, and an AI assistant powered by NVIDIA Nemotron Nano.", stack: ["React Native", "Socket.IO", "Nemotron Nano", "Expo"], color: "violet", mark: "CHAT", href: "https://github.com/4-Abdullah/chat-app-frontend.git", live: "https://lnkd.in/p/dqNHaDV3" },
  { number: "02", title: "E-Commerce Store", type: "FULL-STACK COMMERCE", description: "A MERN e-commerce platform with product and cart functionality, plus an admin dashboard for inventory, orders, and role-based user management.", stack: ["MongoDB", "Express", "React", "Node.js"], color: "lime", mark: "SHOP", href: "https://github.com/4-Abdullah/Front-End.git", live: "https://front-end-lemon-seven.vercel.app/" },
  { number: "03", title: "E-Shop with JAMstack", type: "HEADLESS COMMERCE", description: "A responsive online store with a Next.js and TypeScript frontend, Strapi content management, PostgreSQL data, and Cloudinary media delivery.", stack: ["Next.js", "Strapi", "PostgreSQL", "Cloudinary"], color: "orange", mark: "JAM", href: "https://github.com/4-Abdullah/jamstack-app", live: "https://www.youtube.com/watch?v=NWNajlp1niA" },
  { number: "04", title: "E-Store Control", type: "ROLE-BASED DASHBOARD", description: "A role-based commerce interface with Redux state management and seller dashboards for tracking payments and managing orders.", stack: ["React", "Redux", "JSON Server"], color: "blue", mark: "CTRL", href: "https://github.com/4-Abdullah/E-Store-with-Dashboard-Admin---Sellers-.git", live: "https://www.youtube.com/watch?v=z2VX1zbIPNI" },
  { number: "05", title: "Post App", type: "CONTENT MANAGEMENT", description: "A post management app that supports creating, editing, and deleting content with backend API persistence and efficient rendering.", stack: ["React", "Strapi", "TypeScript"], color: "violet", mark: "POST", href: "https://github.com/4-Abdullah/learn-redux-toolkit.git", live: "https://www.youtube.com/watch?v=Xk4wbr2InRU" },
  { number: "06", title: "Kamyabi Network", type: "INTERNSHIP · CLIENT PROJECT", description: "Rebuilt a Framer-based website using Next.js and Tailwind CSS at Kommerce Hub, translating UI/UX designs into responsive layouts and smooth animations under senior developer mentorship.", stack: ["Next.js", "Tailwind CSS", "Responsive UI"], color: "lime", mark: "KN", href: "https://github.com/4-Abdullah/duetsch-consultancy.git", live: "https://duetsch-consultancy-lake.vercel.app/" },
] as const;

export const skills = [
  { name: "React.js", group: "FRONTEND", icon: Code2 }, { name: "Next.js", group: "FRONTEND", icon: Layers3 },
  { name: "TypeScript", group: "LANGUAGES", icon: Braces }, { name: "JavaScript", group: "LANGUAGES", icon: Terminal },
  { name: "Tailwind CSS", group: "STYLING", icon: Palette }, { name: "Node.js", group: "BACKEND", icon: Database },
  { name: "Express.js", group: "BACKEND", icon: Code2 }, { name: "MongoDB", group: "DATABASE", icon: Database },
  { name: "PostgreSQL", group: "DATABASE", icon: Database }, { name: "Strapi", group: "HEADLESS CMS", icon: Layers3 },
  { name: "Redux", group: "STATE", icon: Braces }, { name: "Socket.IO", group: "REAL-TIME", icon: Globe2 },
  { name: "React Native", group: "MOBILE", icon: Smartphone }, { name: "AWS", group: "CLOUD", icon: Globe2 },
  { name: "Git & Vercel", group: "WORKFLOW", icon: Github },
];

export const orbitSkills = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "Strapi", "PostgreSQL", "Redux", "Socket.IO", "React Native", "Vercel", "AWS"];

export const specialties = [
  "MERN STACK DEVELOPMENT",
  "REACT & NEXT.JS",
  "TYPESCRIPT",
  "RESPONSIVE UI / UX",
  "REAL-TIME APPS WITH SOCKET.IO",
  "REST API INTEGRATION",
  "HEADLESS CMS WITH STRAPI",
  "PERFORMANCE & ACCESSIBILITY",
  "AWS CLOUD FOUNDATIONS",
  "VERCEL DEPLOYMENT",
];