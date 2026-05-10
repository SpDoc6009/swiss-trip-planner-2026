import { AlertCircle, Cable, Car, Clock3, Footprints, Hotel, Plane, ShipWheel, Ticket, TrainFront, Utensils } from "lucide-react";

import { placeById } from "@/data/places";
import { cn, formatFullDate } from "@/lib/format";
import type { ItineraryDay, TransportMode } from "@/types/trip";

const transportIcons: Record<TransportMode, React.ComponentType<{ className?: string }>> = {
  flight: Plane,
  train: TrainFront,
  car: Car,
  walk: Footprints,
  cablecar: Cable,
  boat: ShipWheel,
  shuttle: TrainFront
};

export function ItineraryTimeline({ day }: { day: ItineraryDay }) {
  const hotel = day.hotelPlaceId ? placeById.get(day.hotelPlaceId) : undefined;

  return (
    <article className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black text-swiss-red">Day {day.id} · {formatFullDate(day.date)} · {day.weekday}</p>
          <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">{day.theme}</h2>
          <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-300">{day.region}</p>
        </div>
        {hotel ? (
          <div className="rounded-2xl bg-lake-50 p-4 text-sm dark:bg-white/8">
            <div className="flex items-center gap-2 font-black text-lake-900 dark:text-white">
              <Hotel className="h-4 w-4" />
              住宿
            </div>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{hotel.name}</p>
          </div>
        ) : null}
      </div>

      {day.flights?.length ? (
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {day.flights.map((flight) => (
            <div key={flight} className="rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700 ring-1 ring-slate-200 dark:bg-white/8 dark:text-slate-200 dark:ring-white/10">
              {flight}
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6 space-y-6">
        {day.timeline.map((group) => (
          <section key={group.period}>
            <h3 className="mb-3 inline-flex rounded-full bg-lake-900 px-3 py-1 text-xs font-black text-white dark:bg-white dark:text-lake-900">{group.period}</h3>
            <ol className="space-y-3">
              {group.items.map((item) => {
                const TransportIcon = item.transport ? transportIcons[item.transport.mode] : Clock3;
                return (
                  <li key={`${item.time}-${item.title}`} className="grid grid-cols-[4.5rem_1fr] gap-3 sm:grid-cols-[6rem_1fr]">
                    <time className="pt-3 text-xs font-black text-slate-500 dark:text-slate-300">{item.time}</time>
                    <div className="rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-lake-900 shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
                          <TransportIcon className="h-4 w-4" />
                        </span>
                        <div>
                          <h4 className="font-black text-lake-900 dark:text-white">{item.title}</h4>
                          {item.description ? <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p> : null}
                          {item.transport ? (
                            <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-300">
                              {[item.transport.from, item.transport.to].filter(Boolean).join(" → ")}
                              {item.transport.duration ? <span className={cn(item.transport.from || item.transport.to ? "ml-2" : "")}>{item.transport.duration}</span> : null}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      {day.alternatives?.map((alternative) => (
        <section key={alternative.label} className="mt-6 rounded-2xl bg-lake-50 p-4 dark:bg-white/8">
          <h3 className="font-black text-lake-900 dark:text-white">{alternative.label}</h3>
          <div className="mt-3 grid gap-2">
            {alternative.timeline.map((item) => (
              <div key={`${alternative.label}-${item.time}`} className="rounded-xl bg-white p-3 text-sm dark:bg-lake-900/60">
                <span className="font-black text-swiss-red">{item.time}</span>
                <span className="ml-2 font-bold text-slate-700 dark:text-slate-200">{item.title}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        <InfoList icon={Utensils} title="推薦餐廳" items={day.restaurants} />
        <InfoList icon={Ticket} title="預訂 / 票券" items={day.bookingReminders} />
        <InfoList icon={AlertCircle} title="注意事項" items={day.notes} />
      </div>
    </article>
  );
}

function InfoList({
  icon: Icon,
  title,
  items
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/8">
      <div className="flex items-center gap-2 font-black text-lake-900 dark:text-white">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
