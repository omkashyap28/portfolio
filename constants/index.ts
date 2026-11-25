import {
  VisualStudioCodeIcon,
  Library,
  Map,
  Cursor02Icon,
} from "@hugeicons/core-free-icons"

export type TechItem = {
  name: string
  icon: string
  url: string
}

export const techItems: TechItem[] = [
  { name: "ReatJs", icon: "/images/react.svg", url: "https://react.dev" },
  { name: "NextJs", icon: "/images/nextjs.svg", url: "https://nextjs.org" },
  {
    name: "Tailwindcss",
    icon: "/images/tailwindcss.svg",
    url: "https://tailwindcss.com",
  },
  { name: "Gsap", icon: "/images/gsap.svg", url: "https://gsap.com" },
  {
    name: "Motion",
    icon: "/images/framermotion.svg",
    url: "https://motion.dev",
  },
  {
    name: "Shadcn UI",
    icon: "/images/shadcn.svg",
    url: "https://ui.shadcn.com",
  },
  {
    name: "Css",
    icon: "/images/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Zustand",
    icon: "/images/zustand.svg",
    url: "https://zustand.docs.pmnd.rs",
  },
  {
    name: "Javascript",
    icon: "/images/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: "/images/typescript.svg",
    url: "https://typescriptlang.org",
  },
  { name: "Figma", icon: "/images/figma.svg", url: "https://figma.com" },
  { name: "Git", icon: "/images/git.svg", url: "https://git-scm.com" },
  { name: "Github", icon: "/images/github.svg", url: "https://github.com" },
  {
    name: "Vs Code",
    icon: "/images/vs-code.svg",
    url: "https://code.visualstudio.com",
  },
  {
    name: "Github Copilot",
    icon: "/images/github-copilot.svg",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Vercel",
    icon: "/images/vercel.svg",
    url: "https://vercel.com",
  },
]

export const projectData = [
  {
    title: "Code Snippets",
    description:
      "This editor provides you to run programing code in browser. You can create your code snippets and share, and other will use this and gives you a star if they like it.",
    image: "/projects/code-snippets.png",
    github: "https://github.com/omkashyap28/code-snippets",
    live: "https://code-snippets.vercel.app/",
    status: "Active",
    tools: [
      "react",
      "nextjs",
      "tailwindcss",
      "typescript",
      "framermotion",
      "zustand",
    ],
  },
  {
    title: "React Pings",
    description:
      "Modern toast notification library for react apps with fully customizable designs and easy implemention without complex setups.",
    image: "/projects/react-pings.png",
    github: "https://github.com/omkashyap28/react-pings",
    live: "https://react-pings.vercel.app/",
    status: "Active",
    tools: [
      "react",
      "nextjs",
      "tailwindcss",
      "typescript",
      "framermotion",
      "zustand",
    ],
  },
  {
    title: "Shoppy Cart",
    description:
      "Designed a scalable e-commerce system with authentication, product management, order handling, wallet management, and payment workflows.",
    image: "/projects/shoppy-cart.png",
    github: "https://github.com/omkashyap28/shoppy-cart",
    live: "#",
    status: "Completed",
    tools: [
      "nextjs",
      "react",
      "tailwindcss",
      "shadcn",
      "typescript",
      "java",
      "spring",
      "oauth",
      "mysql",
    ],
  },
  {
    title: "India Institute of Computer Science (Reimagine)",
    description: "Reimagine landing of a computer institute",
    image: "/projects/iics.png",
    github: "https://github.com/omkashyap28/iics-lms",
    live: "https://iics-lms.vercel.app/",
    status: "Active",
    tools: ["react", "tailwindcss", "javascript", "gsap"],
  },
] as const

export const resources = [
  {
    icon: Map,
    title: "Roadmaps",
    description: "Get roadmaps & guides to master technologies.",
    href: "/roadmaps",
  },
  {
    icon: Library,
    title: "Resources",
    description: "Free resources to study languages, technologies, dsa & more.",
    href: "/free-resources",
  },
  {
    icon: Cursor02Icon,
    title: "System Design",
    description: "Frontend System resources.",
    href: "/system-design",
  },
  {
    icon: VisualStudioCodeIcon,
    title: "Code Editor Setup",
    description: "Vs Code/Cursor/Antigravity settings & extensions.",
    href: "/setup",
  },
] as const
