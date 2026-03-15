'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { categoryLabel } from '@/lib/dummyData';
import { Article } from '@/lib/types';

export default function FeaturedCarousel({ items }: { items: Article[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative min-h-[460px]"
          initial={false}
          animate={{ opacity: index === active ? 1 : 0, pointerEvents: index === active ? 'auto' : 'none' }}
          transition={{ duration: 0.5 }}
          style={{ position: index === active ? 'relative' : 'absolute', inset: 0 }}
        >
          <Image src={item.imageUrl} alt={item.title} fill className="object-cover" priority={index === 0} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full space-y-4 p-6 md:p-10">
            <Badge>{categoryLabel(item.category)}</Badge>
            <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-white md:text-5xl">{item.title}</h2>
            <p className="max-w-2xl text-sm text-slate-200 md:text-base">{item.subtitle}</p>
            <Link href={`/news/${item.slug}`}>
              <Button size="lg" className="bg-skyBrand text-white hover:bg-sky-500">
                Read Story
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`h-2 rounded-full transition-all ${index === active ? 'w-8 bg-sky-400' : 'w-2 bg-white/40'}`}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
