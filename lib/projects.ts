
export type Project = {
  slug: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "ecommerce",
    title: "E-commerce Website",
    description: "Modern online shopping experience.",
    details:
      "Responsive online store with product browsing, cart and a modern user interface.",
    technologies: ["Next.js", "TypeScript", "CSS"],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    description: "A clean dashboard for managing data.",
    details:
      "An admin interface with navigation, reusable cards and a responsive layout.",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    slug: "portfolio",
    title: "Interactive Portfolio",
    description: "A portfolio with a neon 3D crystal scene.",
    details:
      "An interactive portfolio featuring a 3D crystal animation, particles and theme switching.",
    technologies: ["Next.js", "Three.js", "Framer Motion"],
  },
];
