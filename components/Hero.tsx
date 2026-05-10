import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Car, MapPinned, Ticket, Users } from "lucide-react";

import { trip } from "@/data/itinerary";

const highlights = [
  { label: "旅行天數", value: `11 天 / 瑞士當地 ${trip.localDays} 天`, icon: CalendarDays },
  { label: "人數", value: `${trip.travelers} 人`, icon: Users },
  { label: "交通策略", value: trip.transportStrategy, icon: Car },
  { label: "推薦票券", value: trip.recommendedPass, icon: Ticket }
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4.25rem)] overflow-hidden bg-lake-900 text-white">
      <Image
        src="/images/placeholder/swiss-hero.svg"
        alt="瑞士山湖風景佔位圖，可在 public/images/placeholder 替換為自己的旅遊照片"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lake-900/65 via-lake-900/34 to-lake-900/86" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4.25rem)] max-w-7xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/24 backdrop-blur">
            2026/06/18–2026/06/28
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">{trip.title}</h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/88 sm:text-xl">{trip.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/itinerary"
              className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-swiss-red px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <MapPinned className="h-4 w-4" />
              開始看行程
            </Link>
            <Link
              href="/costs"
              className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-white/14 px-5 py-3 text-sm font-black text-white ring-1 ring-white/25 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22"
            >
              <Ticket className="h-4 w-4" />
              票券試算
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="rounded-2xl bg-white/13 p-4 shadow-soft ring-1 ring-white/18 backdrop-blur-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lake-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white/66">{item.label}</p>
                    <p className="mt-1 text-sm font-black leading-5 text-white">{item.value}</p>
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
