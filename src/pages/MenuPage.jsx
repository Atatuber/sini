import { useEffect } from "react";

export function MenuPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const menuItems = [
    {
      title: "Specials",
      items: [
        ["Katmer", "€6,50"],
        ["Hashasli", "€6,00"],
        ["Yogurt böreği", "€7,00"],
        ["Sini carpaccio", "€9,50"],
      ],
    },
    {
      title: "Broodjes",
      items: [
        ["Hete kip", "€6,00"],
        ["Suri kip", "€6,50"],
        ["Gezond", "€5,50"],
        ["Tonijn", "€5,50"],
        ["Halal carpaccio", "€7,00"],
        ["Simit met beleg", "€4,50"],
      ],
    },
    {
      title: "Ei",
      items: [
        ["Sade yumurta", "€3,00"],
        ["Menemen", "€5,50"],
        ["Sucuklu", "€6,00"],
        ["Patatesli yumurta", "€5,00"],
      ],
    },
    {
      title: "Soep",
      items: [["Linzensoep", "€4,50"]],
    },
    {
      title: "Compleet ontbijt (1 pers.)",
      items: [
        ["Gekookt ei", ""],
        ["Turkse kaas", ""],
        ["Kaasblokje", ""],
        ["Olijf groen", ""],
        ["Olijf zwart", ""],
        ["Bal/kaymak", ""],
        ["Domates", ""],
        ["Salatalık", ""],
        ["Jam", ""],
        ["Simit/brood", ""],
        ["1 x çay", ""],
        ["Totaal", "€13,50"],
      ],
    },
  ];

  return (
    <div className="flex flex-col fade-in">
      {/* Introductie */}
      <div className="flex flex-col justify-center items-center w-full px-4 py-8">
        <div className="max-w-2xl text-center space-y-4">
          <div className="flex justify-center items-center flex-wrap gap-2 secondary-font">
            <h3 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-khaki to-cream-darkest">
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

      {/* Menu items */}
      <div className="px-6 md:px-24 pb-16">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-10">
            <h3 className="inline-block text-2xl font-semibold bg-linear-to-r from-cream-darkest to-khaki bg-clip-text text-transparent secondary-font">
              {section.title}
            </h3>
            <div className="border-b-2 border-khaki pb-2 mb-4"></div>
            <div className="grid grid-cols-2 gap-3">
              {section.items.map(([name, price], idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-cream-darkest py-1 col-span-2 md:col-span-1"
                >
                  <span className="text-base">{name}</span>
                  <span className="text-base font-medium text-right">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
