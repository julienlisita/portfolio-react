// src/components/home/AudiencePreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";

export default function AudiencePreview() {
  return (
    <HomeSectionWrapper id="pour-qui" title="Pour qui c’est fait ?">
      <p className="text-base sm:text-lg lg:text-xl">
        J’aide les <strong>artisans, indépendants, commerces et
        petites entreprises</strong> à avoir un site clair, fiable et
        visible, sans que vous ayez à gérer la technique.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AudienceCard
          title="Indépendants & freelances"
          description="Coach, consultant, thérapeute, photographe… Présentez vos services clairement et facilitez la prise de contact."
        />
        <AudienceCard
          title="Artisans & petites entreprises"
          description="Bâtiment, services, restauration… Un site qui inspire confiance et vous aide à générer des demandes."
        />
        <AudienceCard
          title="Cabinets & structures de services"
          description="Services à la personne, accompagnement… Infos accessibles, navigation simple, contact immédiat."
        />
      </div>
    </HomeSectionWrapper>
  );
}

function AudienceCard({ title, description }) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-6 h-full flex flex-col shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-200">{description}</p>
    </div>
  );
}