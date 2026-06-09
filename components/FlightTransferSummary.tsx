import { BadgeCheck, CalendarClock, Car, Clock3, Luggage, Plane } from "lucide-react";

import { flightTransferGroups, getFlightTransferGroupsByDay } from "@/data/flightTransfers";

const labels = {
  section: "\u822a\u73ed\u8207\u6a5f\u5834\u63a5\u9001",
  flight: "\u822a\u73ed",
  transfer: "\u6a5f\u5834\u63a5\u9001",
  reservation: "\u9810\u7d04\u55ae\u865f",
  pickup: "\u4e0a\u8eca",
  dropoff: "\u4e0b\u8eca",
  transit: "\u8f49\u6a5f",
  luggage: "\u884c\u674e",
  cabin: "\u8259\u7b49",
  duration: "\u98db\u884c\u6642\u9593"
};

export function FlightTransferSummary({ dayId, compact = false }: { dayId?: number; compact?: boolean }) {
  const groups = dayId ? getFlightTransferGroupsByDay(dayId) : flightTransferGroups;

  if (!groups.length) return null;

  return (
    <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
        <Plane className="h-4 w-4" />
        {labels.section}
      </p>
      <div className="mt-4 space-y-4">
        {groups.map((group) => (
          <article key={group.id} className="rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-lake-900 dark:text-white">{group.title}</h2>
                <p className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-300">
                  <CalendarClock className="h-4 w-4" />
                  {group.dateRange}
                </p>
              </div>
              <div className="rounded-2xl bg-white px-3 py-2 text-sm font-black text-lake-900 ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
                {labels.transit}: {group.transitNote}
              </div>
            </div>

            <div className={compact ? "mt-4 grid gap-3" : "mt-4 grid gap-3 xl:grid-cols-2"}>
              {group.segments.map((segment) => (
                <div key={segment.id} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <p className="inline-flex items-center gap-2 text-sm font-black text-lake-900 dark:text-white">
                      <Plane className="h-4 w-4" />
                      {labels.flight} {segment.flightNo}
                    </p>
                    <span className="rounded-full bg-lake-50 px-3 py-1 text-xs font-black text-lake-900 dark:bg-white/10 dark:text-white">{segment.cabin}</span>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <FlightPoint label={segment.departureDate} time={segment.departureTime} place={segment.from} />
                    <FlightPoint label={segment.arrivalDate} time={segment.arrivalTime} place={segment.to} />
                  </div>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-300">
                    <Clock3 className="h-4 w-4" />
                    {labels.duration}: {segment.duration} · {labels.cabin}: {segment.cabin}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              {group.transfers.map((transfer) => (
                <div key={transfer.id} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
                  <p className="inline-flex items-center gap-2 text-sm font-black text-lake-900 dark:text-white">
                    <Car className="h-4 w-4" />
                    {labels.transfer}
                  </p>
                  <p className="mt-2 text-sm font-black text-swiss-red">
                    {labels.reservation}: {transfer.reservationNo}
                  </p>
                  <p className="mt-2 text-sm font-bold text-lake-900 dark:text-white">{transfer.dateTime}</p>
                  <dl className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <div>
                      <dt className="font-black text-slate-500 dark:text-slate-300">{labels.pickup}</dt>
                      <dd>{transfer.pickup}</dd>
                    </div>
                    <div>
                      <dt className="font-black text-slate-500 dark:text-slate-300">{labels.dropoff}</dt>
                      <dd>{transfer.dropoff}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{transfer.note}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-lake-50 p-4 text-sm leading-6 text-lake-900 dark:bg-white/10 dark:text-slate-200">
                <p className="font-black">
                  <BadgeCheck className="mr-2 inline h-4 w-4" />
                  {labels.transit}
                </p>
                <p className="mt-2">{group.transitNote}</p>
                <p className="mt-4 font-black">
                  <Luggage className="mr-2 inline h-4 w-4" />
                  {labels.luggage}
                </p>
                <p className="mt-2">{group.luggageNote}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FlightPoint({ label, time, place }: { label: string; time: string; place: string }) {
  return (
    <div className="rounded-2xl bg-lake-50 p-3 dark:bg-white/10">
      <p className="text-xs font-black text-slate-500 dark:text-slate-300">{label}</p>
      <p className="mt-1 text-2xl font-black text-lake-900 dark:text-white">{time}</p>
      <p className="mt-1 text-sm font-bold leading-5 text-slate-600 dark:text-slate-300">{place}</p>
    </div>
  );
}
