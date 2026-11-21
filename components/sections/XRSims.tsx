"use client";

import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import { PillLink, ArrowIcon } from "@/components/Buttons";
import { xr } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * VR / XR simulations. Workshop MR leads with its tutorial video, a way to try it
 * straight away (a link on phones, a QR code on computers so the visitor can open
 * it on their phone), the three stations, what makes it work, and the stack.
 */
export function XRSims() {
  return (
    <section id="xr" className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto">
        <FadeIn y={30} className="mb-5">
          <h2 className="gradient-head font-black uppercase leading-none tracking-tight text-[clamp(2.25rem,8vw,6.5rem)]">
            VR / XR simulations
          </h2>
        </FadeIn>
        <FadeIn y={16} className="mb-12 sm:mb-14">
          <p className="max-w-2xl font-light leading-relaxed text-chalk/55 text-[clamp(0.85rem,1.5vw,1.1rem)]">
            Training simulations in Unity for standalone headsets, with a browser version of the same build so anyone
            can try it on a phone or a computer.
          </p>
        </FadeIn>

        {/* ---- the project */}
        <FadeIn y={22}>
          <div className="overflow-hidden rounded-[1.8rem] md:rounded-[2.4rem] border border-chalk/15">
            <video
              className="block w-full aspect-video bg-black"
              src={asset(xr.video)}
              poster={asset(xr.poster)}
              controls
              preload="none"
              playsInline
            />
            <div className="p-5 sm:p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                <div className="flex-1 min-w-0">
                  <p className="text-[0.62rem] font-light uppercase tracking-[0.22em] text-chalk/45">{xr.kind}</p>
                  <h3 className="mt-1.5 font-black uppercase leading-none text-[clamp(1.8rem,5vw,3.4rem)]">{xr.title}</h3>
                  <p className="mt-5 max-w-xl text-[0.92rem] font-light leading-relaxed text-chalk/65">{xr.blurb}</p>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {xr.stats.map((s) => (
                      <div key={s.label} className="rounded-2xl border border-chalk/12 px-4 py-3">
                        <p className="font-black leading-none text-[clamp(1.4rem,3vw,2rem)]">{s.value}</p>
                        <p className="mt-1.5 text-[0.56rem] font-light uppercase tracking-[0.2em] text-chalk/45">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <PillLink href={asset(xr.playUrl)} external>
                      Try it now <ArrowIcon />
                    </PillLink>
                    <PillLink href={asset(xr.video)} tone="outline" external>
                      Full screen video
                    </PillLink>
                  </div>
                </div>

                {/* On a computer: a QR code to open it on the visitor's phone. On a phone: just open it. */}
                <div className="w-full lg:w-[15.5rem] shrink-0 rounded-[1.6rem] border border-chalk/15 bg-chalk/[0.03] p-5 sm:p-6">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-accent">Try it on your phone</p>
                  <div className="hidden md:block mt-4">
                    <Image
                      src={asset(xr.qr)}
                      alt={`QR code that opens ${xr.title} in the phone's browser`}
                      width={208}
                      height={208}
                      className="w-full h-auto rounded-xl"
                      unoptimized
                    />
                    <p className="mt-4 text-[0.8rem] font-light leading-relaxed text-chalk/60">
                      Point your phone&apos;s camera at the code. It opens in the browser, no install. Turn the phone
                      sideways.
                    </p>
                  </div>
                  <div className="md:hidden mt-3">
                    <p className="text-[0.85rem] font-light leading-relaxed text-chalk/60">
                      Runs in your phone&apos;s browser, no install. Turn the phone sideways, drag to look, tap to use,
                      pinch to move closer.
                    </p>
                    <div className="mt-4">
                      <PillLink href={asset(xr.playUrl)} size="sm" external>
                        Open on this phone <ArrowIcon />
                      </PillLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ---- stations */}
        <div className="mt-6 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {xr.stations.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06} y={22}>
              <div className="h-full overflow-hidden rounded-[1.6rem] border border-chalk/12">
                <div className="aspect-video overflow-hidden">
                  <Image src={asset(s.image)} alt={`${s.title} station`} width={640} height={360} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[0.58rem] font-light uppercase tracking-[0.22em] text-chalk/45">Station {i + 1}</p>
                  <h4 className="mt-1 font-medium uppercase leading-tight text-[1rem]">{s.title}</h4>
                  <p className="mt-2 text-[0.8rem] font-light leading-relaxed text-chalk/55">{s.line}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ---- what makes it work */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {xr.features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.04} y={18}>
              <div className="h-full rounded-[1.4rem] border border-chalk/12 p-5">
                <h4 className="font-medium uppercase tracking-wide text-[0.85rem]">{f.title}</h4>
                <p className="mt-2 text-[0.8rem] font-light leading-relaxed text-chalk/55">{f.line}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={14} className="mt-8 flex flex-wrap gap-2">
          {xr.stack.map((t) => (
            <span key={t} className="rounded-full border border-chalk/20 px-3.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-widest text-chalk/60">
              {t}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
