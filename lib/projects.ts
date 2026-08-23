export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Nordic Store",
    description:
      "Full-stack storefront with cart, checkout, and an admin dashboard for managing inventory.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vicriaditiya/nordic-store",
  },
  {
    title: "TaskFlow API",
    description:
      "REST API for a team task manager — auth, roles, realtime notifications, and tests.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Jest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vicriaditiya/taskflow-api",
  },
  {
    title: "Insightboard",
    description:
      "Analytics dashboard that turns raw events into live, filterable charts.",
    tags: ["React", "TypeScript", "Chart.js", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vicriaditiya/insightboard",
  },
  {
    title: "Landihost",
    description:
      "Vite-powered landing page builder with drag-and-drop sections and theming.",
    tags: ["React", "Vite", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vicriaditiya/landihost",
  },
];
