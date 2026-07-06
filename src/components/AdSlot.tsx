import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Slot = "AD_SLOT_HEADER" | "AD_SLOT_MIDCONTENT" | "AD_SLOT_INGRID";

interface SlotConfig {
  key: string;
  height: number;
  width: number;
  minH: string;
}

interface AdSlotProps {
  slot: Slot;
  className?: string;
}

const SLOT_CONFIG: Record<Slot, SlotConfig> = {
  AD_SLOT_HEADER: {
    key: "78a70478fab83198bd7ca134fdeff72a",
    height: 90,
    width: 728,
    minH: "min-h-[70px]",
  },
  AD_SLOT_MIDCONTENT: {
    key: "60f2a21321451ee338a55a5ac6d759b6",
    height: 300,
    width: 160,
    minH: "min-h-[90px]",
  },
  AD_SLOT_INGRID: {
    key: "1333f3e568230c1a351186508ca3a8b6",
    height: 60,
    width: 468,
    minH: "min-h-full",
  },
};

const BASE_URL = "https://www.highperformanceformat.com";

export function AdSlot({ slot, className }: AdSlotProps) {
  const config = SLOT_CONFIG[slot];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !config.key) return;

    const container = containerRef.current;
    container.innerHTML = "";

    const cfg = document.createElement("script");
    cfg.type = "text/javascript";
    cfg.text = `atOptions = { key: '${config.key}', format: 'iframe', height: ${config.height}, width: ${config.width}, params: {} };`;
    const invoke = document.createElement("script");
    invoke.type = "text/javascript";
    invoke.src = `${BASE_URL}/${config.key}/invoke.js`;

    container.appendChild(cfg);
    container.appendChild(invoke);
  }, [slot, config]);

  return (
    <div
      ref={containerRef}
      data-ad-slot={slot}
      className={cn(
        "flex w-full flex-col items-center justify-center",
        config.minH,
        className,
      )}
    />
  );
}
