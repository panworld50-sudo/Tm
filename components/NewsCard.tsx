import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { categoryLabel } from '@/lib/dummyData';
import { Article } from '@/lib/types';

export default function NewsCard({ article }: { article: Article }) {
  return (
    <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-sky-500/40">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent className="space-y-3 p-5">
        <Badge variant="sky">{categoryLabel(article.category)}</Badge>
        <Link href={`/news/${article.slug}`}>
          <h3 className="font-serif text-xl leading-tight text-white transition-colors group-hover:text-sky-300">{article.title}</h3>
        </Link>
        <p className="text-sm text-slate-400">{article.excerpt}</p>
        <div className="text-xs text-slate-500">
          {article.author} · {new Date(article.date).toLocaleDateString()} · {article.readTime}
        </div>
      </CardContent>
    </Card>
  );
}
