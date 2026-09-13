"use client";

import { FadeIn } from "@/components/Motion";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="bg-white text-ink rounded-t-[2.5rem] md:rounded-t-[3.75rem] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={36} className="mb-14 sm:mb-20 md:mb-24">
        <h2 className="font-black uppercase leading-none tracking-tight text-center text-[clamp(2.75rem,11vw,9.5rem)]">
          What I do
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn
            key={s.number}
            delay={i * 0.06}
            y={18}
            className="border-b border-ink/15 last:border-0"
          >
            <div className="py-8 sm:py-10 md:py-12 flex gap-5 sm:gap-8 md:gap-12">
              <p className="shrink-0 font-black leading-none text-ink/15 text-[clamp(2.5rem,9vw,7.5rem)]">
                {s.number}
              </p>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="font-medium uppercase leading-tight text-[clamp(1rem,2.2vw,2rem)]">
                  {s.name}
                </h3>
                <p className="font-light leading-relaxed text-ink/60 max-w-2xl text-[clamp(0.85rem,1.5vw,1.15rem)]">
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
