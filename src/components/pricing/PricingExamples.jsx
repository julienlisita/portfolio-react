// src/components/pricing/PricingExamples.jsx

import Section from "../common/Section";

export default function PricingExamples() {
  return (
    <Section title="Exemples de projets (fourchettes)">
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Artisan / commerce</h3>
          <p className="text-gray-300 text-sm mt-1">
            4–5 pages, design propre, contact + infos pratiques
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 650 à 900 €</p>
        </div>

        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Coach / thérapeute</h3>
          <p className="text-gray-300 text-sm mt-1">
            contenu plus travaillé, sections dédiées, accompagnement visuel
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 900 à 1200 €</p>
        </div>

        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Site avec réservation</h3>
          <p className="text-gray-300 text-sm mt-1">
            réservation + notifications, logique métier simple
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 1500 à 2200 €</p>
        </div>
      </div>
    </Section>
  );
}