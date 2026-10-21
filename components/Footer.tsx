"use client";

import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/20 px-6 py-6 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          © 2026 Muslim. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Muslim-22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-blue-500"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-blue-500"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://t.me/Ikromov_22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="transition hover:text-blue-500"
          >
            <FaTelegramPlane size={22} />
          </a>

        </div>
      </div>
    </footer>
  );
}