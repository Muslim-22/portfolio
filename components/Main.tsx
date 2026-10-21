import Link from "next/link";
import CodePlayground from "./CodePlayground";

export default function Home() {
  return (

<div className="flex w-full flex-col justify-center gap-4 px-3 py-4 md:flex-row md:items-center md:gap-4 md:px-6 md:py-2">
  {/* Hero section */}
  <section className="relative z-10 min-w-0 w-full px-5 text-foreground md:w-1/2 md:px-8">
    <div className="mx-auto max-w-6xl pt-4 sm:pt-6 md:pt-0">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-500 sm:text-sm">
        Welcome to my portfolio
      </p>

      <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Muslim
        </span>
      </h1>

      <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
        Software Developer
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
        I build modern, responsive, and user-friendly web applications using
        modern web technologies.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="rounded-xl border border-gray-400/40 px-5 py-2.5 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-500"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </section>

  {/* Code editor */}
  <section className="min-w-0 w-full md:w-1/2">
    <CodePlayground />
  </section>
</div>
  );
}