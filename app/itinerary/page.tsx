import { ItineraryExplorer } from "@/components/ItineraryExplorer";
import { trip } from "@/data/itinerary";

export default function ItineraryPage() {
  return (
    <section className="min-h-screen bg-slate-100 py-8 dark:bg-[#071923]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-black text-swiss-red">互動行程</p>
          <h1 className="mt-2 text-3xl font-black text-lake-900 dark:text-white">{trip.title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            依 Day 切換時間軸、地圖、天氣與雙日圖文行程。手機版可直向閱讀，旅途中快速查看也不會被資訊塞滿。
          </p>
        </div>
        <ItineraryExplorer initialDayId={2} />
      </div>
    </section>
  );
}
