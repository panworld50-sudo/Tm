import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="mt-4 h-5 w-20" />
      <Skeleton className="mt-3 h-6 w-full" />
      <Skeleton className="mt-2 h-6 w-4/5" />
      <Skeleton className="mt-3 h-4 w-full" />
    </div>
  );
}
