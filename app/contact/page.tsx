
import type { Metadata } from "next";
import { Mail, Phone, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Muslim bilan bog‘laning. Frontend dasturlash, ish takliflari va web loyihalar bo‘yicha aloqa ma’lumotlari.",
  openGraph: {
    title: "Contact",
    description:
      "Hamkorlik va ish takliflari uchun Muslim bilan bog‘laning.",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Get in touch
        </p>

        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          Contact Me
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Have a project or job opportunity? Feel free to contact me.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href="tel:+998900008552"
            className="flex items-center gap-4 rounded-2xl border border-border p-5 transition hover:border-blue-500"
          >
            <Phone className="text-blue-500" size={24} />
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="mt-1 text-sm text-gray-500">
                +998 90 000 85 52
              </p>
            </div>
          </a>

          <a
            href="mailto:ikramovmuslim6@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-border p-5 transition hover:border-blue-500"
          >
            <Mail className="text-blue-500" size={24} />
            <div>
              <p className="font-semibold">Email Address</p>
              <p className="mt-1 text-sm text-gray-500">
                ikramovmuslim6@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://t.me/Ikromov_22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border p-5 transition hover:border-blue-500"
          >
            <Send className="text-blue-500" size={24} />
            <div>
              <p className="font-semibold">Telegram</p>
              <p className="mt-1 text-sm text-gray-500">
                Message me on Telegram
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
