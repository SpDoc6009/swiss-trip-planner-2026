"use client";

import { Calculator, RefreshCcw } from "lucide-react";
import { useMemo, useState } from "react";

import { formatNtd } from "@/lib/format";

const labels = {
  title: "CHF \u5feb\u901f\u63db\u7b97",
  intro: "\u65c5\u884c\u4e2d\u8cb7\u7968\u3001\u5403\u98ef\u6216\u505c\u8eca\u6642\uff0c\u53ef\u4ee5\u5feb\u901f\u628a\u745e\u58eb\u6cd5\u90ce\u63db\u7b97\u6210\u65b0\u53f0\u5e63\u3002",
  rate: "\u532f\u7387",
  chf: "CHF \u91d1\u984d",
  twd: "NTD \u91d1\u984d",
  reset: "\u56de\u5230\u9810\u8a2d\u532f\u7387",
  perPerson: "3 \u4eba\u5e73\u5747",
  rateHint: "CHF 1 = NT$",
  example: "\u9810\u8a2d\u4f9d\u884c\u7a0b\u8a66\u7b97\uff1aCHF 1 = NT$41"
};

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatChf(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 2
  }).format(value);
}

export function CurrencyConverter() {
  const [rate, setRate] = useState("41");
  const [chf, setChf] = useState("100");
  const [twd, setTwd] = useState(String(100 * 41));

  const summary = useMemo(() => {
    const rateValue = toNumber(rate) || 41;
    const chfValue = toNumber(chf);
    const twdValue = Math.round(chfValue * rateValue);

    return {
      chfValue,
      twdValue,
      perPerson: Math.round(twdValue / 3)
    };
  }, [chf, rate]);

  function updateRate(value: string) {
    setRate(value);
    const rateValue = toNumber(value);
    if (rateValue > 0) setTwd(String(Math.round(toNumber(chf) * rateValue)));
  }

  function updateChf(value: string) {
    setChf(value);
    setTwd(String(Math.round(toNumber(value) * (toNumber(rate) || 41))));
  }

  function updateTwd(value: string) {
    setTwd(value);
    const rateValue = toNumber(rate) || 41;
    setChf(rateValue > 0 ? (toNumber(value) / rateValue).toFixed(2) : "0");
  }

  function resetRate() {
    setRate("41");
    setTwd(String(Math.round(toNumber(chf) * 41)));
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
            <Calculator className="h-4 w-4" />
            {labels.title}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{labels.intro}</p>
        </div>
        <button
          type="button"
          onClick={resetRate}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-lake-50 px-4 py-2.5 text-sm font-black text-lake-900 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white"
        >
          <RefreshCcw className="h-4 w-4" />
          {labels.reset}
        </button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <label className="block rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
          <span className="text-xs font-black uppercase text-slate-500 dark:text-slate-300">{labels.rate}</span>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm font-black text-lake-900 dark:text-white">{labels.rateHint}</span>
            <input
              value={rate}
              onChange={(event) => updateRate(event.target.value)}
              type="number"
              min="0"
              step="0.01"
              inputMode="decimal"
              className="focus-ring min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-base font-black text-lake-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
          </div>
          <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-300">{labels.example}</p>
        </label>

        <label className="block rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
          <span className="text-xs font-black uppercase text-slate-500 dark:text-slate-300">{labels.chf}</span>
          <input
            value={chf}
            onChange={(event) => updateChf(event.target.value)}
            type="number"
            min="0"
            step="0.01"
            inputMode="decimal"
            className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-base font-black text-lake-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
          />
          <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-300">{formatChf(summary.chfValue)}</p>
        </label>

        <label className="block rounded-2xl border border-lake-200 bg-lake-50 p-4 dark:border-white/10 dark:bg-white/10">
          <span className="text-xs font-black uppercase text-slate-500 dark:text-slate-300">{labels.twd}</span>
          <input
            value={twd}
            onChange={(event) => updateTwd(event.target.value)}
            type="number"
            min="0"
            step="1"
            inputMode="numeric"
            className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-base font-black text-lake-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
          />
          <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-300">
            {labels.perPerson}: {formatNtd(summary.perPerson)}
          </p>
        </label>
      </div>
    </section>
  );
}
