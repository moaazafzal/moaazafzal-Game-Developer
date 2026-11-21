"use client";

import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import { pillars } from "@/lib/content";
import { asset } from "@/lib/asset";

/** The three kinds of work, first thing under the hero. Each card jumps to its section. */
export function Pillars() {
  return (
    <section id="work" className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn y={30} className="mb-10 sm:mb-14">
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-center text-[clamp(2.25rem,8vw,6.5rem)]">
            What I build
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08} y={24}>
              <a
                href={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-chalk/12 hover:border-chalk/40 transition-colors duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={asset(p.cover)}
                    alt=""
                    width={720}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <p className="absolute left-5 bottom-3 font-black leading-none text-chalk/25 text-[clamp(2.5rem,5vw,3.75rem)]">
                    {p.number}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <h3 className="font-medium uppercase leading-tight text-[clamp(1.1rem,2.2vw,1.5rem)]">{p.title}</h3>
                  <p className="flex-1 text-[0.85rem] font-light leading-relaxed text-chalk/55">{p.line}</p>
                  <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-chalk/30 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-widest text-chalk/70 group-hover:border-chalk group-hover:text-chalk transition-colors">
                    {p.cta}
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
                      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
