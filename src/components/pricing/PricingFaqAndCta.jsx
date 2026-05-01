// src/components/pricing/PricingFaqAndCta.jsx

import FaqSection from "../patterns/FaqSection";
import CtaFinal from "../patterns/CtaFinal";

export default function PricingFaqAndCta() {

  const faq = [
    {
      q: "Combien coûte un site vitrine ?",
      a: "Un site vitrine démarre généralement à partir de 900 €. Le tarif dépend du nombre de pages, du contenu, du niveau de personnalisation et des options éventuelles.",
    },
    {
      q: "Quel est le délai moyen ?",
      a: "Généralement 2 à 4 semaines, selon la complexité et la disponibilité du contenu. Le pack Essentiel peut être plus rapide.",
    },
    {
      q: "Puis-je ajouter des options plus tard ?",
      a: "Oui : pages, formulaires personnalisés, blog/actus, espace administrateur ou réservation avec gestion des créneaux… le site peut évoluer progressivement.",
    },
    {
      q: "Comment obtenir un devis précis ?",
      a: "Expliquez votre besoin (pages, objectifs, exemples). Un devis personnalisé suit un échange gratuit.",
    },
    {
      q: "Proposez-vous la maintenance ?",
      a: "Oui, à partir de 40 €/mois selon le périmètre : suivi, corrections, petites évolutions et support.",
    },
  ];
  return (
    <>
      <FaqSection title="FAQ — Tarifs" faq={faq} ariaLabelledby="faq-pricing-title" />

      <CtaFinal
        title="Discutons de votre projet"
        tagline="Expliquez-moi votre besoin : je vous propose une solution claire, adaptée et un devis précis après un échange gratuit."
        primary={{ href: "/contact", text: "Demander un devis" }}
        secondary={{ href: "/realisations", text: "Voir des projets" }}
      />
    </>
  );
}