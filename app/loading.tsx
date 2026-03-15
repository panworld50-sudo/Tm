import LoadingCard from '@/components/LoadingCard';

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="h-64 animate-pulse rounded-2xl bg-slate-900/60" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </div>
  );
}
