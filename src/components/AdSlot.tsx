import { cn } from "@/lib/utils";

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

const AD_HTML = `
  <script>
    atOptions = {
      'key' : '78a70478fab83198bd7ca134fdeff72a',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };
  </script>
  <script src="https://www.highperformanceformat.com/78a70478fab83198bd7ca134fdeff72a/invoke.js"></script>
`;

export function AdSlot({ slot, className }: AdSlotProps) {
  const meta = SLOT_META[slot];

  return (
    <div
      data-ad-slot={slot}
      className={cn(
        "flex w-full flex-col items-center justify-center",
        meta.minH,
        className,
      )}
      dangerouslySetInnerHTML={{ __html: slot !== "AD_SLOT_INGRID" ? AD_HTML : "" }}
    />
  );
}
