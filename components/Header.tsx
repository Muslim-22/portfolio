
"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function HeaderContent() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="relative z-50 flex items-center justify-between border-b border-gray-200/20 px-4 py-3 backdrop-blur-md sm:px-6 md:px-12 md:py-4">
      {/* Logo */}
      <Link
        href="/"
        className="group flex min-w-0 items-center gap-2 sm:gap-3"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
          <span className="text-xl font-black text-white sm:text-2xl">
            M
          </span>
        </div>

        <div className="flex min-w-0 flex-col">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-extrabold tracking-[0.1em] text-transparent sm:text-xl sm:tracking-[0.12em]">
            MUSLIM
          </span>
          <span className="text-[8px] font-medium tracking-[0.12em] text-gray-500 sm:text-[9px] sm:tracking-[0.18em]">
            SOFTWARE DEVELOPER
          </span>
        </div>
      </Link>

      {/* Kompyuter navigatsiyasi */}
      <nav className="hidden items-center gap-7 md:flex">
        {Links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-400 dark:text-gray-300"
              }`}
            >
              {link.label}

              {isActive && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Telefon navigatsiyasi uchun tema tugmasi */}
      <div className="ml-auto flex shrink-0 items-center gap-2 md:hidden">
        <ThemeToggle />
      </div>

      {/* Kompyuter uchun tema tugmasi */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense
      fallback={
        <header className="relative z-50 flex h-16 items-center justify-between border-b border-gray-200/20 px-4 sm:px-6 md:px-12" />
      }
    >
      <HeaderContent />
    </Suspense>
  );
}
