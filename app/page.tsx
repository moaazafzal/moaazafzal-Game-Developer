import { Hero } from "@/components/sections/Hero";
import { IconMarquee } from "@/components/sections/IconMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Games } from "@/components/sections/Games";
import { Studio } from "@/components/sections/Studio";
import { WebGames } from "@/components/sections/WebGames";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Pillars } from "@/components/sections/Pillars";
import { XRSims } from "@/components/sections/XRSims";

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip bg-ink">
      <Hero />
      <IconMarquee />
      {/* The three kinds of work come first: mobile (client games and the studio), web, VR / XR. */}
      <Pillars />
      <Games />
      <Studio />
      <WebGames />
      <XRSims />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </main>
  );
}
