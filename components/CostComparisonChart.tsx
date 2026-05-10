"use client";

import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { costScenarios } from "@/data/costs";
import { formatNtd } from "@/lib/format";

const colors = ["#16566d", "#d52b1e", "#2b8da8", "#94a3b8", "#082f3d"];

export function CostComparisonChart() {
  const totals = costScenarios.map((scenario) => ({
    name: scenario.name.replace("Swiss ", ""),
    total: scenario.lineItems.reduce((sum, item) => sum + item.amountNtd, 0)
  }));

  const recommended = costScenarios.find((scenario) => scenario.id === "halfFareCard") ?? costScenarios[0];
  const composition = recommended.lineItems.map((item) => ({
    name: item.label,
    value: item.amountNtd
  }));

  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-2">
      <div className="h-80 min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/8">
        <h3 className="mb-4 font-black text-lake-900 dark:text-white">總交通成本比較</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={totals}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickFormatter={(value: number) => `${Math.round(value / 1000)}k`} tickLine={false} axisLine={false} />
            <Tooltip formatter={(value: number) => formatNtd(value)} />
            <Bar dataKey="total" radius={[12, 12, 0, 0]}>
              {totals.map((entry, index) => (
                <Cell key={entry.name} fill={index === 1 ? "#d52b1e" : "#16566d"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="h-80 min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/8">
        <h3 className="mb-4 font-black text-lake-900 dark:text-white">推薦方案成本組成</h3>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie data={composition} dataKey="value" nameKey="name" innerRadius={55} outerRadius={95} paddingAngle={3}>
              {composition.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => formatNtd(value)} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
