import { Apple, Map } from "lucide-react";

import { appleMapsUrl, googleMapsUrl } from "@/lib/mapLinks";
import type { TripPlace } from "@/types/trip";

export function MapActionButtons({ place, compact = false }: { place: TripPlace; compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={googleMapsUrl(place)}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center gap-1.5 rounded-2xl bg-lake-900 px-3 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-lake-900"
      >
        <Map className="h-3.5 w-3.5" />
        {compact ? "Google" : "Google Maps"}
      </a>
      <a
        href={appleMapsUrl(place)}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center gap-1.5 rounded-2xl bg-white px-3 py-2 text-xs font-black text-lake-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white dark:ring-white/10"
      >
        <Apple className="h-3.5 w-3.5" />
        {compact ? "Apple" : "Apple Maps"}
      </a>
    </div>
  );
}

