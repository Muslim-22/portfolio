
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Muslimning frontend loyihalari va web dasturlash ishlari.",
  openGraph: {
    title: "Projects | Muslim",
    description: "Muslimning web dasturlash loyihalari.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
          My Portfolio
        </p>

        <h1 className="text-3xl font-extrabold sm:text-5xl">
          My <span className="text-blue-500">Projects</span>
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
          Here are some of my projects built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <article className="group overflow-hidden rounded-2xl border border-gray-200/20 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
          <Link href="/projects/online-shop-crm" className="block">
            <div className="h-48 overflow-hidden bg-gray-900">
              <img
                src="/images/shoping.jpg"
                alt="Online Shop CRM"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 pb-0">
              <span className="mb-3 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-500">
                Personal Project
              </span>

              <h2 className="text-xl font-bold transition-colors group-hover:text-blue-500">
                Online Shop CRM
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                An online shop CRM project designed to help manage shop
                operations. Explore the project details.
              </p>
            </div>
          </Link>

          <div className="p-6 pt-5">
            <a
              href="https://github.com/Muslim-22/online-shop-crm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <span className="text-lg font-bold">GH</span>
              GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
