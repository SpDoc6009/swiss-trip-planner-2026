"use client";

import { CarFront, CheckCircle2, Circle, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { MapActionButtons } from "@/components/MapActionButtons";
import { parkingTasks } from "@/data/travelTools";

type ParkingState = Record<string, { note: string; checked: Record<string, boolean> }>;

const labels = {
  title: "\u505c\u8eca\u8207\u53d6\u9084\u8eca\u52a9\u624b",
  subtitle: "\u628a\u81ea\u99d5\u65e5\u6700\u5bb9\u6613\u5fd8\u7684\u53d6\u8eca\u3001\u9084\u8eca\u3001\u505c\u8eca\u5834\u5c0e\u822a\u8207\u8eca\u4f4d\u7b46\u8a18\u653e\u5728\u540c\u4e00\u9801\u3002",
  parkingNote: "\u8eca\u4f4d\u7b46\u8a18",
  placeholder: "\u4f8b\u5982\uff1aB2 / Zone C / 142 \u865f\uff0c\u6216\u8cbc\u4e0a\u4ed8\u8cbb\u6a5f\u65c1\u908a\u7167\u7247\u5099\u8a3b",
  savedLocal: "\u5df2\u5132\u5b58\u5728\u9019\u53f0\u624b\u6a5f"
};

export function ParkingAssistant() {
  const [state, setState] = useState<ParkingState>({});

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("swiss-trip-parking-v1");
      setState(saved ? (JSON.parse(saved) as ParkingState) : {});
    } catch {
      setState({});
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("swiss-trip-parking-v1", JSON.stringify(state));
  }, [state]);

  function updateTask(taskId: string, patch: Partial<ParkingState[string]>) {
    setState((current) => ({
      ...current,
      [taskId]: {
        note: current[taskId]?.note ?? "",
        checked: current[taskId]?.checked ?? {},
        ...patch
      }
    }));
  }

  function toggleCheck(taskId: string, item: string) {
    const task = state[taskId] ?? { note: "", checked: {} };
    updateTask(taskId, {
      checked: {
        ...task.checked,
        [item]: !task.checked[item]
      }
    });
  }

  return (
    <div className="space-y-5">
      <section className="rounded-2xl bg-lake-900 p-5 text-white shadow-soft">
        <p className="inline-flex items-center gap-2 text-sm font-black text-white/70">
          <CarFront className="h-4 w-4" />
          {labels.title}
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight">{labels.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">{labels.subtitle}</p>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        {parkingTasks.map((task) => {
          const taskState = state[task.id] ?? { note: "", checked: {} };
          return (
            <article key={task.id} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
              <p className="text-xs font-black text-swiss-red">{task.date}</p>
              <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">{task.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{task.note}</p>

              <div className="mt-4 rounded-2xl bg-swiss-snow p-4 dark:bg-lake-900/50">
                <p className="inline-flex items-center gap-2 text-sm font-black text-lake-900 dark:text-white">
                  <MapPin className="h-4 w-4" />
                  {task.place.name}
                </p>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-300">{task.place.region}</p>
                <div className="mt-3">
                  <MapActionButtons place={task.place} />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {task.checklist.map((item) => {
                  const active = taskState.checked[item] ?? false;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleCheck(task.id, item)}
                      className="focus-ring flex w-full items-start gap-3 rounded-2xl border border-slate-200 bg-swiss-snow p-3 text-left text-sm font-bold leading-6 text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-lake-900/50 dark:text-slate-200"
                    >
                      {active ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lake-700 dark:text-white" /> : <Circle className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />}
                      {item}
                    </button>
                  );
                })}
              </div>

              <label className="mt-4 block">
                <span className="text-xs font-black text-slate-500 dark:text-slate-300">{labels.parkingNote}</span>
                <textarea
                  value={taskState.note}
                  onChange={(event) => updateTask(task.id, { note: event.target.value })}
                  placeholder={labels.placeholder}
                  rows={3}
                  className="focus-ring mt-1 w-full rounded-2xl border border-slate-200 bg-swiss-snow px-3 py-2 text-sm font-bold text-lake-900 outline-none dark:border-white/10 dark:bg-lake-900/50 dark:text-white"
                />
              </label>
              <p className="mt-2 text-xs font-bold text-slate-400">{labels.savedLocal}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

