
"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function MenyuContent() {
  const pathname = usePathname() || "/";

  return (
    <nav className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-gray-200/20 px-3 py-3 md:hidden">
      {links.map((link) => {
        const currentPath = pathname.replace(/\/+$/, "") || "/";
        const linkPath = link.href.replace(/\/+$/, "") || "/";

        const isActive =
          currentPath === linkPath ||
          (linkPath !== "/" && currentPath.startsWith(`${linkPath}/`));

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
  );
}

export default function Menyu() {
  return (
    <Suspense
      fallback={
        <nav className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-gray-200/20 px-3 py-3 md:hidden" />
      }
    >
      <MenyuContent />
    </Suspense>
  );
}
