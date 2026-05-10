import { BadgeCheck, Car, CircleDollarSign, Ticket } from "lucide-react";

import { CostComparisonChart } from "@/components/CostComparisonChart";
import { costAssumptions, costScenarios } from "@/data/costs";
import { formatNtd } from "@/lib/format";

const kindLabels = {
  pass: "票券價格",
  train: "火車",
  mountain: "山岳鐵道 / 纜車",
  parking: "停車費",
  car: "租車費"
};

export function CostComparison() {
  const totals = costScenarios.map((scenario) => ({
    ...scenario,
    total: scenario.lineItems.reduce((sum, item) => sum + item.amountNtd, 0)
  }));
  const travelPass = totals.find((scenario) => scenario.id === "swissTravelPass");
  const halfFare = totals.find((scenario) => scenario.id === "halfFareCard");
  const diff = travelPass && halfFare ? travelPass.total - halfFare.total : 0;

  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black text-swiss-red">交通與票券試算</p>
            <h1 className="mt-2 text-3xl font-black text-lake-900 dark:text-white">Swiss Travel Pass vs Swiss Half Fare Card</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              以 {costAssumptions.travelers} 人、CHF 1 = NT${costAssumptions.currencyRate}、租車約 {formatNtd(costAssumptions.carRentalNtd)} / 車估算。中段以租車為主，因此本行程推薦 Swiss Half Fare Card。
            </p>
          </div>
          <div className="rounded-2xl bg-lake-900 p-4 text-white dark:bg-white dark:text-lake-900">
            <p className="text-xs font-black uppercase opacity-70">兩方案價差</p>
            <p className="mt-1 text-2xl font-black">{formatNtd(diff)}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {totals.map((scenario) => (
          <article
            key={scenario.id}
            className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1 dark:bg-white/8 dark:ring-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-lake-900 dark:text-white">{scenario.name}</h2>
                {scenario.recommendation ? (
                  <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-swiss-red px-3 py-1 text-xs font-black text-white">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {scenario.recommendation}
                  </p>
                ) : null}
              </div>
              <Ticket className="h-6 w-6 text-lake-700 dark:text-slate-200" />
            </div>

            <dl className="mt-5 space-y-3">
              {scenario.lineItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-lake-900/50">
                  <dt className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                    {item.kind === "car" ? <Car className="h-4 w-4" /> : <CircleDollarSign className="h-4 w-4" />}
                    {kindLabels[item.kind]}
                  </dt>
                  <dd className="font-black text-lake-900 dark:text-white">{formatNtd(item.amountNtd)}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-2xl bg-lake-50 p-4 dark:bg-white/8">
              <div className="flex items-center justify-between">
                <span className="font-black text-lake-900 dark:text-white">3 人總花費</span>
                <span className="text-xl font-black text-lake-900 dark:text-white">{formatNtd(scenario.total)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>個人平均</span>
                <span className="font-bold">{formatNtd(Math.round(scenario.total / costAssumptions.travelers))}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CostComparisonChart />

      <p className="rounded-2xl bg-lake-50 p-4 text-sm leading-6 text-lake-900 dark:bg-white/8 dark:text-slate-200">{costAssumptions.note}</p>
    </section>
  );
}
