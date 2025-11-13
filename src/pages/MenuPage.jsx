import { useEffect } from "react";
import MenuSection from "../components/MenuSection";

export function MenuPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const menuItems = [
    {
      title: "Specials",
      items: [
        [
          "KATMER",
          "€6,50",
          "Heerlijke Turkse dessert met pistache en room, warm geserveerd.",
        ],
        [
          "HASHASLI",
          "€6,00",
          "Luchtig deeg gevuld met maanzaadpasta, subtiel zoet en knapperig.",
        ],
        [
          "YOGURT BÖREĞI",
          "€7,00",
          "Knapperige börek met een frisse yoghurtsaus en kruiden.",
        ],
        [
          "SINI CARPACCIO",
          "€9,50",
          "Dunne plakjes halal rundvlees met olijfolie, rucola en Parmezaanse kaas.",
        ],
      ],
    },
    {
      title: "Broodjes",
      items: [
        [
          "HETE KIP",
          "€6,00",
          "Pittig gekruide kip met verse sla en saus naar keuze.",
        ],
        [
          "SURI KIP",
          "€6,50",
          "Licht pikante kip met Surinaamse kruiden en krokante afwerking.",
        ],
        ["GEZOND", "€5,50", "Vers broodje met kaas, tomaat, komkommer en ei."],
        ["TONIJN", "€5,50", "Tonijnsalade met ui, sla en frisse dressing."],
        [
          "HALAL CARPACCIO",
          "€7,00",
          "Halal rundvlees, Parmezaanse kaas, pijnboompitten en truffelmayonaise.",
        ],
        [
          "SIMIT MET BELEG",
          "€4,50",
          "Traditionele Turkse sesamring met beleg naar keuze.",
        ],
      ],
    },
    {
      title: "Maaltijden met Eieren",
      items: [
        [
          "SADE YUMURTA",
          "€3,00",
          "Eenvoudig gebakken of gekookt ei, klassiek en puur.",
        ],
        ["MENEMEN", "€5,50", "Turks roerei met tomaat, paprika en kruiden."],
        ["SUCUKLU", "€6,00", "Gebakken ei met pittige Turkse worst (sucuk)."],
        [
          "PATATESLI YUMURTA",
          "€5,00",
          "Eiergerecht met goudbruine aardappelblokjes.",
        ],
      ],
    },
    {
      title: "Soep",
      items: [
        [
          "LINZENSOEP",
          "€4,50",
          "Traditionele Turkse soep van rode linzen, zacht gekruid en hartverwarmend.",
        ],
      ],
    },
    {
      title: "Complete Ontbijtsoorten",
      items: [
        [
          "COMPLEET ONTBIJT (1 PERS.)",
          "€13,50",
          "Een rijk en authentiek Turks ontbijt met gekookt ei, Turkse kaas, kaasblokje, groene en zwarte olijven, honing met kaymak, verse tomaat, komkommer, jam, simit of brood en 1 glas traditionele Turkse thee.",
        ],
      ],
    },
  ];

  return (
    <div className="flex flex-col fade-in">
      <div className="flex flex-col justify-center items-center w-full px-4 py-8">
        <div className="max-w-2xl text-center space-y-4">
          <div className="flex justify-center items-center flex-wrap gap-2 h1-font">
            <h3 className="text-2xl md:text-4xl font-medium text-cream-darkest">
              Onze
            </h3>
            <h2 className="text-2xl md:text-4xl font-medium text-shadow-cream-dark">
              Menukaart
            </h2>
          </div>
          <p className="text-md sm:text-base md:text-lg font-medium">
            Onze menukaart staat voor kwaliteit en lekkers. Begin je dag goed
            met een uitgebreid Turks ontbijt, boordevol authentieke smaken en
            verse ingrediënten. Liever iets klassieks? We serveren ook heerlijke
            versbelegde broodjes, met zorg bereid voor elke smaak.
          </p>
        </div>
      </div>
      <div className="px-6 md:px-24 pb-16">
        {menuItems.map((section) => (
          <MenuSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
