import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalEntity, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookies | Klavíry & Kytary",
  description:
    "Informace o používání cookies a obdobných technologií na webu Klavíry & Kytary."
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      intro="Informace o tom, jak web Klavíry & Kytary používá cookies a obdobné technologie."
    >
      <p>Poslední aktualizace: 2. června 2026</p>

      <h2>1. Provozovatel webu</h2>
      <p>
        Web Klavíry & Kytary provozuje {legalEntity.name}, se sídlem {legalEntity.address}, IČ: {legalEntity.companyId}. Kontakt:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Co jsou cookies</h2>
      <p>
        Cookies jsou malé textové soubory nebo obdobné technologie, které může web ukládat v prohlížeči uživatele nebo z něj číst. Používají se například k technickému zajištění provozu webu, zapamatování voleb, měření návštěvnosti nebo marketingu.
      </p>

      <h2>3. Jaké cookies tento web používá</h2>
      <p>
        Web Klavíry & Kytary aktuálně nepoužívá analytické, reklamní ani marketingové cookies. Nenasazujeme Google Analytics, Meta Pixel ani obdobné nástroje pro sledování návštěvníků.
      </p>
      <p>
        Web může používat pouze technické nebo provozní technologie nezbytné pro zobrazení stránky, bezpečný provoz, načítání fontů, obrázků a doručení poptávkového formuláře. Tyto technologie nejsou používány k marketingovému profilování.
      </p>

      <h2>4. Proč se nezobrazuje cookie lišta</h2>
      <p>
        Cookie lišta není na webu nasazena, protože aktuálně nepoužíváme netechnické cookies nebo obdobné technologie, které by vyžadovaly předchozí souhlas návštěvníka.
      </p>
      <p>
        Pokud by do budoucna byly přidány analytické, reklamní nebo jiné netechnické cookies, bude nutné před jejich spuštěním doplnit odpovídající souhlasový mechanismus a aktualizovat tuto stránku.
      </p>

      <h2>5. Služby třetích stran</h2>
      <p>Pro technický provoz webu a zpracování poptávkového formuláře používáme zejména tyto služby:</p>
      <ul>
        <li>Vercel pro hosting a technický provoz webu,</li>
        <li>Formspree pro zpracování a doručení poptávkového formuláře.</li>
      </ul>
      <p>
        Tyto služby mohou v rámci svého technického provozu zpracovávat provozní údaje nezbytné k doručení obsahu, ochraně služby a zajištění dostupnosti webu.
      </p>

      <h2>6. Jak můžete cookies ovlivnit</h2>
      <p>
        Ukládání cookies můžete spravovat v nastavení svého prohlížeče. Většina prohlížečů umožňuje cookies mazat, blokovat nebo nastavit pravidla pro jednotlivé weby.
      </p>
      <p>
        Pokud v prohlížeči zablokujete všechny cookies nebo obdobné technologie, některé webové stránky nemusí fungovat správně. U tohoto webu by však běžné zobrazení obsahu nemělo vyžadovat analytické ani marketingové cookies.
      </p>

      <h2>7. Změny používání cookies</h2>
      <p>
        Používání cookies a obdobných technologií můžeme změnit, zejména pokud bude web rozšířen o analytiku, marketingové nástroje, zákaznické účty nebo další interaktivní funkce. V takovém případě aktualizujeme tuto stránku a tam, kde to zákon vyžaduje, nasadíme souhlasový mechanismus.
      </p>
    </LegalPage>
  );
}
