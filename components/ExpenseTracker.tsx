"use client";

import type { ComponentType } from "react";
import { Car, Hotel, Plus, ReceiptText, Trash2, Utensils, WalletCards } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { cn, formatNtd } from "@/lib/format";

type ExpenseCategoryId = "transport" | "food" | "lodging" | "misc";

interface ExpenseItem {
  id: string;
  name: string;
  amount: string;
}

interface ExpenseCategory {
  id: ExpenseCategoryId;
  label: string;
  hint: string;
  color: string;
  icon: ComponentType<{ className?: string }>;
}

type ExpenseState = Record<ExpenseCategoryId, ExpenseItem[]>;

const storageKey = "swiss-trip-expenses-v1";

const labels = {
  pageTitle: "\u65c5\u8cbb\u8a18\u5e33",
  eyebrow: "\u65c5\u884c\u4e2d\u5373\u6642\u7d71\u8a08\u82b1\u8cbb",
  intro:
    "\u4f9d\u4ea4\u901a\u3001\u98f2\u98df\u3001\u4f4f\u5bbf\u3001\u5176\u4ed6\u96dc\u9805\u5206\u985e\u8a18\u9304\uff0c\u6bcf\u7b46\u53ea\u9700\u8981\u8f38\u5165\u540d\u76ee\u8207\u8cbb\u7528\u3002\u91d1\u984d\u4ee5\u65b0\u53f0\u5e63\u4f30\u7b97\uff0c\u53ef\u7528\u4f86\u5feb\u901f\u638c\u63e1\u4e09\u4eba\u65c5\u884c\u7e3d\u652f\u51fa\u3002",
  total: "\u76ee\u524d\u7e3d\u82b1\u8cbb",
  subtotal: "\u5c0f\u8a08",
  itemName: "\u540d\u76ee",
  amount: "\u8cbb\u7528",
  placeholder: "\u4f8b\u5982\uff1aZ\u00fcrich HB \u5230 Luzern \u706b\u8eca",
  addOne: "\u65b0\u589e\u4e00\u7b46",
  reset: "\u6e05\u7a7a\u5168\u90e8\u8cbb\u7528",
  remove: "\u522a\u9664",
  analysisTitle: "\u5373\u6642\u7d71\u8a08\u5206\u6790",
  analysisIntro: "\u4f9d\u76ee\u524d\u8f38\u5165\u7684\u8cbb\u7528\u81ea\u52d5\u66f4\u65b0\uff0c\u65b9\u4fbf\u65c5\u884c\u4e2d\u5feb\u901f\u770b\u51fa\u4e3b\u8981\u652f\u51fa\u3002",
  categoryShare: "\u5206\u985e\u5360\u6bd4",
  categoryTotal: "\u5206\u985e\u7e3d\u984d",
  perPerson: "\u4eba\u5747\u82b1\u8cbb",
  topExpense: "\u6700\u9ad8\u652f\u51fa",
  noExpenses: "\u5c1a\u672a\u8f38\u5165\u8cbb\u7528",
  emptyChart: "\u958b\u59cb\u8f38\u5165\u8cbb\u7528\u5f8c\uff0c\u5716\u8868\u6703\u81ea\u52d5\u51fa\u73fe\u3002"
};

const categories: ExpenseCategory[] = [
  {
    id: "transport",
    label: "\u4ea4\u901a",
    hint: "\u706b\u8eca\u3001\u7e9c\u8eca\u3001\u79df\u8eca\u3001\u6cb9\u9322\u3001\u505c\u8eca\u3001\u8a08\u7a0b\u8eca",
    color: "#16566d",
    icon: Car
  },
  {
    id: "food",
    label: "\u98f2\u98df",
    hint: "\u65e9\u9910\u3001\u5496\u5561\u3001\u5348\u9910\u3001\u665a\u9910\u3001\u8d85\u5e02\u88dc\u7d66",
    color: "#d52b1e",
    icon: Utensils
  },
  {
    id: "lodging",
    label: "\u4f4f\u5bbf",
    hint: "\u98ef\u5e97\u623f\u8cbb\u3001\u57ce\u5e02\u7a05\u3001\u52a0\u8cfc\u65e9\u9910",
    color: "#64748b",
    icon: Hotel
  },
  {
    id: "misc",
    label: "\u5176\u4ed6\u96dc\u9805",
    hint: "\u9580\u7968\u3001\u7d00\u5ff5\u54c1\u3001\u7db2\u5361\u3001\u6d17\u8863\u3001\u81e8\u6642\u7528\u54c1",
    color: "#2b8da8",
    icon: WalletCards
  }
];

function createItem(id: string): ExpenseItem {
  return {
    id,
    name: "",
    amount: ""
  };
}

function createInitialState(): ExpenseState {
  return {
    transport: [createItem("transport-initial")],
    food: [createItem("food-initial")],
    lodging: [createItem("lodging-initial")],
    misc: [createItem("misc-initial")]
  };
}

function createNewItem(categoryId: ExpenseCategoryId): ExpenseItem {
  const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${categoryId}-${Date.now()}`;
  return createItem(id);
}

function parseAmount(amount: string) {
  const parsed = Number(amount);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function formatChartValue(value: number | string) {
  const numericValue = typeof value === "number" ? value : Number(value);
  return formatNtd(Number.isFinite(numericValue) ? numericValue : 0);
}

export function ExpenseTracker() {
  const [expenses, setExpenses] = useState<ExpenseState>(() => createInitialState());
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<ExpenseState>;
        setExpenses({ ...createInitialState(), ...parsed });
      }
    } catch {
      setExpenses(createInitialState());
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    window.localStorage.setItem(storageKey, JSON.stringify(expenses));
  }, [expenses, hasLoaded]);

  const totals = useMemo(() => {
    const categoryTotals = categories.map((category) => {
      const total = expenses[category.id].reduce((sum, item) => sum + parseAmount(item.amount), 0);
      return { ...category, total };
    });

    return {
      categoryTotals,
      grandTotal: categoryTotals.reduce((sum, category) => sum + category.total, 0)
    };
  }, [expenses]);

  const analysis = useMemo(() => {
    const chartData = totals.categoryTotals.map((category) => ({
      id: category.id,
      name: category.label,
      value: category.total,
      color: category.color,
      percent: totals.grandTotal > 0 ? Math.round((category.total / totals.grandTotal) * 100) : 0
    }));
    const topCategory = [...totals.categoryTotals].sort((a, b) => b.total - a.total)[0];

    return {
      chartData,
      topCategory,
      perPerson: Math.round(totals.grandTotal / 3)
    };
  }, [totals]);

  function updateItem(categoryId: ExpenseCategoryId, itemId: string, field: "name" | "amount", value: string) {
    setExpenses((current) => ({
      ...current,
      [categoryId]: current[categoryId].map((item) => (item.id === itemId ? { ...item, [field]: value } : item))
    }));
  }

  function addItem(categoryId: ExpenseCategoryId) {
    setExpenses((current) => ({
      ...current,
      [categoryId]: [...current[categoryId], createNewItem(categoryId)]
    }));
  }

  function removeItem(categoryId: ExpenseCategoryId, itemId: string) {
    setExpenses((current) => ({
      ...current,
      [categoryId]: current[categoryId].length === 1 ? [createItem(`${categoryId}-initial`)] : current[categoryId].filter((item) => item.id !== itemId)
    }));
  }

  function resetAll() {
    setExpenses(createInitialState());
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
              <ReceiptText className="h-4 w-4" />
              {labels.pageTitle}
            </p>
            <h1 className="mt-2 text-3xl font-black text-lake-900 dark:text-white">{labels.eyebrow}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">{labels.intro}</p>
          </div>
          <div className="rounded-2xl bg-lake-900 p-5 text-white dark:bg-white dark:text-lake-900">
            <p className="text-xs font-black uppercase opacity-70">{labels.total}</p>
            <p className="mt-1 text-3xl font-black">{formatNtd(totals.grandTotal)}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {totals.categoryTotals.map((category) => {
            const Icon = category.icon;
            const active = category.total > 0;
            return (
              <article
                key={category.id}
                className={cn(
                  "rounded-2xl border p-4 transition hover:-translate-y-0.5",
                  active ? "border-lake-500 bg-lake-50 dark:border-white/30 dark:bg-white/12" : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-lake-900/50"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lake-900 shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-right text-lg font-black text-lake-900 dark:text-white">{formatNtd(category.total)}</p>
                </div>
                <p className="mt-3 text-sm font-black text-lake-900 dark:text-white">{category.label}</p>
              </article>
            );
          })}
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const subtotal = totals.categoryTotals.find((item) => item.id === category.id)?.total ?? 0;
          return (
            <section key={category.id} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lake-900 text-white dark:bg-white dark:text-lake-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-xl font-black text-lake-900 dark:text-white">{category.label}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-300">{category.hint}</p>
                  </div>
                </div>
                <div className="shrink-0 rounded-2xl bg-lake-50 px-4 py-3 text-right dark:bg-white/8">
                  <p className="text-xs font-black uppercase text-slate-400">{labels.subtotal}</p>
                  <p className="font-black text-lake-900 dark:text-white">{formatNtd(subtotal)}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {expenses[category.id].map((item, index) => (
                  <div
                    key={item.id}
                    className="grid gap-3 rounded-2xl border border-slate-200 bg-swiss-snow p-3 dark:border-white/10 dark:bg-lake-900/50 sm:grid-cols-[minmax(0,1fr)_9rem_auto]"
                  >
                    <label className="block min-w-0">
                      <span className="text-xs font-black text-slate-500 dark:text-slate-300">
                        {labels.itemName} {index + 1}
                      </span>
                      <input
                        value={item.name}
                        onChange={(event) => updateItem(category.id, item.id, "name", event.target.value)}
                        placeholder={labels.placeholder}
                        className="focus-ring mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-lake-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-black text-slate-500 dark:text-slate-300">{labels.amount}</span>
                      <input
                        value={item.amount}
                        onChange={(event) => updateItem(category.id, item.id, "amount", event.target.value)}
                        inputMode="numeric"
                        type="number"
                        min="0"
                        placeholder="0"
                        className="focus-ring mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-lake-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => removeItem(category.id, item.id)}
                      className="focus-ring flex h-10 w-10 items-center justify-center self-end rounded-2xl bg-white text-slate-500 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-swiss-red dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
                      aria-label={`${labels.remove} ${category.label} ${index + 1}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => addItem(category.id)}
                className="focus-ring mt-4 inline-flex items-center gap-2 rounded-2xl bg-lake-900 px-4 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-lake-900"
              >
                <Plus className="h-4 w-4" />
                {labels.addOne}
              </button>
            </section>
          );
        })}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={resetAll}
          className="focus-ring rounded-2xl bg-white px-4 py-2.5 text-sm font-black text-swiss-red shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/8 dark:ring-white/10"
        >
          {labels.reset}
        </button>
      </div>

      <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black text-swiss-red">{labels.analysisTitle}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{labels.analysisIntro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <SummaryStat label={labels.total} value={formatNtd(totals.grandTotal)} />
            <SummaryStat label={labels.perPerson} value={formatNtd(analysis.perPerson)} />
            <SummaryStat label={labels.topExpense} value={analysis.topCategory.total > 0 ? analysis.topCategory.label : labels.noExpenses} />
          </div>
        </div>

        {totals.grandTotal > 0 ? (
          <div className="mt-6 grid gap-5 xl:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
              <h2 className="text-lg font-black text-lake-900 dark:text-white">{labels.categoryShare}</h2>
              <div className="mt-4 h-72 min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={analysis.chartData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={96} paddingAngle={3}>
                      {analysis.chartData.map((entry) => (
                        <Cell key={entry.id} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatChartValue(value as number | string), labels.amount]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {analysis.chartData.map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between gap-3 rounded-2xl bg-white px-3 py-2 text-sm dark:bg-white/8">
                    <span className="flex min-w-0 items-center gap-2 font-bold text-slate-600 dark:text-slate-300">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
                      {entry.name}
                    </span>
                    <span className="font-black text-lake-900 dark:text-white">{entry.percent}%</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
              <h2 className="text-lg font-black text-lake-900 dark:text-white">{labels.categoryTotal}</h2>
              <div className="mt-4 h-72 min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analysis.chartData} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${Math.round(Number(value) / 1000)}k`} width={42} />
                    <Tooltip formatter={(value) => [formatChartValue(value as number | string), labels.amount]} />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {analysis.chartData.map((entry) => (
                        <Cell key={entry.id} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-swiss-snow p-8 text-center dark:border-white/20 dark:bg-lake-900/50">
            <p className="font-black text-lake-900 dark:text-white">{labels.noExpenses}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{labels.emptyChart}</p>
          </div>
        )}
      </section>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-lake-50 px-4 py-3 text-right dark:bg-white/8">
      <p className="text-xs font-black uppercase text-slate-400">{label}</p>
      <p className="mt-1 text-base font-black text-lake-900 dark:text-white">{value}</p>
    </div>
  );
}
