"use client";

import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import { PillLink, ArrowIcon } from "@/components/Buttons";
import { webGames, links } from "@/lib/content";
import { asset } from "@/lib/asset";

export function WebGames() {
  return (
    <section id="web" className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-24">
      <div className="max-w-5xl mx-auto">
        <FadeIn y={30} className="mb-5">
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-[clamp(2.25rem,8vw,6.5rem)]">
            Play in browser
          </h2>
        </FadeIn>
        <FadeIn y={16} className="mb-12 sm:mb-14">
          <p className="max-w-xl font-light leading-relaxed text-chalk/55 text-[clamp(0.85rem,1.5vw,1.1rem)]">
            Web builds you can play right here. No install, they run in the page.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {webGames.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.05} y={22}>
              <a
                href={g.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group block overflow-hidden rounded-[1.6rem] border border-chalk/12 hover:border-chalk/35 transition-colors duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={asset(g.cover)}
                    alt={`${g.title} cover art`}
                    width={960}
                    height={540}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <p className="text-[0.6rem] font-light uppercase tracking-[0.22em] text-chalk/45">
                      {g.genre}
                    </p>
                    <h3 className="mt-1 font-medium uppercase leading-tight text-[clamp(0.95rem,2vw,1.35rem)] truncate">
                      {g.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-chalk/30 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-widest text-chalk/70 group-hover:border-chalk group-hover:text-chalk transition-colors">
                    Play
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={16} className="mt-10">
          <PillLink href={links.playgama} tone="outline" size="sm" external>
            All web games on Playgama <ArrowIcon />
          </PillLink>
        </FadeIn>
      </div>
    </section>
  );
}
