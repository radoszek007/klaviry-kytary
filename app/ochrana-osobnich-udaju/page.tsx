import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalEntity, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Klavíry & Kytary",
  description:
    "Informace o zpracování osobních údajů při používání webu Klavíry & Kytary a při odeslání poptávkového formuláře."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Ochrana osobních údajů"
      intro="Informace o tom, jak zpracováváme osobní údaje při používání webu Klavíry & Kytary a při vyřizování poptávky."
    >
      <p>Poslední aktualizace: 2. června 2026</p>

      <h2>1. Správce osobních údajů</h2>
      <p>
        Správcem osobních údajů je {legalEntity.name}, se sídlem {legalEntity.address}, IČ: {legalEntity.companyId}, DIČ: {legalEntity.vatId}.
      </p>
      <p>
        Pro dotazy k ochraně osobních údajů nás můžete kontaktovat e-mailem na{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Kdy osobní údaje zpracováváme</h2>
      <p>Osobní údaje zpracováváme zejména tehdy, když nám odešlete poptávkový formulář nebo s námi navážete komunikaci e-mailem.</p>
      <p>
        Web Klavíry & Kytary není e-shop. Odesláním formuláře nedochází k uzavření kupní smlouvy. Údaje používáme proto, abychom mohli posoudit vaši poptávku, doporučit vhodný nástroj a domluvit další postup.
      </p>

      <h2>3. Jaké údaje zpracováváme</h2>
      <ul>
        <li>jméno a příjmení,</li>
        <li>e-mailová adresa,</li>
        <li>typ hledaného nástroje,</li>
        <li>zamýšlené použití nástroje,</li>
        <li>orientační rozpočet,</li>
        <li>obsah zprávy a další údaje, které nám sami sdělíte,</li>
        <li>technické provozní údaje související se zobrazením webu a zabezpečením provozu.</li>
      </ul>

      <h2>4. Účely a právní důvody zpracování</h2>
      <h3>Vyřízení poptávky a předsmluvní komunikace</h3>
      <p>
        Údaje z formuláře a e-mailové komunikace zpracováváme za účelem vyřízení poptávky, doporučení vhodných variant a případné přípravy individuální nabídky. Právním důvodem je jednání o smlouvě nebo provedení opatření před uzavřením smlouvy.
      </p>

      <h3>Případná objednávka, smlouva a plnění povinností</h3>
      <p>
        Pokud se na základě poptávky domluvíme na konkrétní dodávce, zpracováváme údaje nezbytné pro plnění smlouvy, účetnictví, daňové povinnosti a další zákonné povinnosti.
      </p>

      <h3>Ochrana právních nároků a bezpečný provoz webu</h3>
      <p>
        Přiměřené údaje můžeme zpracovávat také pro ochranu našich právních nároků, evidenci komunikace, prevenci zneužití formuláře a bezpečný provoz webu. Právním důvodem je oprávněný zájem na ochraně práv a bezpečnosti služby.
      </p>

      <h2>5. Příjemci a zpracovatelé</h2>
      <p>Osobní údaje mohou být v nezbytném rozsahu zpřístupněny těmto službám:</p>
      <ul>
        <li>Vercel Inc. jako poskytovateli hostingu a technického provozu webu,</li>
        <li>Formspree jako službě pro zpracování a doručování poptávkového formuláře,</li>
        <li>případným účetním, daňovým nebo právním poradcům, pokud je to nezbytné pro splnění zákonných povinností nebo ochranu práv.</li>
      </ul>
      <p>
        U některých služeb může docházet k předání údajů mimo Evropskou unii. Pokud k tomu dochází, probíhá tak podle příslušných smluvních a právních záruk poskytovatelů služeb, zejména podle mechanismů předvídaných GDPR.
      </p>

      <h2>6. Doba uchování údajů</h2>
      <ul>
        <li>Údaje z poptávky uchováváme po dobu potřebnou k jejímu vyřízení a navazující komunikaci.</li>
        <li>Pokud z poptávky vznikne smlouva nebo objednávka, uchováváme související údaje po dobu vyžadovanou právními předpisy, zejména účetními a daňovými.</li>
        <li>Údaje potřebné k ochraně právních nároků můžeme uchovávat po dobu běhu příslušných promlčecích lhůt.</li>
        <li>Technické provozní záznamy uchovávají poskytovatelé technických služeb po dobu nezbytnou pro bezpečnost a provoz služby.</li>
      </ul>

      <h2>7. Vaše práva</h2>
      <p>V souvislosti se zpracováním osobních údajů máte zejména právo:</p>
      <ul>
        <li>na přístup ke svým osobním údajům,</li>
        <li>na opravu nepřesných údajů,</li>
        <li>na výmaz údajů, pokud jsou splněny zákonné podmínky,</li>
        <li>na omezení zpracování,</li>
        <li>na přenositelnost údajů, pokud je to použitelné,</li>
        <li>vznést námitku proti zpracování založenému na oprávněném zájmu,</li>
        <li>podat stížnost u dozorového úřadu.</li>
      </ul>
      <p>
        Dozorovým úřadem je Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, web{" "}
        <a href="https://uoou.gov.cz">uoou.gov.cz</a>.
      </p>

      <h2>8. Dobrovolnost poskytnutí údajů</h2>
      <p>
        Poskytnutí údajů v poptávkovém formuláři je dobrovolné. Bez základních kontaktních údajů a informací o hledaném nástroji však nemůžeme poptávku věcně vyřídit.
      </p>

      <h2>9. Automatizované rozhodování</h2>
      <p>
        Při zpracování údajů neprovádíme automatizované individuální rozhodování ani profilování, které by pro vás mělo právní nebo obdobně významné účinky.
      </p>
    </LegalPage>
  );
}
