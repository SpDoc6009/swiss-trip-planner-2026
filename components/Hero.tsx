import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Car, MapPinned, Ticket, Users } from "lucide-react";

import { trip } from "@/data/itinerary";

const heroText = {
  title: "2026 \u745e\u58eb\u6e56\u5149\u5c71\u8272\u81ea\u99d5\u65c5\u884c",
  subtitle: "Luzern\u30fbPilatus\u30fbZermatt\u30fbMatterhorn\u30fbGrindelwald\u30fbInterlaken\u30fbLauterbrunnen\u30fbZ\u00fcrich",
  date: "2026/06/18\u20132026/06/28",
  imageAlt: "\u745e\u58eb\u5c71\u6e56\u98a8\u666f\u4f54\u4f4d\u5716\uff0c\u53ef\u5728 public/images/placeholder \u66ff\u63db\u70ba\u81ea\u5df1\u7684\u65c5\u884c\u7167\u7247",
  itinerary: "\u958b\u59cb\u67e5\u770b\u884c\u7a0b",
  costs: "\u7968\u5238\u8a66\u7b97",
  transportStrategy: "\u524d\u6bb5\u706b\u8eca + \u4e2d\u6bb5\u79df\u8eca + \u5f8c\u6bb5\u706b\u8eca"
};

const highlights = [
  { label: "\u65c5\u884c\u5929\u6578", value: `11 \u5929 / \u745e\u58eb\u7576\u5730 ${trip.localDays} \u5929`, icon: CalendarDays },
  { label: "\u4eba\u6578", value: `${trip.travelers} \u4eba`, icon: Users },
  { label: "\u4ea4\u901a\u7b56\u7565", value: heroText.transportStrategy, icon: Car },
  { label: "\u63a8\u85a6\u7968\u5238", value: trip.recommendedPass, icon: Ticket }
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4.25rem)] overflow-hidden bg-lake-900 text-white">
      <Image src="/images/placeholder/swiss-hero.svg" alt={heroText.imageAlt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-lake-900/65 via-lake-900/34 to-lake-900/86" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4.25rem)] w-full max-w-7xl flex-col justify-end px-4 pb-8 pt-16 sm:px-6 sm:pb-10 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex max-w-full rounded-full bg-white/14 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/24 backdrop-blur">
            {heroText.date}
          </p>
          <h1 className="break-words text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">{heroText.title}</h1>
          <p className="mt-5 max-w-3xl break-words text-base font-medium leading-8 text-white/88 sm:text-xl">{heroText.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/itinerary"
              className="focus-ring inline-flex max-w-full items-center gap-2 rounded-2xl bg-swiss-red px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <MapPinned className="h-4 w-4 shrink-0" />
              {heroText.itinerary}
            </Link>
            <Link
              href="/costs"
              className="focus-ring inline-flex max-w-full items-center gap-2 rounded-2xl bg-white/14 px-5 py-3 text-sm font-black text-white ring-1 ring-white/25 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22"
            >
              <Ticket className="h-4 w-4 shrink-0" />
              {heroText.costs}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="min-w-0 rounded-2xl bg-white/13 p-4 shadow-soft ring-1 ring-white/18 backdrop-blur-lg">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-lake-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-white/66">{item.label}</p>
                    <p className="mt-1 break-words text-sm font-black leading-5 text-white">{item.value}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
