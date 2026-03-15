'use client';

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

import SearchModal from '@/components/SearchModal';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/types';

const navCategories = categories.map((category) => ({
  href: `/news/${category}`,
  label: `${category.charAt(0).toUpperCase()}${category.slice(1)}`
}));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-night-950/90 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-xl font-black tracking-[0.25em] text-sky-300">
              THE MOON
            </Link>
          </div>

          <div className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
            {navCategories.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-sky-300">
                {item.label}
              </Link>
            ))}
            <details className="relative">
              <summary className="cursor-pointer list-none transition-colors hover:text-sky-300">More</summary>
              <div className="absolute right-0 mt-2 grid min-w-52 gap-2 rounded-xl border border-slate-700 bg-slate-900 p-3">
                {navCategories.slice(5).map((item) => (
                  <Link key={item.href} href={item.href} className="rounded px-2 py-1 hover:bg-slate-800">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Open search" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-slate-800 bg-night-900 p-3 md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {navCategories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
