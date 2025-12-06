// src/components/home/AudiencePreview.jsx

import HomeSection from "./HomeSection";

export default function AudiencePreview() {
  return (
    <HomeSection
      id="pour-qui"
      title="Pour qui je travaille ?"
    >
      <p className="text-base sm:text-lg lg:text-xl">
        J’accompagne principalement les indépendants, petites entreprises et
        structures de services qui veulent une présence en ligne
        claire, moderne et professionnelle, sans avoir à gérer la partie technique.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AudienceCard
          title="Indépendants & freelances"
          description="Coach, consultant, thérapeute, photographe… Un site clair pour présenter vos services et faciliter la prise de contact."
        />
        <AudienceCard
          title="Artisans & petites entreprises"
          description="Plombier, électricien, entreprise de ménage, restauration… Un site qui inspire confiance et montre votre sérieux."
        />
        <AudienceCard
          title="Cabinets & structures de services"
          description="Cabinets, accompagnement, services à la personne… Une image professionnelle, des informations accessibles, un contact simple."
        />
      </div>
    </HomeSection>
  );
}

function AudienceCard({ title, description }) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-6 h-full flex flex-col justify-between shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-200">{description}</p>
    </div>
  );
}