
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Menyu from "@/components/Menyu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-tan-two-o0ktysswsv.vercel.app"
  ),

  title: {
    default: "Muslim | Frontend Developer",
    template: "%s | Muslim",
  },

  description:
    "Muslimning shaxsiy portfolio sayti. Frontend dasturlash, React, Next.js va zamonaviy web loyihalar.",

  keywords: [
    "Muslim",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],

  authors: [{ name: "Muslim" }],

  openGraph: {
    title: "Muslim | Frontend Developer",
    description:
      "React va Next.js yordamida yaratilgan zamonaviy web loyihalar va shaxsiy portfolio.",
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden bg-background text-foreground">
        <ThemeProvider>
          <div className="relative flex h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
            <GlobalBackground />

            {/* Header doim yuqorida */}
            <div className="relative z-10 shrink-0">
              <Header />
              <Menyu />
            </div>

            {/* Faqat kontent qismi scroll bo'ladi */}
            <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto scrollbar-hide">
              <div className="flex flex-1 flex-col justify-center">
                {children}
              </div>
            </div>

            {/* Footer doim pastda */}
            <div className="relative z-10 shrink-0">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
