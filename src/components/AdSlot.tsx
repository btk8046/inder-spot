import { useEffect, useRef } from "react";
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

export function AdSlot({ slot, className }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const meta = SLOT_META[slot];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (slot !== "AD_SLOT_INGRID" && container.querySelector("script")) return;

    const configScript = document.createElement("script");
    configScript.textContent = `
      atOptions = {
        'key' : '78a70478fab83198bd7ca134fdeff72a',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.src = "https://www.highperformanceformat.com/78a70478fab83198bd7ca134fdeff72a/invoke.js";
    invokeScript.async = true;

    container.appendChild(configScript);
    container.appendChild(invokeScript);
  }, [slot]);

  return (
    <div
      ref={containerRef}
      data-ad-slot={slot}
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-md border border-dashed border-border/60 bg-surface/40 px-4 py-3 text-center",
        meta.minH,
        className,
      )}
    >
      {slot === "AD_SLOT_INGRID" ? null : (
        <>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
            {meta.label}
          </span>
          <span className="mt-1 text-[10px] text-muted-foreground/50">
            {slot} · {meta.size}
          </span>
        </>
      )}
    </div>
  );
}
