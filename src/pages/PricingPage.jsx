// src/pages/PricingPage.jsx

import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";

export default function PricingPage() {

const faq = [
  {
    q: "Combien coûte un site vitrine ?",
    a: "À partir de 800 €, selon les pages, le design et les options (formulaire, blog, réservation…)."
  },
  {
    q: "Quel est le délai moyen pour un site vitrine ?",
    a: "Généralement 2 à 4 semaines, selon la complexité et la disponibilité du contenu."
  },
  {
    q: "Puis-je ajouter des options plus tard ?",
    a: "Oui : pages, formulaires, blog/actus, réservation, espace client… tout est évolutif."
  },
  {
    q: "Comment obtenir un devis précis ?",
    a: "Expliquez votre besoin (pages, objectifs, exemples). Un devis personnalisé suit un échange gratuit."
  },
  {
    q: "Proposez-vous la maintenance ? À quel prix ?",
    a: "Oui : 30 à 50 €/mois selon le périmètre (préventif + support)."
  }
];
  return (
    <>
      <PageTitle>Tarifs</PageTitle>

      <Section>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4 mb-4">
          Chaque projet étant unique, ces tarifs sont donnés à titre indicatif. Un devis personnalisé vous sera proposé après un échange gratuit.
        </p>

        <div className="bg-[#2a2a2a] p-5 rounded-lg text-gray-200">
          <h3 className="font-semibold text-gray-100 text-lg mb-2 text-center">Site vitrine de base</h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 text-center">
            <li>Jusqu'à 5 pages (Accueil, À propos, Services, Contact, Mentions légales)</li>
            <li>Design sobre, moderne et responsive (mobile / tablette / ordinateur)</li>
            <li>Formulaire de contact inclus</li>
            <li>Intégration du contenu fourni par le client</li>
            <li>Accompagnement à la mise en ligne (hébergement & domaine)</li>
          </ul>
          <p className="text-[#5AC8FA] font-bold text-base mt-3 text-center">A partir de 800 €</p>
        </div>
      </Section>

      <Section title="Options et fonctionnalités supplémentaires">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Page supplémentaire</h3>
            <p className="text-sm text-gray-400">+90 à 120 € / page</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Formulaire personnalisé</h3>
            <p className="text-sm text-gray-400">+60 à 100 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Design & maquettes personnalisées</h3>
            <p className="text-sm text-gray-400">+200 à 400 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Aide au contenu (texte, images, logo)</h3>
            <p className="text-sm text-gray-400">+50 à 150 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Zone de contenu dynamique (blog, actus, etc.)</h3>
            <p className="text-sm text-gray-400">+250 à 400 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Réservation en ligne</h3>
            <p className="text-sm text-gray-400">+400 à 700 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Maintenance mensuelle</h3>
            <p className="text-sm text-gray-400">+30 à 50 € / mois</p>
          </div>
        </div>
      </Section>
      <Section title="Exemples de projets & fourchettes de prix">
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site pour restaurant ou artisan</h3>
            <p className="text-gray-300 text-sm">
              Présentation de l’activité, menu / prestations, infos pratiques, formulaire de contact
            </p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 800 à 900 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site pour coach sportif ou thérapeute</h3>
            <p className="text-gray-300 text-sm">
              Contenu personnalisé, formulaire de prise de contact ou d’inscription, accompagnement visuel
            </p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 900 à 1200 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site pour photographe ou freelance</h3>
            <p className="text-gray-300 text-sm">
              Portfolio modifiable, galerie, zone d’actualités, interface d’administration simple
            </p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 1100 à 1500 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site pour cabinet ou centre de soins</h3>
            <p className="text-gray-300 text-sm">
              Réservation en ligne, espace client, paiement sécurisé, interface personnalisée
            </p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 1500 à 2200 €</p>
          </div>
        </div>

        {/* FAQ Tarifs */}
        <FaqSection title="FAQ — Tarifs" faq={faq} ariaLabelledby="faq-pricing-title" />

        <CtaFinal
          title="Un projet à chiffrer ?"
          tagline="Chaque besoin est unique, je vous propose un devis adapté à votre projet."
          primary={{ href: "/contact", text: "Contact" }}
          secondary={{href: "/portfolio", text: "Portfolio"}}
        />
      </Section>
    </>
  );
}