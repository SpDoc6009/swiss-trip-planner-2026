"use client";

import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/format";
import type { ItineraryDay } from "@/types/trip";

const labels = {
  title: "\u6bcf\u65e5\u6aa2\u67e5\u6e05\u55ae",
  headingSuffix: "\u51fa\u9580\u524d\u78ba\u8a8d",
  completed: "\u5df2\u5b8c\u6210",
  reset: "\u91cd\u8a2d\u4eca\u65e5\u6aa2\u67e5\u6e05\u55ae"
};

const baseItems = [
  "\u8b77\u7167 / \u8b49\u4ef6 / \u4fe1\u7528\u5361",
  "Swiss Half Fare Card",
  "\u624b\u6a5f\u3001\u884c\u52d5\u96fb\u6e90\u3001\u5145\u96fb\u7dda",
  "\u9632\u98a8\u5916\u5957\u3001\u96e8\u5177\u3001\u9632\u66ec\u3001\u592a\u967d\u773c\u93e1",
  "\u6c34\u74f6\u3001\u7c21\u55ae\u96f6\u98df\u3001\u5e38\u5099\u85e5"
];

export function DailyChecklist({ day }: { day: ItineraryDay }) {
  const storageKey = `swiss-trip-checklist-day-${day.id}`;
  const items = useMemo(() => buildChecklist(day), [day]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const completed = items.filter((item) => checked[item]).length;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      setChecked(saved ? (JSON.parse(saved) as Record<string, boolean>) : {});
    } catch {
      setChecked({});
    }
  }, [storageKey]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked, storageKey]);

  return (
    <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-swiss-red">{labels.title}</p>
          <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">
            Day {day.id} {labels.headingSuffix}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
            {completed} / {items.length} {labels.completed}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setChecked({})}
          className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
          aria-label={labels.reset}
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {items.map((item) => {
          const active = checked[item] ?? false;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setChecked((current) => ({ ...current, [item]: !active }))}
              className={cn(
                "focus-ring flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition hover:-translate-y-0.5",
                active
                  ? "border-lake-500 bg-lake-50 text-lake-900 dark:border-white/40 dark:bg-white/12 dark:text-white"
                  : "border-slate-200 bg-swiss-snow text-slate-700 dark:border-white/10 dark:bg-lake-900/50 dark:text-slate-200"
              )}
              aria-pressed={active}
            >
              {active ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lake-700 dark:text-white" /> : <Circle className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />}
              <span className="text-sm font-bold leading-6">{item}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function buildChecklist(day: ItineraryDay) {
  const dayText = `${day.theme} ${day.region} ${day.routePlaceIds.join(" ")} ${day.placeIds.join(" ")}`;
  const extra = new Set<string>();

  if (/pilatus|gornergrat|matterhorn|jungfrau|first|mountain|zermatt/i.test(dayText)) {
    extra.add("\u9ad8\u5c71\u7968\u5238 / webcam / \u98a8\u901f\u8207\u96f2\u91cf\u518d\u6b21\u78ba\u8a8d");
    extra.add("\u4fdd\u6696\u4e2d\u5c64\u3001\u9632\u6c34\u978b\u3001\u624b\u5957\u6216\u8584\u5e3d");
  }

  if (/parking|car|tasch|lauterbrunnen|grindelwald-terminal|europcar/i.test(dayText)) {
    extra.add("\u505c\u8eca\u5834\u4f4d\u7f6e\u3001\u79df\u8eca\u6587\u4ef6\u3001\u8eca\u9470\u5319\u8207\u6cb9\u91cf\u78ba\u8a8d");
  }

  if (day.flights?.length) {
    extra.add("\u822a\u73ed\u6642\u9593\u3001\u8b77\u7167\u3001\u767b\u6a5f\u6587\u4ef6\u3001\u884c\u674e\u91cd\u91cf\u78ba\u8a8d");
  }

  if (day.bookingReminders.length) {
    extra.add("\u4eca\u65e5\u7968\u5238 / \u9810\u8a02\u622a\u5716\u5df2\u96e2\u7dda\u4fdd\u5b58");
  }

  return [...baseItems, ...Array.from(extra)];
}

