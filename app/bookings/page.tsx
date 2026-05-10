import { BookingChecklist } from "@/components/BookingChecklist";

export default function BookingsPage() {
  return (
    <section className="min-h-screen bg-slate-100 py-8 dark:bg-[#071923]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
          <p className="text-sm font-black text-swiss-red">預訂提醒</p>
          <h1 className="mt-2 text-3xl font-black text-lake-900 dark:text-white">把出發前要處理的事整理成可勾選清單</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            高山票券與停車建議接近出發日看天氣再確認，但租車與核心票券應提早鎖定。
          </p>
        </div>
        <BookingChecklist />
      </div>
    </section>
  );
}
