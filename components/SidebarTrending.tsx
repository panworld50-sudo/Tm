import Link from 'next/link';

import { categoryLabel } from '@/lib/dummyData';
import { Article } from '@/lib/types';

export default function SidebarTrending({ items }: { items: Article[] }) {
  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
      <h3 className="mb-4 text-lg font-semibold text-white">Trending Now</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Link key={item.id} href={`/news/${item.slug}`} className="group block border-b border-slate-800 pb-3 last:border-none">
            <p className="text-xs text-violet-300">#{index + 1} · {categoryLabel(item.category)}</p>
            <p className="mt-1 text-sm text-slate-200 transition-colors group-hover:text-sky-300">{item.title}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
