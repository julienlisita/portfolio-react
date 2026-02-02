// src/pages/PricingPage.jsx

import PageTitle from "../components/common/PageTitle";

import PricingIntroAndPacks from "../components/pricing/PricingIntroAndPacks";
import PricingOptions from "../components/pricing/PricingOptions";
import PricingExamples from "../components/pricing/PricingExamples";
import PricingFaqAndCta from "../components/pricing/PricingFaqAndCta";

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

      <PricingIntroAndPacks />
      <PricingOptions commonOptions={commonOptions} advancedOptions={advancedOptions} />
      <PricingExamples />
      <PricingFaqAndCta faq={faq} />
    </>
  );
}