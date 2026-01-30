// src/pages/PricingPage.jsx

import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";

export default function PricingPage() {
  const faq = [
    {
      q: "Combien coûte un site vitrine ?",
      a: "Selon le niveau de personnalisation : pack Essentiel (template optimisé) dès 650–750 €, ou pack Sur-mesure à partir de 800 €.",
    },
    {
      q: "Quel est le délai moyen ?",
      a: "Généralement 2 à 4 semaines, selon la complexité et la disponibilité du contenu. Le pack Essentiel peut être plus rapide.",
    },
    {
      q: "Puis-je ajouter des options plus tard ?",
      a: "Oui : pages, formulaires, blog/actus, réservation, espace administrable… tout est évolutif.",
    },
    {
      q: "Comment obtenir un devis précis ?",
      a: "Expliquez votre besoin (pages, objectifs, exemples). Un devis personnalisé suit un échange gratuit.",
    },
    {
      q: "Proposez-vous la maintenance ?",
      a: "Oui : 30 à 50 €/mois selon le périmètre (préventif + support).",
    },
  ];

  const commonOptions = [
    { title: "Page supplémentaire", price: "+90 à 120 € / page" },
    { title: "Formulaire personnalisé", price: "+60 à 100 €" },
    { title: "Design & maquettes (Figma)", price: "+200 à 400 €" },
    { title: "Aide au contenu (texte, images, logo)", price: "+50 à 150 €" },
  ];

  const advancedOptions = [
    { title: "Zone d’actualités / blog (contenu dynamique)", price: "+250 à 400 €" },
    { title: "Réservation en ligne", price: "+400 à 700 €" },
    { title: "Maintenance mensuelle", price: "+30 à 50 € / mois" },
  ];

  return (
    <>
      <PageTitle>Tarifs</PageTitle>

      {/* Intro + Packs */}
      <Section>
        <p className="text-left text-base sm:text-lg lg:text-xl mt-4 mb-4 text-gray-300">
          Chaque projet est unique : ces tarifs sont indicatifs. Je vous propose un devis après un échange gratuit,
          en fonction de vos objectifs, de vos pages et des fonctionnalités.
        </p>

        {/* Packs */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Pack Essentiel */}
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

          {/* Pack Personnalisé */}
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

        {/* Mini note */}
        <p className="text-xs text-gray-400 mt-4">
          * “Template optimisé” = on part d’une base solide proche de votre besoin (structure + composants), puis on adapte contenu et identité visuelle.
          “Sur-mesure” = conception plus spécifique et plus de temps de design/intégration.
        </p>
      </Section>

      {/* Options (allégées) */}
      <Section title="Options (selon vos besoins)">
        <p className="text-sm text-gray-400 mt-2">
          Vous n’avez pas besoin de tout : on choisit ensemble les options utiles selon votre activité.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Fréquent */}
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

          {/* Avancé */}
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
              Autres possibles : espace admin complet, espace client, paiement, intégrations spécifiques…
            </p>
          </div>
        </div>
      </Section>

      {/* Exemples (allégés) */}
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

        <FaqSection title="FAQ — Tarifs" faq={faq} ariaLabelledby="faq-pricing-title" />

        {/* CTA final (unique) */}
        <CtaFinal
          title="On chiffre votre projet ?"
          tagline="Je vous réponds après un échange gratuit, avec un devis clair et une proposition adaptée."
          primary={{ href: "/contact?subject=devis", text: "Demander un devis >" }}
          secondary={{ href: "/realisations", text: "Voir des projets" }}
        />
      </Section>
    </>
  );
}