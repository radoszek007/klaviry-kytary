import Image from "next/image";
import { trustBullets } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-ink pt-32 text-ivory sm:pt-36 lg:pt-40">
      <Image
        src="/images/hero-piano-guitar.png"
        alt="Elegantní prostor s koncertním pianem a kytarou pro výběr kvalitního nástroje"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-48"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,14,0.96),rgba(18,16,14,0.76)_42%,rgba(18,16,14,0.38))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="section-shell relative grid gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">Import a výběr hudebních nástrojů</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Kvalitní piana a kytary pro domov, studio i koncertní pódium
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/[0.76] sm:text-xl">
            Dovážíme a pomáháme vybírat akustická i digitální piana, koncertní křídla, pianina, akustické,
            elektroakustické a elektrické kytary pro začínající hráče, školy, profesionály i náročné hudebníky.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#ukazky" className="button-primary">
              Vybrat nástroj
            </a>
            <a href="#kontakt" className="button-secondary">
              Nezávazně se poradit
            </a>
          </div>
        </div>

        <div className="dark-panel rounded-[0.5rem] p-5 sm:p-6 lg:mb-2">
          <p className="font-display text-2xl font-semibold text-ivory">Odborný partner pro výběr, ne anonymní katalog.</p>
          <div className="mt-6 grid gap-3">
            {trustBullets.map((item) => (
              <div key={item} className="flex gap-3 rounded-[0.5rem] border border-ivory/12 bg-ivory/[0.055] px-4 py-3 text-sm leading-6 text-ivory/[0.82]">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brass" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
