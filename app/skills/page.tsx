import type { Metadata } from "next";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Layers,
  Wind,
  GitBranch,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Muslimning frontend dasturlash ko‘nikmalari: HTML, CSS, JavaScript, TypeScript, React, Next.js va Tailwind CSS.",
  openGraph: {
    title: "Skills | Muslim",
    description:
      "Frontend dasturlash texnologiyalari va Muslimning texnik ko‘nikmalari.",
    type: "website",
  },
};

const skills = [
  {
    name: "HTML5",
    category: "Markup",
    level: "Semantic structure",
    icon: Code2,
  },
  {
    name: "CSS3",
    category: "Styling",
    level: "Responsive design",
    icon: Palette,
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: "ES6+",
    icon: Braces,
  },
  {
    name: "TypeScript",
    category: "Programming",
    level: "Type safety",
    icon: Code2,
  },
  {
    name: "React",
    category: "Frontend",
    level: "Components & Hooks",
    icon: Atom,
  },
  {
    name: "Next.js",
    category: "Framework",
    level: "App Router",
    icon: Layers,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: "Utility-first CSS",
    icon: Wind,
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Version control",
    icon: GitBranch,
  },
];

export default function Skills() {
  return (
    <main className="px-5 py-10 text-foreground sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 sm:text-sm">
          What I work with
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] font-normal leading-8 tracking-[0.01em] text-gray-600 dark:text-gray-300 sm:text-base">
          Technologies and tools I use to build modern, responsive, and
          user-friendly web applications.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-border bg-background/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                  <Icon
                    size={25}
                    className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h2 className="mt-5 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {skill.name}
                </h2>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-500 sm:text-xs">
                  {skill.category}
                </p>

                <p className="mt-3 text-sm font-medium leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                  {skill.level}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-background/50 p-6 backdrop-blur-sm sm:p-8">
          <Monitor className="text-blue-500" size={28} />

          <h2 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
            Always Learning
          </h2>

          <p className="mt-3 max-w-2xl text-sm font-normal leading-7 tracking-wide text-gray-600 dark:text-gray-300 sm:text-base">
            I&apos;m continuously improving my frontend development skills,
            exploring modern technologies, and building projects to gain
            practical experience.
          </p>
        </div>
      </div>
    </main>
  );
}
