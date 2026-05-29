"use client";

import { useState } from "react";
import { navItems, site } from "@/lib/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Hlavní navigace"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ivory/[0.18] bg-ink/[0.78] px-4 py-3 text-ivory shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:px-5"
      >
        <a href="#" aria-label="Klavíry & Kytary úvod" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass/[0.55] bg-brass/15 font-display text-xl text-brass">
            K
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-5 text-ivory">Klavíry &amp; Kytary</span>
            <span className="block truncate text-xs font-semibold text-ivory/[0.58]">{site.url}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ivory/70 transition hover:bg-ivory/10 hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#kontakt" className="hidden rounded-full bg-brass px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-[#d3a05b] lg:inline-flex">
          Nezávazná poptávka
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Otevřít menu"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ivory transition ${isOpen ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-ivory transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ivory transition ${isOpen ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="mx-auto mt-3 max-w-7xl rounded-[1.25rem] border border-ivory/[0.18] bg-ink/[0.96] p-3 text-ivory shadow-card backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ivory/[0.82] transition hover:bg-ivory/10"
              >
                {item.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setIsOpen(false)} className="mt-2 rounded-2xl bg-brass px-4 py-3 text-center text-sm font-bold text-ink">
              Nezávazná poptávka
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
