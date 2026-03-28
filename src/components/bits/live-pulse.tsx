export function LivePulse({ label = "LIVE FEED" }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 animate-live-pulse" />
      </span>
      {label}
    </div>
  );
}
