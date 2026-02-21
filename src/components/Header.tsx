"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-forest">
          <span className="text-xl">🌱</span>
          <span>Tend Studio</span>
        </Link>

        {/* Descriptor — centre, hidden on mobile */}
        <span className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-medium text-terracotta md:block">
          Email &amp; CRM by design
        </span>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className="group relative text-sm font-medium text-charcoal transition-colors duration-200 hover:text-forest"
          >
            Services
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-forest transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/enquire"
            className="group relative text-sm font-medium text-charcoal transition-colors duration-200 hover:text-forest"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-forest transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-sage/20 bg-cream px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/services"
              className="text-base font-medium text-charcoal transition-colors duration-200 hover:text-forest"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/enquire"
              className="text-base font-medium text-charcoal transition-colors duration-200 hover:text-forest"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
