// src/components/pricing/PricingIntroAndPacks.jsx

import Section from "../common/Section";

export default function PricingIntroAndPacks() {
  return (
    <Section>
      <p className="text-left text-base sm:text-lg lg:text-xl mt-4 mb-4 text-gray-300">
        Chaque projet est unique : ces tarifs sont indicatifs. Je vous propose un devis après un échange gratuit,
        en fonction de vos objectifs, de vos pages et des fonctionnalités.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-[#2a2a2a] p-5 rounded-lg text-gray-200 border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100 text-lg mb-2 text-center">
            Pack Essentiel (template optimisé)
          </h3>

          <p className="text-sm text-gray-400 text-center mb-4">
            Idéal si votre besoin est “classique” (artisan, indépendant, commerce) et qu’on part d’une base proche
            d’un de mes modèles.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>4–5 pages essentielles (Accueil, Services, À propos, Contact…)</li>
            <li>Design propre, responsive et adapté à votre activité</li>
            <li>Formulaire de contact + mise en ligne incluse</li>
            <li>Base optimisée, prête pour évoluer</li>
          </ul>

          <p className="text-[#5AC8FA] font-bold text-base mt-4 text-center">
            À partir de 650 €
          </p>
        </div>

        <div className="bg-[#2a2a2a] p-5 rounded-lg text-gray-200 border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100 text-lg mb-2 text-center">
            Pack Personnalisé
          </h3>

          <p className="text-sm text-gray-400 text-center mb-4">
            Recommandé si vous voulez un design plus spécifique, une structure particulière ou un rendu très personnalisé.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Structure et design personnalisés</li>
            <li>Jusqu’à 5 pages adaptées à votre besoin</li>
            <li>Formulaires et contenus spécifiques</li>
            <li>Accompagnement complet jusqu’à la mise en ligne</li>
          </ul>

          <p className="text-[#5AC8FA] font-bold text-base mt-4 text-center">
            À partir de 800 €
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        * “Template optimisé” = on part d’une base solide proche de votre besoin (structure + composants), puis on adapte contenu et identité visuelle.
        “Sur-mesure” = conception plus spécifique et plus de temps de design/intégration.
      </p>
    </Section>
  );
}