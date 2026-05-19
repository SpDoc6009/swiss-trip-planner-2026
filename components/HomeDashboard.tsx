import Link from "next/link";
import type { ComponentType } from "react";
import { BookOpen, CalendarClock, CarFront, ChevronRight, CloudSun, FileText, Hotel, MapPinned, Navigation, ReceiptText, ShieldAlert, TicketCheck, WalletCards } from "lucide-react";

import { MapActionButtons } from "@/components/MapActionButtons";
import { itineraryDays } from "@/data/itinerary";
import { placeById } from "@/data/places";
import { formatFullDate } from "@/lib/format";

const labels = {
  title: "\u590f\u5b63\u7684\u745e\u58eb\u963f\u723e\u5351\u65af\u81ea\u99d5\u904a",
  subtitle: "2026\u5e746\u6708. \u5b8f\u6069\u65c5\u884c\u793e\u51fa\u54c1",
  today: "\u4eca\u65e5\u6982\u89bd",
  countdownPrefix: "\u8ddd\u96e2\u51fa\u767c\u9084\u6709",
  days: "\u5929",
  inTrip: "\u4eca\u5929\u7684\u884c\u7a0b",
  ended: "\u65c5\u7a0b\u5df2\u7d50\u675f\uff0c\u986f\u793a\u56de\u7a0b\u6574\u7406",
  next: "\u4e0b\u4e00\u500b\u91cd\u9ede",
  hotel: "\u4eca\u665a\u4f4f\u5bbf",
  openToday: "\u6253\u958b\u4eca\u65e5\u6a21\u5f0f",
  openItinerary: "\u67e5\u770b\u5b8c\u6574\u884c\u7a0b",
  quickTools: "\u5e38\u7528\u5de5\u5177",
  allFeatures: "\u5168\u90e8\u529f\u80fd",
  offlineReady: "\u96e2\u7dda\u53ef\u7528\u5df2\u555f\u7528",
  offlineText: "\u5df2\u5feb\u53d6\u4eca\u65e5\u3001\u884c\u7a0b\u3001\u6587\u4ef6\u3001\u7dca\u6025\u548c\u505c\u8eca\u9801\u9762\uff1b\u5716\u7247\u8207 Next \u975c\u614b\u8cc7\u6e90\u6703\u5728\u4f7f\u7528\u5f8c\u81ea\u52d5\u5feb\u53d6\u3002"
};

const quickTools = [
  { href: "/today", label: "\u4eca\u65e5\u6a21\u5f0f", description: "\u4e0b\u4e00\u6bb5\u884c\u7a0b\u3001\u4f4f\u5bbf\u3001\u5c0e\u822a\u8207\u6aa2\u67e5\u6e05\u55ae", icon: CalendarClock },
  { href: "/documents", label: "\u6587\u4ef6\u7968\u5238", description: "\u6a5f\u7968\u3001\u98ef\u5e97\u3001\u79df\u8eca\u8207\u5c71\u5340\u7968\u5238\u9023\u7d50", icon: FileText },
  { href: "/emergency", label: "\u7dca\u6025\u8cc7\u8a0a", description: "\u745e\u58eb\u6025\u96e3\u96fb\u8a71\u8207\u65c5\u5916\u5354\u52a9", icon: ShieldAlert },
  { href: "/parking", label: "\u505c\u8eca\u52a9\u624b", description: "\u53d6\u9084\u8eca\u3001\u505c\u8eca\u5c0e\u822a\u8207\u8eca\u4f4d\u7b46\u8a18", icon: CarFront }
];

const featureCards = [
  { href: "/itinerary", label: "\u4e92\u52d5\u884c\u7a0b", icon: MapPinned },
  { href: "/bookings", label: "\u9810\u8a02\u63d0\u9192", icon: TicketCheck },
  { href: "/expenses", label: "\u65c5\u8cbb\u8a18\u5e33", icon: ReceiptText },
  { href: "/costs", label: "\u7968\u5238\u8a66\u7b97", icon: WalletCards },
  { href: "/travel-notes", label: "\u6ce8\u610f\u4e8b\u9805", icon: CloudSun },
  { href: "/magazine", label: "\u65c5\u904a\u653b\u7565", icon: BookOpen },
  { href: "/today", label: "\u4eca\u65e5\u6a21\u5f0f", icon: CalendarClock },
  { href: "/parking", label: "\u505c\u8eca\u52a9\u624b", icon: CarFront },
  { href: "/documents", label: "\u6587\u4ef6\u7968\u5238", icon: FileText },
  { href: "/emergency", label: "\u7dca\u6025\u8cc7\u8a0a", icon: ShieldAlert }
];

export function HomeDashboard() {
  const todayState = getTodayState();
  const day = todayState.day;
  const hotel = day.hotelPlaceId ? placeById.get(day.hotelPlaceId) : undefined;
  const firstTimelineItem = day.timeline.flatMap((group) => group.items)[0];
  const firstPlace = day.placeIds.map((id) => placeById.get(id)).find(Boolean);

  return (
    <main className="bg-slate-100 dark:bg-[#071923]">
      <section className="bg-lake-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:px-8">
          <div>
            <p className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-black text-white/75 ring-1 ring-white/18">{labels.subtitle}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{labels.title}</h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">{labels.offlineText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/today" className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-swiss-red px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">
                <CalendarClock className="h-4 w-4" />
                {labels.openToday}
              </Link>
              <Link href="/itinerary" className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-white/12 px-5 py-3 text-sm font-black text-white ring-1 ring-white/20 transition hover:-translate-y-0.5">
                <MapPinned className="h-4 w-4" />
                {labels.openItinerary}
              </Link>
            </div>
          </div>

          <article className="rounded-2xl bg-white p-5 text-lake-900 shadow-soft">
            <p className="text-sm font-black text-swiss-red">{labels.today}</p>
            <p className="mt-2 text-sm font-bold text-slate-500">{todayState.label}</p>
            <h2 className="mt-3 text-3xl font-black">Day {day.id}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{formatFullDate(day.date)} · {day.region}</p>
            <p className="mt-4 rounded-2xl bg-lake-50 p-3 text-sm font-bold leading-6">{day.theme}</p>
            {firstPlace ? (
              <div className="mt-4">
                <MapActionButtons place={firstPlace} />
              </div>
            ) : null}
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:px-8">
        <div className="space-y-5">
          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="text-sm font-black text-swiss-red">{labels.next}</p>
            {firstTimelineItem ? (
              <div className="mt-4 rounded-2xl bg-swiss-snow p-4 dark:bg-lake-900/50">
                <p className="text-xs font-black text-slate-500 dark:text-slate-300">{firstTimelineItem.time}</p>
                <h2 className="mt-1 text-2xl font-black text-lake-900 dark:text-white">{firstTimelineItem.title}</h2>
                {firstTimelineItem.description ? <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{firstTimelineItem.description}</p> : null}
              </div>
            ) : null}
          </section>

          <section>
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-black text-swiss-red">{labels.quickTools}</p>
                <h2 className="mt-1 text-2xl font-black text-lake-900 dark:text-white">{labels.quickTools}</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickTools.map((tool) => (
                <DashboardTool key={tool.href} {...tool} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-5">
          {hotel ? (
            <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
              <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
                <Hotel className="h-4 w-4" />
                {labels.hotel}
              </p>
              <h2 className="mt-2 text-xl font-black text-lake-900 dark:text-white">{hotel.name}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{hotel.region}</p>
              <div className="mt-4">
                <MapActionButtons place={hotel} />
              </div>
            </section>
          ) : null}

          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
              <Navigation className="h-4 w-4" />
              {labels.offlineReady}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{labels.offlineText}</p>
          </section>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-black text-swiss-red">{labels.allFeatures}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {featureCards.map((feature) => (
            <DashboardFeature key={feature.href} {...feature} />
          ))}
        </div>
      </section>
    </main>
  );
}

function DashboardTool({ href, label, description, icon: Icon }: { href: string; label: string; description: string; icon: ComponentType<{ className?: string }> }) {
  return (
    <Link href={href} className="focus-ring group rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1 dark:bg-white/8 dark:ring-white/10">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lake-900 text-white transition group-hover:bg-swiss-red dark:bg-white dark:text-lake-900">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-black text-lake-900 dark:text-white">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </Link>
  );
}

function DashboardFeature({ href, label, icon: Icon }: { href: string; label: string; icon: ComponentType<{ className?: string }> }) {
  return (
    <Link href={href} className="focus-ring flex items-center justify-between rounded-2xl bg-white p-4 text-sm font-black text-lake-900 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/8 dark:text-white dark:ring-white/10">
      <span className="inline-flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {label}
      </span>
      <ChevronRight className="h-4 w-4 text-slate-400" />
    </Link>
  );
}

function getTodayState() {
  const today = toDateKey(new Date());
  const exactDay = itineraryDays.find((day) => day.date === today);
  if (exactDay) {
    return { day: exactDay, label: labels.inTrip };
  }

  const firstDay = itineraryDays[0];
  const lastDay = itineraryDays[itineraryDays.length - 1];

  if (today < firstDay.date) {
    const remaining = Math.max(0, differenceInDays(firstDay.date, today));
    return { day: firstDay, label: `${labels.countdownPrefix} ${remaining} ${labels.days}` };
  }

  if (today > lastDay.date) {
    return { day: lastDay, label: labels.ended };
  }

  return { day: firstDay, label: labels.today };
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
