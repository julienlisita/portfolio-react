// src/components/pricing/PricingOptions.jsx

import Section from "../layout/Section";

export default function PricingOptions() {

  const commonOptions = [
  { title: "Page supplémentaire", price: "+120 à 180 € / page" },
  { title: "Formulaire personnalisé", price: "+80 à 150 €" },
  { title: "Aide au contenu", price: "+100 à 300 €" },
  { title: "Animations spécifiques", price: "sur devis" },
];

const advancedOptions = [
  { title: "Zone d’actualités / blog", price: "+300 à 600 €" },
  { title: "Espace administrateur simple", price: "à partir de 800 €" },
  { title: "Réservation avec espace admin", price: "+1 200 à 2 000 €" },
  { title: "Maintenance mensuelle", price: "à partir de 40 € / mois" },

];

  return (
    <Section title="Options (selon vos besoins)">
      <p className="text-sm text-gray-400 mt-2">
        Vous n’avez pas besoin de tout : on choisit ensemble les options utiles selon votre activité.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-lg p-5">
          <h3 className="font-semibold text-gray-100">Le plus fréquent</h3>
          <ul className="mt-3 space-y-2">
            {commonOptions.map((o) => (
              <li key={o.title} className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-gray-200">{o.title}</span>
                <span className="text-sm text-gray-400 whitespace-nowrap">{o.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-lg p-5">
          <h3 className="font-semibold text-gray-100">Fonctionnalités avancées</h3>
          <ul className="mt-3 space-y-2">
            {advancedOptions.map((o) => (
              <li key={o.title} className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-gray-200">{o.title}</span>
                <span className="text-sm text-gray-400 whitespace-nowrap">{o.price}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-gray-500 mt-4">
            Pour une application, un outil métier ou des besoins plus spécifiques,
            le tarif est établi sur devis selon le périmètre du projet.
          </p>
        </div>
      </div>
    </Section>
  );
}