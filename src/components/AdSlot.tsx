import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Slot = "AD_SLOT_HEADER" | "AD_SLOT_MIDCONTENT" | "AD_SLOT_INGRID";

interface AdSlotProps {
  slot: Slot;
  className?: string;
}

const SLOT_META: Record<Slot, { minH: string }> = {
  AD_SLOT_HEADER: { minH: "min-h-[70px]" },
  AD_SLOT_MIDCONTENT: { minH: "min-h-[90px]" },
  AD_SLOT_INGRID: { minH: "min-h-full" },
};

const AD_KEY = "78a70478fab83198bd7ca134fdeff72a";

export function AdSlot({ slot, className }: AdSlotProps) {
  const meta = SLOT_META[slot];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slot === "AD_SLOT_INGRID" || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = "";

    const config = document.createElement("script");
    config.type = "text/javascript";
    config.text = `atOptions = { key: '${AD_KEY}', format: 'iframe', height: 90, width: 728, params: {} };`;
    const invoke = document.createElement("script");
    invoke.type = "text/javascript";
    invoke.src = `https://www.highperformanceformat.com/${AD_KEY}/invoke.js`;

    container.appendChild(config);
    container.appendChild(invoke);
  }, [slot]);

  return (
    <div
      ref={containerRef}
      data-ad-slot={slot}
      className={cn(
        "flex w-full flex-col items-center justify-center",
        meta.minH,
        className,
      )}
    />
  );
}
