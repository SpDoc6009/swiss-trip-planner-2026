"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CalendarDays, CircleAlert, ListChecks, MapPinned, Moon, Plane, ReceiptText, SunMedium, WalletCards } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/format";
import type { NavItem } from "@/types/trip";

const navItems: NavItem[] = [
  { href: "/", label: "\u7e3d\u89bd", icon: Plane },
  { href: "/itinerary", label: "\u884c\u7a0b", icon: MapPinned },
  { href: "/bookings", label: "\u9810\u8a02", icon: ListChecks },
  { href: "/costs", label: "\u7968\u5238\u8a66\u7b97", icon: WalletCards },
  { href: "/expenses", label: "\u65c5\u8cbb\u8a18\u5e33", icon: ReceiptText },
  { href: "/travel-notes", label: "\u6ce8\u610f\u4e8b\u9805", icon: CircleAlert },
  { href: "/magazine", label: "\u65c5\u904a\u653b\u7565", icon: BookOpen }
];

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-swiss-snow/88 backdrop-blur-xl dark:border-white/10 dark:bg-lake-900/88">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link className="focus-ring flex min-w-0 items-center gap-2 rounded-xl" href="/">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-swiss-red text-lg font-black text-white shadow-soft">
            CH
          </span>
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block truncate text-sm font-black tracking-wide text-lake-900 dark:text-white">Swiss 2026</span>
            <span className="block truncate text-xs text-slate-500 dark:text-slate-300">{"3 \u4eba\u81ea\u52a9\u65c5\u884c\u8a08\u756b"}</span>
          </span>
        </Link>

        <nav
          aria-label="\u4e3b\u8981\u5c0e\u89bd"
          className="mx-auto flex min-w-0 max-w-full items-center justify-start overflow-x-auto rounded-2xl bg-white/80 p-1 shadow-sm ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10"
        >
          {navItems.map((item) => {
            const Icon = item.icon ?? CalendarDays;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring flex shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-bold transition sm:px-4",
                  active
                    ? "bg-lake-900 text-white shadow-sm dark:bg-white dark:text-lake-900"
                    : "text-slate-600 hover:bg-lake-50 hover:text-lake-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="\u5207\u63db\u6df1\u8272\u6a21\u5f0f"
          className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-lake-900 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white dark:ring-white/10"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && resolvedTheme === "dark" ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
