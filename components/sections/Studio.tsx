"use client";

import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import { PillLink, ArrowIcon } from "@/components/Buttons";
import { studio, studioGames } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * The owner's own studio. The newest game leads as a wide card; the rest sit
 * two to a row. Each card goes to the game's Google Play listing.
 */
export function Studio() {
  return (
    <section id="studio" className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-24">
      <div className="max-w-5xl mx-auto">
        <FadeIn y={30} className="mb-5">
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-[clamp(2.25rem,8vw,6.5rem)]">
            My studio
          </h2>
        </FadeIn>
        <FadeIn y={16} className="mb-12 sm:mb-14">
          <p className="max-w-xl font-light leading-relaxed text-chalk/55 text-[clamp(0.85rem,1.5vw,1.1rem)]">
            <span className="font-medium text-chalk/85">{studio.name}.</span> {studio.blurb} All five are out now on
            Google Play.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {studioGames.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.05} y={22} className={i === 0 ? "sm:col-span-2" : undefined}>
              <a
                href={g.playUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-chalk/12 hover:border-chalk/35 transition-colors duration-300"
              >
                <div className="relative aspect-[1024/500] overflow-hidden">
                  <Image
                    src={asset(g.cover)}
                    alt={`${g.title} artwork`}
                    width={960}
                    height={469}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 items-center gap-4 p-5">
                  <Image
                    src={asset(g.icon)}
                    alt=""
                    width={88}
                    height={88}
                    className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-[1rem] border border-chalk/10"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.6rem] font-light uppercase tracking-[0.22em] text-chalk/45">{g.genre}</p>
                    <h3 className="mt-1 font-medium uppercase leading-tight text-[clamp(0.95rem,2vw,1.35rem)]">{g.title}</h3>
                    <p className="mt-1.5 text-[0.8rem] font-light leading-snug text-chalk/55">{g.blurb}</p>
                  </div>
                  <span className="hidden sm:inline-block shrink-0 rounded-full border border-chalk/30 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-widest text-chalk/70 group-hover:border-chalk group-hover:text-chalk transition-colors">
                    Google Play
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={16} className="mt-10">
          <PillLink href={studio.url} tone="outline" size="sm" external>
            Visit {studio.name} <ArrowIcon />
          </PillLink>
        </FadeIn>
      </div>
    </section>
  );
}
