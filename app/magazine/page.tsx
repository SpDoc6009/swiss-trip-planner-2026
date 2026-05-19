import Image from "next/image";
import { BookOpen, ExternalLink } from "lucide-react";

import { magazineGuides } from "@/data/media";

const labels = {
  title: "\u745e\u58eb\u65c5\u884c\u96dc\u8a8c\u653b\u7565",
  intro:
    "\u628a\u884c\u524d\u91cd\u9ede\u3001\u6bcf\u6bb5\u65c5\u7a0b\u6c1b\u570d\u8207\u62cd\u7167\u63d0\u9192\u6536\u5728\u4e00\u8d77\uff0c\u9069\u5408\u51fa\u767c\u524d\u9810\u7fd2\uff0c\u4e5f\u9069\u5408\u65c5\u884c\u4e2d\u7576\u4f5c\u5716\u6587\u7248\u653b\u7565\u67e5\u770b\u3002"
};

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-[#071923]">
      <section className="bg-lake-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-sm font-black text-white/70">
            <BookOpen className="h-4 w-4" />
            Swiss Magazine
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{labels.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">{labels.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        {magazineGuides.map((guide, index) => (
          <article
            key={guide.id}
            className={
              index === 0
                ? "overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10 lg:col-span-2"
                : "overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10"
            }
          >
            <a href={guide.src} target="_blank" rel="noreferrer" className="focus-ring group block bg-slate-100 dark:bg-lake-900/50">
              <Image
                src={guide.src}
                alt={guide.alt}
                width={1024}
                height={1448}
                sizes={index === 0 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                priority={index === 0}
                quality={82}
                className="h-auto w-full transition duration-300 group-hover:scale-[1.01]"
              />
            </a>
            <div className="p-5">
              <p className="text-sm font-black text-swiss-red">{guide.kicker}</p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h2 className="text-2xl font-black text-lake-900 dark:text-white">{guide.title}</h2>
                <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{guide.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
