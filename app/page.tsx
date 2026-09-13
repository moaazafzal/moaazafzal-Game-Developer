import { Hero } from "@/components/sections/Hero";
import { IconMarquee } from "@/components/sections/IconMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Games } from "@/components/sections/Games";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip bg-ink">
      <Hero />
      <IconMarquee />
      <About />
      <Services />
      <Games />
      <Reviews />
      <Contact />
    </main>
  );
}
