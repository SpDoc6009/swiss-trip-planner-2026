import Link from "next/link";
import { BookOpen, CalendarCheck, CalendarClock, CircleAlert, MapPinned, ReceiptText, TicketCheck, WalletCards } from "lucide-react";

import { Hero } from "@/components/Hero";
import { ItineraryExplorer } from "@/components/ItineraryExplorer";
import { trip } from "@/data/itinerary";

const featureCards = [
  {
    href: "/itinerary",
    title: "\u6bcf\u65e5\u4e92\u52d5\u884c\u7a0b",
    description: "Day selector\u3001\u6642\u9593\u8ef8\u3001\u5730\u9ede\u641c\u5c0b\u3001\u5730\u5716\u5b9a\u4f4d\u8207\u5929\u6c23\u5361\u6574\u5408\u5728\u540c\u4e00\u500b\u5de5\u4f5c\u5340\u3002",
    icon: MapPinned
  },
  {
    href: "/today",
    title: "\u4eca\u65e5\u6a21\u5f0f",
    description: "\u65c5\u884c\u7576\u4e0b\u5feb\u901f\u67e5\u770b\u4eca\u5929 Day \u5e7e\u3001\u4e0b\u4e00\u500b\u884c\u7a0b\u3001\u4f4f\u5bbf\u3001\u5c0e\u822a\u8207\u51fa\u9580\u6aa2\u67e5\u6e05\u55ae\u3002",
    icon: CalendarClock
  },
  {
    href: "/bookings",
    title: "\u9810\u8a02\u63d0\u9192",
    description: "\u628a\u5fc5\u9808\u5148\u8a02\u3001\u5f37\u70c8\u5efa\u8b70\u5148\u8a02\u3001\u53ef\u73fe\u5834\u8cb7\u5206\u958b\u7ba1\u7406\uff0c\u65c5\u884c\u524d\u9010\u9805\u52fe\u9078\u3002",
    icon: TicketCheck
  },
  {
    href: "/costs",
    title: "\u4ea4\u901a\u8207\u7968\u5238\u8a66\u7b97",
    description: "\u7528\u53ef\u7de8\u8f2f\u8cc7\u6599\u6bd4\u8f03 Swiss Travel Pass \u8207 Half Fare Card \u7684 3 \u4eba\u7e3d\u6210\u672c\u3002",
    icon: WalletCards
  },
  {
    href: "/expenses",
    title: "\u65c5\u8cbb\u8a18\u5e33",
    description: "\u65c5\u884c\u4e2d\u5373\u6642\u8f38\u5165\u4ea4\u901a\u3001\u98f2\u98df\u3001\u4f4f\u5bbf\u8207\u96dc\u9805\u82b1\u8cbb\uff0c\u81ea\u52d5\u7d71\u8a08\u5206\u985e\u5c0f\u8a08\u8207\u7e3d\u984d\u3002",
    icon: ReceiptText
  },
  {
    href: "/travel-notes",
    title: "\u745e\u58eb\u65c5\u904a\u6ce8\u610f\u4e8b\u9805",
    description: "\u6574\u7406\u5929\u6c23\u3001\u7c3d\u8b49\u3001\u96fb\u58d3\u3001\u8ca8\u5e63\u30016 \u6708\u7a7f\u642d\u8207\u884c\u674e\u6e05\u55ae\uff0c\u51fa\u767c\u524d\u5feb\u901f\u6aa2\u67e5\u3002",
    icon: CircleAlert
  },
  {
    href: "/magazine",
    title: "\u65c5\u904a\u653b\u7565",
    description: "\u6536\u7d0d\u4f60\u7684\u96dc\u8a8c\u98a8\u683c\u653b\u7565\u5716\u6587\uff0c\u4ee5\u5927\u5716\u5361\u7247\u65b9\u5f0f\u9069\u5408\u624b\u6a5f\u6162\u6162\u95b1\u8b80\u3002",
    icon: BookOpen
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-swiss-snow py-12 dark:bg-lake-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="focus-ring group rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1 dark:bg-white/8 dark:ring-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lake-900 text-white transition group-hover:bg-swiss-red dark:bg-white dark:text-lake-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-black text-lake-900 dark:text-white">{card.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-12 dark:bg-[#071923]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-black text-swiss-red">
                <CalendarCheck className="h-4 w-4" />
                {"\u65c5\u884c\u4e2d\u6700\u5e38\u6253\u958b\u7684\u9801\u9762"}
              </p>
              <h2 className="mt-2 text-3xl font-black text-lake-900 dark:text-white">{trip.title}</h2>
            </div>
            <Link className="focus-ring rounded-2xl bg-lake-900 px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-lake-900" href="/itinerary">
              {"\u67e5\u770b\u5b8c\u6574\u884c\u7a0b"}
            </Link>
          </div>
          <ItineraryExplorer initialDayId={2} />
        </div>
      </section>
    </>
  );
}

