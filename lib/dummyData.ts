import { Article, Category, categories } from '@/lib/types';

const paragraphs = [
  `In an era of rapid transformation, THE MOON tracks the signals that matter most. From policy shifts to scientific breakthroughs, every development now moves through a tightly connected world where local decisions create global ripples.`,
  `Our newsroom focuses on context over noise. Reporters and analysts work across domains to explain what happened, why it matters, and what could happen next. The result is coverage built for clarity, accountability, and smart action.`,
  `Across governments, markets, and communities, citizens are demanding transparency. Institutions are responding unevenly, with some embracing open data and others resisting scrutiny. The tension is shaping a new era for trust in public life.`,
  `Technology is simultaneously accelerating productivity and raising complex ethical questions. Leaders must navigate regulation, talent, and infrastructure while preserving human dignity in systems increasingly designed by algorithms.`,
  `As climate pressure rises and geopolitical blocs evolve, alliances are being renegotiated. The next decade will likely be defined by resilience—who can adapt quickly, share resources fairly, and build durable systems under stress.`
];

const makeContent = (topic: string) => `## ${topic}: A New Phase\n\n${paragraphs[0]}\n\n${paragraphs[1]}\n\n> "Truth Above All" is more than a slogan—it's our editorial standard when the stakes are high.\n\n### Why This Story Matters\n\n${paragraphs[2]}\n\n${paragraphs[3]}\n\n- Verified sourcing before speed\n- Expert voices with clear attribution\n- Public-interest focus in every brief\n\n${paragraphs[4]}\n`;

export const articles: Article[] = [
  {
    id: 1,
    title: 'Midnight Summit Reshapes Global Security Playbook',
    slug: 'midnight-summit-global-security-playbook',
    subtitle: 'World leaders sign a surprise framework for cyber and energy resilience.',
    category: 'world',
    excerpt: 'A closed-door summit produced an unexpected pact balancing digital sovereignty with cross-border response teams.',
    content: makeContent('Global Security'),
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    author: 'Ariana Cole',
    date: '2026-02-20',
    readTime: '6 min read',
    featured: true,
    trendingScore: 96
  },
  {
    id: 2,
    title: 'India Unveils Lunar Agriculture Pilot in Desert Belt',
    slug: 'india-lunar-agriculture-pilot-desert-belt',
    subtitle: 'A moon-inspired farming model could transform arid food production.',
    category: 'india',
    excerpt: 'Researchers are testing low-water crops and AI irrigation to improve yields in heat-stressed districts.',
    content: makeContent('Sustainable Agriculture'),
    imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80',
    author: 'Rohan Mehta',
    date: '2026-02-18',
    readTime: '5 min read',
    featured: true,
    trendingScore: 94
  },
  {
    id: 3,
    title: 'Quantum Chips Move From Lab to Real-Time Financial Risk Engines',
    slug: 'quantum-chips-financial-risk-engines',
    subtitle: 'Banks begin pilot programs to process high-complexity models faster.',
    category: 'technology',
    excerpt: 'New hybrid systems combine classical infrastructure with quantum acceleration for stress testing.',
    content: makeContent('Quantum Finance'),
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    author: 'Maya Jensen',
    date: '2026-02-16',
    readTime: '7 min read',
    featured: true,
    trendingScore: 98
  },
  {
    id: 4,
    title: 'Markets Rally as Green Infrastructure Bill Clears Final Vote',
    slug: 'markets-rally-green-infrastructure-bill',
    subtitle: 'Investors shift to logistics, storage, and grid modernization assets.',
    category: 'business',
    excerpt: 'The package unlocks major spending and a long pipeline of regional contractors.',
    content: makeContent('Green Infrastructure'),
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    author: 'Lena Brooks',
    date: '2026-02-14',
    readTime: '4 min read',
    featured: true,
    trendingScore: 91
  },
  ...categories.flatMap((category, index) =>
    Array.from({ length: 2 }).map((_, i) => {
      const id = 5 + index * 2 + i;
      const categoryTitle = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
      return {
        id,
        title: `${categoryTitle} Briefing ${i + 1}: Signals to Watch This Week`,
        slug: `${category}-briefing-${i + 1}-signals-this-week`,
        subtitle: `Inside the latest ${categoryTitle.toLowerCase()} shifts shaping tomorrow's headlines.`,
        category,
        excerpt: `A concise look at the most important ${categoryTitle.toLowerCase()} developments with context from THE MOON desk.`,
        content: makeContent(`${categoryTitle} Outlook`),
        imageUrl: `https://images.unsplash.com/photo-${1500530855697 + id}?auto=format&fit=crop&w=1400&q=80`,
        author: ['Noah Singh', 'Ella Park', 'Iris Khan', 'Dev Patel'][id % 4],
        date: `2026-02-${String((id % 27) + 1).padStart(2, '0')}`,
        readTime: `${4 + (id % 5)} min read`,
        trendingScore: 70 + (id % 25)
      };
    })
  )
];

export const featuredArticles = articles.filter((article) => article.featured).slice(0, 4);
export const latestArticles = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
export const trendingArticles = [...articles]
  .sort((a, b) => (b.trendingScore ?? 0) - (a.trendingScore ?? 0))
  .slice(0, 5);

export const getArticlesByCategory = (category: Category) =>
  latestArticles.filter((article) => article.category === category);

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);

export const categoryLabel = (category: string) =>
  `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
