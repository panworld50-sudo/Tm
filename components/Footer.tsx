import Link from 'next/link';

import { categories } from '@/lib/types';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-night-950">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-black tracking-[0.25em] text-sky-300">THE MOON</p>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            Truth Above All. Independent, future-facing journalism for readers who value context and credibility.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Categories</p>
          <div className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-slate-300">
            {categories.map((category) => (
              <Link key={category} href={`/news/${category}`} className="hover:text-sky-300">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <Link href="/about" className="block hover:text-sky-300">
              About
            </Link>
            <Link href="/contact" className="block hover:text-sky-300">
              Contact
            </Link>
            <Link href="/privacy-policy" className="block hover:text-sky-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
