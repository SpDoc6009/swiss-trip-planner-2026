"use client";

import { Search, Target } from "lucide-react";
import { useMemo, useState } from "react";

import { itineraryDays } from "@/data/itinerary";
import { places } from "@/data/places";
import { placeTypeLabels } from "@/lib/map";

interface SearchPlacesProps {
  onLocate: (dayId: number, placeId: string) => void;
}

export function SearchPlaces({ onLocate }: SearchPlacesProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    return places
      .map((place) => {
        const days = itineraryDays.filter((day) => day.placeIds.includes(place.id) || day.routePlaceIds.includes(place.id));
        return { place, days };
      })
      .filter(({ place, days }) => {
        const searchable = [place.name, place.region, place.type, ...days.map((day) => `Day ${day.id} ${day.theme} ${day.region}`)]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return searchable.includes(normalized);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <label htmlFor="place-search" className="text-sm font-black text-lake-900 dark:text-white">
        地點查詢
      </label>
      <div className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-swiss-snow px-3 py-2 dark:border-white/10 dark:bg-lake-900/50">
        <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
        <input
          id="place-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜尋 Luzern、Pilatus、Zürich..."
          className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="mt-4 space-y-2">
        {query && results.length === 0 ? (
          <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-lake-900/50 dark:text-slate-300">找不到符合的地點。</p>
        ) : null}
        {results.map(({ place, days }) => (
          <article key={place.id} className="rounded-2xl border border-slate-200 p-3 dark:border-white/10">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-black text-lake-900 dark:text-white">{place.name}</h3>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-300">{placeTypeLabels[place.type]} · {days.map((day) => `Day ${day.id}`).join("、")}</p>
              </div>
              <button
                type="button"
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-lake-900 text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-lake-900"
                aria-label={`定位 ${place.name}`}
                onClick={() => {
                  const firstDay = days[0];
                  if (firstDay) onLocate(firstDay.id, place.id);
                }}
              >
                <Target className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
