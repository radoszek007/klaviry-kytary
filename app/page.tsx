import Image from "next/image";
import BrandGrid from "@/components/BrandGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageCard from "@/components/ImageCard";
import SectionHeading from "@/components/SectionHeading";
import { audiences, guitarCategories, instrumentCards, pianoCategories, processSteps, reasons } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="bg-ivory py-20 text-ink sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
              <SectionHeading
                eyebrow="Co dovážíme"
                title="Nástroje vybíráme podle zvuku, zpracování a skutečného použití"
                text="Každý nástroj má jiný účel. Jinak se vybírá pianino do bytu, jinak koncertní křídlo pro sál, jinak první akustická kytara pro studenta a jinak elektrická kytara pro zkušeného hráče. Proto stavíme nabídku na kombinaci kvality, praktičnosti a správného poměru mezi cenou a hudební hodnotou."
              />
              <div className="rounded-[0.5rem] border border-ink/10 bg-white p-6 shadow-card">
                <p className="font-display text-2xl font-semibold text-ink">
                  Nejlepší nástroj není vždy ten nejdražší.
                </p>
                <p className="mt-4 leading-8 text-charcoal/[0.76]">
                  Důležitý je účel, prostor, úroveň hráče a dlouhodobá použitelnost. Konkrétní modely a značky se řeší individuálně podle aktuální dostupnosti, požadovaného účelu a rozpočtu.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="piana" className="bg-cream py-20 text-ink sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Piana" title="Akustická, digitální i koncertní řešení" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {pianoCategories.map((category) => (
                <ImageCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section id="kytary" className="bg-ivory py-20 text-ink sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Kytary" title="Nástroje pro výuku, studio, kapelu i pódium" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guitarCategories.map((category) => (
                <ImageCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        <BrandGrid />

        <section id="pro-koho" className="bg-ivory py-20 text-ink sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Pro koho" title="Nabídka pro hráče, školy, studia i reprezentativní prostory" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience) => (
                <article key={audience.title} className="rounded-[0.5rem] border border-ink/10 bg-white p-6 shadow-card">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{audience.title}</h3>
                  <p className="mt-4 leading-7 text-charcoal/[0.76]">{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="jak-vybirame" className="bg-ink py-20 text-ivory sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <SectionHeading
                eyebrow="Jak vybíráme"
                title="Výběr nástroje musí začít reálným použitím"
                text="Nezačínáme značkou ani cenou. Nejdřív potřebujeme pochopit hráče, prostor, očekávání a situace, ve kterých má nástroj fungovat."
                light
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="dark-panel rounded-[0.5rem] p-6">
                    <span className="text-sm font-bold text-brass">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-ivory">{step.title}</h3>
                    <p className="mt-3 leading-7 text-ivory/70">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-20 text-ink sm:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="relative min-h-[420px] overflow-hidden rounded-[0.5rem] shadow-card">
                <Image
                  src="/images/acoustic-guitar.png"
                  alt="Detail kvalitní akustické kytary v kultivovaném hudebním prostoru"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">Proč vybrat Klavíry &amp; Kytary</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">Klidný výběr místo náhodného nákupu</h2>
                <div className="mt-8 grid gap-3">
                  {reasons.map((reason) => (
                    <div key={reason} className="flex gap-3 rounded-[0.5rem] border border-ink/10 bg-white px-4 py-3 leading-7 text-charcoal/[0.82] shadow-[0_12px_30px_rgba(18,16,14,0.06)]">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brass" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ukazky" className="bg-cream py-20 text-ink sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Ukázkové typy nástrojů"
              title="Působí jako katalog, ale výběr řešíme individuálně"
              text="Níže uvedené typy slouží jako orientace pro poptávku. Neuvádíme skladové zásoby ani ceny, protože vhodná varianta se odvíjí od účelu, rozpočtu a aktuální dostupnosti."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {instrumentCards.map((card) => (
                <article key={card.title} className="group overflow-hidden rounded-[0.5rem] border border-ink/10 bg-white shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{card.title}</h3>
                    <p className="mt-3 leading-7 text-charcoal/[0.76]">{card.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-wood">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#kontakt" className="mt-6 inline-flex font-bold text-wood transition hover:text-brass">
                      Poptat podobný nástroj
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
