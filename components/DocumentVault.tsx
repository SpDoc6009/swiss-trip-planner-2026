"use client";

import { CheckCircle2, FileText, Link as LinkIcon, Save } from "lucide-react";
import { useEffect, useState } from "react";

import { travelDocuments } from "@/data/travelTools";

type DocumentState = Record<string, { url: string; ready: boolean }>;

const labels = {
  title: "\u6587\u4ef6\u7968\u5238",
  subtitle: "\u4e0d\u5efa\u8b70\u628a\u654f\u611f PDF \u76f4\u63a5\u4e0a\u50b3\u5230\u516c\u958b\u7db2\u7ad9\uff0c\u9019\u88e1\u5148\u6536\u7d0d Google Drive\u3001iCloud\u3001Email \u6216\u76f8\u7c3f\u4f4d\u7f6e\u9023\u7d50\u3002",
  linkPlaceholder: "\u8cbc\u4e0a Drive / iCloud / Email \u9023\u7d50\u6216\u5099\u8a3b",
  saved: "\u5df2\u6e96\u5099",
  markReady: "\u6a19\u8a18\u5df2\u6e96\u5099",
  storage: "\u5efa\u8b70\u6536\u7d0d",
  open: "\u958b\u555f\u9023\u7d50"
};

export function DocumentVault() {
  const [state, setState] = useState<DocumentState>({});

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("swiss-trip-documents-v1");
      setState(saved ? (JSON.parse(saved) as DocumentState) : {});
    } catch {
      setState({});
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("swiss-trip-documents-v1", JSON.stringify(state));
  }, [state]);

  function updateItem(id: string, patch: Partial<DocumentState[string]>) {
    setState((current) => ({
      ...current,
      [id]: {
        url: current[id]?.url ?? "",
        ready: current[id]?.ready ?? false,
        ...patch
      }
    }));
  }

  const readyCount = travelDocuments.filter((item) => state[item.id]?.ready).length;

  return (
    <div className="space-y-5">
      <section className="rounded-2xl bg-lake-900 p-5 text-white shadow-soft">
        <p className="inline-flex items-center gap-2 text-sm font-black text-white/70">
          <FileText className="h-4 w-4" />
          {labels.title}
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight">{labels.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">{labels.subtitle}</p>
        <p className="mt-4 inline-flex rounded-2xl bg-white/12 px-4 py-2 text-sm font-black">
          {readyCount} / {travelDocuments.length} {labels.saved}
        </p>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        {travelDocuments.map((item) => {
          const itemState = state[item.id] ?? { url: "", ready: false };
          return (
            <article key={item.id} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black text-swiss-red">{item.date} · {item.category}</p>
                  <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.note}</p>
                </div>
                <button
                  type="button"
                  onClick={() => updateItem(item.id, { ready: !itemState.ready })}
                  className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-swiss-snow text-slate-400 ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:ring-white/10"
                  aria-label={labels.markReady}
                >
                  <CheckCircle2 className={itemState.ready ? "h-5 w-5 text-lake-700 dark:text-white" : "h-5 w-5"} />
                </button>
              </div>
              <p className="mt-4 rounded-2xl bg-lake-50 p-3 text-sm font-bold text-lake-900 dark:bg-white/8 dark:text-slate-200">
                {labels.storage}：{item.suggestedStorage}
              </p>
              <label className="mt-4 block">
                <span className="text-xs font-black text-slate-500 dark:text-slate-300">Link / Note</span>
                <input
                  value={itemState.url}
                  onChange={(event) => updateItem(item.id, { url: event.target.value })}
                  placeholder={labels.linkPlaceholder}
                  className="focus-ring mt-1 w-full rounded-2xl border border-slate-200 bg-swiss-snow px-3 py-2 text-sm font-bold text-lake-900 outline-none dark:border-white/10 dark:bg-lake-900/50 dark:text-white"
                />
              </label>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" onClick={() => updateItem(item.id, { ready: true })} className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-lake-900 px-4 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-lake-900">
                  <Save className="h-4 w-4" />
                  {labels.saved}
                </button>
                {itemState.url.startsWith("http") ? (
                  <a href={itemState.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-black text-lake-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white dark:ring-white/10">
                    <LinkIcon className="h-4 w-4" />
                    {labels.open}
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

