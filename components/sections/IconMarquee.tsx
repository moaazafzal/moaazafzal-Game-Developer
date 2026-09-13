"use client";

import Image from "next/image";
import { games } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * Two rows of shipped-game icons drifting in opposite directions. Each row's
 * tiles are duplicated exactly once so the CSS loop meets itself at -50%.
 */
function Row({ icons, reverse }: { icons: string[]; reverse?: boolean }) {
  const loop = [...icons, ...icons];
  return (
    <div className="flex w-max gap-4">
      <div className={`flex gap-4 ${reverse ? "animate-drift-reverse" : "animate-drift"}`}>
        {loop.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[1.4rem] overflow-hidden border border-chalk/10"
          >
            <Image
              src={asset(src)}
              alt=""
              aria-hidden="true"
              width={176}
              height={176}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function IconMarquee() {
  const icons = games.map((g) => g.icon);
  const half = Math.ceil(icons.length / 2);

  return (
    <section className="drift-host py-16 sm:py-20 md:py-24 overflow-x-clip">
      <div className="flex flex-col gap-4">
        <Row icons={icons.slice(0, half)} />
        <Row icons={icons.slice(half)} reverse />
      </div>
    </section>
  );
}
