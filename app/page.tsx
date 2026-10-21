import Main from "@/components/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Muslimning portfolio sayti. Frontend dasturlash, React va Next.js bo‘yicha loyihalarim bilan tanishing.",
  openGraph: {
    title: "Home | Muslim",
    description:
      "Muslimning shaxsiy portfolio sayti va web dasturlash loyihalari.",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <Main />
    </div>
  );
}
