
import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Rocket, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Muslim haqida: frontend dasturlash, React, Next.js va zamonaviy web ilovalar yaratishga bo‘lgan qiziqishim.",
  openGraph: {
    title: "About Me",
    description:
      "Muslimning tajribasi, texnologiyalari va frontend dasturlashdagi maqsadlari.",
    type: "website",
  },
};

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Tushunarli, tartibli va qo‘llab-quvvatlash oson bo‘lgan kod yozishga intilaman.",
  },
  {
    icon: Rocket,
    title: "Modern Web",
    description:
      "React va Next.js yordamida zamonaviy, tezkor va responsive interfeyslar yarataman.",
  },
  {
    icon: Target,
    title: "Continuous Learning",
    description:
      "Yangi texnologiyalarni o‘rganib, dasturlash bo‘yicha bilimlarimni doimiy rivojlantiraman.",
  },
];

export default function About() {
  return (
    <main className="px-5 py-10 text-foreground sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-500 sm:text-sm">
          Get to know me
        </p>

        {/* About Me sarlavhasi o'z holicha */}
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Me
          </span>
        </h1>

        {/* Description */}
        <div className="mt-7 max-w-3xl space-y-5 text-[15px] font-normal leading-8 tracking-[0.01em] text-gray-600 dark:text-gray-300 sm:text-base sm:leading-8">
          <p>
            Hi! I&apos;m Muslim, a frontend developer passionate about
            building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I work with technologies such as{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              React, Next.js, JavaScript, TypeScript
            </span>
            , and Tailwind CSS to turn ideas into clean and interactive
            digital experiences.
          </p>

          <p>
            I enjoy solving problems, learning new technologies, and
            improving my development skills. My goal is to grow as a
            developer, contribute to meaningful projects, and create
            web experiences that make a difference.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                  <Icon className="text-blue-500" size={25} />
                </div>

                <h2 className="mt-5 text-lg font-bold tracking-tight sm:text-xl">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
