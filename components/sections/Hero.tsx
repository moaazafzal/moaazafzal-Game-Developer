"use client";

import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import { Magnet } from "@/components/Magnet";
import { PillLink, ArrowIcon } from "@/components/Buttons";
import { profile, nav } from "@/lib/content";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-x-clip">
      <FadeIn y={-18} duration={0.6} onMount>
        <nav className="flex items-center justify-between gap-6 px-5 sm:px-8 md:px-10 pt-6 md:pt-8">
          <a href="#top" className="text-base md:text-xl font-medium uppercase tracking-[0.18em]">
            {profile.shortName}
          </a>
          <div className="hidden sm:flex gap-7 md:gap-11">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm md:text-lg font-medium uppercase tracking-[0.14em] text-chalk/70 hover:text-chalk transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <PillLink href="#contact" size="sm">
            Get in touch
          </PillLink>
        </nav>
      </FadeIn>

      <div className="relative flex-1 flex flex-col items-center justify-end">
        {/* The name sits behind the portrait, which is why it can run this big. */}
        <FadeIn y={40} delay={0.1} onMount className="absolute top-[7%] left-0 right-0 z-0">
          <h1 className="gradient-head font-black uppercase tracking-tight leading-[0.85] text-center whitespace-nowrap text-[15vw] lg:text-[16.5vw]">
            {profile.shortName}
          </h1>
        </FadeIn>

        <Magnet radius={170} strength={0.2} className="relative z-10">
          <Image
            src={asset("/img/moaaz.webp")}
            alt={`${profile.name}, ${profile.role}`}
            width={880}
            height={880}
            priority
            // A square studio portrait: shown as a circle, with no bottom fade.
            // The linear mask was shaped for the old rectangular photo and
            // would slice straight across a round one.
            className="w-[13rem] sm:w-[17rem] md:w-[19rem] lg:w-[21rem] h-auto aspect-square rounded-full object-cover"
          />
        </Magnet>

        <div className="relative z-20 w-full px-5 sm:px-8 md:px-10 pb-7 md:pb-9 -mt-4 sm:-mt-8">
          <FadeIn y={18} delay={0.3} onMount>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <p className="font-light uppercase tracking-wide leading-snug text-[clamp(0.8rem,1.35vw,1.35rem)] max-w-[19rem]">
                {profile.role} shipping mobile games and the monetisation behind them
              </p>
              <PillLink href="#contact">
                Hire me <ArrowIcon />
              </PillLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
