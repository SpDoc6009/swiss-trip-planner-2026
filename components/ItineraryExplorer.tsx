"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { MapPinned, Route } from "lucide-react";
import { useMemo, useState } from "react";

import { DayTabs } from "@/components/DayTabs";
import { ItineraryTimeline } from "@/components/ItineraryTimeline";
import { SearchPlaces } from "@/components/SearchPlaces";
import { WeatherCard } from "@/components/WeatherCard";
import { itineraryDays } from "@/data/itinerary";
import { placeById } from "@/data/places";
import { cn } from "@/lib/format";

const TripMap = dynamic(() => import("@/components/TripMap").then((mod) => mod.TripMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-[430px] items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-500 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:text-slate-300 dark:ring-white/10">
      載入互動地圖中
    </div>
  )
});

export function ItineraryExplorer({ initialDayId = 2 }: { initialDayId?: number }) {
  const [selectedDayId, setSelectedDayId] = useState(initialDayId);
  const [routeMode, setRouteMode] = useState<"day" | "all">("day");
  const [focusPlaceId, setFocusPlaceId] = useState<string | undefined>();

  const selectedDay = useMemo(() => itineraryDays.find((day) => day.id === selectedDayId) ?? itineraryDays[0], [selectedDayId]);
  const weatherPlace = placeById.get(selectedDay.weatherPlaceId) ?? placeById.get(selectedDay.placeIds[0]);

  function selectDay(dayId: number) {
    setSelectedDayId(dayId);
    setFocusPlaceId(undefined);
    setRouteMode("day");
  }

  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-[12rem_minmax(0,1fr)_25rem] xl:grid-cols-[13rem_minmax(0,1fr)_28rem]">
      <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <DayTabs days={itineraryDays} selectedDayId={selectedDay.id} onSelect={selectDay} />
      </aside>

      <section className="min-w-0 space-y-5">
        <SearchPlaces
          onLocate={(dayId, placeId) => {
            setSelectedDayId(dayId);
            setFocusPlaceId(placeId);
            setRouteMode("day");
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <ItineraryTimeline day={selectedDay} />
          </motion.div>
        </AnimatePresence>
      </section>

      <aside className="min-w-0 space-y-5 lg:sticky lg:top-24 lg:self-start">
        <div className="min-w-0 rounded-2xl bg-white p-3 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
          <div className="mb-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setRouteMode("day");
                setFocusPlaceId(undefined);
              }}
              className={cn(
                "focus-ring inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-black transition",
                routeMode === "day" ? "bg-lake-900 text-white dark:bg-white dark:text-lake-900" : "bg-slate-50 text-slate-600 hover:bg-lake-50 dark:bg-white/8 dark:text-slate-200"
              )}
            >
              <MapPinned className="h-4 w-4" />
              今日路線
            </button>
            <button
              type="button"
              onClick={() => {
                setRouteMode("all");
                setFocusPlaceId(undefined);
              }}
              className={cn(
                "focus-ring inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-black transition",
                routeMode === "all" ? "bg-lake-900 text-white dark:bg-white dark:text-lake-900" : "bg-slate-50 text-slate-600 hover:bg-lake-50 dark:bg-white/8 dark:text-slate-200"
              )}
            >
              <Route className="h-4 w-4" />
              全行程
            </button>
          </div>
          <TripMap selectedDay={selectedDay} routeMode={routeMode} focusPlaceId={focusPlaceId} />
        </div>
        {weatherPlace ? <WeatherCard day={selectedDay} place={weatherPlace} /> : null}
      </aside>
    </div>
  );
}
