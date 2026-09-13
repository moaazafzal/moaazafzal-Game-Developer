"use client";

import { FadeIn, RevealText } from "@/components/Motion";
import { PillLink, ArrowIcon } from "@/components/Buttons";
import { profile, stats, publishers, links } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <FadeIn y={36}>
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-center text-[clamp(2.75rem,11vw,9.5rem)]">
            About me
          </h2>
        </FadeIn>

        <RevealText
          text={profile.about}
          className="max-w-2xl text-center font-light leading-relaxed text-chalk/85 text-[clamp(0.98rem,1.7vw,1.3rem)]"
        />

        <FadeIn y={24} className="w-full">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-chalk/10 border border-chalk/10 rounded-[1.6rem] overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-5 py-7 sm:py-9 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-black leading-none text-[clamp(2rem,5vw,3.4rem)]">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-[0.62rem] sm:text-[0.7rem] font-light uppercase tracking-[0.2em] text-chalk/50">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn y={20} className="w-full">
          <p className="text-center text-[0.62rem] sm:text-[0.7rem] font-light uppercase tracking-[0.25em] text-chalk/40">
            Games built for
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {publishers.map((p) => (
              <span
                key={p}
                className="font-medium uppercase tracking-wider text-chalk/70 text-[clamp(0.9rem,2vw,1.5rem)]"
              >
                {p}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn y={18}>
          <PillLink href={links.fiverr} tone="outline" external>
            5.0 from 118 reviews <ArrowIcon />
          </PillLink>
        </FadeIn>
      </div>
    </section>
  );
}
