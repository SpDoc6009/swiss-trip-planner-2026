import { trip } from "@/data/itinerary";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-500 dark:border-white/10 dark:bg-lake-900 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:px-6 lg:px-8">
        <p className="font-bold text-lake-900 dark:text-white">{trip.title}</p>
        <p>資料為旅行規劃用途；交通、天氣、票價與營運時間請於出發前再次確認。</p>
      </div>
    </footer>
  );
}
