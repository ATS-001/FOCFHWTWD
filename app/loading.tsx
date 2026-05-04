import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-th-bg text-th-text space-y-6">
      <Loader2 className="w-12 h-12 animate-spin text-th-accent" />
      <div className="font-mono text-sm tracking-[0.3em] uppercase text-th-text-secondary font-black animate-pulse">
        Loading System Resources...
      </div>
    </div>
  );
}
