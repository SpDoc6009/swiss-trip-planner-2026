"use client";

import type { ItineraryDay } from "@/types/trip";
import { cn, formatDate } from "@/lib/format";

interface DayTabsProps {
  days: ItineraryDay[];
  selectedDayId: number;
  onSelect: (dayId: number) => void;
}

export function DayTabs({ days, selectedDayId, onSelect }: DayTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
      {days.map((day) => {
        const active = day.id === selectedDayId;
        return (
          <button
            key={day.id}
            type="button"
            onClick={() => onSelect(day.id)}
            className={cn(
              "focus-ring min-w-[7.5rem] rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 md:min-w-0",
              active
                ? "border-lake-700 bg-lake-900 text-white shadow-soft dark:border-white dark:bg-white dark:text-lake-900"
                : "border-slate-200 bg-white text-slate-700 hover:border-lake-500 hover:text-lake-900 dark:border-white/10 dark:bg-white/8 dark:text-slate-200 dark:hover:border-white/40"
            )}
            aria-pressed={active}
          >
            <span className="block text-xs font-black uppercase opacity-70">Day {day.id}</span>
            <span className="mt-1 block text-sm font-black">{formatDate(day.date)}</span>
            <span className="mt-1 line-clamp-2 block text-xs leading-5 opacity-80">{day.region}</span>
          </button>
        );
      })}
    </div>
  );
}
