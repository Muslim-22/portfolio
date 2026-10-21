
import Main from "@/components/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Muslimning portfolio sayti. Frontend dasturlash, React va Next.js bo‘yicha loyihalarim bilan tanishing.",

  openGraph: {
    title: "Muslim | Frontend Developer",
    description:
      "Muslimning shaxsiy portfolio sayti va web dasturlash loyihalari.",
    url: "/",
    siteName: "Muslim Portfolio",
    images: [
      {
        url: "/images/logotipi.png",
        alt: "Muslim — Frontend Developer Portfolio",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muslim | Frontend Developer",
    description:
      "Muslimning portfolio sayti, React va Next.js loyihalari.",
    images: ["/images/logotipi.png"],
  },
};

export default function Page() {
  return (
    <div>
      <Main />
    </div>
  );
}
