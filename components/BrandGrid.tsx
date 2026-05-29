import { guitarBrands, pianoBrands } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function BrandGrid() {
  return (
    <section id="znacky" className="bg-ink py-20 text-ivory sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Značky"
          title="Pracujeme s ověřenými značkami"
          text="Do nabídky zařazujeme značky, které mají dlouhodobě silné jméno mezi hudebníky, školami a profesionály. Konkrétní dostupnost se může měnit podle trhu, skladů a individuální poptávky."
          light
        />
        <p className="mt-6 max-w-4xl rounded-[0.5rem] border border-brass/35 bg-brass/10 p-4 leading-7 text-ivory/[0.78]">
          Níže jsou příklady značek, se kterými můžeme pracovat, které umíme poptat nebo které se běžně objevují v nabídce podle dostupnosti. Nejde o tvrzení oficiální distribuce.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <BrandColumn title="Piana" brands={pianoBrands} />
          <BrandColumn title="Kytary" brands={guitarBrands} />
        </div>
      </div>
    </section>
  );
}

function BrandColumn({ title, brands }: { title: string; brands: string[] }) {
  return (
    <div className="dark-panel rounded-[0.5rem] p-5 sm:p-6">
      <h3 className="font-display text-2xl font-semibold text-ivory">{title}</h3>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {brands.map((brand) => (
          <div key={brand} className="rounded-[0.5rem] border border-ivory/12 bg-ivory/[0.055] px-4 py-4 text-center font-semibold text-ivory/[0.82]">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}
