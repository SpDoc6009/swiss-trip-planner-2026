"use client";

import { Copy, ExternalLink, Phone, ShieldAlert } from "lucide-react";
import { useState } from "react";

import { emergencyContacts, type EmergencyContact } from "@/data/travelTools";
import { cn } from "@/lib/format";

const labels = {
  title: "\u7dca\u6025\u8cc7\u8a0a",
  subtitle: "\u65c5\u9014\u4e2d\u9047\u5230\u72c0\u6cc1\u6642\uff0c\u5148\u7528\u9019\u9801\u5feb\u901f\u627e\u5230\u53ef\u64a5\u6253\u6216\u53ef\u8907\u88fd\u7684\u806f\u7d61\u8cc7\u8a0a\u3002",
  call: "\u64a5\u6253",
  copy: "\u8907\u88fd",
  copied: "\u5df2\u8907\u88fd",
  open: "\u958b\u555f\u5b98\u65b9\u8cc7\u8a0a",
  userNote: "\u51fa\u767c\u524d\u5efa\u8b70\u628a\u4fdd\u96aa\u516c\u53f8\u3001\u767c\u5361\u9280\u884c\u548c\u540c\u884c\u8005\u96fb\u8a71\u88dc\u5728\u624b\u6a5f\u5099\u5fd8\u9304\uff0c\u7db2\u8def\u4e0d\u7a69\u6642\u4e5f\u627e\u5f97\u5230\u3002"
};

const levelStyles: Record<EmergencyContact["level"], string> = {
  critical: "border-swiss-red bg-red-50 dark:border-red-300/60 dark:bg-red-500/10",
  important: "border-lake-500 bg-lake-50 dark:border-white/30 dark:bg-white/10",
  normal: "border-slate-200 bg-swiss-snow dark:border-white/10 dark:bg-lake-900/50"
};

export function EmergencyPanel() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyText(contact: EmergencyContact) {
    const text = [contact.title, contact.phone, contact.url, contact.note].filter(Boolean).join("\n");
    await navigator.clipboard.writeText(text);
    setCopiedId(contact.id);
    window.setTimeout(() => setCopiedId(null), 1600);
  }

  return (
    <div className="space-y-5">
      <section className="rounded-2xl bg-lake-900 p-5 text-white shadow-soft">
        <p className="inline-flex items-center gap-2 text-sm font-black text-white/70">
          <ShieldAlert className="h-4 w-4" />
          {labels.title}
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight">{labels.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">{labels.subtitle}</p>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        {emergencyContacts.map((contact) => (
          <article key={contact.id} className={cn("rounded-2xl border p-5 shadow-soft", levelStyles[contact.level])}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-lake-900 dark:text-white">{contact.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{contact.description}</p>
              </div>
              {contact.phone ? <p className="shrink-0 rounded-2xl bg-white px-4 py-2 text-xl font-black text-lake-900 shadow-sm dark:bg-white/10 dark:text-white">{contact.phone}</p> : null}
            </div>
            <p className="mt-4 rounded-2xl bg-white/70 p-3 text-sm leading-6 text-slate-600 dark:bg-white/8 dark:text-slate-300">{contact.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {contact.phone ? (
                <a href={`tel:${contact.phone}`} className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-lake-900 px-4 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-lake-900">
                  <Phone className="h-4 w-4" />
                  {labels.call}
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => void copyText(contact)}
                className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-black text-lake-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white dark:ring-white/10"
              >
                <Copy className="h-4 w-4" />
                {copiedId === contact.id ? labels.copied : labels.copy}
              </button>
              {contact.url ? (
                <a href={contact.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-black text-lake-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white dark:ring-white/10">
                  <ExternalLink className="h-4 w-4" />
                  {labels.open}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <p className="rounded-2xl bg-white p-4 text-sm leading-7 text-slate-600 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:text-slate-300 dark:ring-white/10">
        {labels.userNote}
      </p>
    </div>
  );
}

