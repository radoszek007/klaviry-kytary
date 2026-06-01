import { instrumentTypes, legalEntity, site, useCases } from "@/lib/content";

export default function ContactForm() {
  return (
    <section id="kontakt" className="bg-ivory py-20 text-ink sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">Pomůžeme vám vybrat správný nástroj</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/[0.76]">
              Napište nám, jaký nástroj hledáte, pro koho bude určený a v jakém rozpočtu se chcete pohybovat. Připravíme doporučení podle účelu, dostupnosti a reálných potřeb hráče.
            </p>
            <div className="mt-8 rounded-[0.5rem] border border-ink/10 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-wood">Přímý kontakt</p>
              <a href={`mailto:${site.email}`} className="mt-3 block font-semibold text-ink">
                {site.email}
              </a>
            </div>

            <div className="mt-5 rounded-[0.5rem] border border-brass/25 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-wood">Právní a fakturační zázemí</p>
              <p className="mt-3 leading-7 text-charcoal/[0.76]">{legalEntity.description}</p>
              <div className="mt-4 grid gap-1 text-sm leading-6 text-charcoal/[0.76]">
                <p className="font-semibold text-ink">{legalEntity.name}</p>
                <p>{legalEntity.address}</p>
                <p>IČ: {legalEntity.companyId}</p>
                <p>DIČ: {legalEntity.vatId}</p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xqejjzqg"
            method="POST"
            className="rounded-[0.5rem] border border-ink/10 bg-white p-5 shadow-card sm:p-7"
          >
            <input type="hidden" name="_subject" value="Nová poptávka z webu Klavíry & Kytary" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-ink">
                Jméno a příjmení
                <input name="jmeno" type="text" required autoComplete="name" className="min-h-12 rounded-[0.5rem] border border-ink/15 bg-ivory/[0.55] px-4 text-ink outline-none transition focus:border-brass focus:ring-4 focus:ring-brass/15" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                E-mail
                <input name="email" type="email" required autoComplete="email" className="min-h-12 rounded-[0.5rem] border border-ink/15 bg-ivory/[0.55] px-4 text-ink outline-none transition focus:border-brass focus:ring-4 focus:ring-brass/15" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Typ nástroje
                <select name="typ-nastroje" required defaultValue="" className="min-h-12 rounded-[0.5rem] border border-ink/15 bg-ivory/[0.55] px-4 text-ink outline-none transition focus:border-brass focus:ring-4 focus:ring-brass/15">
                  <option value="" disabled>
                    Vyberte typ nástroje
                  </option>
                  {instrumentTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Zamýšlené použití
                <select name="zamyslene-pouziti" defaultValue="" className="min-h-12 rounded-[0.5rem] border border-ink/15 bg-ivory/[0.55] px-4 text-ink outline-none transition focus:border-brass focus:ring-4 focus:ring-brass/15">
                  <option value="" disabled>
                    Vyberte použití
                  </option>
                  {useCases.map((useCase) => (
                    <option key={useCase}>{useCase}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Orientační rozpočet
                <input name="rozpocet" type="text" placeholder="např. 30 000 Kč, 80 000 Kč..." className="min-h-12 rounded-[0.5rem] border border-ink/15 bg-ivory/[0.55] px-4 text-ink outline-none transition placeholder:text-charcoal/[0.42] focus:border-brass focus:ring-4 focus:ring-brass/15" />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
              Zpráva
              <textarea name="zprava" rows={6} className="rounded-[0.5rem] border border-ink/15 bg-ivory/[0.55] px-4 py-3 text-ink outline-none transition focus:border-brass focus:ring-4 focus:ring-brass/15" />
            </label>

            <label className="mt-5 flex gap-3 text-sm leading-6 text-charcoal/[0.82]">
              <input name="souhlas" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-brass" />
              <span>Souhlasím se zpracováním údajů za účelem vyřízení poptávky.</span>
            </label>

            <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
              Odeslat poptávku
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
