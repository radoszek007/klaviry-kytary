import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalEntity, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Obchodní podmínky a informace pro zákazníky | Klavíry & Kytary",
  description:
    "Informace pro zákazníky projektu Klavíry & Kytary, který funguje jako poptávkový web pro individuální výběr pian a kytar."
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Obchodní podmínky a informace pro zákazníky"
      intro="Přehled pravidel pro používání poptávkového webu Klavíry & Kytary a pro navazující individuální komunikaci se zákazníkem."
    >
      <p>Poslední aktualizace: 2. června 2026</p>

      <h2>1. Provozovatel</h2>
      <p>
        Web Klavíry & Kytary provozuje {legalEntity.name}, se sídlem {legalEntity.address}, IČ: {legalEntity.companyId}, DIČ: {legalEntity.vatId}.
      </p>
      <p>
        Kontaktní e-mail pro zákaznickou komunikaci je <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Charakter webu</h2>
      <p>
        Web Klavíry & Kytary slouží k prezentaci služeb spojených s výběrem, importem a dodávkou pian a kytar. Web není internetovým obchodem, neobsahuje košík, neuvádí pevné skladové zásoby a neumožňuje automatické uzavření kupní smlouvy.
      </p>
      <p>
        Odesláním poptávkového formuláře nevzniká kupní smlouva, rezervace nástroje ani závazná objednávka. Formulář slouží k zahájení komunikace a k přípravě individuálního doporučení nebo nabídky.
      </p>

      <h2>3. Jak probíhá poptávka</h2>
      <ul>
        <li>Zákazník odešle poptávkový formulář nebo e-mail s popisem hledaného nástroje.</li>
        <li>Podle dostupných informací připravíme doporučení nebo doplňující otázky.</li>
        <li>Konkrétní model, dostupnost, cena, doprava, platba a případné příslušenství se řeší individuálně.</li>
        <li>Smlouva vzniká až tehdy, když se obě strany výslovně dohodnou na konkrétních podmínkách.</li>
      </ul>

      <h2>4. Informace o cenách a dostupnosti</h2>
      <p>
        Pokud nejsou na webu uvedeny konkrétní ceny, nejedná se o závaznou nabídku k uzavření smlouvy. Cena nástroje, dopravy, příslušenství a dalších služeb se stanovuje individuálně podle aktuální dostupnosti, parametrů nástroje a požadavků zákazníka.
      </p>
      <p>
        Konkrétní modely a značky se řeší podle aktuální dostupnosti, požadovaného účelu a rozpočtu. Uvedené příklady značek nebo typů nástrojů nepředstavují garanci skladové dostupnosti.
      </p>

      <h2>5. Uzavření smlouvy</h2>
      <p>
        Pokud bude po poptávce připravena konkrétní nabídka, bude obsahovat podstatné informace o předmětu plnění, ceně, případné dopravě, platbě a dalších podmínkách. Zákazník má možnost si nabídku před přijetím zkontrolovat.
      </p>
      <p>
        U smluv uzavíraných se spotřebitelem na dálku budou před uzavřením smlouvy poskytnuty informace vyžadované právními předpisy, zejména údaje o zboží nebo službě, ceně, dopravě, platbě, reklamacích a případném právu odstoupit od smlouvy.
      </p>

      <h2>6. Dodání, doprava a převzetí</h2>
      <p>
        Způsob a termín dodání se sjednává individuálně podle typu nástroje, dostupnosti, místa dodání a požadavků zákazníka. U rozměrných nebo citlivých nástrojů, jako jsou pianina a křídla, může být nutné řešit odbornou dopravu, manipulaci a vhodné umístění.
      </p>
      <p>
        Zákazník je povinen při převzetí zkontrolovat zjevné poškození obalu nebo nástroje a případné výhrady bez zbytečného odkladu oznámit.
      </p>

      <h2>7. Platba</h2>
      <p>
        Platební podmínky se stanovují individuálně v konkrétní nabídce nebo smlouvě. Web sám o sobě neprovádí online platby a nezpracovává platební údaje.
      </p>

      <h2>8. Práva z vadného plnění a reklamace</h2>
      <p>
        Při případném prodeji zboží odpovídáme za vady v rozsahu stanoveném právními předpisy a konkrétní smlouvou. Reklamaci lze uplatnit e-mailem na{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        V reklamaci uveďte identifikaci zákazníka, popis nástroje nebo objednávky, popis vady, kdy se vada projevila, a preferovaný způsob řešení. Reklamaci vyřídíme v zákonné lhůtě, pokud se na konkrétní vztah vztahuje spotřebitelská úprava.
      </p>

      <h2>9. Odstoupení od smlouvy</h2>
      <p>
        Pokud bude se spotřebitelem uzavřena smlouva na dálku, může mít spotřebitel právo odstoupit od smlouvy ve lhůtě stanovené právními předpisy. Konkrétní poučení o odstoupení bude poskytnuto u konkrétní nabídky nebo smlouvy, pokud se na daný případ vztahuje.
      </p>
      <p>
        Právo odstoupit nemusí vzniknout ve všech případech, například u zboží upraveného podle přání zákazníka nebo v dalších případech stanovených zákonem. Konkrétní režim závisí na povaze sjednaného plnění.
      </p>

      <h2>10. Komunikace</h2>
      <p>
        Preferovaným způsobem komunikace je e-mail a poptávkový formulář. Telefonní kontakt na webu neuvádíme. Zákazník odpovídá za správnost kontaktních údajů uvedených v poptávce.
      </p>

      <h2>11. Mimosoudní řešení spotřebitelských sporů</h2>
      <p>
        Pokud dojde ke spotřebitelskému sporu, který se nepodaří vyřešit přímo, může se spotřebitel obrátit na Českou obchodní inspekci, Štěpánská 567/15, 120 00 Praha 2, web{" "}
        <a href="https://coi.gov.cz/informace-o-adr">coi.gov.cz/informace-o-adr</a>.
      </p>

      <h2>12. Závěrečná ustanovení</h2>
      <p>
        Tyto informace se vztahují k používání webu a k poptávkové komunikaci. Konkrétní smluvní vztah se může řídit individuálně sjednanými podmínkami, které mají přednost před obecnými informacemi uvedenými na této stránce.
      </p>
    </LegalPage>
  );
}
