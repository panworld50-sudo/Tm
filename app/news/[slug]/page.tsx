import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Facebook, Linkedin, MessageCircle, Share2 } from 'lucide-react';

import ArticleContent from '@/components/ArticleContent';
import NewsCard from '@/components/NewsCard';
import { Badge } from '@/components/ui/badge';
import { articles, categoryLabel, getArticleBySlug, getArticlesByCategory } from '@/lib/dummyData';
import { categories } from '@/lib/types';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug.toLowerCase();
  const article = getArticleBySlug(slug);

  if (article) {
    return {
      title: article.title,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: [article.imageUrl]
      }
    };
  }

  if (categories.includes(slug as (typeof categories)[number])) {
    return {
      title: `${categoryLabel(slug)} News`,
      description: `Latest ${categoryLabel(slug)} stories and analysis from THE MOON.`
    };
  }

  return { title: 'Not Found' };
}

export default function NewsRoutePage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();
  const isCategory = categories.includes(slug as (typeof categories)[number]);

  if (isCategory) {
    const categoryArticles = getArticlesByCategory(slug as (typeof categories)[number]);

    return (
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Category</p>
        <h1 className="mt-2 font-serif text-4xl text-white">{categoryLabel(slug)}</h1>
        <p className="mt-2 text-slate-300">Breaking updates and deep context from our {categoryLabel(slug)} desk.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categoryArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    );
  }

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles
    .filter((item) => item.category === article.category && item.slug !== article.slug)
    .slice(0, 4);

  return (
    <article className="mx-auto max-w-4xl">
      <Badge variant="sky">{categoryLabel(article.category)}</Badge>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">{article.title}</h1>
      <p className="mt-3 text-lg text-slate-300">{article.subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
        <span>{article.author}</span>
        <span>•</span>
        <span>{new Date(article.date).toLocaleDateString()}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>

      <div className="relative mt-6 h-[420px] overflow-hidden rounded-2xl border border-slate-800">
        <Image src={article.imageUrl} alt={article.title} fill className="object-cover" sizes="100vw" />
      </div>

      <div className="mt-8">
        <ArticleContent article={article} />
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-slate-800 pt-6">
        <Share2 className="h-4 w-4 text-slate-400" />
        <Link href="#" className="rounded-full border border-slate-700 p-2 hover:bg-slate-800">
          <span className="sr-only">Share on X</span>
          𝕏
        </Link>
        <Link href="#" className="rounded-full border border-slate-700 p-2 hover:bg-slate-800">
          <Facebook className="h-4 w-4" />
        </Link>
        <Link href="#" className="rounded-full border border-slate-700 p-2 hover:bg-slate-800">
          <Linkedin className="h-4 w-4" />
        </Link>
        <Link href="#" className="rounded-full border border-slate-700 p-2 hover:bg-slate-800">
          <MessageCircle className="h-4 w-4" />
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="mb-5 font-serif text-3xl text-white">Related Articles</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {related.map((item) => (
            <NewsCard key={item.id} article={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
