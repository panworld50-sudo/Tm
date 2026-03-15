import { Article } from '@/lib/types';

export default function ArticleContent({ article }: { article: Article }) {
  const lines = article.content.split('\n').filter(Boolean);

  return (
    <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-slate-100 prose-li:text-slate-300 prose-blockquote:border-sky-500 prose-blockquote:text-slate-200">
      {lines.map((line, index) => {
        if (line.startsWith('## ')) return <h2 key={index}>{line.replace('## ', '')}</h2>;
        if (line.startsWith('### ')) return <h3 key={index}>{line.replace('### ', '')}</h3>;
        if (line.startsWith('> ')) return <blockquote key={index}>{line.replace('> ', '')}</blockquote>;
        if (line.startsWith('- ')) return <li key={index}>{line.replace('- ', '')}</li>;
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
}
