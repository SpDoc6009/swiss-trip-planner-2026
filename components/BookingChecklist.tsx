"use client";

import { CheckCircle2, Circle, ExternalLink } from "lucide-react";
import { useState } from "react";

import { bookingItems } from "@/data/bookings";
import { cn } from "@/lib/format";
import type { BookingItem } from "@/types/trip";

const categories: { id: BookingItem["category"]; label: string; description: string }[] = [
  { id: "must", label: "A. 必須先訂", description: "行程骨架與供給有限的項目" },
  { id: "recommended", label: "B. 強烈建議先訂", description: "旺季或天氣好時容易熱門" },
  { id: "onsite", label: "C. 可現場買", description: "保留彈性，接近當日再決定" }
];

export function BookingChecklist() {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setCheckedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const items = bookingItems.filter((item) => item.category === category.id);
        return (
          <section key={category.id} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-lake-900 dark:text-white">{category.label}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-300">{category.description}</p>
              </div>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-300">
                {items.filter((item) => checkedIds.has(item.id)).length}/{items.length} 已確認
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              {items.map((item) => {
                const checked = checkedIds.has(item.id);
                return (
                  <article
                    key={item.id}
                    className={cn(
                      "rounded-2xl border p-4 transition hover:-translate-y-0.5",
                      checked
                        ? "border-lake-500 bg-lake-50 dark:border-white/40 dark:bg-white/12"
                        : "border-slate-200 bg-swiss-snow dark:border-white/10 dark:bg-lake-900/50"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        className="focus-ring mt-1 rounded-full text-lake-900 dark:text-white"
                        onClick={() => toggle(item.id)}
                        aria-pressed={checked}
                        aria-label={`切換 ${item.item} 完成狀態`}
                      >
                        {checked ? <CheckCircle2 className="h-6 w-6 text-lake-700 dark:text-white" /> : <Circle className="h-6 w-6" />}
                      </button>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-sm font-black text-swiss-red">{item.date}</p>
                            <h3 className="mt-1 text-lg font-black text-lake-900 dark:text-white">{item.item}</h3>
                          </div>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-lake-900 ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
                            {item.required}
                          </span>
                        </div>
                        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                          <Info label="建議時間" value={item.suggestedTiming} />
                          <Info label="購買處 / 提醒" value={item.officialSource} icon />
                          <Info label="Half Fare Card" value={item.halfFare} />
                          <Info label="備註" value={item.note} />
                        </dl>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Info({ label, value, icon }: { label: string; value: string; icon?: boolean }) {
  return (
    <div>
      <dt className="text-xs font-black uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-1 flex gap-1 font-bold leading-6 text-slate-700 dark:text-slate-200">
        {value}
        {icon ? <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" /> : null}
      </dd>
    </div>
  );
}
