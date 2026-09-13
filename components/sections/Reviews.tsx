"use client";

import { FadeIn } from "@/components/Motion";
import { reviews, links } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-300" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <div className="max-w-5xl mx-auto">
        <FadeIn y={30} className="mb-12 sm:mb-16">
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-center text-[clamp(2.25rem,8vw,6.5rem)]">
            Client words
          </h2>
          <p className="mt-5 text-center text-[0.62rem] sm:text-[0.7rem] font-light uppercase tracking-[0.22em] text-chalk/40">
            <a href={links.fiverr} target="_blank" rel="noreferrer noopener" className="hover:text-chalk/70 transition-colors">
              Verified reviews on Fiverr
            </a>
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((r, i) => (
            <FadeIn key={r.name + i} delay={i * 0.05} y={20}>
              <figure className="h-full flex flex-col rounded-[1.6rem] border border-chalk/12 p-6">
                <Stars />
                <blockquote className="mt-4 flex-1 font-light leading-relaxed text-chalk/75 text-[0.92rem]">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-chalk/10">
                  <span className="block text-sm font-medium">{r.name}</span>
                  <span className="block text-[0.62rem] font-light uppercase tracking-[0.2em] text-chalk/40">
                    {r.country}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
