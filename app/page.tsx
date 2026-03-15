import FeaturedCarousel from '@/components/FeaturedCarousel';
import NewsletterForm from '@/components/NewsletterForm';
import NewsCard from '@/components/NewsCard';
import SidebarTrending from '@/components/SidebarTrending';
import { featuredArticles, latestArticles, trendingArticles } from '@/lib/dummyData';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-sky-300">Truth Above All</p>
        <h1 className="font-serif text-4xl text-white md:text-5xl">Independent journalism for a world in motion.</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          THE MOON covers the events shaping tomorrow, from world affairs to science and innovation.
        </p>
      </section>

      <FeaturedCarousel items={featuredArticles} />

      <section className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="mb-5 font-serif text-3xl text-white">Latest News</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {latestArticles.slice(0, 8).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        <SidebarTrending items={trendingArticles} />
      </section>

      <NewsletterForm />
    </div>
  );
}
