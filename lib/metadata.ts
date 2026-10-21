
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example"),
  title: {
    default: "Muslim | Frontend Developer",
    template: "%s | Muslim",
  },
  description:
    "Muslimning shaxsiy portfolio sayti. Frontend development, zamonaviy loyihalar va kreativ web tajribalar.",
  keywords: [
    "Muslim",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Muslim | Frontend Developer",
    description: "Zamonaviy va interaktiv portfolio.",
    type: "website",
  },
};
