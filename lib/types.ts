export const categories = [
  'world',
  'india',
  'technology',
  'business',
  'science',
  'entertainment',
  'sports',
  'health'
] as const;

export type Category = (typeof categories)[number];

export interface Article {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  category: Category;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  trendingScore?: number;
}
