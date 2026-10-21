
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "online-shop-crm" }];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "online-shop-crm") {
    return {
      title: "Online Shop CRM | Muslim",
      description:
        "Online Shop CRM loyihasi — Muslimning frontend portfolio loyihasi.",
      openGraph: {
        title: "Online Shop CRM | Muslim",
        description: "Online Shop CRM loyihasi haqida batafsil.",
        type: "website",
      },
    };
  }

  return {
    title: "Project Not Found | Muslim",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  if (slug !== "online-shop-crm") {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-16">
      <Link
        href="/projects"
        className="text-sm text-blue-500 transition-colors hover:text-cyan-400"
      >
        ← Back to Projects
      </Link>

      <div className="mt-8">
        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-500">
          Personal Project
        </span>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-5xl">
          Online Shop <span className="text-blue-500">CRM</span>
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
          An online shop CRM project designed to help manage shop operations
          and organize e-commerce workflows.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200/20">
        <img
          src="/images/shoping.jpg"
          alt="Online Shop CRM preview"
          className="h-auto max-h-[500px] w-full object-cover object-top"
        />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Technologies</h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-gray-200/20 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <a
        href="https://github.com/Muslim-22/online-shop-crm"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        View on GitHub
        <ExternalLink size={16} />
      </a>
    </main>
  );
}
