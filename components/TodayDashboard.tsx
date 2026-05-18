"use client";

import Link from "next/link";
import { CalendarClock, ChevronRight, Hotel, Navigation, Ticket } from "lucide-react";
import { useMemo } from "react";

import { DailyChecklist } from "@/components/DailyChecklist";
import { MapActionButtons } from "@/components/MapActionButtons";
import { itineraryDays } from "@/data/itinerary";
import { placeById } from "@/data/places";
import { formatFullDate } from "@/lib/format";

const labels = {
  todayMode: "\u4eca\u65e5\u6a21\u5f0f",
  openItinerary: "\u6253\u958b\u5b8c\u6574\u884c\u7a0b",
  nextFocus: "\u4e0b\u4e00\u500b\u91cd\u9ede",
  hotelTonight: "\u4eca\u665a\u4f4f\u5bbf",
  quickNav: "\u4eca\u65e5\u5730\u9ede\u5feb\u901f\u5c0e\u822a",
  tickets: "\u4eca\u65e5\u7968\u5238 / \u9810\u8a02",
  exact: "\u4eca\u5929\u5c31\u662f\u9019\u4e00\u5929",
  before: "\u8ddd\u96e2\u51fa\u767c\u9084\u6709",
  days: "\u5929",
  ended: "\u65c5\u7a0b\u5df2\u7d50\u675f\uff0c\u986f\u793a\u56de\u7a0b\u6574\u7406",
  fallback: "\u986f\u793a\u9810\u8a2d\u51fa\u767c\u65e5"
};

export function TodayDashboard() {
  const todayState = useMemo(() => getTodayState(), []);
  const day = todayState.day;
  const hotel = day.hotelPlaceId ? placeById.get(day.hotelPlaceId) : undefined;
  const routePlaces = day.placeIds.map((id) => placeById.get(id)).filter(Boolean).slice(0, 6);
  const firstTimelineItem = day.timeline.flatMap((group) => group.items)[0];

  return (
    <div className="space-y-5">
      <section className="rounded-2xl bg-lake-900 p-5 text-white shadow-soft">
        <p className="inline-flex items-center gap-2 text-sm font-black text-white/70">
          <CalendarClock className="h-4 w-4" />
          {labels.todayMode}
        </p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold text-white/70">{todayState.label}</p>
            <h1 className="mt-2 text-4xl font-black leading-tight">Day {day.id} · {day.theme}</h1>
            <p className="mt-3 text-sm leading-6 text-white/75">{formatFullDate(day.date)} · {day.weekday} · {day.region}</p>
          </div>
          <Link href="/itinerary" className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-lake-900 transition hover:-translate-y-0.5">
            {labels.openItinerary}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-5">
          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="text-sm font-black text-swiss-red">{labels.nextFocus}</p>
            {firstTimelineItem ? (
              <div className="mt-3 rounded-2xl bg-swiss-snow p-4 dark:bg-lake-900/50">
                <p className="text-xs font-black text-slate-500 dark:text-slate-300">{firstTimelineItem.time}</p>
                <h2 className="mt-1 text-2xl font-black text-lake-900 dark:text-white">{firstTimelineItem.title}</h2>
                {firstTimelineItem.description ? <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{firstTimelineItem.description}</p> : null}
              </div>
            ) : null}
          </section>

          {hotel ? (
            <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
              <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
                <Hotel className="h-4 w-4" />
                {labels.hotelTonight}
              </p>
              <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">{hotel.name}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{hotel.region}</p>
              <div className="mt-4">
                <MapActionButtons place={hotel} />
              </div>
            </section>
          ) : null}

          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
              <Navigation className="h-4 w-4" />
              {labels.quickNav}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {routePlaces.map((place) =>
                place ? (
                  <article key={place.id} className="rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
                    <h3 className="font-black text-lake-900 dark:text-white">{place.name}</h3>
                    <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-300">{place.region}</p>
                    <div className="mt-3">
                      <MapActionButtons place={place} compact />
                    </div>
                  </article>
                ) : null
              )}
            </div>
          </section>
        </div>

        <aside className="space-y-5">
          <DailyChecklist day={day} />
          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
              <Ticket className="h-4 w-4" />
              {labels.tickets}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {day.bookingReminders.map((item) => (
                <li key={item} className="rounded-2xl bg-swiss-snow p-3 dark:bg-lake-900/50">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function getTodayState() {
  const today = toDateKey(new Date());
  const exactDay = itineraryDays.find((day) => day.date === today);
  if (exactDay) {
    return { day: exactDay, label: labels.exact };
  }

  const firstDay = itineraryDays[0];
  const lastDay = itineraryDays[itineraryDays.length - 1];

  if (today < firstDay.date) {
    const remaining = Math.max(0, differenceInDays(firstDay.date, today));
    return { day: firstDay, label: `${labels.before} ${remaining} ${labels.days}` };
  }

  if (today > lastDay.date) {
    return { day: lastDay, label: labels.ended };
  }

  return { day: firstDay, label: labels.fallback };
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function differenceInDays(target: string, from: string) {
  const targetTime = new Date(`${target}T00:00:00`).getTime();
  const fromTime = new Date(`${from}T00:00:00`).getTime();
  return Math.ceil((targetTime - fromTime) / 86_400_000);
}

