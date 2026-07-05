import { cn } from "@/lib/utils";

type Slot = "AD_SLOT_HEADER" | "AD_SLOT_MIDCONTENT" | "AD_SLOT_INGRID";

interface AdSlotProps {
  slot: Slot;
  className?: string;
}

const SLOT_META: Record<Slot, { label: string; size: string; minH: string }> = {
  AD_SLOT_HEADER: { label: "Advertisement · Leaderboard", size: "728 × 90", minH: "min-h-[70px]" },
  AD_SLOT_MIDCONTENT: { label: "Advertisement", size: "728 × 90", minH: "min-h-[90px]" },
  AD_SLOT_INGRID: { label: "Sponsored", size: "In-feed", minH: "min-h-full" },
};

// Placeholder ad slots. Replace inner markup with your ad network snippet
// (Google AdSense, etc.) later. Data attribute makes each slot easy to target.
export function AdSlot({ slot, className }: AdSlotProps) {
  const meta = SLOT_META[slot];
  return (
    <div
      data-ad-slot={slot}
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-md border border-dashed border-border/60 bg-surface/40 px-4 py-3 text-center",
        meta.minH,
        className,
      )}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
        {meta.label}
      </span>
      <span className="mt-1 text-[10px] text-muted-foreground/50">
        {slot} · {meta.size}
      </span>
    </div>
  );
}
