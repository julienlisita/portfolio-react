// src/pages/services/CustomFeaturesPage.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import CustomFeaturesIntro from "../../components/services/CustomFeatures/CustomFeaturesIntro";
import CustomFeaturesAudience from "../../components/services/CustomFeatures/CustomFeaturesAudience";
import CustomFeaturesOffer from "../../components/services/CustomFeatures/CustomFeaturesOffer";
import CustomFeaturesUseCases from "../../components/services/CustomFeatures/CustomFeaturesUseCases";
import PageTitle from "../../components/UI/PageTitle";

export default function CustomFeaturesPage() {
  const faq = [
    {
      q: "Qu’est-ce qu’une fonctionnalité sur mesure ?",
      a: "Ce sont des outils adaptés à votre activité : réservation avec gestion des créneaux, espace administrateur, gestion de contenus, espace client ou outil interne.",
    },
    {
      q: "Peut-on commencer avec une version simple ?",
      a: "Oui. On peut créer une première version utile, puis ajouter des fonctionnalités progressivement selon vos besoins.",
    },
    {
      q: "Est-ce sécurisé ?",
      a: "Oui. L’outil est conçu avec des accès protégés, des rôles utilisateurs et des bonnes pratiques de sécurité.",
    },
    {
      q: "Est-ce que ça peut évoluer dans le temps ?",
      a: "Oui. La solution est pensée pour évoluer : nouvelles fonctionnalités, modules ou améliorations sans tout refaire.",
    },
    {
      q: "Vous gérez la mise en ligne ?",
      a: "Oui. Je m’occupe du déploiement et je vous accompagne après la mise en production si nécessaire.",
    },
  ];

  return (
    <>
      <PageTitle>Fonctionnalités & outils sur mesure</PageTitle>
      <CustomFeaturesIntro />
      <CustomFeaturesAudience />
      <CustomFeaturesOffer />
      <CustomFeaturesUseCases />

      <FaqSection title="FAQ — Fonctionnalités sur mesure" faq={faq} ariaLabelledby="faq-apps-title" />

      <CtaFinal
        title="Discutons de votre besoin"
        tagline="Vous avez une idée, un besoin ou un outil à créer ? Voyons ensemble la solution la plus simple et la plus utile."
        primary={{ href: "/contact", text: "Discuter du projet" }}
        secondary={{ href: "/realisations", text: "Voir des réalisations" }}
      />
    </>
  );
}