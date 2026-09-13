"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/Motion";
import { games, type Game } from "@/lib/content";
import { asset } from "@/lib/asset";

function StoreLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="rounded-full border border-chalk/30 px-4 py-1.5 text-[0.62rem] sm:text-[0.7rem] font-medium uppercase tracking-widest text-chalk/70 hover:border-chalk hover:text-chalk transition-colors duration-200"
    >
      {label}
    </a>
  );
}

/**
 * Cards stack as they scroll: each sticks under the one before it and shrinks
 * slightly, so the pile stays readable instead of covering itself.
 */
function GameCard({ game, index, total }: { game: Game; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.02]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: still ? 1 : scale, top: `${6 + index * 1.6}rem` }}
      className="sticky"
    >
      <div className="rounded-[2rem] md:rounded-[3rem] border border-chalk/20 bg-ink p-5 sm:p-7 md:p-9">
        <div className="flex items-start justify-between gap-5">
          <p className="font-black leading-none text-chalk/15 text-[clamp(2.5rem,7vw,5.5rem)]">
            {String(index + 1).padStart(2, "0")}
          </p>
          {game.installs && (
            <p className="text-right">
              <span className="block font-black leading-none text-[clamp(1.3rem,3vw,2.4rem)]">
                {game.installs}
              </span>
              <span className="mt-1 block text-[0.58rem] font-light uppercase tracking-[0.2em] text-chalk/45">
                Installs
              </span>
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
          <Image
            src={asset(game.icon)}
            alt={game.title}
            width={176}
            height={176}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-[1.4rem] object-cover border border-chalk/10 shrink-0"
          />
          <div className="min-w-0">
            <p className="text-[0.62rem] font-light uppercase tracking-[0.22em] text-chalk/45">
              {game.genre}
            </p>
            <h3 className="mt-1.5 font-medium uppercase leading-tight text-[clamp(1.05rem,2.4vw,1.9rem)]">
              {game.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {game.playUrl && <StoreLink href={game.playUrl} label="Google Play" />}
              {game.appUrl && <StoreLink href={game.appUrl} label="App Store" />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Games() {
  return (
    <section
      id="games"
      className="bg-ink rounded-t-[2.5rem] md:rounded-t-[3.75rem] -mt-8 md:-mt-12 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-24"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn y={36} className="mb-6">
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-[clamp(2.75rem,11vw,9.5rem)]">
            Shipped
          </h2>
        </FadeIn>
        <FadeIn y={18} className="mb-14 sm:mb-20">
          <p className="max-w-xl font-light leading-relaxed text-chalk/55 text-[clamp(0.85rem,1.5vw,1.1rem)]">
            A slice of the catalogue, live on the stores today. Install figures are
            the buckets Google Play publishes, so treat them as floors.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {games.map((g, i) => (
            <GameCard key={g.title} game={g} index={i} total={games.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
