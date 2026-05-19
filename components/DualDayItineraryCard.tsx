import Image from "next/image";
import { Images } from "lucide-react";

import { findDualDayImage } from "@/data/media";

export function DualDayItineraryCard({ dayId }: { dayId: number }) {
  const image = findDualDayImage(dayId);

  if (!image) return null;

  return (
    <section className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
            <Images className="h-4 w-4" />
            {image.kicker}
          </p>
          <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">{image.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{image.description}</p>
        </div>
      </div>
      <a href={image.src} target="_blank" rel="noreferrer" className="focus-ring group block overflow-hidden rounded-2xl bg-slate-100 dark:bg-lake-900/50">
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={1448}
          sizes="(min-width: 1024px) 48rem, 100vw"
          quality={82}
          className="h-auto w-full transition duration-300 group-hover:scale-[1.01]"
        />
      </a>
    </section>
  );
}
