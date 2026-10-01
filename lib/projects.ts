export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  year: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Nordic Store",
    description:
      "Full-stack storefront with cart, checkout, and an admin dashboard for managing inventory.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    category: "E-commerce",
    year: "2026",
    githubUrl: "https://github.com/vicriadty/nordic-store",
  },
  {
    title: "TaskFlow API",
    description:
      "REST API for a team task manager — auth, roles, realtime notifications, and tests.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Jest"],
    category: "Backend System",
    year: "2025",
    githubUrl: "https://github.com/vicriadty/taskflow-api",
  },
  {
    title: "Insightboard",
    description:
      "Analytics dashboard that turns raw events into live, filterable charts.",
    tags: ["React", "TypeScript", "Chart.js", "WebSocket"],
    category: "Data Product",
    year: "2025",
    githubUrl: "https://github.com/vicriadty/insightboard",
  },
  {
    title: "Landihost",
    description:
      "Vite-powered landing page builder with drag-and-drop sections and theming.",
    tags: ["React", "Vite", "Tailwind CSS", "Zustand"],
    category: "Developer Tool",
    year: "2024",
    githubUrl: "https://github.com/vicriadty/landihost",
  },
];
