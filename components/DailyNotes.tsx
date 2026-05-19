"use client";

import { NotebookPen, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { ItineraryDay } from "@/types/trip";

interface DailyNoteState {
  diary: string;
  food: string;
  changes: string;
  shopping: string;
}

const labels = {
  title: "\u6bcf\u65e5\u7b46\u8a18 / \u65c5\u884c\u65e5\u8a18",
  intro: "\u9069\u5408\u5728\u65c5\u884c\u7576\u4e0b\u8a18\u9304\u5fc3\u5f97\u3001\u9910\u5ef3\u3001\u81e8\u6642\u6539\u52d5\u8207\u60f3\u88dc\u8cb7\u7684\u6771\u897f\u3002\u5167\u5bb9\u53ea\u6703\u5132\u5b58\u5728\u9019\u53f0\u88dd\u7f6e\u7684\u700f\u89bd\u5668\u3002",
  diary: "\u4eca\u65e5\u5fc3\u5f97",
  food: "\u9910\u5ef3 / \u5496\u5561",
  changes: "\u81e8\u6642\u6539\u52d5",
  shopping: "\u60f3\u88dc\u8cb7 / \u5099\u8a3b",
  saved: "\u5df2\u81ea\u52d5\u5132\u5b58\u5728\u9019\u53f0\u88dd\u7f6e",
  clear: "\u6e05\u7a7a\u4eca\u65e5\u7b46\u8a18",
  placeholderDiary: "\u4f8b\u5982\uff1a\u4eca\u5929\u5929\u6c23\u6bd4\u9810\u671f\u51b7\uff0cPilatus \u96f2\u6d77\u5f88\u7f8e...",
  placeholderFood: "\u4f8b\u5982\uff1a\u98ef\u5e97\u9910\u5ef3\u665a\u9910\u4e0d\u932f\uff0c\u5496\u5561\u5e97\u53ef\u653e\u4e0b\u6b21...",
  placeholderChanges: "\u4f8b\u5982\uff1a\u56e0\u98a8\u5927\u6539\u8d70\u5e02\u5340\u6563\u6b65...",
  placeholderShopping: "\u4f8b\u5982\uff1a\u88dc\u8cb7\u7d19\u5dfe\u3001\u6c34\u3001\u9632\u66ec..."
};

const emptyNote: DailyNoteState = {
  diary: "",
  food: "",
  changes: "",
  shopping: ""
};

function getStorageKey(dayId: number) {
  return `swiss-trip-daily-notes-day-${dayId}`;
}

export function DailyNotes({ day }: { day: ItineraryDay }) {
  const storageKey = useMemo(() => getStorageKey(day.id), [day.id]);
  const [note, setNote] = useState<DailyNoteState>(emptyNote);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(false);
    try {
      const saved = window.localStorage.getItem(storageKey);
      setNote(saved ? { ...emptyNote, ...(JSON.parse(saved) as Partial<DailyNoteState>) } : emptyNote);
    } catch {
      setNote(emptyNote);
    } finally {
      setHasLoaded(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!hasLoaded) return;
    window.localStorage.setItem(storageKey, JSON.stringify(note));
  }, [hasLoaded, note, storageKey]);

  function updateField(field: keyof DailyNoteState, value: string) {
    setNote((current) => ({ ...current, [field]: value }));
  }

  function clearNote() {
    setNote(emptyNote);
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
            <NotebookPen className="h-4 w-4" />
            {labels.title}
          </p>
          <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">
            Day {day.id} · {day.theme}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{labels.intro}</p>
        </div>
        <button
          type="button"
          onClick={clearNote}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-lake-50 px-4 py-2.5 text-sm font-black text-lake-900 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white"
        >
          <RotateCcw className="h-4 w-4" />
          {labels.clear}
        </button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <NoteArea label={labels.diary} value={note.diary} placeholder={labels.placeholderDiary} onChange={(value) => updateField("diary", value)} />
        <NoteArea label={labels.food} value={note.food} placeholder={labels.placeholderFood} onChange={(value) => updateField("food", value)} />
        <NoteArea label={labels.changes} value={note.changes} placeholder={labels.placeholderChanges} onChange={(value) => updateField("changes", value)} />
        <NoteArea label={labels.shopping} value={note.shopping} placeholder={labels.placeholderShopping} onChange={(value) => updateField("shopping", value)} />
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-300">{labels.saved}</p>
    </section>
  );
}

function NoteArea({ label, value, placeholder, onChange }: { label: string; value: string; placeholder: string; onChange: (value: string) => void }) {
  return (
    <label className="block rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
      <span className="text-sm font-black text-lake-900 dark:text-white">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={4}
        className="focus-ring mt-2 min-h-28 w-full resize-y rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-lake-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
      />
    </label>
  );
}
