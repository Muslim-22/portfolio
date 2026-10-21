
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-tan-two-o0ktysswsv.vercel.app"
  ),

  title: "Muslim | Frontend Developer",

  description:
    "Muslimning portfolio sayti. React, Next.js va zamonaviy web loyihalar.",

  openGraph: {
    title: "Muslim | Frontend Developer",
    description:
      "Portfolio, loyihalar va frontend dasturlash ishlari.",
    url: "/",
    siteName: "Muslim Portfolio",
    images: [
      {
        url: "/images/logotipi.png",
        width: 1200,
        height: 630,
        alt: "Muslim — Frontend Developer Portfolio",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muslim | Frontend Developer",
    description: "Portfolio va frontend loyihalar.",
    images: ["/images/logotipi.png"],
  },
};
