import { legalEntity, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-ivory">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold">Klavíry &amp; Kytary</p>
            <p className="mt-1 text-sm font-semibold text-ivory/[0.58]">{site.url}</p>
            <p className="mt-4 max-w-sm leading-7 text-ivory/[0.68]">Import a výběr pian a kytar pro domácí, školní, studiové a koncertní použití.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">Odkazy</p>
            <div className="mt-4 grid gap-2 font-semibold text-ivory/[0.78]">
              <a href="/#piana">Piana</a>
              <a href="/#kytary">Kytary</a>
              <a href="/#znacky">Značky</a>
              <a href="/#kontakt">Kontakt</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">Kontakt</p>
            <div className="mt-4 grid gap-2 leading-7 text-ivory/[0.78]">
              <a href={`mailto:${site.email}`}>E-mail: {site.email}</a>
              <p>{site.address}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">Právní informace</p>
            <div className="mt-4 grid gap-2 text-ivory/[0.78]">
              <p className="font-semibold">{legalEntity.name}</p>
              <p>IČ: {legalEntity.companyId}</p>
              <p>DIČ: {legalEntity.vatId}</p>
              <a href="/ochrana-osobnich-udaju">Ochrana osobních údajů</a>
              <a href="/obchodni-podminky">Obchodní podmínky / informace pro zákazníky</a>
              <a href="/cookies">Cookies</a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-ivory/10 pt-6 text-sm text-ivory/[0.56]">© Klavíry &amp; Kytary. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
