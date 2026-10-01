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
    title: "Klinik Sepatu",
    description:
      "Shoe-care service platform with a customer web app, Expo mobile app, and Laravel API for bookings, order tracking, and admin operations.",
    tags: ["React", "TypeScript", "Laravel", "Expo", "Tailwind CSS"],
    category: "Service Platform",
    year: "2026",
    githubUrl: "https://github.com/vicriadty/klinik-sepatu",
  },
  {
    title: "POShoes",
    description:
      "Offline-first point of sale for a shoe store — Laravel backend with a Svelte PWA storefront that keeps selling without a connection.",
    tags: ["Laravel", "Svelte", "Tailwind CSS", "PWA", "IndexedDB"],
    category: "Business App",
    year: "2026",
    githubUrl: "https://github.com/vicriadty/POShoes",
  },
  {
    title: "Bank Sampah",
    description:
      "Waste-bank management system covering members, collectors, deposits, sales, and PDF reports.",
    tags: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    category: "Web Platform",
    year: "2025",
    githubUrl: "https://github.com/vicriadty/bank-sampah",
  },
  {
    title: "Simaset",
    description:
      "Simple multi-table management system for users and inventory — native PHP CRUD with a Bootstrap interface.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: "Internal Tool",
    year: "2025",
    githubUrl: "https://github.com/vicriadty/simaset",
  },
];
